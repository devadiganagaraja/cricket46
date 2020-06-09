import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class User{
  constructor( public phone: string,
            public userName: string,
            public firstName: string,
            public lastName: string,
            public email: string){
  }
}


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  retrieveAllUsers(){
    return this.http.get<User[]>("http://cricket46.com:8080/users")
  }

  retrieveUser(userName){
    return this.http.get<User>(`http://cricket46.com:8080/users/${userName}`)
  }

  deleteUser(userName){
    return this.http.delete(`http://cricket46.com:8080/users/${userName}`)
  }


  putUser(userName, user){
    return this.http.put(`http://cricket46.com:8080/users/${userName}`, user)
  }


  postUser(user){
    return this.http.post(`http://cricket46.com:8080/users`, user)
  }
}
