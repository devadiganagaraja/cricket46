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

  username : string = 'UserName'
  password : string = ''
  errorMessage : String = 'Invalid credentials.'
  invalidLogin = false

  constructor(private router : Router,
              private userDataService: UserDataService) { }

  ngOnInit(): void {
  }

  handleLogin() {

    this.router.navigate(["welcome", this.username])

    this.userDataService.authenticateUser(new User(this.username, '', '', '', this.password)).subscribe(
      response => {
        console.log("responseresponseresponseresponse"+response)
        if(response==true){
          
          this.invalidLogin = false
          sessionStorage.setItem("loggedInUser", this.username)

          this.router.navigate(["welcome", this.username])
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
