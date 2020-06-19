import { Injectable } from '@angular/core';
import {API_PUBLIC_IP} from 'src/app/constants';
import { HttpClient } from '@angular/common/http';
import { PlayerModel } from 'src/app/player/playerModel';





@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {

  constructor(private http: HttpClient) { }


  hostName : string = API_PUBLIC_IP


  retrievePlayer(playerId){
    return this.http.get<PlayerModel>(`${this.hostName}/players/${playerId}`)
  }
}
