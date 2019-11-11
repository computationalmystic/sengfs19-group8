import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  // Reference: https://github.com/computationalmystic/project4-group14/tree/production/project2/src/app
  
  public getRepos(){
    console.log("called getRepos");
    return this.httpClient.get('http://augur.osshealth.io:5000/api/unstable/repos');
  }

  public getGroups(){
    console.log("called getGroups");
    return this.httpClient.get('http://augur.osshealth.io:5000/api/unstable/repo-groups')
  }

  public getListIssues(rgid, rpid) {
    return this.httpClient.get("https://cors-anywhere.herokuapp.com/http://129.114.104.249:8081/repo-groups/" + rgid + "/repos/" + rpid + "/assignee-issues-assigned-to/")
  }

}
