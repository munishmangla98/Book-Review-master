import { Component, ViewChild, AfterViewInit ,Input} from '@angular/core';
import { books } from '../data_type';
import { BooksService } from '../servives/books.service';
import { ActivatedRoute } from '@angular/router';
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

  // display2=false;
  // toggle2() {
  //   this.toggleService.toggleVisibility;
  // }


  displayForm: boolean = false;

  toggleForm(event: any) {
    this.displayForm = !this.displayForm;
  }
  
  // isVisible: boolean = false;
  // toggle3() {
  //   this.toggleService.isVisible$.subscribe(isVisible => {
  //     this.isVisible = isVisible;
  //   });
  // }


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
