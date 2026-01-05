import {Routes} from '@angular/router';
import {AuthPage} from './pages/auth-page/auth-page';
import {Login} from './components/login/login';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthPage,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: Login }
    ]
  }
]
