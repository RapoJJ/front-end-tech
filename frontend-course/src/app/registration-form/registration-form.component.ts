import { Component, OnInit } from '@angular/core';
import {Person} from '../classes/person';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  person: Person;

  constructor() {
    this.person = new Person();
  }

  ngOnInit() {
  }

}
