import { Component, OnInit } from '@angular/core';


export class Player {

  constructor(
    public id: number,
    public name: string,
    public country: string
  ){

  }
  
}


@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})




export class ListPlayersComponent implements OnInit {

  constructor() { }

  players = [
    new Player(1, 'Sachin Tendulkar', 'India'),
    new Player(2, 'Sourav Ganguly', 'India'),
    new Player(3, 'Ricky Ponting', 'Australia'),
    new Player(4, 'Brain Lara', 'West Indies')
  ]

  ngOnInit(): void {
  }

}
