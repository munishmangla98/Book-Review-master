import { Component } from '@angular/core';
import { UserSignupService } from '../servives/user_signup.service';
import { Router } from '@angular/router';
import { user_signup } from '../data_type';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private user_signup: UserSignupService, private router:Router) {

  }
  signUp(data: user_signup): void {
    console.warn(data)
    this.user_signup.usersignup(data).subscribe((result) => {
      if (result) {
        this.router.navigate(['login'])
      }
    });
  }
}
