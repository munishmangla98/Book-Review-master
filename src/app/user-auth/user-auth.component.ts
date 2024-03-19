import { Component } from '@angular/core';
import { user_signup } from '../data_type';
import { UserSignupService } from '../servives/user_signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  constructor(private user: UserSignupService, private router:Router) {

  }
  ngOnInit(): void {
    this.user.userAuthReload();
  }
  signUp(data: user_signup): void {
    console.warn(data)
    this.user.usersignup(data)
  }
}
