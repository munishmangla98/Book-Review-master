import { Component } from '@angular/core';
import { UserSignupService } from '../servives/user_signup.service';
import { Router } from '@angular/router';
import { user_signup } from '../data_type';
import { AdminService } from '../servives/admin.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private user_signup: UserSignupService, private router:Router, private admin_signup: AdminService) {
  }
  // for not to go back to signup if login already
  ngOnInit(): void {
    this.user_signup.userAuthReload();
    this.admin_signup.adminAuthReload();

  }

  
  signUp(data: user_signup): void {
    console.warn(data)
    this.user_signup.usersignup(data)
  }
}
