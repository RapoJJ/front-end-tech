import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {MatCardModule} from "@angular/material/card";
import {MatSliderModule} from "@angular/material/slider";


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ToolbarComponent,
    HomeComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
