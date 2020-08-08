import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_PUBLIC_IP} from 'src/app/constants';


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
            public endDate: Date,
            public postGameInfoList:  PostGameInfo [],
            public liveGameInfoList:  LiveGameInfo [],
            public preGameInfoList:  PreGameInfo []
            ){
  }
}

export class PostGameInfo{
  constructor( 
    public team1Name: string,
    public team2Name: string,
    public team1Score: string,
    public team2Score: string,
    public team1Won: boolean,
    public team2Won: boolean,
    public classType: string,
    public dateStr: string,
    public note: string
  ){
  }
}


export class LiveGameInfo{
  constructor( 
    public team1Name: string,
    public team2Name: string,
    public team1Score: string,
    public team2Score: string,
    public classType: string,
    public dateStr: string,
    public note: string
  ){
  }
}

export class PreGameInfo  {
  constructor( 
    public team1Name: string,
    public team2Name: string,
    public classType: string,
    public dateStr: string,
    public timeStr: string,
    public note: string
  ){
  }
}

@Injectable({
  providedIn: 'root'
})
export class LeagueDataService {

  constructor(private http: HttpClient) { }

  hostName : string = API_PUBLIC_IP

  retrieveAllLeagues(){
    return this.http.get<League[]>(`${this.hostName}/leagues`)
  }

  retrieveLeague(id){
    return this.http.get<League>(`${this.hostName}/leagues/${id}`)
  }


  retrieveLeagueSeasons(leagueId){
    console.log("retrieveLeagueSeasons:"+leagueId)
    return this.http.get<Season[]>(`${this.hostName}/leagues/${leagueId}/seasons`)
  }

  retrieveLeagueSeason(leagueId, season){
    return this.http.get<Season[]>(`${this.hostName}/leagues/${leagueId}/seasons/${season}`)
  }

  retrieveLeagueSeasonTeams(leagueId, season){
    return this.http.get<Team[]>(`${this.hostName}/leagues/${leagueId}/seasons/${season}/teams`)
  }

  retrieveLeagueSeasonMatches(leagueId, season){
    return this.http.get<Match[]>(`${this.hostName}/leagues/${leagueId}/seasons/${season}/games`)
  }
}
