import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { user_login, user_signup } from '../data_type';
import { Router, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserSignupService {
  adminAuthReload() {
    throw new Error('Method not implemented.');
  }
  // isAuthenticated() {
  //   throw new Error('Method not implemented.');
  // }
  // isUserLoggedIn = new BehaviorSubject<boolean>(false);
  
  isLoginError = new EventEmitter<boolean>(false)  
  // isuserLoggedIn= new BehaviorSubject<boolean>(false);
  // static isuserLoggedIn: boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>;
  constructor(private http: HttpClient, private router: Router ,) { }



  usersignup(signUp: user_signup) {
    return this.http.post('http://localhost:3000/user_signup', signUp, { observe: "response" }).subscribe((result) => {
      if (result) {
        localStorage.setItem('signup', JSON.stringify(result.body));
        this.router.navigate(['login']);
      }
    });

  }


  userLogin(data:user_login){
    this.http.get(`http://localhost:3000/user_signup?username=${data.username}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
     console.warn(result)
     if(result && result.body && result.body.length===1){
       this.isLoginError.emit(false)
       localStorage.setItem('user_signup',JSON.stringify(result.body))
       this.router.navigate(['user_name'])
     }else{
       console.warn("login failed");
       this.isLoginError.emit(true)
     }
    })
   }
   


  isAuthenticated() {
    return localStorage.getItem('token') != null ;
  }

  loggedOut() {
    return localStorage.removeItem('token');
  }




  

  userlist(getuser: user_signup) {
    return this.http.get<user_signup[]>("http://localhost:3000/user_signup")
  }
  deleteUser(id: string) {
    return this.http.delete(`http://localhost:3000/user_signup/${id}`)
    this.router.navigate(['/users'])
  }
  getuser(id: string) {
    return this.http.get<user_signup>(`http://localhost:3000/user_signup/${id}`)
  }
  updated_user(user_update: user_signup) {
    return this.http.put<user_signup>(`http://localhost:3000/user_signup/${user_update.id}`, user_update);
  }



  userAuthReload() {
    if (localStorage.getItem('user_signup')) {
      this.router.navigate(['/']);
    }
  }
}

export { user_signup };

