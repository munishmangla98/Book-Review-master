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
  constructor(private book:BooksService){
  }
  ngOnInit(bookdata:books):void{
  this.book.trending_book(bookdata).subscribe((result)=>{
    console.warn(result);
    this.trending_book=result;
  })
  }
}
