import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueDataService, LeagueIndex } from '../service/data/league-data.service';

@Component({
  selector: 'app-list-leagues',
  templateUrl: './list-leagues.component.html',
  styleUrls: ['./list-leagues.component.css']
})
export class ListLeaguesComponent implements OnInit {

  constructor(private router : Router,
    private leagueDataService: LeagueDataService) { }

  leagueIndex : LeagueIndex

  ngOnInit(): void {
    this.refreshLeagues();
  }


  refreshLeagues(){
    this.leagueDataService.retrieveLeagueIndex().subscribe(response => this.handleSuccessfullResponse(response));
  }
  handleSuccessfullResponse(response){
    console.log("response"+response)
    this.leagueIndex = response;
  }

  viewLeague(leagueid){
    // console.log("league id::"+league)
    this.router.navigate(["leagues", leagueid])
  } 

  viewTournament(tournamentId){
    // console.log("league id::"+league)
    this.router.navigate(["leagues", tournamentId, "seasons", 0])
  }


}
