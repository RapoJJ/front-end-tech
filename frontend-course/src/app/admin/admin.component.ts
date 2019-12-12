import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private loginService: AuthService) { }

  ngOnInit() {
  }

  signOut() {
    this.loginService.logout();
  }

}
