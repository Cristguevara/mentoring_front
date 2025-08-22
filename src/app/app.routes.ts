import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard, authGuardHome } from './guards/auth.guard';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path:'login',
      canMatch:[authGuardHome,()=>{console.log('guard')}],
    component:LoginComponent
  },
  {
    path:'register',
    canMatch:[authGuardHome,()=>{console.log('guard')}],
    component: RegisterComponent
  },
  {
    path:'',
    component:HomeComponent,
    canMatch:[authGuard,()=>{console.log('guard')}]
  },
  {path:'**',redirectTo:'/login'}
];
