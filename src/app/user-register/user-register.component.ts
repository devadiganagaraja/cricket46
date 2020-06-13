import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService, User } from '../service/data/user-data.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private router: Router, private userDataService: UserDataService) { }

  user: User = new User('', '', '', '', '')

  ngOnInit(): void {
  }


  saveUser(){
    
    this.userDataService.postUser(this.user).subscribe(response => {console.log("post tes"+response)}, error => {console.log("post error"+error)})

    this.router.navigate(["login"])
  }

}
