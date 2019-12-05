import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos: Object;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    console.log("getRepos");
      this.dataService.getGroups().subscribe(data => {
        this.repos = data;
        console.log(this.repos);
      });
  }

}
