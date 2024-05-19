import { Component } from '@angular/core';
import { BooksService } from '../servives/books.service';
import { addedbooks, books } from '../data_type';
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

  ngOnInit(): void {
    const userDataString = localStorage.getItem('user_signup');
    
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const username = userData[0].username;
  
      this.books.addlist(userData).subscribe((result: any) => {
        this.bookaddList = result.filter((item: any) => item.username === username);
        
        localStorage.setItem('bookaddList', JSON.stringify(this.bookaddList));
        
        console.warn(this.bookaddList);
      });
    } else {
      console.error('No user data found in localStorage');
    }
  }
  
  refreshPage() {
    window.location.reload();
  }

  removebook(id:string):void{
    this.books.removefromCart(id).subscribe((result)=>{
    if(result){
      this.bookremovemessage="book remove";
      // this.router.navigate(['/wishlist']); 
      this.refreshPage();     
      }
    })    
    setTimeout(() => {
      this.bookremovemessage=undefined;
    }, 300);
  }
  

}
