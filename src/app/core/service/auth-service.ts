import {inject, Injectable, signal} from '@angular/core';

import {environment} from '../../../environments/environment';
import {AccessToken, AuthRequest} from '../model/auth.models';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http: HttpClient = inject(HttpClient)
  private readonly ACCESS_TOKEN_KEY = 'access_token';
  authStatus = signal(false)

  constructor() {
    this.authStatus.set(!!localStorage.getItem(this.ACCESS_TOKEN_KEY))
  }


  isAuthenticated(): boolean {
    return this.authStatus();
  }

  login(authRequest: AuthRequest): Observable<AccessToken> {
    return this.http.post<AccessToken>(
      `${environment.apiBaseUrl}/auth/login`,
      authRequest
    ).pipe(
      tap({
        next: res => {
          localStorage.setItem(this.ACCESS_TOKEN_KEY, res.accessToken);
        }
      })
    )
  }
}
