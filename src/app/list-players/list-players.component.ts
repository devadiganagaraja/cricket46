import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export class Player {

  constructor(
    public id: number,
    public name: string,
    public country: string,
   
  ){

  }
  
}


@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})




export class ListPlayersComponent implements OnInit {

  constructor(private router : Router) { }

  players = [
    new Player(459160, 'Sachin Tendulkar', 'India'),
    new Player(374127, 'Sourav Ganguly', 'India'),
    new Player(92729, 'Ricky Ponting', 'Australia'),
    new Player(680381, 'Brain Lara', 'West Indies')
  ]

  ngOnInit(): void {
  }

  viewPlayer(playerId){
    console.log("playerId id::"+playerId)
    this.router.navigate(["players", playerId])
  }

}
