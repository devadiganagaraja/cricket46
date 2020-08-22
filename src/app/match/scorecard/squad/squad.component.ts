import { Component, OnInit, Input } from '@angular/core';
import { Squad } from '../../MatchModel';
import { Router } from '@angular/router';
import {IMAGE_S3_BUCKET_URL} from 'src/app/constants';


@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.css']
})
export class SquadComponent implements OnInit {

@Input()
squad : Squad;

imageHostName : string = IMAGE_S3_BUCKET_URL
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  viewPlayer(playerId){
    console.log("playerId id::"+playerId)
    this.router.navigate(["players", playerId])
  }

}
