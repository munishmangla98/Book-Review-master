import { Component, EventEmitter, Output } from '@angular/core';
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
  // ngOnInit(data: books):void{
  //   console.warn(data)
  //   this.books.booklist(data).subscribe((result)=>{
  //     console.warn(result);
  //     if(result){
  //       this.bookList=result;
  //     }
  //   });
  // }
  ngOnInit(): void {
    // Retrieve data from localStorage
    const userDataString = localStorage.getItem('admin_signup');
    
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const username = userData[0].username;
  
      this.books.booklist(userData).subscribe((result: any) => {
        // Filter result based on username
        this.bookList = result.filter((item: any) => item.user_name === username);
        
        // Store bookaddList in localStorage
        localStorage.setItem('bookaddList', JSON.stringify(this.bookList));
        
        console.warn(this.bookList);
      });
    } else {
      console.error('No user data found in localStorage');
    }
  }
  refreshPage() {
    window.location.reload();
  }
  deletebook(id:string):void{
    console.warn(id)
    this.books.deletebook(id).subscribe((result)=>{
      console.warn(result)
    if(result){
      this.bookmessage="book delete";
      this.refreshPage();
      }
    })    
    setTimeout(() => {
      this.bookmessage=undefined;
    }, 2000);
  }


  @Output() toggleFormEvent = new EventEmitter<void>();
  toggleForm() {
    this.toggleFormEvent.emit();
  }

}

