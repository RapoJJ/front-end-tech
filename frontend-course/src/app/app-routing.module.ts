import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CalculatorComponent} from './calculator/calculator.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {RegistrationFormComponent} from './registration-form/registration-form.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FinnkinoComponent} from './finnkino/finnkino.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {AdminComponent} from './admin/admin.component';
import {AuthGuard} from './shared/auth.guard';
import {ForexComponent} from './forex/forex.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'form', component: RegistrationFormComponent},
  {path: 'reactive', component: ReactiveFormComponent},
  {path: 'finnkino', component: FinnkinoComponent},
  {path: 'forex', component: ForexComponent},
  {path: 'adminLogin', component: AdminLoginComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
