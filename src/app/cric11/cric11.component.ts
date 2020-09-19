import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMAGE_S3_BUCKET_URL } from '../constants';
import { LeaderBoardModel, MyTeam, PlayElevenModel, SquadPlayers, UserSquadPlayers } from './cric11.model';
import { Cric11Service } from './cric11.service';

@Component({
  selector: 'app-cric11',
  templateUrl: './cric11.component.html',
  styleUrls: ['./cric11.component.css']
})
export class Cric11Component implements OnInit {

  playElevenModel: PlayElevenModel;
  leaderboardModel: LeaderBoardModel;
  myTeam: MyTeam = new MyTeam();
  eventid: string;
  saveStatus: boolean;
  message: string;
  isValidTeam = true;
  messageColor: string;
  points = 100;
  isTimerRequired = false;
  counter = 0;
  imageHostName : string = IMAGE_S3_BUCKET_URL
  constructor(
    private playElevenService: Cric11Service,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  userName = sessionStorage.getItem("loggedInUser");

  ngOnInit(): void {
    this.eventid = this.route.snapshot.params.id;

    this.loadInitialFunction();
  }

  loadInitialFunction() {
    this.playElevenService
      .getPlayElevenList(this.eventid)
      .subscribe(mt => {
        this.playElevenModel = this.evaluateResult(mt);
        this.getLeaderbaord(mt);
        this.isTimerRequired = this.playElevenModel.gameInfo.gameStatus === 'in';
        this.counter++;
        if (this.isTimerRequired && this.counter === 1) {

          setInterval(() => {
            this.loadInitialFunction();
          }, 60000);
        }
      });
  }


  getLeaderbaord(playEleven: PlayElevenModel) {
    if (this.playElevenModel && this.playElevenModel.gameInfo.gameStatus !== 'post') {
      this.playElevenService
        .getLeaderBoard(this.eventid)
        .subscribe(mt => (this.leaderboardModel = mt));
    }
  }
  evaluateResult(playEleven: PlayElevenModel): PlayElevenModel {
    let i = 0;
    let j = 0;

  //  playEleven.gameInfo.team1.imageURL = this.imageHostName+'/teams/'+playEleven.gameInfo.team1Name.split(':')[1]+'.png';
     
  //  playEleven.gameInfo.team2.imageURL = this.imageHostName+'/teams/'+playEleven.gameInfo.team2.teamName.split(':')[1]+'.png';
     

    playEleven.squad1.players.forEach(x => {
      (x.imageURL = this.imageHostName),
        (x.teamId = +playEleven.squad1.teamName.split(':')[1]),
       // (x.typeImage = this.imageHostName+ '/players/'+x.playerName.split(':')[1]+'.png'), //commonService.getTypeImage(x.playerName)),
        (x.index = i),
        (x.teamIndex = 1),
        i++;
    });
    playEleven.squad2.players.forEach(x => {
      (x.imageURL = this.imageHostName+ '/players/'+x.playerName.split(':')[1]+'.png'),
        (x.teamId = +playEleven.squad2.teamName.split(':')[1]),
       // (x.typeImage = this.commonService.getTypeImage(x.playerName)),
        (x.index = j),
        (x.teamIndex = 2),
        j++;
    });

    if (playEleven.userSquad != null) {
      if (playEleven.userSquad.userSquadPlayers.length > 0) {
        playEleven.userSquad.userSquadPlayers.forEach(x => {
          this.loadMyTeam(x, playEleven);
          playEleven.squad1.players = playEleven.squad1.players.filter(
            m => m.playerName.split(':')[1] !== x.playerName.split(':')[1]
          );
          playEleven.squad2.players = playEleven.squad2.players.filter(
            m => m.playerName.split(':')[1] !== x.playerName.split(':')[1]
          );
        });
      }
    }

    return playEleven;
  }

  loadMyTeam(userPlayer: UserSquadPlayers, playEleven: PlayElevenModel) {
    if (this.myTeam.players == null) {
      this.myTeam.players = new Array<SquadPlayers>();
    }

    const i = this.myTeam.players.length;
    this.myTeam.players[i] = new SquadPlayers();
    this.myTeam.players[i].playerName = userPlayer.playerName;
    // (this.myTeam.players[i].typeImage = this.commonService.getTypeImage(
    //   this.myTeam.players[i].playerName
    // )),
      (this.myTeam.players[i].teamId = +userPlayer.teamName.split(':')[1]);
    if (playEleven.squad1.teamName === userPlayer.teamName) {
      this.myTeam.players[i].teamIndex = 1;
      this.myTeam.players[i].index = playEleven.squad1.players.length;
      this.myTeam.players[i].imageURL = playEleven.squad1.players.find(
        x => x.playerName === userPlayer.playerName
      ).imageURL;
    } else {
      this.myTeam.players[i].teamIndex = 2;
      this.myTeam.players[i].index = playEleven.squad2.players.length;
      this.myTeam.players[i].imageURL = playEleven.squad2.players.find(
        x => x.playerName === userPlayer.playerName
      ).imageURL;
      // this.myTeam.players[i].imageURL = player.imageURL,
    }
  }

  
  addToMyTeam(player: SquadPlayers) {
    this.message = '';
    if (this.myTeam.players == null) {
      this.myTeam.players = new Array<SquadPlayers>();
    }
    const i = this.myTeam.players.length;
    this.myTeam.players[i] = new SquadPlayers();
    (this.myTeam.players[i].playerName = player.playerName),
      (this.myTeam.players[i].imageURL = player.imageURL),
      // (this.myTeam.players[i].typeImage = this.commonService.getTypeImage(
      //   this.myTeam.players[i].playerName
      // )),
      (this.myTeam.players[i].teamId = player.teamId);
    this.myTeam.players[i].index = player.index;
    this.myTeam.players[i].teamIndex = player.teamIndex;
    this.myTeam.players[i].weightage = player.weightage;

    if (player.teamIndex === 1) {
      this.playElevenModel.squad1.players = this.playElevenModel.squad1.players.filter(
        x => x.playerName !== player.playerName
      );
    } else {
      // this.playElevenModel.squad2.players.splice(position, 1);
      this.playElevenModel.squad2.players = this.playElevenModel.squad2.players.filter(
        x => x.playerName !== player.playerName
      );
    }
    this.points -= player.weightage;
  }

  removeFromMyTeam(player: SquadPlayers) {
    this.message = '';
    this.myTeam.players = this.myTeam.players.filter(
      x => x.playerName !== player.playerName
    );

    if (player.teamIndex === 1) {
      const len = this.playElevenModel.squad1.players.length;
      this.playElevenModel.squad1.players[len] = new SquadPlayers();
      (this.playElevenModel.squad1.players[len].playerName = player.playerName),
        (this.playElevenModel.squad1.players[len].imageURL = player.imageURL),
        (this.playElevenModel.squad1.players[len].teamId = player.teamId);
      this.playElevenModel.squad1.players[len].index = player.index;
      this.playElevenModel.squad1.players[len].teamIndex = player.teamIndex;
      this.playElevenModel.squad1.players.sort(this.compare);
    } else {
      const len = this.playElevenModel.squad2.players.length;
      this.playElevenModel.squad2.players[len] = new SquadPlayers();
      (this.playElevenModel.squad2.players[len].playerName = player.playerName),
        (this.playElevenModel.squad2.players[len].imageURL = player.imageURL),
        (this.playElevenModel.squad2.players[len].teamId = player.teamId);
      this.playElevenModel.squad2.players[len].index = player.index;
      this.playElevenModel.squad2.players[len].teamIndex = player.teamIndex;

      this.playElevenModel.squad2.players.sort(this.compare);
    }

    this.points += player.weightage;
  }

  compare(obj1: SquadPlayers, obj2: SquadPlayers): number {
    if (obj1.index > obj2.index) {
      return 1;
    }

    if (obj1.index < obj2.index) {
      return -1;
    }

    return 0;
  }

  saveMyTeam() {
    let playerIds = '';
    if (this.myTeam.players.length === 11) {
      this.myTeam.players.forEach(x => {
        playerIds += x.playerName.split(':')[1] + ':' + x.teamId + ',';
      });
      if (playerIds.length > 0) {
        playerIds = playerIds.substring(0, playerIds.lastIndexOf(','));
      }
      // let playEleven: PlayElevenModel;

      this.playElevenService.saveMyTeam(this.eventid, playerIds).subscribe(mt => {
        this.saveStatus = true;
        this.message = 'Saved Successfully';
        this.messageColor = 'green';
      });
    } else {
      this.messageColor = 'red';
      this.saveStatus = false;
      this.message = 'Please select 11 players';
    }
  }

  gotoPlayerInfo(playerName: string) {
    // const playerId = playerName.split(':')[1];
    // this.router.navigate(['/player', playerId]);
  }

  gotoPlayer11(userName: string): void {
    // this.commonService.loadingFlg = true;
    // this.playElevenService
    //   .getPlayElevenListForOthers(this.eventid, userName)
    //   .subscribe(mt => {
    //     this.playElevenModel = this.evaluateResult(mt);
    //   });
    // this.userName = userName;

    // this.commonService.loadingFlg = false;

  }
  

}
