import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatchModel } from 'src/app/match/MatchModel';
import {API_PUBLIC_IP} from 'src/app/constants';


@Injectable({
  providedIn: 'root'
})
export class MatchDataService {

  constructor(private http: HttpClient) { }


  hostName : string = API_PUBLIC_IP


  retrieveMatch(matchId){
    return this.http.get<MatchModel>(`${this.hostName}/games/${matchId}`)
    //return this.http.get<MatchModel>(`http://localhost:8080/games/${matchId}`)
  }
}
