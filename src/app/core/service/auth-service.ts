import {inject, Injectable} from '@angular/core';

import {environment} from '../../../environments/environment';
import {AccessToken, AuthRequest} from '../model/auth.models';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'access_token';
  private http: HttpClient = inject(HttpClient)

  login(authRequest: AuthRequest): Observable<AccessToken> {
    return this.http.post<AccessToken>(
      `${environment.apiBaseUrl}/auth/login`,
      authRequest
    ).pipe(
      tap({
        next: res => {
          localStorage.setItem(this.TOKEN_KEY, res.accessToken);
          console.log('Logged in token:', res.accessToken);
        }
      })
    )
  }
}
