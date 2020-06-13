import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_PUBLIC_IP} from 'src/app/constants';

export class User{
  constructor( public phone: string,
            public userName: string,
            public firstName: string,
            public lastName: string,
            public email: string,
            public password: string){
  }
}




@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  hostName : string = API_PUBLIC_IP


  retrieveAllUsers(){
    return this.http.get<User[]>(`${this.hostName}/users`)
  }

  retrieveUser(userName){
    return this.http.get<User>(`${this.hostName}/users/${userName}`)
  }

  deleteUser(userName){
    return this.http.delete(`${this.hostName}/users/${userName}`)
  }


  putUser(userName, user){
    return this.http.put(`${this.hostName}/users/${userName}`, user)
  }


  postUser(user){
    return this.http.post(`${this.hostName}/users`, user)
  }

  authenticateUser(user){
     return this.http.post<Boolean>(`${this.hostName}/authenticate`, user)
  }
}
