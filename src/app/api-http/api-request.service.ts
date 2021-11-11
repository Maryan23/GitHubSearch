import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestService {
  [x: string]: any;
  private userName!:string;
  private repoName!:string;
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;
  
  constructor(private http: HttpClient) {}
  
  //for github user
  getUserData(){
    return this.http.get<any[]>(`${this.apiUrl}${this.userName}??access_token=+${this.apiKey}`).toPromise()
  }

  getUserName(userName:string){
    this.userName = userName
  }

  //for user repositories

  getUserRepos(){
    return this.http.get<any[]>(`${this.apiUrl}${this.userName}/repos??access_token=+${this.apiKey}`).toPromise();
  }

  getRepos(repositories:string){
    return this.repoName = repositories
  }
}