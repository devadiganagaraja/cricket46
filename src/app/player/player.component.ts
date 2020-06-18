import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDataService } from '../service/data/user-data.service';
import { PlayerDataService, Player } from '../service/data/player-data.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(private playerDataService: PlayerDataService,
    private route: ActivatedRoute,
    private router : Router) { }

    playerId: number
    player: Player = new Player(0,'', 0, '', '','')


  ngOnInit(): void {

    this.playerId = this.route.snapshot.params["playerId"] 

    this.playerDataService.retrievePlayer(this.playerId).subscribe(response => 
      {
        this.player=response
      }, 
      error => {
        console.log("error==>"+error)
      })
  }




}
