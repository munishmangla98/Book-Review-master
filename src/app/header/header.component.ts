import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../servives/books.service';
import { books } from '../data_type';
import { UserSignupService } from '../servives/user_signup.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  [x: string]: any;
  searchbook: undefined | books[];
  userName: string = "";
  adminName: string = "";
  cartdata = 0;


  menuType: string = 'default';
  constructor(private router: Router, private books: BooksService, private user: UserSignupService) {

  }
  // for changing navbar

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('user_signup')) {
          const usersighupStore = localStorage.getItem('user_signup');
          const userSignupData = usersighupStore && JSON.parse(usersighupStore);
          this.userName = userSignupData.username;
          this.menuType = 'user_signup';

        }
        else if (localStorage.getItem('admin_signup')) {
          const Admin = localStorage.getItem('admin_signup');
          const userData = Admin && JSON.parse(Admin);
          console.warn(userData);
          this.adminName = userData.username;
          this.menuType = 'admin_signup';

        }
        else {
          this.menuType = "default";
        }
      }
    });
  }


  // getItemCountInLocalStorage(): number {
  //   const localStorageData = localStorage.getItem('bookaddList');
  //   if (localStorageData) {
  //     const parsedData = JSON.parse(localStorageData);
  //     return parsedData.length; // Assuming 'bookaddList' contains an array
  //   }
  //   this.books.cartdata.subscribe((items)=>{
  //     this.cart= items.length
  //   }
  //   return 0;
  // }


  logout() {
    localStorage.clear();
    console.warn(this.userName + " has logged out");
    this.router.navigate([''])
  }




  // for buttons
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  search(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement
      this.books.search(element.value).subscribe((result) => {
        if (result.length > 5) {
          result.length = 5;
        }
        this.searchbook = result;
        console.warn(result);
      });
    }
  }
  hidesearch() {
    this.searchbook = undefined;
  }
  submitSearch(val: string) {
    console.warn(val)
    this.router.navigate([`search/${val}`]);
  }



}

