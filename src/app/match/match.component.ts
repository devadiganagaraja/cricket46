import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchDataService } from '../service/data/match-data.service';
import { PlayerModel } from '../player/playerModel';
import { MatchModel } from './MatchModel';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})


export class MatchComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router : Router, private matchDataService : MatchDataService) { }

    matchId: number

    matchModel: MatchModel

  ngOnInit(): void {
    this.matchId = this.route.snapshot.params["matchId"] 
    console.log("this.matchId:::::"+this.matchId)

    this.matchDataService.retrieveMatch(this.matchId).subscribe(response => 
      {
        this.matchModel=response
      }, 
      error => {
        console.log("error==>"+error)
      })
  }

}
