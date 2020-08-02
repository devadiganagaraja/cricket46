import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MatchModel } from '../MatchModel';
import {IMAGE_S3_BUCKET_URL} from 'src/app/constants';


@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.css']

})
export class CommentaryComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  imageHostName : string = IMAGE_S3_BUCKET_URL


  matchId: number

  @Input('matchModel') matchModel: MatchModel;

  ngOnInit(): void {
    this.matchId = this.route.snapshot.params["matchId"] 
    console.log("this.matchModel:::::"+this.matchModel);
  }



  

}
