import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class League{
  constructor( 
            public id: number,
            public abbreviation: string,
            public name: string,
            public tournament: boolean){
  }
}

export class Team{
  constructor( 
            public id: number,
            public abbreviation: string,
            public name: string,
            public isNational: boolean){
  }
}

export class Match{
  constructor( 
            public id: number,
            public name: string,
            public date: Date,
            public endDate: Date){
  }
}

export class Season{
  constructor( 
            public year: number,
            public id: number,
            public name: string,
            public shortName: string,
            public startDate: Date,
            public endDate: Date
            ){
  }
}

@Injectable({
  providedIn: 'root'
})
export class LeagueDataService {

  constructor(private http: HttpClient) { }

  retrieveAllLeagues(){
    return this.http.get<League[]>("http://localhost:8080/leagues")
  }

  retrieveLeague(id){
    return this.http.get<League>("http://localhost:8080/leagues/"+id)
  }


  retrieveLeagueSeasons(leagueId){
    console.log("retrieveLeagueSeasons:"+leagueId)
    return this.http.get<Season[]>("http://localhost:8080/leagues/"+leagueId+"/seasons")
  }

  retrieveLeagueSeason(leagueId, season){
    return this.http.get<Season[]>("http://localhost:8080/leagues/"+leagueId+"/seasons/"+season)
  }

  retrieveLeagueSeasonTeams(leagueId, season){
    return this.http.get<Team[]>("http://localhost:8080/leagues/"+leagueId+"/seasons/"+season+"/teams")
  }

  retrieveLeagueSeasonMatches(leagueId, season){
    return this.http.get<Match[]>("http://localhost:8080/leagues/"+leagueId+"/seasons/"+season+"/matches")
  }
}
