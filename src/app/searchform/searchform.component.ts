import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../Classes/user';
import { Repository } from '../Classes/repository';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit{


  @Output() udetails = new EventEmitter<User>();
  @Output() rdetails = new EventEmitter<Repository>();

  newUser = new User('','','','');

  searchUser(){
    this.udetails.emit(this.newUser);

  SearchformComponent.constructor(){}

  ngOnInit(): void {}
    
  }
}
