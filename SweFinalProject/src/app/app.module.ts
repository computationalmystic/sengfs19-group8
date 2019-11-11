import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListIssuesComponent } from './list-issues/list-issues.component';
import { CompareIssuesComponent } from './compare-issues/compare-issues.component';
import { CompareContributorsComponent } from './compare-contributors/compare-contributors.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListIssuesComponent,
    CompareIssuesComponent,
    CompareContributorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
