import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';
import { NgChartjsModule } from 'ng-chartjs';


@Component({
  selector: 'app-list-issues',
  templateUrl: './list-issues.component.html',
  styleUrls: ['./list-issues.component.css']
})
export class ListIssuesComponent implements OnInit {

  issues: Object;

  urlGroupId: string;
  // urlRepoId: string = this.route.snapshot.paramMap.get('repoId');

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.urlGroupId = this.route.snapshot.paramMap.get('groupId');

    this.dataService.getListIssues(this.urlGroupId).subscribe((data) => {
      console.log('get list issues');
      this.issues = data;

      console.log(data);
      console.log(this.issues);
    });
  }

}