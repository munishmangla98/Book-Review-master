import { Component } from '@angular/core';
import { BooksService } from '../servives/books.service';
import { addedbooks } from '../data_type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  bookaddList: undefined | addedbooks[] = [];
  bookremovemessage: string | undefined;

  constructor(private books:BooksService, private router: Router) {}



  ngOnInit(data: addedbooks):void{
    
    this.books.addlist(data).subscribe((result)=>{
      if(result){
        this.bookaddList=result;
      }
    });
  }

  removebook(id:string):void{
    this.books.removefromCart(id).subscribe((result)=>{
    if(result){
      this.bookremovemessage="book remove";
      this.router.navigate(['/wishlist'],{queryParams:{refresh:Date.now()}});
      this.ngOnInit
      
      }
    })    
    setTimeout(() => {
      this.bookremovemessage=undefined;
    }, 300);
  }
  

}
