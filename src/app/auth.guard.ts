import { CanActivateFn } from '@angular/router';
import{UserSignupService} from 'src/app/servives/user_signup.service';


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

