import { Component } from '@angular/core';
import { BooksService } from '../servives/books.service';
import { books } from '../data_type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  trending_book:undefined|books[]=[];
  user_login: string | undefined;
  user_signup: any;
username: any;
  constructor(private book:BooksService){
  }
  ngOnInit(bookdata:books):void{
  this.book.trending_book(bookdata).subscribe((result)=>{
    console.warn(result);
    this.trending_book=result;
  })
  }

//   user(): void {
//     this.router.events.subscribe((val: any) => {
//       if (val.url) {
//         if (localStorage.getItem('user_signup') && val.url.includes('user_signup')) {
//           let usersighupStore = localStorage.getItem('user_signup');
//           let userSignupData = usersighupStore && JSON.parse(usersighupStore);
//           this.userName = userSignupData.firstName;
//           this.welcome = 'user_signup';
        
//         }
//         else if (localStorage.getItem('admin_signup')) {
//           let Admin = localStorage.getItem('admin_signup');
//           let userData = Admin && JSON.parse(Admin);
//           this.adminName = userData.firstName;
//           this.welcome = 'admin_signup';
          
//         }
//         else {
//           this.welcome = "default";
//         }
//       }
//     });
//   }
}
