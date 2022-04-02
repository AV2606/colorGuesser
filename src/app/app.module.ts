import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
import { Q1Component } from './questions/q1/q1.component';
import { Q2Component } from './questions/q2/q2.component';
import { Q3Component } from './questions/q3/q3.component';
import { GQuestionComponent } from './questions/gquestion/gquestion.component';
import { Q4Component } from './questions/q4/q4.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Q1Component,
    Q2Component,
    Q3Component,
    GQuestionComponent,
    Q4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
