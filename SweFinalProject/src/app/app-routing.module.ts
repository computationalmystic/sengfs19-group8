import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListIssuesComponent } from './list-issues/list-issues.component';
import { CompareContributorsComponent } from './compare-contributors/compare-contributors.component';
import { CompareIssuesComponent } from './compare-issues/compare-issues.component';
import { ReposComponent } from './repos/repos.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'repos', component: ReposComponent},
  { path: 'list-issues/:groupId', component: ListIssuesComponent},
  { path: 'compare-contributors', component: CompareContributorsComponent},
  { path: 'compare-issues', component: CompareIssuesComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
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