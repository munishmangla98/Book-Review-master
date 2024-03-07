import { Component } from '@angular/core';
import { user_login } from '../data_type';
import {Router } from '@angular/router';
import { UserSignupService } from '../servives/user_signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private user_login: UserSignupService, private router:Router) {

  }
  login(data: user_login): void {
    console.warn(data)
    this.user_login.userlogin(data).subscribe((result) => {

      console.warn(result);
      if (result) {
        this.router.navigate(['user_dashboard'])
      }
      else{
        console.warn("login failed");
      }
    });
  }
}
