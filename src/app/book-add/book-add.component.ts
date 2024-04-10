import { Component } from '@angular/core';
import { books } from '../data_type';
import { BooksService } from '../servives/books.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {
  // for flashing the book added successfully message
  addbookmessage: string|undefined;
  constructor(private books:BooksService){}

  // Bookadd(data:books):void{
  //   this.books.bookadd(data).subscribe((result)=>{
  //     console.warn(result);
  //     if(result){
  //       this.addbookmessage="book add sucessfully"
  //     }
  //     setTimeout(() => {
  //       this.addbookmessage = undefined;
  //     }, 2000);

  //   })
  // }
  // Bookadd(data: books): void {
  //   // Retrieve user_name from localStorage
  //   const userDataString = localStorage.getItem('user_signup');
  //   let username: string | undefined;
  //   if (userDataString) {
  //     const userData = JSON.parse(userDataString);
  //     username = userData[0].username;
  //   }

  //   // Add user_name to the data object
  //   if (username) {
  //     data.user_name = username;
  //   }

  //   // Call bookadd API
  //   this.books.bookadd(data).subscribe((result) => {
  //     console.warn(result);
  //     if (result) {
  //       this.addbookmessage = "book add successfully";
  //     }
  //     setTimeout(() => {
  //       this.addbookmessage = undefined;
  //     }, 2000);
  //   });
  // }

  
  Bookadd(data: books): void {
    // Retrieve user_name from localStorage
    const userDataString = localStorage.getItem('admin_signup');
    let username: string | undefined;
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      username = userData[0].username;
    }

    // Add user_name to the data object
    if (username) {
      data.user_name = username;

      // Call bookadd API
      this.books.bookadd(data).subscribe((result) => {
        console.warn(result);
        if (result) {
          this.addbookmessage = "book add successfully";
        }
        setTimeout(() => {
          this.addbookmessage = undefined;
        }, 2000);
      });
    } else {
      console.error('Username not found in localStorage');
    }
  }
}




// export class YourComponent {
//   userData = {
//     rating: null
//   };

//   ratingError = false;

//   validateRating() {
//     const rating = this.userData.rating;

//     // Check if the entered rating is valid
//     this.ratingError = rating !== null && (rating < 1 || rating > 5);
//   }
// }