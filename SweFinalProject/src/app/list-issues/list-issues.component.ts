import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-list-issues',
  templateUrl: './list-issues.component.html',
  styleUrls: ['./list-issues.component.css']
})
export class ListIssuesComponent implements OnInit {

  issues: Object;

  chart = [];

  urlGroupId: string = this.route.snapshot.paramMap.get('groupId');
  urlRepoId: string = this.route.snapshot.paramMap.get('repoId');

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    
    this.dataService.getListIssues(this.urlRepoId, this.urlGroupId).subscribe((data) => {
      console.log('get list issues');
      this.issues = data;
      console.log(data);
    });
  }

  // chart = new Chart('canvas', {
  //   type: 'line',
  //   data: {
  //     labels: weatherDates,
  //     datasets: [
  //       { 
  //         data: temp_max,
  //         borderColor: "#3cba9f",
  //         fill: false
  //       },
  //       { 
  //         data: temp_min,
  //         borderColor: "#ffcc00",
  //         fill: false
  //       },
  //     ]
  //   },
  //   options: {
  //     legend: {
  //       display: false
  //     },
  //     scales: {
  //       xAxes: [{
  //         display: true
  //       }],
  //       yAxes: [{
  //         display: true
  //       }],
  //     }
  //   }
  // });

}
