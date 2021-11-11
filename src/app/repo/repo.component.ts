import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../api-http/api-request.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  repos :any;
  userName!: string;

  constructor(private apiRequest:ApiRequestService) { }

  getUserRepositories(){
    this.apiRequest.getuserName(this.userName);
    this.apiRequest.getUserRepos().then( (repos: any)=> {
      this.repos = repos;
    })
  }

  ngOnInit(): void {
    this.getUserRepositories();
  }
}
