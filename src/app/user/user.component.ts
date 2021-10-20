import { Component, OnInit } from '@angular/core';
import { User } from '../Classes/user';
import { SearchformComponent } from '../searchform/searchform.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!: User;

  constructor(){ }

  ngOnInit(): void {
  }

}
