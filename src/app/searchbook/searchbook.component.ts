import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../servives/books.service';
import { books } from '../data_type';
@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchbookComponent {
constructor(private  router:ActivatedRoute , private books:BooksService) { }
searchResult:undefined|books[]

ngOnInit(): void {
  let query = this.router.snapshot.paramMap.get('query');
  console.warn(query);
  query && this.books.search(query).subscribe((result)=>{
    this.searchResult=result;
    
  })
  

}

}
