import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';



export class HelloWorldBean{

  constructor(public message  : String){

  }
}


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {

  userName : String = "";

  welcomeMessageFromService: String = ""

  constructor(private route : ActivatedRoute,
              private welcomeDataService: WelcomeDataService) { }

  ngOnInit(): void {
    this.userName = this.route.snapshot.params["name"]
    console.log("this.userName"+this.userName)
  }

  getWelcomeMessage(){
     this.welcomeDataService.executeHelloworldBeanService().subscribe(response => this.handleSuccessfulResponse(response), error => this.handleErrorResponse(error)
     )

  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message
  }

  handleErrorResponse(error){
    this.welcomeMessageFromService = error.message
  }

}
