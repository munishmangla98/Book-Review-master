import { Component } from '@angular/core';
import { BooksService } from '../servives/books.service';
import { addedbooks, books } from '../data_type';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
showPage(arg0: number) {
throw new Error('Method not implemented.');
}
// showPage(arg0: number) {
// throw new Error('Method not implemented.');
// }
// openDetails(arg0: string) {
// throw new Error('Method not implemented.');
// }
  bookList: undefined | books[] = [];
  constructor(private books:BooksService){}
  addbookmessage: string|undefined;

  ngOnInit(data: books):void{
    this.books.booklist(data).subscribe((result)=>{
      if(result){
        this.bookList=result;
      }
    });
  }


  addtowishlist(data:addedbooks){
    console.log(data);
   
    this.books.addtocart(data).subscribe((result)=>{

      console.warn(result);
      if(result){
        this.addbookmessage="book add to cart sucessfully"
      }
      setTimeout(() => {
        this.addbookmessage = undefined;
      }, 200);
    });
  }
}
