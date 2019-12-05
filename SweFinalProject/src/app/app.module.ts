import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListIssuesComponent } from './list-issues/list-issues.component';
import { CompareIssuesComponent } from './compare-issues/compare-issues.component';
import { CompareContributorsComponent } from './compare-contributors/compare-contributors.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ReposComponent } from './repos/repos.component'; 
// import { HttpModule } from '@angular/http';
import { NgChartjsModule } from 'ng-chartjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListIssuesComponent,
    CompareIssuesComponent,
    CompareContributorsComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }