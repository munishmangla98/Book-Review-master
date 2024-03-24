import { CanActivateFn } from '@angular/router';


export const authGuard: CanActivateFn = (route, state)=> {
  if(localStorage.getItem('user_signup')){
    return true;
   }
  //  return UserSignupService.isuserLoggedIn;
  return false;
}

// else(localStorage.getItem('admin_signup'));{
//   return true;
//      }

