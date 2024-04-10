import { Component } from '@angular/core';
import { BooksService } from '../servives/books.service';
import { Router } from '@angular/router';
import { ToggleService } from '../servives/toggle.service';
import { addedbooks, books } from '../data_type';

@Component({
  selector: 'app-addbyuser',
  templateUrl: './addbyuser.component.html',
  styleUrls: ['./addbyuser.component.css']
})
export class AddbyuserComponent {

  bookList: undefined | addedbooks[] = [];
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
    
        this.books.addlist(userData).subscribe((result: any) => {
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
  
    deletebook(id:string):void{
      console.warn(id)
      this.books.deletebook(id).subscribe((result)=>{
        console.warn(result)
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
  
  
    // @Output() toggleFormEvent = new EventEmitter<void>();
    // toggleForm() {
    //   this.toggleFormEvent.emit();
    // }
}
