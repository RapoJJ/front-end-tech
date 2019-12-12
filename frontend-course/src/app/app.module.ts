import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatExpansionModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatMenuModule,
  MatSliderModule,
  MatToolbarModule
} from '@angular/material';
import { CalculatorComponent } from './calculator/calculator.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FinnkinoComponent } from './finnkino/finnkino.component';
import {HttpClientModule} from '@angular/common/http';
import { NewsFilterPipe } from './pipes/news-filter.pipe';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CalculatorComponent,
    FeedbackComponent,
    HomeComponent,
    RegistrationFormComponent,
    ReactiveFormComponent,
    PageNotFoundComponent,
    FinnkinoComponent,
    NewsFilterPipe,
    AdminLoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    FormsModule,
    MatCardModule,
    MatSliderModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatExpansionModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
