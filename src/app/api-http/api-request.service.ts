import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../Classes/user';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestService {
  promise:any;
  user: string |undefined;
  repos:any
  
  constructor(private http: HttpClient) {}
  
  //for githubuser
  searchUser(search:string): any{
    this.promise = new Promise((resolve, reject) => {
      this.http.get<User>(environment.apiUrl + search +{ headers: new HttpHeaders({ 'Authorization': 'token ' + atob(environment.apiKey) }) }).toPromise().then((response) => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });
    return this.promise;
  }

  //for github repos
  searchRepo(search:string):any{
    this.repos = this.http.get<any>(environment.apiUrl+search,{headers: new HttpHeaders({'Authorization': 'token ' + atob(environment.apiKey)})}).toPromise();
    return this.repos;

  }

}