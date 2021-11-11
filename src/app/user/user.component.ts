import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../api-http/api-request.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  repos!: any;
  myProfile! : any;
  userName:string='';
  constructor(private apiRequestService:ApiRequestService){} 

 searchUser(){
   this.apiRequestService.getUserName(this.userName)
   this.apiRequestService.getUserData().then( (user: any)=>{
     this.myProfile=user;
    })
  }
  ngOnInit():void{
  this.searchUser();
  }
}