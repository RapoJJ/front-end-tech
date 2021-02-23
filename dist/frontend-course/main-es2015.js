(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\front-end-tech\frontend-course\src\main.ts */"zUnb");


/***/ }),

/***/ "2CQh":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration-form/registration-form.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n  <form #contactForm=\"ngForm\" (ngSubmit)=\"onSubmit(contactForm)\">\r\n    <div class=\"formContainer\">\r\n      <mat-form-field>\r\n        <label>\r\n          <input matInput [(ngModel)]=\"person.firstName\"\r\n                 #firstName=\"ngModel\" name=\"firstName\"\r\n                 class=\"form-control\"\r\n                 type=\"text\"\r\n                 required minlength=\"2\"\r\n                 placeholder=\"First name\" pattern=\"[a-öA-Ö ]*\">\r\n        </label>\r\n        <mat-error *ngIf=\"firstName.invalid\">First name is invalid</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <label>\r\n          <input matInput [(ngModel)]=\"person.lastName\"\r\n                 #lastName=\"ngModel\" name=\"lastName\"\r\n                 class=\"form-control\"\r\n                 type=\"text\"\r\n                 required minlength=\"2\"\r\n                 placeholder=\"Last name\" pattern=\"[a-öA-Ö ]*\">\r\n        </label>\r\n        <mat-error *ngIf=\"lastName.invalid\">Last name is invalid</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <label>\r\n          <input matInput [(ngModel)]=\"person.personId\"\r\n                 #personId=\"ngModel\" name=\"personId\"\r\n                 class=\"form-control\"\r\n                 type=\"text\"\r\n                 required\r\n                 placeholder=\"Person id\"\r\n                 pattern=\"^(0[1-9]|[12]\\d|3[01])(0[1-9]|1[0-2])([5-9]\\d+|\\d\\d-|[01]\\dA)\\d{3}[\\dA-Z]$\">\r\n        </label>\r\n        <mat-error *ngIf=\"personId.invalid\">Person id is invalid</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <label>\r\n          <input matInput [(ngModel)]=\"person.email\"\r\n                 #email=\"ngModel\" name=\"email\"\r\n                 class=\"form-control\"\r\n                 type=\"email\"\r\n                 required\r\n                 placeholder=\"Email address\"\r\n                 pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\r\n        </label>\r\n        <mat-error *ngIf=\"email.invalid\">Email is invalid</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <label>\r\n          <input matInput [(ngModel)]=\"person.username\"\r\n                 #username=\"ngModel\" name=\"username\"\r\n                 class=\"form-control\"\r\n                 type=\"text\"\r\n                 required minlength=\"6\"\r\n                 placeholder=\"Username\">\r\n        </label>\r\n        <mat-error *ngIf=\"username.invalid\">Username is invalid</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <label>\r\n          <input matInput [(ngModel)]=\"person.password\"\r\n                 class=\"form-control\" name=\"pw1\" #pw1=\"ngModel\"\r\n                 type=\"password\"\r\n                 required minlength=\"10\"\r\n                 placeholder=\"Password\" pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$\">\r\n        </label>\r\n        <mat-error *ngIf=\"pw1.invalid\"> Password not secure enough</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <label>\r\n          <input matInput [(ngModel)]=\"confirmPassword\"\r\n                 class=\"form-control\" name=\"pw2\" #pw2=\"ngModel\"\r\n                 type=\"password\"\r\n                 required minlength=\"10\"\r\n                 placeholder=\"Password\" pattern=\"{{pw1.value}}\">\r\n        </label>\r\n        <mat-error *ngIf=\"pw2.invalid\">Password doesn't match</mat-error>\r\n      </mat-form-field>\r\n      <mat-checkbox [(ngModel)]=\"person.acceptTerms\"\r\n                    ngModel required\r\n                    name=\"terms\"\r\n      >Accept terms and conditions</mat-checkbox>\r\n    </div>\r\n  </form>\r\n  <button mat-button [disabled]=\"!contactForm.form.valid\" (click)=\"onSubmit(contactForm)\">Submit</button>\r\n</mat-card>\r\n");

/***/ }),

/***/ "3o5g":
/*!*******************************************************************!*\
  !*** ./src/app/registration-form/registration-form.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\r\n  width: 80vw;\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\n.formContainer{\r\n  display: inline-block;\r\n  margin: auto;\r\n}\r\n\r\nmat-form-field {\r\n  display: table-row;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\nbutton {\r\n  background-color: darkseagreen;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJyZWdpc3RyYXRpb24tZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmZvcm1Db250YWluZXJ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NlYWdyZWVuO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "4zdL":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_toolbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./toolbar.component.html */ "6yGa");
/* harmony import */ var _toolbar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbar.component.css */ "Yldw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth.service */ "6uu6");






let ToolbarComponent = class ToolbarComponent {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
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
};
ToolbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
ToolbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-toolbar',
        template: _raw_loader_toolbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_toolbar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ToolbarComponent);



/***/ }),

/***/ "6uu6":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "KDZV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");





let AuthService = class AuthService {
    constructor(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
        this.userEmail = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
        this.afAuth.authState.subscribe(user => {
            if (user != null) {
                this.userEmail.next(user.email);
            }
        });
    }
    login(email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(() => {
            this.router.navigate(['admin']);
        }).catch((error) => {
            window.alert(error.message);
        });
    }
    logout() {
        return this.afAuth.auth.signOut().then(() => {
            this.userEmail.next('');
            this.router.navigate(['adminLogin']);
        });
    }
    getLoggedInUser() {
        return this.afAuth.authState;
    }
    checkLoggedInUser() {
        return this.userEmail;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "6yGa":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/toolbar/toolbar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\r\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n    <mat-icon>menu</mat-icon>\r\n  </button>\r\n  <span class=\"toolbarTitle\">Front-end Course</span>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-icon-button (click)=\"onNavigateClick('home')\">\r\n      <mat-icon>home</mat-icon> Front Page\r\n    </button>\r\n    <button mat-menu-item (click)=\"onNavigateClick('calculator')\">Calculator</button>\r\n    <button mat-menu-item (click)=\"onNavigateClick('feedback')\">Feedback Questions</button>\r\n    <button mat-menu-item (click)=\"onNavigateClick('form')\">Registration Form</button>\r\n    <button mat-menu-item (click)=\"onNavigateClick('reactive')\">Reactive Registration Form</button>\r\n    <button mat-menu-item (click)=\"onNavigateClick('finnkino')\">Finnkino News</button>\r\n    <button mat-menu-item (click)=\"onNavigateClick('forex')\">Currency Exchange Rates</button>\r\n    <button mat-menu-item (click)=\"onNavigateClick('adminLogin')\">Admin Sign in</button>\r\n  </mat-menu>\r\n  <div class=\"logout\" *ngIf=\"userEmail$ | async as email\">\r\n    <span>{{email}} </span>\r\n    <button mat-raised-button (click)=\"signOut()\">Sign out</button>\r\n  </div>\r\n\r\n\r\n</mat-toolbar>\r\n");

/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.css */ "RV7M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeComponent);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCcfY-cDmda22bH7Fg3jZMZLGeOBIsKHFY',
        authDomain: 'frontendtask-98f6d.firebaseapp.com',
        databaseURL: 'https://frontendtask-98f6d.firebaseio.com',
        projectId: 'frontendtask-98f6d',
        storageBucket: 'frontendtask-98f6d.appspot.com',
        messagingSenderId: '93876356648',
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "C78I":
/*!******************************************************************!*\
  !*** ./src/app/registration-form/registration-form.component.ts ***!
  \******************************************************************/
/*! exports provided: RegistrationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationFormComponent", function() { return RegistrationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registration_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registration-form.component.html */ "2CQh");
/* harmony import */ var _registration_form_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration-form.component.css */ "3o5g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _classes_person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/person */ "pYvD");





let RegistrationFormComponent = class RegistrationFormComponent {
    constructor() {
        this.person = new _classes_person__WEBPACK_IMPORTED_MODULE_4__["Person"]();
        this.confirmPassword = '';
    }
    ngOnInit() {
    }
    onSubmit(form) {
        console.log(form.value.firstName);
    }
};
RegistrationFormComponent.ctorParameters = () => [];
RegistrationFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registration-form',
        template: _raw_loader_registration_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registration_form_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegistrationFormComponent);



/***/ }),

/***/ "Cp0R":
/*!**************************************!*\
  !*** ./src/app/shared/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth.service */ "6uu6");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /*canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.authService.isLoggedIn !== true) {
        this.router.navigateByUrl('/adminLogin');
      }
      return true;
    }*/
    canActivate(route) {
        return this.authService.getLoggedInUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(authState => Boolean(authState)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(auth => !auth ? this.router.navigate(['/adminLogin']) : true));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "D3jF":
/*!*******************************************************!*\
  !*** ./src/app/admin-login/admin-login.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".formContainer{\r\n  display: inline-block;\r\n  margin: auto;\r\n}\r\nmat-form-field {\r\n  display: table-row;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\nmat-card {\r\n  width: 80vw;\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxZQUFZO0FBQ2QiLCJmaWxlIjoiYWRtaW4tbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtQ29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxubWF0LWNhcmQge1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>This webapp is done for front-end course</h1>\r\n<mat-card>\r\n  <mat-card-title>Github</mat-card-title>\r\n  <mat-card-content>Link to github: <a href=\"https://github.com/RapoJJ/front-end-tech\">Github</a></mat-card-content>\r\n</mat-card>\r\n<mat-card>\r\n  <mat-card-title>Moodle</mat-card-title>\r\n  <mat-card-content>Link to courses moodle:\r\n    <a href=\"https://moodle.saimia.fi/amk/course/view.php?id=6879\">Moodle</a>\r\n  </mat-card-content>\r\n</mat-card>\r\n");

/***/ }),

/***/ "Ic0F":
/*!****************************************!*\
  !*** ./src/app/classes/forex-rates.ts ***!
  \****************************************/
/*! exports provided: ForexRates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForexRates", function() { return ForexRates; });
class ForexRates {
    constructor(base, date, rates) {
        this.base = base;
        this.date = date;
        this.rates = rates;
    }
}


/***/ }),

/***/ "KQ97":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>404 Page not found</h1>\r\n");

/***/ }),

/***/ "LkI3":
/*!****************************************************!*\
  !*** ./src/app/calculator/calculator.component.ts ***!
  \****************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_calculator_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./calculator.component.html */ "LpMO");
/* harmony import */ var _calculator_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculator.component.css */ "VPcf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CalculatorComponent = class CalculatorComponent {
    constructor() {
        this.buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '+', '='];
        this.operation = '';
    }
    ngOnInit() {
    }
    addNumbers(value) {
        if (value === '=') {
            try {
                // tslint:disable-next-line:no-eval
                this.result = eval(this.operation);
                this.operation = this.result.toString();
            }
            catch (error) {
                console.error(error);
                this.operation = '';
            }
        }
        else if (value === 'C') {
            this.operation = '';
        }
        else if (value === '+' || value === '-' || value === '*' || value === '/') {
            const lastChar = this.operation.substr(this.operation.length - 1);
            if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
                (console.log('do nothing'));
            }
            else {
                this.operation += value;
            }
        }
        else {
            this.operation += value;
        }
    }
};
CalculatorComponent.ctorParameters = () => [];
CalculatorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-calculator',
        template: _raw_loader_calculator_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_calculator_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CalculatorComponent);



/***/ }),

/***/ "LpMO":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calculator/calculator.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Calculator</h1>\r\n\r\n<mat-card class=\"container\">\r\n\r\n  <label>\r\n    <input disabled type=\"text\" [(ngModel)]=\"operation\">\r\n  </label>\r\n\r\n  <mat-grid-list cols=\"4\" rowHeight=\"2:1\">\r\n    <mat-grid-tile *ngFor=\"let button of buttons\">\r\n      <button mat-raised-button (click)=\"addNumbers(button)\">{{button}}</button>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n</mat-card>\r\n");

/***/ }),

/***/ "MADS":
/*!************************************************!*\
  !*** ./src/app/service/forex-rates.service.ts ***!
  \************************************************/
/*! exports provided: ForexRatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForexRatesService", function() { return ForexRatesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ForexRatesService = class ForexRatesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.ratesSource = 'https://api.exchangeratesapi.io/latest';
    }
    getRatesData() {
        return this.httpClient.get(this.ratesSource).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return response;
        }));
    }
    getData(currency) {
        const param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('base', String(currency));
        return this.httpClient.get(this.ratesSource, { params: param }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return response;
        }));
    }
};
ForexRatesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ForexRatesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ForexRatesService);



/***/ }),

/***/ "OfLC":
/*!***********************************************************!*\
  !*** ./src/app/reactive-form/reactive-form.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\r\n   width: 80vw;\r\n   display: block;\r\n   margin: auto;\r\n }\r\n\r\n.formContainer{\r\n  display: inline-block;\r\n  margin: auto;\r\n}\r\n\r\nmat-form-field {\r\n  display: table-row;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\nbutton {\r\n  background-color: darkseagreen;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0aXZlLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLFdBQVc7R0FDWCxjQUFjO0dBQ2QsWUFBWTtDQUNkOztBQUVEO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDIiwiZmlsZSI6InJlYWN0aXZlLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICAgd2lkdGg6IDgwdnc7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICBtYXJnaW46IGF1dG87XHJcbiB9XHJcblxyXG4uZm9ybUNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2VhZ3JlZW47XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "QOjv":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/feedback.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Give feedback</h1>\r\n<mat-card>\r\n  <mat-card-content *ngFor=\"let q of feedbackList\">\r\n    <mat-card-title>{{q.question}}</mat-card-title>\r\n    <mat-slider\r\n      [max]=3\r\n      [min]=0\r\n      [step]=1\r\n      (input)=\"q.setFeedback($event.value)\">\r\n    </mat-slider>\r\n    <mat-card-content>{{q.answerList[q.answer]}}</mat-card-content>\r\n  </mat-card-content>\r\n</mat-card>\r\n");

/***/ }),

/***/ "QgpJ":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-login/admin-login.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n  <form #loginForm=\"ngForm\" (ngSubmit)=\"loginClick(loginForm)\">\r\n    <div class=\"formContainer\">\r\n    <mat-form-field>\r\n      <label>\r\n        <input matInput [(ngModel)]=\"username\"\r\n               name=\"username\"\r\n               placeholder=\"Username\">\r\n      </label>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <label>\r\n        <input matInput [(ngModel)]=\"password\"\r\n               name=\"password\"\r\n               placeholder=\"Password\"\r\n               type=\"password\">\r\n      </label>\r\n    </mat-form-field>\r\n    </div>\r\n  </form>\r\n  <button mat-button (click)=\"loginClick(loginForm)\">Login</button>\r\n  <button mat-button (click)=\"backHomeClick()\">Cancel</button>\r\n</mat-card>\r\n");

/***/ }),

/***/ "RV7M":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "SL0s":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n  <mat-card-title>You have signed in as {{username$ | async}}</mat-card-title>\r\n  <button mat-raised-button (click)=\"signOut()\">Sign out</button>\r\n</mat-card>\r\n\r\n\r\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'frontend-course';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "TRGY":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin.component.html */ "SL0s");
/* harmony import */ var _admin_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.component.css */ "yP50");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/auth.service */ "6uu6");





let AdminComponent = class AdminComponent {
    constructor(loginService) {
        this.loginService = loginService;
    }
    ngOnInit() {
        this.username$ = this.loginService.checkLoggedInUser();
    }
    signOut() {
        this.loginService.logout();
    }
};
AdminComponent.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin',
        template: _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminComponent);



/***/ }),

/***/ "VPcf":
/*!*****************************************************!*\
  !*** ./src/app/calculator/calculator.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n  background-color: grey;\r\n  width: 325px;\r\n  text-align: center;\r\n}\r\n\r\ninput {\r\n  width: 90%;\r\n  height: auto;\r\n  text-align: right;\r\n  font-size: 20px;\r\n}\r\n\r\nbutton {\r\n  background-color: darkseagreen;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGN1bGF0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJjYWxjdWxhdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gIHdpZHRoOiAzMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NlYWdyZWVuO1xyXG59XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-toolbar></app-toolbar>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "X5Me":
/*!******************************************!*\
  !*** ./src/app/forex/forex.component.ts ***!
  \******************************************/
/*! exports provided: ForexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForexComponent", function() { return ForexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forex_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forex.component.html */ "o8th");
/* harmony import */ var _forex_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forex.component.css */ "q5LD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_forex_rates_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/forex-rates.service */ "MADS");
/* harmony import */ var _classes_forex_rates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../classes/forex-rates */ "Ic0F");






let ForexComponent = class ForexComponent {
    constructor(forexRatesService) {
        this.forexRatesService = forexRatesService;
        this.targetAmount = '';
        this.currentRate = 1;
        this.forexList = ['EUR'];
        this.forexRates = new _classes_forex_rates__WEBPACK_IMPORTED_MODULE_5__["ForexRates"]();
    }
    ngOnInit() {
        this.forexRatesService.getRatesData().subscribe(response => {
            const ratesArray = Object.entries(response.rates);
            ratesArray.forEach(([key]) => {
                this.forexList.push(key);
            });
        });
    }
    onChange() {
        if (this.targetForex !== undefined && this.inputAmount !== undefined && this.selectedForex !== undefined) {
            this.forexRatesService.getData(this.selectedForex).subscribe(response => {
                this.forexRates = response;
                const ratesArray = Object.entries(this.forexRates.rates);
                ratesArray.forEach(([key, value]) => {
                    if (key === this.targetForex) {
                        this.currentRate = value;
                    }
                });
                console.log('Summa = ' + this.inputAmount * this.currentRate);
                this.targetAmount = (this.inputAmount * this.currentRate).toFixed(2);
            });
        }
    }
};
ForexComponent.ctorParameters = () => [
    { type: _service_forex_rates_service__WEBPACK_IMPORTED_MODULE_4__["ForexRatesService"] }
];
ForexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forex',
        template: _raw_loader_forex_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forex_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ForexComponent);



/***/ }),

/***/ "XLOz":
/*!******************************************************!*\
  !*** ./src/app/admin-login/admin-login.component.ts ***!
  \******************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-login.component.html */ "QgpJ");
/* harmony import */ var _admin_login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-login.component.css */ "D3jF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth.service */ "6uu6");






let AdminLoginComponent = class AdminLoginComponent {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.password = '';
        this.username = '';
    }
    ngOnInit() {
    }
    backHomeClick() {
        this.router.navigateByUrl('/home');
    }
    loginClick(login) {
        this.loginService.login(login.value.username, login.value.password);
    }
};
AdminLoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
AdminLoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-login',
        template: _raw_loader_admin_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminLoginComponent);



/***/ }),

/***/ "YIjP":
/*!***********************************************!*\
  !*** ./src/app/service/movie-news.service.ts ***!
  \***********************************************/
/*! exports provided: MovieNewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieNewsService", function() { return MovieNewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xml2js */ "CDzl");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_4__);





let MovieNewsService = class MovieNewsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.newsSource = 'https://www.finnkino.fi/xml/News/';
    }
    getData() {
        return this.httpClient.get(this.newsSource, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            let newsData = [];
            // tslint:disable-next-line:only-arrow-functions
            Object(xml2js__WEBPACK_IMPORTED_MODULE_4__["parseString"])(response, { trim: true, explicitArray: false, mergeAttrs: true }, function (err, result) {
                newsData = result.News.NewsArticle;
            });
            return newsData;
        }));
    }
};
MovieNewsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MovieNewsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MovieNewsService);



/***/ }),

/***/ "Yldw":
/*!***********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-toolbar {\r\n  background-color: darkseagreen;\r\n  margin-bottom: 2vh;\r\n}\r\n\r\n.logout {\r\n  position: fixed !important;\r\n  right: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsV0FBVztBQUNiIiwiZmlsZSI6InRvb2xiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2VhZ3JlZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xyXG59XHJcblxyXG4ubG9nb3V0IHtcclxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICByaWdodDogMjBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "4zdL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./calculator/calculator.component */ "LkI3");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./feedback/feedback.component */ "isCG");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./registration-form/registration-form.component */ "C78I");
/* harmony import */ var _reactive_form_reactive_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./reactive-form/reactive-form.component */ "pyfl");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _finnkino_finnkino_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./finnkino/finnkino.component */ "ZKl4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pipes_news_filter_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pipes/news-filter.pipe */ "nOw0");
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin-login/admin-login.component */ "XLOz");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/fire */ "05qF");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/fire/auth */ "KDZV");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _forex_forex_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./forex/forex.component */ "X5Me");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./service/auth.service */ "6uu6");





































let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"],
            _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_18__["CalculatorComponent"],
            _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_19__["FeedbackComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
            _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_23__["RegistrationFormComponent"],
            _reactive_form_reactive_form_component__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_25__["PageNotFoundComponent"],
            _finnkino_finnkino_component__WEBPACK_IMPORTED_MODULE_26__["FinnkinoComponent"],
            _pipes_news_filter_pipe__WEBPACK_IMPORTED_MODULE_28__["NewsFilterPipe"],
            _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_29__["AdminLoginComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_30__["AdminComponent"],
            _forex_forex_component__WEBPACK_IMPORTED_MODULE_35__["ForexComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_31__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_34__["environment"].firebase),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_32__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_33__["AngularFirestoreModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"]
        ],
        providers: [_service_auth_service__WEBPACK_IMPORTED_MODULE_36__["AuthService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "ZKl4":
/*!************************************************!*\
  !*** ./src/app/finnkino/finnkino.component.ts ***!
  \************************************************/
/*! exports provided: FinnkinoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinnkinoComponent", function() { return FinnkinoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_finnkino_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./finnkino.component.html */ "wB7z");
/* harmony import */ var _finnkino_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finnkino.component.css */ "jc8b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_movie_news_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/movie-news.service */ "YIjP");





let FinnkinoComponent = class FinnkinoComponent {
    constructor(newsService) {
        this.newsService = newsService;
        this.searchTerm = '';
    }
    ngOnInit() {
        this.newsData$ = this.newsService.getData();
    }
};
FinnkinoComponent.ctorParameters = () => [
    { type: _service_movie_news_service__WEBPACK_IMPORTED_MODULE_4__["MovieNewsService"] }
];
FinnkinoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-finnkino',
        template: _raw_loader_finnkino_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_finnkino_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FinnkinoComponent);



/***/ }),

/***/ "fLLn":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "g5Cb":
/*!*************************************************!*\
  !*** ./src/app/feedback/feedback.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkYmFjay5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "isCG":
/*!************************************************!*\
  !*** ./src/app/feedback/feedback.component.ts ***!
  \************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_feedback_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./feedback.component.html */ "QOjv");
/* harmony import */ var _feedback_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback.component.css */ "g5Cb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_feedback_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/feedback.service */ "vAQz");





let FeedbackComponent = class FeedbackComponent {
    constructor(feedbackService) {
        this.feedbackService = feedbackService;
        this.feedbackList = [];
        this.feedbackList = this.feedbackService.getFeedback();
    }
    ngOnInit() {
    }
};
FeedbackComponent.ctorParameters = () => [
    { type: _service_feedback_service__WEBPACK_IMPORTED_MODULE_4__["FeedbackService"] }
];
FeedbackComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-feedback',
        template: _raw_loader_feedback_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feedback_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FeedbackComponent);



/***/ }),

/***/ "jc8b":
/*!*************************************************!*\
  !*** ./src/app/finnkino/finnkino.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n  display: inline-block;\r\n}\r\n.imageContainer {\r\n  float: left;\r\n  padding-right: 5px;\r\n}\r\nmat-card {\r\n  width: 80vw;\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbm5raW5vLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsWUFBWTtBQUNkIiwiZmlsZSI6ImZpbm5raW5vLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5pbWFnZUNvbnRhaW5lciB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcbm1hdC1jYXJkIHtcclxuICB3aWR0aDogODB2dztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "nOw0":
/*!*******************************************!*\
  !*** ./src/app/pipes/news-filter.pipe.ts ***!
  \*******************************************/
/*! exports provided: NewsFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsFilterPipe", function() { return NewsFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let NewsFilterPipe = class NewsFilterPipe {
    transform(newItems, filter) {
        if (!newItems || !filter) {
            return newItems;
        }
        return newItems.filter(newItem => newItem.Title.toLowerCase().includes(filter.toLowerCase()));
    }
};
NewsFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'newsFilter'
    })
], NewsFilterPipe);



/***/ }),

/***/ "o8th":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forex/forex.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n  <mat-card-title>{{forexRates.date}} Currency Exchange Rates</mat-card-title>\r\n  <mat-form-field>\r\n    <mat-label>Select base currency</mat-label>\r\n    <mat-select [(ngModel)]=\"selectedForex\" (ngModelChange)=\"onChange()\">\r\n      <mat-option *ngFor=\"let f of forexList\" [value]=\"f\">\r\n        {{f}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <label>\r\n      <input matInput type=\"text\"\r\n             #amount=\"ngModel\" name=\"amount\"\r\n             pattern=\"^[0-9]*$\"\r\n             placeholder=\"Select amount of {{selectedForex}}\"\r\n             [(ngModel)]=\"inputAmount\"\r\n             (ngModelChange)=\"onChange()\">\r\n    </label>\r\n    <mat-error *ngIf=\"amount.invalid\">Please, input numbers!</mat-error>\r\n  </mat-form-field>\r\n  <mat-icon>arrow_forward</mat-icon>\r\n  <mat-form-field>\r\n    <mat-label>Select target currency</mat-label>\r\n    <mat-select [(ngModel)]=\"targetForex\" (ngModelChange)=\"onChange()\">\r\n      <mat-option *ngFor=\"let f of forexList\" [value]=\"f\">\r\n        {{f}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <label>\r\n      <input matInput placeholder=\"Amount in {{targetForex}}\" readonly  [(ngModel)]=\"targetAmount\">\r\n    </label>\r\n  </mat-form-field>\r\n</mat-card>\r\n");

/***/ }),

/***/ "pYvD":
/*!***********************************!*\
  !*** ./src/app/classes/person.ts ***!
  \***********************************/
/*! exports provided: Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
class Person {
    constructor(firstName, lastName, personId, email, username, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.personId = personId;
        this.email = email;
        this.username = username;
        this.password = password;
        this.acceptTerms = false;
    }
}


/***/ }),

/***/ "pyfl":
/*!**********************************************************!*\
  !*** ./src/app/reactive-form/reactive-form.component.ts ***!
  \**********************************************************/
/*! exports provided: ReactiveFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormComponent", function() { return ReactiveFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reactive_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reactive-form.component.html */ "t1Lq");
/* harmony import */ var _reactive_form_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactive-form.component.css */ "OfLC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





let ReactiveFormComponent = class ReactiveFormComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.personForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-öA-Ö ]*')]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-öA-Ö ]*')]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(0[1-9]|[12]\\d|3[01])(0[1-9]|1[0-2])([5-9]\\d+|\\d\\d-|[01]\\dA)\\d{3}[\\dA-Z]$')]],
            personId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(0[1-9]|[12]\\d|3[01])(0[1-9]|1[0-2])([5-9]\\d+|\\d\\d-|[01]\\dA)\\d{3}[\\dA-Z]$')]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,]],
            termsAccepted: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
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
};
ReactiveFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
ReactiveFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reactive-form',
        template: _raw_loader_reactive_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reactive_form_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReactiveFormComponent);



/***/ }),

/***/ "q5LD":
/*!*******************************************!*\
  !*** ./src/app/forex/forex.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\r\n  display: inline-block;\r\n  margin-left: 5px;\r\n  margin-right: auto;\r\n}\r\nmat-card {\r\n  width: 80vw;\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmV4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxZQUFZO0FBQ2QiLCJmaWxlIjoiZm9yZXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxubWF0LWNhcmQge1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_page_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "KQ97");
/* harmony import */ var _page_not_found_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found.component.css */ "fLLn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent.ctorParameters = () => [];
PageNotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-page-not-found',
        template: _raw_loader_page_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_page_not_found_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "sp5i":
/*!******************************************!*\
  !*** ./src/app/classes/feedback-item.ts ***!
  \******************************************/
/*! exports provided: FeedbackItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackItem", function() { return FeedbackItem; });
class FeedbackItem {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
        this.answerList = ['Not yet set', 'Bad', 'Okay', 'Good'];
    }
    setFeedback(value) {
        this.answer = value;
    }
}


/***/ }),

/***/ "t1Lq":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reactive-form/reactive-form.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"form-container\">\r\n  <form [formGroup]=\"personForm\" (ngSubmit)=\"onSubmit(personForm)\">\r\n    <mat-form-field>\r\n      <label>\r\n        <input matInput type=\"text\" formControlName=\"firstName\"\r\n               placeholder=\"First name\" [formGroup]=\"personForm\">\r\n      </label>\r\n      <mat-error *ngIf=\"firstName.invalid\">First name is invalid</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <label>\r\n        <input matInput type=\"text\" formControlName=\"lastName\"\r\n               placeholder=\"Last name\">\r\n      </label>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <label>\r\n        <input matInput formControlName=\"personId\"\r\n               class=\"form-control\"\r\n               type=\"text\"\r\n               placeholder=\"Person id\">\r\n      </label>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <label>\r\n        <input matInput type=\"text\" formControlName=\"email\"\r\n               placeholder=\"Email address\">\r\n      </label>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <label>\r\n        <input matInput formControlName=\"username\"\r\n               class=\"form-control\"\r\n               type=\"text\"\r\n               placeholder=\"Username\">\r\n      </label>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <label>\r\n        <input matInput\r\n               class=\"form-control\" name=\"pw1\"\r\n               type=\"password\"\r\n               required minlength=\"10\"\r\n               placeholder=\"Password\">\r\n      </label>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <label>\r\n        <input matInput\r\n               class=\"form-control\" name=\"pw2\"\r\n               type=\"password\"\r\n               required minlength=\"10\"\r\n               placeholder=\"Password\">\r\n      </label>\r\n    </mat-form-field>\r\n    <mat-checkbox name=\"terms\">Accept terms and conditions</mat-checkbox>\r\n\r\n  </form>\r\n</mat-card>\r\n");

/***/ }),

/***/ "vAQz":
/*!*********************************************!*\
  !*** ./src/app/service/feedback.service.ts ***!
  \*********************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _classes_feedback_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/feedback-item */ "sp5i");



let FeedbackService = class FeedbackService {
    constructor() {
        this.feedbackItemList = [];
        this.feedbackItemList.push(new _classes_feedback_item__WEBPACK_IMPORTED_MODULE_2__["FeedbackItem"]('This course is'), new _classes_feedback_item__WEBPACK_IMPORTED_MODULE_2__["FeedbackItem"]('Todays weather is'));
    }
    getFeedback() {
        return this.feedbackItemList;
    }
};
FeedbackService.ctorParameters = () => [];
FeedbackService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FeedbackService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calculator/calculator.component */ "LkI3");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feedback/feedback.component */ "isCG");
/* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration-form/registration-form.component */ "C78I");
/* harmony import */ var _reactive_form_reactive_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reactive-form/reactive-form.component */ "pyfl");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _finnkino_finnkino_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./finnkino/finnkino.component */ "ZKl4");
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-login/admin-login.component */ "XLOz");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/auth.guard */ "Cp0R");
/* harmony import */ var _forex_forex_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forex/forex.component */ "X5Me");














const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'calculator', component: _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_4__["CalculatorComponent"] },
    { path: 'feedback', component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_5__["FeedbackComponent"] },
    { path: 'form', component: _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationFormComponent"] },
    { path: 'reactive', component: _reactive_form_reactive_form_component__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormComponent"] },
    { path: 'finnkino', component: _finnkino_finnkino_component__WEBPACK_IMPORTED_MODULE_9__["FinnkinoComponent"] },
    { path: 'forex', component: _forex_forex_component__WEBPACK_IMPORTED_MODULE_13__["ForexComponent"] },
    { path: 'adminLogin', component: _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_10__["AdminLoginComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "wB7z":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/finnkino/finnkino.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n  <mat-form-field>\r\n    <input type=\"text\" matInput placeholder=\"Search News\" [(ngModel)]=\"searchTerm\">\r\n    <mat-icon matSuffix>search</mat-icon>\r\n  </mat-form-field>\r\n  <mat-card-title>Finnkino News</mat-card-title>\r\n  <mat-accordion>\r\n    <mat-expansion-panel *ngFor=\"let news of newsData$ | async | newsFilter: searchTerm\">\r\n      <mat-expansion-panel-header>\r\n        {{news.Title}}\r\n      </mat-expansion-panel-header>\r\n      <div class=\"content\">\r\n        <div class=\"imageContainer\"><img src=\"{{news.ImageURL}}\"></div>\r\n        <div class=\"infoContainer\">{{news.HTMLLead}}</div>\r\n      </div>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n</mat-card>\r\n");

/***/ }),

/***/ "yP50":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\r\n  width: 80vw;\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7QUFDZCIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map