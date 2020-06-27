import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueDataService } from '../service/data/league-data.service';

@Component({
  selector: 'app-list-leagues',
  templateUrl: './list-leagues.component.html',
  styleUrls: ['./list-leagues.component.css']
})
export class ListLeaguesComponent implements OnInit {

  constructor(private router : Router,
    private leagueDataService: LeagueDataService) { }

  leagues = []

  ngOnInit(): void {
    this.refreshLeagues();
  }


  refreshLeagues(){
    this.leagueDataService.retrieveAllLeagues().subscribe(response => this.handleSuccessfullResponse(response));
  }
  handleSuccessfullResponse(response){
    console.log("response"+response)
    this.leagues = response;
  }

  viewLeague(leagueid){
    // console.log("league id::"+league)
    this.router.navigate(["leagues", leagueid])
  }


}
