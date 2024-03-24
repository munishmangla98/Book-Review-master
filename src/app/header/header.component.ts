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
  cart=0;


  menuType: string = 'default';
  // userLogout: any;
  // userlogin: any;
  // isloggedin_user !: boolean  ;
  // isloogedIn_Admin ! :boolean ;
  constructor(private router: Router, private books: BooksService, private user: UserSignupService) {

  }
  // for changing navbar

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('user_signup') && val.url.includes('user_signup')) {
          let usersighupStore = localStorage.getItem('user_signup');
          let userSignupData = usersighupStore && JSON.parse(usersighupStore);
          this.userName = userSignupData.firstName;
          this.menuType = 'user_signup';
        
        }
        else if (localStorage.getItem('admin_signup')) {
          let Admin = localStorage.getItem('admin_signup');
          let userData = Admin && JSON.parse(Admin);
          this.adminName = userData.firstName;
          this.menuType = 'admin_signup';
          
        }
        else {
          this.menuType = "default";
        }
      }
    });
  }

  logout(){
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
        console.warn(result);
      });
    }
  }
  hidesearch() {
    this.searchbook = undefined;
  }

 

}

