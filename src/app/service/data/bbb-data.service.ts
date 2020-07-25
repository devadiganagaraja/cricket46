import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_PUBLIC_IP} from 'src/app/constants';



export class GameCommentary{
  constructor( 
            public eventId: number,
            public inningsCommentary: InningsComment[]
            ){
  }
}

export class InningsComment{
  constructor( 
            public inningsNo: number,
            public totalRuns: number,
            public wickets: number,
            public oversUnique: number,
            private battingTeamName: string,
            private overCommentarySet: OverCommentary[]
            ){
  }
}


export class OverCommentary{
  constructor( 
            public overNumber: number,
            public overSummary: OverSummary,
            public ballCommentarySet: BallCommentary[]
            ){
  }
}

export class OverSummary{
  constructor( 
            public complete: boolean,
            public maiden: boolean,
            public totalRuns: number,
            public overNo: number,
            public oversUnique: number
            ){

  }
}


export class BallCommentary{
  constructor( 
            public ballId: String,
            public ballSummary: BallSummary,
            public batsmanSummary: BatsmanSummary,
            public otherBatsmanSummary: BatsmanSummary,
            public bowlerSummary: BowlerSummary,
            public dismissalSummary: DismissalSummary
            ){

  }
}

export class BallSummary{
  constructor( 
    public eventId: number,
    public inningsNo: number,
    public overUnique: number,
    public overActual: number,
    public overs: number,
    public byes: number,
    public legByes: number,
    public wide: number,
    public noBall: number,
    public runs: number,
    public batsmanRuns: number,
    public text: string
  ){

  }
}

export class BatsmanSummary{
  constructor( 
    public batsmanName: String,
    public batsmanRuns: number,
    public batsmanBalls: number
  ){

  }
}


export class BowlerSummary{
  constructor( 

    public bowlerName: String,

    public bowlerBalls: number,
    public bowlerOvers: number,

    public bowlerRuns: number,
    public bowlerWickets: number
  ){

  }
}

export class DismissalSummary{
  constructor( 
    public dismissal: boolean,
    public bowled: boolean,
    public type: string,
    public text: string
  ){

  }
}

@Injectable({
  providedIn: 'root'
})
export class BbbDataService {

  constructor(private http: HttpClient) { }

  hostName : string = API_PUBLIC_IP

  retrieveBbb(gameId){
    return this.http.get<GameCommentary>(`${this.hostName}/games/${gameId}/details`)
  }
}
