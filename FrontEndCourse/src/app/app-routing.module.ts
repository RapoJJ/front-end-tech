import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CalculatorComponent} from "./calculator/calculator.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'calculator', component: CalculatorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
