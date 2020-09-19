import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LeaderBoardModel, PlayElevenModel, PlayerBodyPost } from './cric11.model';
import { Observable } from 'rxjs';
import {API_PUBLIC_IP} from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class Cric11Service {
  player: PlayElevenModel;
  playerPost: PlayerBodyPost;
  hostName : string = API_PUBLIC_IP
  constructor(private httpClient: HttpClient) { }

  getPlayElevenList(eventid: string): Observable<PlayElevenModel> {
    return this.httpClient.get<PlayElevenModel>(this.hostName + '/bestEleven/userName/' +
    sessionStorage.getItem("loggedInUser") + '/games/' + eventid);
  }

  
  getPlayElevenListForOthers(eventid: string, user: string): Observable<PlayElevenModel> {
    return this.httpClient.get<PlayElevenModel>(this.hostName + '/bestEleven/userName/' + user + '/games/' + eventid);
  }

  getLeaderBoard(eventid: string): Observable<LeaderBoardModel> {
    return this.httpClient.get<LeaderBoardModel>(this.hostName + '/bestEleven/leaderboard/games/' + eventid);
  }

  saveMyTeam(eventid: string, playerIds: string): Observable<PlayElevenModel> {
    let url =
      this.hostName + '/bestEleven/event/';
    url += eventid;

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    const playerModel = new PlayerBodyPost();

    playerModel.userName = localStorage.getItem('userName');
    playerModel.password = localStorage.getItem('password');
    playerModel.playerIds = playerIds;
    const options = {
      headers: httpHeaders
    };

    return this.httpClient.post<PlayElevenModel>(url, playerModel, options);
  }
}


