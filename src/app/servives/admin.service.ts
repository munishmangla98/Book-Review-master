import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { admin_login, admin_signup } from '../data_type';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor (private http: HttpClient, private router: Router )  { }
  // to emit error message
  isLoginError = new EventEmitter<boolean>(false)  

  adminsignup(adminsignUp: admin_signup) {
    return this.http.post('http://localhost:3000/admin_signup', adminsignUp, { observe: "response" }).subscribe((result) => {
      if (result) {
        localStorage.setItem('adminsignup', JSON.stringify(result.body));
        this.router.navigate(['login']);
      }
    });

  }
  adminLogin(admin:admin_login){
    this.http.get(`http://localhost:3000/admin_signup?username=${admin.username}&password=${admin.password}`,
    {observe:'response'}).subscribe((result:any)=>{
     console.warn(result)
     if(result && result.body && result.body.length===1){
       this.isLoginError.emit(false)
       localStorage.setItem('admin_signup',JSON.stringify(result.body))
       console.warn('admin login')
       this.router.navigate(['admin'])
     }else{
       console.warn("login failed");
       this.isLoginError.emit(true)
     }
    })
   }
   adminAuthReload(){
    if(localStorage.getItem('admin_signup')){
      this.router.navigate(['/']);
    }
  }
}
