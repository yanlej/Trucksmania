import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.signupForm = this.createFormGroup();

  }

  createFormGroup(): FormGroup {

    return new FormGroup({

      lastName: new FormControl("", [Validators.required, Validators.minLength(2)]),
      firstName: new FormControl("", [Validators.required, Validators.minLength(2)]),
      phone: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),

    });
  }

  signup(): void {

    this.authService.signup(this.signupForm.value).subscribe((msg) => console.log(msg));
  }

}
