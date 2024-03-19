import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  constructor() { }
  display= true;

  toggle() {
    this.display = !this.display;
  }
}
