import { Component } from '@angular/core';
import { BooksService } from '../servives/books.service';
import { books } from '../data_type';
import { Router } from '@angular/router';
import { ToggleService } from '../servives/toggle.service';
@Component({
  selector: 'app-book-retrive',
  templateUrl: './book-retrive.component.html',
  styleUrls: ['./book-retrive.component.css']
})
export class BookRetriveComponent {

bookList: undefined | books[] = [];
bookmessage:undefined|string;
sharedService: any;



  constructor(private books:BooksService, private router:Router , private toggleService: ToggleService){}
  ngOnInit(data: books):void{
    this.books.booklist(data).subscribe((result)=>{
      if(result){
        this.bookList=result;
      }
    });
  }
  deletebook(id:string):void{
    // console.warn("test id", id)
    this.books.deletebook(id).subscribe((result)=>{
    if(result){
      this.bookmessage="book delete";
      this.router.navigate(['retrive-book']); // Change '/your-list' to the desired route
      this.ngOnInit
      }
    })    
    setTimeout(() => {
      this.bookmessage=undefined;
    }, 2000);
  }



  toggle() {
    this.toggleService.toggle();
  }

}

