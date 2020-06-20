import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDataService } from '../service/data/user-data.service';
import { PlayerDataService} from '../service/data/player-data.service';
import { PlayerModel } from '../player/playerModel';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {


  playerModel: PlayerModel ;
  battingColumns: string[] = ['formatName', 'matches', 'runs', 'highScore', 'battingStrikeRate', 'battingAverage'];

    bowlingColumns: string[] = ['formatName', 'matches', 'runs', 'wickets',
    'bestBowling', 'bowlingStrikeRate', 'bowlingAverage', 'economyRate'];
  imgURL = '';

  constructor(private playerDataService: PlayerDataService,
    private route: ActivatedRoute,
    private router : Router) { }

    playerId: number
    //player: Player = new Player()


  ngOnInit(): void {

 

    this.playerId = this.route.snapshot.params["playerId"] 

    this.playerDataService.retrievePlayer(this.playerId).subscribe(response => 
      {
        this.playerModel=response
      }, 
      error => {
        console.log("error==>"+error)
      })
  }




}
