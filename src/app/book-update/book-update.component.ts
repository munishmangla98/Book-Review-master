import { Component } from '@angular/core';
import { BooksService } from '../servives/books.service';
import { ActivatedRoute } from '@angular/router';
import { books } from '../data_type';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent {
  bookUpdatedMessage: string | undefined;
  bookdata: undefined | books;

  constructor(private route: ActivatedRoute, private book: BooksService) { }
  // to retrive the data in form
  ngOnInit(): void {
    let bookId = this.route.snapshot.paramMap.get('id')
    bookId && this.book.getbook(bookId).subscribe((data) => {
      console.warn(data);
      this.bookdata = data
    })
  }
  
  bookUpdate(data: books): void {
    console.warn(data);
    // to update the which we update in form
    if(this.bookdata){
      data.id=this.bookdata.id;
    }
    // for flashing message
    this.book.updated_book(data).subscribe((result)=>{
      if(result){
        this.bookUpdatedMessage="book updated";
      }
    });
    // to remove the alert of updated book
    setTimeout(() => {
      this.bookUpdatedMessage=undefined;
    }, 3000);
  }
}
