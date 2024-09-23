import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {
  const cookie = inject(CookieService)
  const router = inject(Router);

  if(cookie.get('isLogin') == 'true') {
    return true;
  }

  router.navigate(['/form']);
  return false;
};
