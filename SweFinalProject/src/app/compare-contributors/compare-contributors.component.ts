import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-compare-contributors',
  templateUrl: './compare-contributors.component.html',
  styleUrls: ['./compare-contributors.component.css']
})
export class CompareContributorsComponent implements OnInit {
  repoChoiceForm = this.fb.group({
    choice1: ['', Validators.compose([Validators.required])],
    choice2: ['', Validators.compose([Validators.required])]
    // , Validators.pattern('^[a-zA-Z0-9s-]*$')
  });

  repos: Object;
  showchart: boolean = false;
  chartData = [
    {data: [], label: ''},
    {data: [], label: ''}
  ];

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
    console.log(this.repoChoiceForm.value);

    this.chartData = [
      { data: [this.repoChoiceForm.value.choice1.commits_all_time], label: this.repoChoiceForm.value.choice1.repo_name },
      { data: [this.repoChoiceForm.value.choice2.commits_all_time], label: this.repoChoiceForm.value.choice2.repo_name }
    ];
  }

  // https://stackoverflow.com/questions/52338021/ng-2-charts-cant-get-bar-chart-axis-to-start-at-0
  chartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };

  chartLabels = ['Commits for All Time'];

  onChartClick(event) {
    console.log(event);
  }
}
