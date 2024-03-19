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

  Bookadd(data:books):void{
    this.books.bookadd(data).subscribe((result)=>{
      console.warn(result);
      if(result){
        this.addbookmessage="book add sucessfully"
      }
      setTimeout(() => {
        this.addbookmessage = undefined;
      }, 2000);

    })
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