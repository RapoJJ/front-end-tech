import { Component, OnInit } from '@angular/core';
import {Person} from '../classes/person';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  person: Person;
  confirmPassword: string;

  constructor() {
    this.person = new Person();
    this.confirmPassword = '';
  }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value.firstName);
  }

}
