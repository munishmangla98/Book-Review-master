import { Component } from '@angular/core';
import { books,  recomendation } from '../data_type';
import { BooksService } from '../servives/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recomendation',
  templateUrl: './recomendation.component.html',
  styleUrls: ['./recomendation.component.css']
})
export class RecomendationComponent {
addbookrecomendation: string|undefined;
  constructor(private addrecomend: BooksService, private router:Router) {

  }
  addrecomendation(data:recomendation): void {
    this.addrecomend.addrecomendation(data).subscribe((result)=>{
      console.warn(data)
      if(result){
      this.addbookrecomendation= "Book added to recommendation list";
      setTimeout(() => this.addbookrecomendation = undefined, 3000);  
      }
    }
    )
    // console.warn(data)
  }
}
