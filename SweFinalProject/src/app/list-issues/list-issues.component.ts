import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-issues',
  templateUrl: './list-issues.component.html',
  styleUrls: ['./list-issues.component.css']
})
export class ListIssuesComponent implements OnInit {

  // issues: Object;
  repos: Object;
  groups: Object;

  // urlGroupId: string = this.route.snapshot.paramMap.get('groupId');
  // urlRepoId: string = this.route.snapshot.paramMap.get('repoId');

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    console.log("getRepos");
      this.dataService.getRepos().subscribe(data => {
        this.repos = data;
        console.log(this.repos);
      });

  }

  // chooseRepo(){
  //   this.dataService.getListIssues(this.urlRepoId, this.urlGroupId).subscribe((data) => {
  //     console.log('get list issues');
  //     this.issues = data;

  //   });
  // }

}
