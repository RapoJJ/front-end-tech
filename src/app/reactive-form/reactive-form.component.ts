import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Person} from '../classes/person';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  personForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.personForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-öA-Ö ]*')]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-öA-Ö ]*')]],
      email: ['', [Validators.required,
        Validators.pattern('^(0[1-9]|[12]\\d|3[01])(0[1-9]|1[0-2])([5-9]\\d+|\\d\\d-|[01]\\dA)\\d{3}[\\dA-Z]$')]],
      personId: ['', [Validators.required,
        Validators.pattern('^(0[1-9]|[12]\\d|3[01])(0[1-9]|1[0-2])([5-9]\\d+|\\d\\d-|[01]\\dA)\\d{3}[\\dA-Z]$')]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')]],
      confirmPassword: ['', [Validators.required, ]],
      termsAccepted: ['', [Validators.required]],
    });
  }

  onSubmit(form) {
    console.log(form);
  }

  get firstName() {
    return this.personForm.get('firstName');
  }
  get lastName() {
    return this.personForm.get('lastName');
  }

}
