import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { books } from '../data_type';
import { BooksService } from '../servives/books.service';
import { ActivatedRoute } from '@angular/router';
import { BookRetriveComponent } from '../book-retrive/book-retrive.component'
import { ToggleService } from '../servives/toggle.service';



@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {
  bookdata: undefined | books;
  addbookreviewmessage: string | undefined;

  constructor(private route: ActivatedRoute, private book: BooksService, public toggleService: ToggleService) { }
  // to retrive the data in Card
  ngOnInit(): void {
    let bookId = this.route.snapshot.paramMap.get('id')
    bookId && this.book.openDetails(bookId).subscribe((data) => {
      console.warn(data);
      this.bookdata = data
    })
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

  
  toggle2() {
    this.toggleService.toggle();
  }

  BookReviewadd(data: books): void {
    console.warn(data);
    // to update the which we update in form
    if (this.bookdata) {
      data.id = this.bookdata.id;
    }
// for flashing message
    this.book.updated_book(data).subscribe((result) => {
      if (result) {
        this.addbookreviewmessage = "book Review";
      }
    });
    setTimeout(() => {
      this.addbookreviewmessage = undefined;
    }, 2000);
  }




  BookReviewadd1(value: any) {
    console.log('Submitted review:', value);
    // Add your logic for submitting the review here
  }


}
