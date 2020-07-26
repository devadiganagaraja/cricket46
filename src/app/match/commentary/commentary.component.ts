import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchDataService } from 'src/app/service/data/match-data.service';
import { MatchModel } from '../MatchModel';
import {IMAGE_S3_BUCKET_URL} from 'src/app/constants';
import { BbbDataService, GameCommentary } from 'src/app/service/data/bbb-data.service';
import { interval, BehaviorSubject } from 'rxjs';
import { startWith } from 'rxjs/operators';



@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.css'],
  encapsulation: ViewEncapsulation.None,


})
export class CommentaryComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bbbDataService : BbbDataService) { }

  private readonly autoRefresh$ = interval(1000).pipe(startWith(0));

  private readonly refreshToken$ = new BehaviorSubject(undefined);

  imageHostName : string = IMAGE_S3_BUCKET_URL


  matchId: number

  gameCommentary: GameCommentary

  interval: any;


  @Input('matchModel') matchModel: MatchModel;

  ngOnInit(): void {
    this.matchId = this.route.snapshot.params["matchId"] 
    console.log("this.matchId:::::"+this.matchId);
    

    this.refreshData();


    if(this.matchModel.gameStatus == 'live'){
      this.interval = setInterval(() => { 
        this.refreshData(); 
      }, 20000);
    }
  }


  refreshData(){
    this.bbbDataService.retrieveBbb(this.matchId)
        .subscribe(
          response => {
            this.gameCommentary=response
            console.log("this.gameCommentary==>"+this.gameCommentary)
          }, 
          error => {
            console.log("error==>"+error)
          }
        );
      }


  

}
