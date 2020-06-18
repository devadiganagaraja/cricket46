import { Injectable } from '@angular/core';
import {API_PUBLIC_IP} from 'src/app/constants';
import { HttpClient } from '@angular/common/http';


export class Player{
  constructor( 
            public id: number,
            public name: string,
            public age: number,
            public battingStyle: string,
            public bowlingStyle: string,
            public playerType: string){
  }
}


@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {

  constructor(private http: HttpClient) { }


  hostName : string = API_PUBLIC_IP


  retrievePlayer(playerId){
    return this.http.get<Player>(`${this.hostName}/players/${playerId}`)
  }
}
