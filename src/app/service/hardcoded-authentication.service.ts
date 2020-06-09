import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }


  authenticate(username, password){
    console.log("user loggedin==>"+ this.isUserLoggedIn());
    if(username === 'nagaraja' && password === 'dummy'){
    sessionStorage.setItem("loggedInUser", username)
    console.log("user loggedin==>"+ this.isUserLoggedIn());
    return true
    }
    return false
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem("loggedInUser")
    return ! (user === null);
  }

  logout(){
    sessionStorage.removeItem("loggedInUser");
  }
}
