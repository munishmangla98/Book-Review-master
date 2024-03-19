import { CanActivateFn } from '@angular/router';

export const adminauthGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('admin_signup')){
    return true;
   }
  return false;
};
