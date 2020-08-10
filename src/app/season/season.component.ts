import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {IMAGE_S3_BUCKET_URL} from 'src/app/constants';


import { LeagueDataService, Season } from '../service/data/league-data.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {

  constructor(private router : Router, 
    private route : ActivatedRoute,  
    private leagueDataService: LeagueDataService) { }

  ngOnInit(): void {
    this.refreshSeason()
  }

  leagueId: number
  seasonYear: number

  season: Season
  teams = []
  matches = []
  imageHostName : string = IMAGE_S3_BUCKET_URL


  refreshSeason(){
    this.leagueId = this.route.snapshot.params["league"] 
    this.seasonYear = this.route.snapshot.params["season"];
  
    this.leagueDataService.retrieveLeagueSeason(this.leagueId, this.seasonYear).subscribe(response => this.handleSuccessfullLeagueSeasonResponse(response), error => console.log(console.error()));
    this.leagueDataService.retrieveLeagueSeasonTeams(this.leagueId, this.seasonYear).subscribe(response => this.handleSuccessfullSeasonTeamsResponse(response),  error => console.log(console.error()));
    this.leagueDataService.retrieveLeagueSeasonMatches(this.leagueId, this.seasonYear).subscribe(response => this.handleSuccessfullSeasonMatchesResponse(response),  error => console.log(console.error()));


  }

  handleSuccessfullLeagueSeasonResponse(response){


    this.season = response;
    this.seasonYear = response.year;

  }

  handleSuccessfullSeasonTeamsResponse(response){
    console.log("teams:"+response)
    this.teams = response;
    console.log("handleSuccessfullSeasonTeamsResponse")

  }
  handleSuccessfullSeasonMatchesResponse(response){
    this.matches = response;
  }

  viewMatch(matchId){
    this.router.navigate(["matches", matchId])
  }

  refreshLeagueSeason(selectedSeason) {
    console.log(selectedSeason);
    this.seasonYear = selectedSeason;
    this.leagueDataService.retrieveLeagueSeason(this.leagueId, this.seasonYear).subscribe(response => this.handleSuccessfullLeagueSeasonResponse(response), error => console.log(console.error()));

  }

}
