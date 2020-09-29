import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_PUBLIC_IP} from 'src/app/constants';


export class LeagueIndex{
  constructor( 
            public tournaments: League [],
            public tours: League []){
  }
}

export class League{
  constructor( 
            public id: number,
            public abbreviation: string,
            public name: string,
            public tournament: boolean,
            public childLeagues: ChildLeague []
            ){
  }
}


export class ChildLeague{
  constructor(
    public id: number,
    public name: string,
    public abbreviation: string,
    public classId: number
  ){}
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
            public postGameInfoList:  GameInfo [],
            public liveGameInfoList:  GameInfo [],
            public scheduledGameInfoList:  GameInfo[],
            public seasons: number [],
            public teamGroups: TeamStandingGroup[],
            public battingLeaders: BattingLeader[],
            public bowlingLeaders: BowlingLeader[],
            ){
  }
}

export class TeamStandingGroup{
  constructor(
    public id: number,
    public name: string,
    public abbreviation: string,
    public teamsStandings: TeamsStanding []

  ){}
}

export class BattingLeader{
  constructor( 
    private playerId: number,
    private playerName: string,
    private teamName: string,
    private matches: number,
    private runs: number,
    private balls: number,
    private sixes: number,
    private fours: number,
    private strikeRate: string,
    private average: string
  ){}
}

export class BowlingLeader{
  constructor(
    private playerId: number,
    private playerName: string,
    private teamName: string,
    private matches: number,
    private runsConceded: number,
    private overs: number,
    private wickets: number,
    private extras: number,
    private strikeRate: string,
    private average: string,
    private maidens: string
  ){}
}


export class TeamsStanding{
  constructor(
    public teamId: number,
    public teamName: string,
    public rank: string,
    public matchesPlayed: string,
    public matchesWon: string,
    public matchesLost: string,
    public matchesDraw: string,
    public matchesTied: string,
    public matchPoints: string,
    public noresult: string
  ){}
}

export class GameInfo{
  constructor( 
    public team1Name: string,
    public team2Name: string,
    public team1Score: string,
    public team2Score: string,
    public team1Won: boolean,
    public team2Won: boolean,
    public classType: string,
    public dateStr: string,
    public note: string,
    public gameDate: string,
    public gameId: number,
    public gameStatus: string

  ){
  }
}


// export class LiveGameInfo{
//   constructor( 
//     public team1Name: string,
//     public team2Name: string,
//     public team1Score: string,
//     public team2Score: string,
//     public classType: string,
//     public dateStr: string,
//     public note: string
//   ){
//   }
// }

// export class PreGameInfo  {
//   constructor( 
//     public team1Name: string,
//     public team2Name: string,
//     public classType: string,
//     public dateStr: string,
//     public timeStr: string,
//     public note: string
//   ){
//   }
// }

@Injectable({
  providedIn: 'root'
})
export class LeagueDataService {
 

  constructor(private http: HttpClient) { }

  hostName : string = API_PUBLIC_IP

  retrieveAllLeagues(){
    return this.http.get<League[]>(`${this.hostName}/leagues`)
  }


  retrieveLeagueIndex(){
    return this.http.get<LeagueIndex>(`${this.hostName}/leagueIndex`)
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
