import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { user_login, user_signup } from '../data_type';
@Injectable({
  providedIn: 'root'
})
export class UserSignupService {

  constructor(private http: HttpClient) { }
  usersignup(data: user_signup) {
    return this.http.post('http://localhost:3000/user_signup', data)
  }
  userlogin(data: user_login) {
    return this.http.get(`http://localhost:3000/user_login?username=${data.username}&password=${data.password}`)
  }


  userlist(data: user_signup) {
    return this.http.get<user_signup[]>("http://localhost:3000/user_signup")
  }
  deleteUser(id: string) {
    return this.http.delete(`http://localhost:3000/user_signup/${id}`)
  }
  getuser(id:string){
    return this.http.get<user_signup>(`http://localhost:3000/user_signup/${id}`)
  }
  updated_user(data:user_signup){
    return this.http.put<user_signup>(`http://localhost:3000/user_signup/${data.id}`,data);
  }

}

