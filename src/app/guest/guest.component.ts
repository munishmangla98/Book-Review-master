import { Component } from '@angular/core';
import { books } from '../data_type';
import { BooksService } from '../servives/books.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent {
    trending_book:undefined|books[]=[];
    constructor(private book:BooksService){
    }
    ngOnInit(data:books):void{
    this.book.trending_book(data).subscribe((result)=>{
      console.warn(result);
      this.trending_book=result;
    })
    }
  }