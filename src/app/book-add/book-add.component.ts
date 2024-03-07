import { Component } from '@angular/core';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {
  Bookadd(data:object):void{
    console.warn(data)
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