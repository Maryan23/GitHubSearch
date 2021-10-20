import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../Classes/user';
import { Repository } from '../Classes/repository';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {

  public githubUserQuery!:string;

  constructor(){}

  ngOnInit(): void {
  }

}
