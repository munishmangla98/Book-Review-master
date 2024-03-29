// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ToggleService {

//   constructor() { }


//   display= true;
//   toggle() { 
//     this.display = !this.display;
//   }
// }
// visibility.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  private _isVisible = new BehaviorSubject<boolean>(false);
  isVisible$ = this._isVisible.asObservable();

  toggleVisibility() {
    this._isVisible.next(!this._isVisible.value);
  }
}
