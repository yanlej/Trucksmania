import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
import { first, catchError, tap, take } from 'rxjs/operators';

import { ErrorHandlerService } from 'src/app/services/error-handler.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class ThemeComponent {

  @Input()
  theme!: string;

  private url = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private route: ActivatedRoute
  ) { }

  getFoodtrucks() {

    let theme = this.route.snapshot.paramMap.get('theme');
    console.log(this.route.snapshot.params);
    
    console.log(theme);

    return this.http.get(`${this.url}/foodtrucks/${theme}`)
    .pipe(
      catchError(this.errorHandlerService.handleError('getFoodtrucks'))
    )
  }
}
