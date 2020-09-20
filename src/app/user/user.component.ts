import { Component, OnInit } from '@angular/core';
import { UserDataService, User } from '../service/data/user-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadService } from '../service/data/upload.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userDataService: UserDataService,
              private route: ActivatedRoute,
              private router : Router,
              private uploadService: UploadService) { }

  userName: string
  selectedFiles: FileList;

  user: User = new User('', '', '', '', '', '')
  
  ngOnInit(): void {
    this.userName = this.route.snapshot.params["userName"] 

      this.userDataService.retrieveUser(this.userName).subscribe(response => 
        {
          this.user=response
        }, 
        error => {
          console.log("error==>"+error)
        })
  }


  saveUser(){
  
    this.userDataService.putUser(this.userName, this.user).subscribe(response => {console.log("put tes"+response)})
    const file = this.selectedFiles.item(0);
    this.uploadService.uploadFile(file,"users", this.user.userName+".png");
    this.router.navigate(["users"])
  }
    
    selectFile(event) {
    this.selectedFiles = event.target.files;
    }

}
