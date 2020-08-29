import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IMAGE_S3_BUCKET_URL } from 'src/app/constants';
import { HomeService } from '../service/data/home.service';
import { HomeModel } from './home.model';
import { GameInfo, LeagueDataService } from '../service/data/league-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeModel: HomeModel;
  allGames: GameInfo[] = [];
  prevDisable = true;
  nextDisable = false
  start=0;
  end=4;
  totalGames= 0

  constructor(private router: Router,
    private route: ActivatedRoute,
    private homeService: HomeService,
    private leagservice: LeagueDataService) { }

  ngOnInit(): void {

    this.getHomeDetails();
  }

  getHomeDetails() {
    this.homeService.getHomeRecords().subscribe(response => {
      this.homeModel = response,
      this.appendGames(response)
     // this.homeModel = res
     // this.appendGames(this.homeModel);
    });
  }
  appendGames(homeModel: HomeModel) {
   this.allGames =[...homeModel.liveGameInfoList,...homeModel.postGameInfoList,...homeModel.scheduledGameInfoList ];
   this.totalGames = this.allGames.length;
  }

  viewMatch(matchId){
    this.router.navigate(["matches", matchId])
  }

  getPrevGames() {
    this.start-=4;
    this.end-=4;
    this.prevDisable = this.start == 0;
    this.nextDisable = false;
  }

  getNextGames() {
    this.start+=4;
    this.end+=4;
    this.nextDisable = this.end === this.totalGames;
    this.prevDisable = false;
  }

  viewTournament(tournamentId){
    this.router.navigate(["leagues", tournamentId, "seasons", 0])
  }

}
