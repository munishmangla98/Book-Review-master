import { Component, ViewChild, AfterViewInit, Input, OnInit } from '@angular/core';
import { books, review } from '../data_type';
import { BooksService } from '../servives/books.service';
import { ActivatedRoute } from '@angular/router';
import { ToggleService } from '../servives/toggle.service';



@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  bookdata: undefined | books;
  reviews: review[] = [];
  addbookreviewmessage: string | undefined;
  addbookmessage: string | undefined;
  username: any;
  isUserSignedIn: boolean = false;
  signInMessage: string |undefined; // Initialize sign-in message

  constructor(private route: ActivatedRoute, private books: BooksService, public toggleService: ToggleService) { }
  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.books.openDetails(bookId).subscribe((data) => {
        console.warn(data);
        this.bookdata = data;
        // Store bookdata in local storage
        localStorage.setItem('bookdata', JSON.stringify(this.bookdata));
      });
    }
    localStorage.setItem('bookdata', JSON.stringify(this.bookdata));

    this.books.getreview().subscribe((result) => {
      if (result && this.bookdata) {
        const filteredReviews = result.filter(review => review.book_id === this.bookdata!.id);
        this.reviews = filteredReviews;

        localStorage.setItem('reviews', JSON.stringify(this.reviews));

      }
    });
    const userSignup = localStorage.getItem('user_signup');
    const adminSignup = localStorage.getItem('admin_signup');
    
    this.displayForm = userSignup !== null || adminSignup !== null;
    // this.isUserSignedIn = userSignup !== null;
  }
  refreshPage() {
    window.location.reload();
  }



  // ngOnInit(): void {
  //   let bookId = this.route.snapshot.paramMap.get('id')
  //   bookId && this.book.openDetails(bookId).subscribe((data) => {
  //     console.warn(data);
  //     this.bookdata = data;
  //     let cartData = localStorage.getItem('localCart');
  //     if (bookId && cartData) {
  //       let items = JSON.parse(cartData);
  //       items = items.filter((item: books) => bookId === item.id.toString());
  //       if (items.length) {
  //         this.removeCart = true
  //       } else {
  //         this.removeCart = false
  //       }
  //     }
  //   })
  // }


  displayForm: boolean = true;

  toggleForm(event: any) {
    this.displayForm = !this.displayForm;
  }

  addReview(data: review): void {
    // Retrieve username from localStorage
    const userDataString = localStorage.getItem('user_signup');
    let username: string | undefined;
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      username = userData[0].username;
    }

    // Retrieve bookdata from localStorage
    const bookDataString = localStorage.getItem('bookdata');
    let bookId: string | undefined;
    if (bookDataString) {
      const bookdata = JSON.parse(bookDataString);
      bookId = bookdata.id;
    }

    // Add username and book_id to the data object
    if (username && bookId) {
      data.user_name = username;
      data.book_id = bookId;

      // Call addreview API
      this.books.addreview(data).subscribe((result) => {
        console.warn(result);
        if (result) {
          this.addbookmessage = "Review added successfully";
          this.refreshPage();
        }
        setTimeout(() => {
          this.addbookmessage = undefined;
        }, 2000);
      });
    } else {
      console.error('Username or bookdata not found in localStorage');
    }
    if (this.isUserSignedIn) {
      // The user is signed in, perform the action
      this.refreshPage();
    } else {
      // The user is not signed in, display the sign-in message
      this.signInMessage = 'Please sign in to submit the form.';
    }
    setTimeout(() => {
      
    }, 3000);
  }







}
