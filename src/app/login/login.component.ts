import { Component } from '@angular/core';
import { admin_signup, user_login, user_signup } from '../data_type';
import { Router } from '@angular/router';
import { UserSignupService } from '../servives/user_signup.service';
import { AdminService } from '../servives/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authError: string | undefined;
  constructor(private user_login: UserSignupService, private router: Router ,private admin_login:AdminService) {
  }
  showadminlogin=false;

  userlogin(userLogin: user_signup): void {
    this.user_login.userLogin(userLogin);
    this.user_login.isLoginError.subscribe((isError: any)=>{
      if(isError){
        this.authError="Username or password is not correct";
      }
    })
  }
  adminlogin(adminLogin: admin_signup): void {
    this.admin_login.adminLogin(adminLogin);
    this.admin_login.isLoginError.subscribe((isError: any)=>{
      if(isError){
        this.authError="username or password is not correct";
      }
    })
  }

  






  // for switiching form between user and admin login
  
  adminloginform(){
    this.showadminlogin=true;
  }
  userloginform(){
    this.showadminlogin=false;
  }
}

// import { Component } from '@angular/core';
// import { admin_signup, user_login, user_signup } from '../data_type';
// import { Router } from '@angular/router';
// import { UserSignupService } from '../services/user_signup.service';
// import { AdminService } from '../services/admin.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   authError: string | undefined;
//   isUserLogin: boolean = true; // Flag to determine if it's a user login or admin login

//   constructor(private user_login: UserSignupService, private router: Router ,private admin_login:AdminService) {}

//   login(loginData: user_signup | admin_signup): void {
//     if (this.isUserLogin) {
//       this.user_login.userLogin(loginData as user_signup);
//       this.user_login.isLoginError.subscribe((isError: any)=>{
//         if(isError){
//           this.authError="Username or password is not correct";
//         }
//       })
//     } else {
//       this.admin_login.adminLogin(loginData as admin_signup);
//       this.admin_login.isLoginError.subscribe((isError: any)=>{
//         if(isError){
//           this.authError="Username or password is not correct";
//         }
//       })
//     }
//   }

//   toggleLoginType(): void {
//     this.isUserLogin = !this.isUserLogin;
//     this.authError = undefined; // Reset authError when toggling login type
//   }
// }
