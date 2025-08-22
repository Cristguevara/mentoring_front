import { inject } from '@angular/core';
import { CanMatchFn, CanActivateFn,Router } from '@angular/router';

export const authGuard: CanMatchFn = (route, segments) => {

  let router = inject(Router)

  let item = localStorage.getItem('token')

  if(item==='token'){
    return true
  }else{
    localStorage.removeItem('token')
    router.navigateByUrl('login')
    return false;
  }

};

export const authGuardHome:CanMatchFn  = (route, segments) => {

  let router = inject(Router)

  let item = localStorage.getItem('token')

  if(item!=='token'){
    return true
  }else{
    router.navigateByUrl('')
    return false;
  }

};



