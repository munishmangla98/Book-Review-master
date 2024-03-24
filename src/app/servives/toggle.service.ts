import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  constructor() { }
  display= false;

  toggle() {
    this.display = !this.display;
  }
}
