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
  this.apiRequestService.getUserInfo().then((profile:any)=>{
  this.myProfile=profile;
  }).catch((err:any)=>{
    console.log(err)
  });
  }
  ngOnInit():void{
  this.searchUser();
  }
}