import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchDataService } from '../service/data/match-data.service';
import { PlayerModel } from '../player/playerModel';
import { MatchModel } from './MatchModel';
import {IMAGE_S3_BUCKET_URL} from 'src/app/constants';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})


export class MatchComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router : Router, private matchDataService : MatchDataService) { }

    imageHostName : string = IMAGE_S3_BUCKET_URL

    matchId: number

    matchModel: MatchModel

    live: boolean = false

    post: boolean = false

    pre: boolean = false

    interval: any;


  ngOnInit(): void {
    this.matchId = this.route.snapshot.params["matchId"] 
    console.log("this.matchId:::::"+this.matchId)

    this.refreshData();
   // if(this.live){
        this.interval = setInterval(() => { 
          this.refreshData(); 
      }, 15000);
    }
  //  }


    refreshData(){
    this.matchDataService.retrieveMatch(this.matchId).subscribe(response => 
      {
        this.matchModel=response
        console.log("refreshing this.matchId status:::::"+response.gameStatus)

        this.live = response.gameStatus == 'live';
        this.post = response.gameStatus == 'post';
        this.pre = response.gameStatus == 'pre';
        // if(response.gameStatus == 'live'){
        //   console.log("refreshing this.matchId:::::"+this.matchId)
        //   this.live =true;
        // }else{
        //   this.live =false;
        // }
      }, 
      error => {
        console.log("error==>"+error)
      });
    }

    viewTournament(tournamentId){
      // console.log("league id::"+league)
      this.router.navigate(["leagues", tournamentId, "seasons", 0])
    }


}
