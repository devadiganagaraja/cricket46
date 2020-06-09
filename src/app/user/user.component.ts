import { Component, OnInit } from '@angular/core';
import { UserDataService, User } from '../service/data/user-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userDataService: UserDataService,
              private route: ActivatedRoute,
              private router : Router) { }

  userName: string
  user: User = new User('', '', '', '', '')
  
  ngOnInit(): void {
    this.userName = this.route.snapshot.params["userName"] 


    if(this.userName != "new"){
      this.userDataService.retrieveUser(this.userName).subscribe(response => 
        {
          this.user=response
        }, 
        error => {
          console.log("error==>"+error)
        })
    }
  }


  saveUser(){
    if(this.userName === "new"){
      this.userDataService.postUser(this.user).subscribe(response => {console.log("post tes"+response)}, error => {console.log("post error"+error)})
    }else{
      this.userDataService.putUser(this.userName, this.user).subscribe(response => {console.log("put tes"+response)})
    }
    this.router.navigate(["users"])
  }

}
