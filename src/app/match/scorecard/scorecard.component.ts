import { Component, OnInit, Input } from '@angular/core';
import { MatchModel } from '../MatchModel';
import {IMAGE_S3_BUCKET_URL} from 'src/app/constants';
import { Router } from '@angular/router';


@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {

  constructor(private router : Router) { }

  imageHostName : string = IMAGE_S3_BUCKET_URL

  @Input('matchModel') matchModel: MatchModel;

  ngOnInit(): void {
  }


  viewPlayer(playerId){
    console.log("playerId id::"+playerId)
    this.router.navigate(["players", playerId])
  }

}


