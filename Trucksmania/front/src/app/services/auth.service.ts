import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
import { first, catchError, tap, take } from 'rxjs/operators';

import { User } from '../models/User';
import { Foodtruck } from '../models/Foodtruck';
import { ErrorHandlerService } from './error-handler.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3000/auth';

  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  id_users!: Pick<User, 'id_users'>;

  httpOptions: { headers: HttpHeaders} = {

    headers: new HttpHeaders({ 'Content-Type' : 'application/json' }),
  };

  constructor(
    private http: HttpClient, 
    private errorHandlerService: ErrorHandlerService,
    private router: Router) { }

  signup(user: Omit<User, 'id_users'>): Observable<User> {

    return this.http.post<User>(`${this.url}/signup`, user, this.httpOptions).pipe(
      first(),
      catchError(this.errorHandlerService.handleError<User>('signup'))
    )

  }

  login(email: Pick<User, 'email'>, password: Pick<User, 'password'>): Observable<{

    token: string;
    id_users: Pick<User, 'id_users'>;

  }> {

    return this.http.post(`${this.url}/login`, { email, password }, this.httpOptions).pipe(
      first(Object),
      tap((tokenObject: { token: string; id_users: Pick<User, 'id_users'> }) => {

        this.id_users = tokenObject.id_users;
        localStorage.setItem("token", tokenObject.token);
        this.isUserLoggedIn$.next(true);
        this.router.navigate(["/"]);

      }),
      catchError(this.errorHandlerService.handleError<{

        token: string; id_users: Pick<User, 'id_users'>
    
      }>('login'))
    )

  }

  signupPro(foodtruck: Omit<Foodtruck, 'id_food'>): Observable<Foodtruck> {

    return this.http.post<Foodtruck>(`${this.url}/signupPro`, foodtruck, this.httpOptions).pipe(
      first(),
      catchError(this.errorHandlerService.handleError<Foodtruck>('signupPro'))
    )

  }

}
