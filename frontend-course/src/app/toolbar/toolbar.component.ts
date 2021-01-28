import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  userEmail$: Observable<string>;

  constructor(private router: Router, private loginService: AuthService) {
    this.userEmail$ = this.loginService.checkLoggedInUser();
  }

  ngOnInit() {
  }
  onNavigateClick(urlToNavigate) {
    this.router.navigateByUrl('/' + urlToNavigate);
  }
  signOut() {
    this.loginService.logout();
  }


}
