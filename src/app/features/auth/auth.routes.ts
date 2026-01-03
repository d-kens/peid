import {Routes} from '@angular/router';
import {AuthPage} from './pages/auth-page/auth-page';

export const AUTH_ROUTES: Routes = [
  {path: 'login', component: AuthPage},
  {path: 'register', component: AuthPage},
  {path: 'reset-password', component: AuthPage},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
]
