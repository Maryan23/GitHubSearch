import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Repository} from '../Classes/repository';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestReposService {
  promise:any
  repos:any

  constructor(private http:HttpClient) { }
   //for github repo
   repoQuery(repo: string):any
   {
    this.repos = this.http.get<any>(environment.apiUrl + repo,{headers: new HttpHeaders({'Authorization': 'token ' + atob(environment.apiKey)})}).toPromise();
    return this.repos;

  }
}
