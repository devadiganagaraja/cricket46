import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../service/data/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = []

  userDeleteMsg: string = ""
  constructor(
    private router : Router,
    private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.refreshUsers()
  }


  refreshUsers(){
    this.userDataService.retrieveAllUsers().subscribe(response => this.handleSuccessfullResponse(response));
  }
  handleSuccessfullResponse(response){
    console.log("response"+response)
    this.users = response;
  }

  deleteUser(id){
    console.log("delete id::"+id)
    this.userDataService.deleteUser(id).subscribe(
      response => { 
        this.userDeleteMsg = `user ${id} deleted successfully.` 
        this.refreshUsers()
      }, 
      
      error => { console.log("error=>"+error)}
      
      
      )
  }


  updateUser(id){
    console.log("update id::"+id)
    this.router.navigate(["users", id])
  }

  addUser(){
    this.router.navigate(["users", "new"])
  }

}
