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

  // issues: Object;

  // chart : Chart[];

  // urlGroupId: string = this.route.snapshot.paramMap.get('groupId');
  // urlRepoId: string = this.route.snapshot.paramMap.get('repoId');

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  // ngOnInit() {

  //   this.dataService.getListIssues(this.urlRepoId, this.urlGroupId).subscribe((data) => {
  //     console.log('get list issues');
  //     this.issues = data;
  //     console.log(data);
  //   });
  // }

  ngOnInit(){}

//   public chartType: string = 'line';

//   public chartDatasets: Array<any> = [
//     { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
//     { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
//   ];

//   public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

//   public chartColors: Array<any> = [
//     {
//       backgroundColor: 'rgba(105, 0, 132, .2)',
//       borderColor: 'rgba(200, 99, 132, .7)',
//       borderWidth: 2,
//     },
//     {
//       backgroundColor: 'rgba(0, 137, 132, .2)',
//       borderColor: 'rgba(0, 10, 130, .7)',
//       borderWidth: 2,
//     }
//   ];

//   public chartOptions: any = {
//     responsive: true
//   };
//   public chartClicked(e: any): void { }
//   public chartHovered(e: any): void { }


}