import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../api-http/api-request.service';
import { User } from '../Classes/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  repos!: any;
  user: any;
  searchUser = new User('','','','');


 search(value:string){
  this.apiRequest.promise.then((response: any) => {
    this.user = response;
  }, (error: any) => {
    console.log(error);
  });
 }

 search
  
    this.apiRequest.repos.then((response: any) => {
      this.repos = response;

    }, (error: any) => {
      console.log(error);
    });

    constructor(private apiRequest: ApiRequestService) { }

  

  ngOnInIt(): void {}

}

