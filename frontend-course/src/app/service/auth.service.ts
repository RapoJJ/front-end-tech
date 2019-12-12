import {Injectable, NgZone} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth,
              public router: Router, public ngZone: NgZone) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(result => {
        this.router.navigate(['admin']);
      }).catch((error) => {
        window.alert(error.message);
      });
  }
  logout() {
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['adminLogin']);
    });

  }
  getLoggedInUser() {

  }
  checkLoggedInUser() {

  }
}
