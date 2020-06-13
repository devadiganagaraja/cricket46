import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { UserDataService, User } from '../service/data/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName : string = 'UserName'
  password : string = ''
  errorMessage : String = 'Invalid credentials.'
  invalidLogin = false

  constructor(private router : Router,
              private userDataService: UserDataService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    this.userDataService.authenticateUser(new User('', this.userName, '', '', '', this.password)).subscribe(
      response => {
        if(response==true){
          this.invalidLogin = false
          sessionStorage.setItem("loggedInUser", this.userName)
          this.router.navigate(["welcome", this.userName])
        }else{
          this.invalidLogin = true
        }
      }, 
      error => {
        this.invalidLogin = true
      })
  }

  register(){
    this.router.navigate(["register"])
  }

}
