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

  ngOnInit(): void {
    this.matchId = this.route.snapshot.params["matchId"] 
    console.log("this.matchId:::::"+this.matchId)

    this.matchDataService.retrieveMatch(this.matchId).subscribe(response => 
      {
        this.matchModel=response
        if(response.gameStatus == 'live'){
          this.live =true;
        }
      }, 
      error => {
        console.log("error==>"+error)
      })
  }

}
