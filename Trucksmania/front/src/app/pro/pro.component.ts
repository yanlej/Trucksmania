import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.css']
})
export class ProComponent implements OnInit {

  signupProForm!: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.signupProForm = this.createFormGroup();

  }

  createFormGroup(): FormGroup {

    return new FormGroup({

      nomFood: new FormControl("", [Validators.required, Validators.minLength(2)]),
      descFood: new FormControl("", [Validators.required, Validators.minLength(20)]),
      image: new FormControl("", [Validators.required]),
      theme: new FormControl("", [Validators.required, Validators.minLength(2)])

    });
  }

  signupPro(): void {

    this.authService.signupPro(this.signupProForm.value).subscribe((msg) => console.log(msg));
  }

}
