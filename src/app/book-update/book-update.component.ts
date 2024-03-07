import { Component } from '@angular/core';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent {
  Bookupdate(data:object):void{
    console.warn(data)
  }
}
