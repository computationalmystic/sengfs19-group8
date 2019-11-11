import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListIssuesComponent } from './list-issues/list-issues.component';
import { CompareContributorsComponent } from './compare-contributors/compare-contributors.component';
import { CompareIssuesComponent } from './compare-issues/compare-issues.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'list-issues', component: ListIssuesComponent},
  { path: 'list-issues/:groupId/:repoId', component: ListIssuesComponent},
  { path: 'compare-contributors', component: CompareContributorsComponent},
  { path: 'compare-issues', component: CompareIssuesComponent},
  { path: '**', component: HomeComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing = RouterModule.forRoot(routes);