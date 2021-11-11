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
  myProfile! : any;
  userName:string='';
constructor(private apiRequestService:ApiRequestService){} 

searchProfile(){
  this.apiRequestService.getUserName(this.userName)
  this.apiRequestService.getUserInfo().then(profile=>{
    this.myProfile=profile;
  }).catch((err:any)=>{
    console.log(err)
  });
  }
  ngOnInit():void{
  this.searchProfile();
  }
}