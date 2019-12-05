import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { ChartsModule } from 'ng2-charts';


@Component({
  selector: 'app-compare-issues',
  templateUrl: './compare-issues.component.html',
  styleUrls: ['./compare-issues.component.css']
})
export class CompareIssuesComponent implements OnInit {

  repoChoiceForm = this.fb.group({
    choice1: ['', Validators.compose([Validators.required])],
    choice2: ['', Validators.compose([Validators.required])]
    // , Validators.pattern('^[a-zA-Z0-9s-]*$')
  });

  repos: Object;
  showchart: boolean = false;


  constructor(private route: ActivatedRoute, private dataService: DataService, private fb: FormBuilder) { }

  ngOnInit() {
    console.log("getRepos");
    this.dataService.getRepos().subscribe(data => {
      this.repos = data;
      console.log(this.repos);
    });
  }

  submitChoice() {
    this.showchart = true;
  }

  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];

  onChartClick(event) {
    console.log(event);
  }
}
