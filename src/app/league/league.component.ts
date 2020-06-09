import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LeagueDataService, League } from '../service/data/league-data.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  constructor(private router : Router,
    private route: ActivatedRoute,
    private leagueDataService: LeagueDataService) { }

    leagueId: number
    league: League
    seasons = []

  ngOnInit(): void {
    this.refreshLeague()
  }


  refreshLeague(){
    this.leagueId = this.route.snapshot.params["league"] 

    this.leagueDataService.retrieveLeague(this.leagueId).subscribe(response => this.handleSuccessfullLeagueResponse(response), error => console.log(console.error()));

  }
  handleSuccessfullLeagueResponse(response){
    console.log("response1"+response)
    this.league = response;
    this.leagueDataService.retrieveLeagueSeasons(this.leagueId).subscribe(response => this.handleSuccessfullSeasonsResponse(response),  error => console.log(console.error()));

  }

  handleSuccessfullSeasonsResponse(response){
    console.log("response2"+response)
    this.seasons = response;
  }

  viewSeason(league, year){
    console.log("league id::"+league+ " ::: season year:"+year)
    this.router.navigate(["leagues", league, "seasons", year])
  }

}
