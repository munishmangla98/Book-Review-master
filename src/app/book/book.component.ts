import { Component } from '@angular/core';
import { BooksService } from '../servives/books.service';
import { addedbooks, books } from '../data_type';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  constructor(private books: BooksService) { }
  addbookmessage: string | undefined;
  bookList: undefined | books[] = [];


  ngOnInit(data: books): void {
    this.books.booklist(data).subscribe((result) => {
      if (result) {
        this.bookList = result;
      }
    });
  }


  // addtowishlist(data:addedbooks){
  //   const userDataString = localStorage.getItem('user_signup');
  //   if (!userDataString) {
  //     console.error('User signup data not found in local storage');
  //     this.addbookmessage = "Please login to add to wishlist";
  //     setTimeout(() => {
  //       this.addbookmessage = undefined;
  //     }, 2000); 
  //     return; // Exit the function if user signup data is not found
  //   }
  //   // Parse user signup data from local storage
  //   const userData = JSON.parse(userDataString);
  //   const userName = userData.user_name; // Assuming user_name is the key for the username

  //   console.log(data);

  //   this.books.addtocart({ ...data, user_name: userName }).subscribe((result) => {

  //     console.warn(result);
  //     if(result){
  //       this.addbookmessage="book add to cart sucessfully"
  //     }
  //     setTimeout(() => {
  //       this.addbookmessage = undefined;
  //     }, 200);
  //   });
  // }
  addtowishlist(data: addedbooks) {
    // Check if user signup data exists in local storage
    const userDataString = localStorage.getItem('user_signup');
    console.warn('userDataString')
    if (!userDataString) {
      console.error('User signup data not found in local storage');
      // Show error message prompting the user to login
      this.addbookmessage = "Please login to add to wishlist";
      setTimeout(() => {
        this.addbookmessage = undefined;
      }, 2000); // Adjust the timeout as needed
      return; // Exit the function if user signup data is not found
    }

    // Parse user signup data from local storage
    // to fetch the user_name
    const userData = JSON.parse(userDataString);
    if (userData) {
      const userName = userData[0].username;
      console.log("Username:", userName);
      // const userName = userData.username; // Assuming user_name is the key for the username
      // console.log(userName);
      const addtowishlist: addedbooks = {
        // ...this.books,bookid: this.books.id,userName
        ...data,
        bookid: data.id, username: userName

      }
      // delete addtowishlist.id;
      console.log(data);
      // Perform operation with the username, in this case, adding to cart
      this.books.addtocart(addtowishlist).subscribe((result) => {
        console.warn(result);
        if (result) {
          this.addbookmessage = "Book added to cart successfully";
        }
        setTimeout(() => {
          this.addbookmessage = undefined;
        }, 2000);
      });
    }

  }
}