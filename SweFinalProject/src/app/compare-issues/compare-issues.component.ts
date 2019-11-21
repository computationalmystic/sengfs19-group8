import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

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

  constructor(private route: ActivatedRoute, private dataService: DataService, private fb: FormBuilder) { }

  ngOnInit() {
    console.log("getRepos");
      this.dataService.getRepos().subscribe(data => {
        this.repos = data;
        console.log(this.repos);
      });
  }

  submitChoice(){
    
  }
}
