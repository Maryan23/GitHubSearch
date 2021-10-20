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
  
  constructor(private http: HttpClient) {}
  
  //for githubprofile
  searchQuery(search: string){
    this.promise = new Promise((resolve, reject) => {
      this.http.get<User>(environment.apiUrl + search +{ headers: new HttpHeaders({ 'Authorization': 'token ' + atob(environment.apiKey) }) }).toPromise().then((response) => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });
    return this.promise;
  }

}