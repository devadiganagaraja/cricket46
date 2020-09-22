import { Injectable } from '@angular/core';
import { UserDataService, User } from './data/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor(private userDataService: UserDataService) { }

  isUserLoggedIn(){
    let user = localStorage.getItem("loggedInUser")
    return ! (user === null);
  }

  logout(){
    localStorage.removeItem("loggedInUser");
  }
}
