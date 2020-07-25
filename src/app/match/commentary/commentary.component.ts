import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchDataService } from 'src/app/service/data/match-data.service';
import { MatchModel } from '../MatchModel';
import {IMAGE_S3_BUCKET_URL} from 'src/app/constants';
import { BbbDataService, GameCommentary } from 'src/app/service/data/bbb-data.service';


@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.css']
})
export class CommentaryComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bbbDataService : BbbDataService) { 
    

  }

  imageHostName : string = IMAGE_S3_BUCKET_URL


  matchId: number

  gameCommentary: GameCommentary


  ngOnInit(): void {
    this.matchId = this.route.snapshot.params["matchId"] 
    console.log("this.matchId:::::"+this.matchId)

    this.bbbDataService.retrieveBbb(this.matchId).subscribe(response => 
      {
        this.gameCommentary=response
        console.log("this.gameCommentary==>"+this.gameCommentary)
      }, 
      error => {
        console.log("error==>"+error)
      })
  }

}
