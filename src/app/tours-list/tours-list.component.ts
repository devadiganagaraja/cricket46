import { Component, OnInit, Input } from '@angular/core';
import { League } from '../service/data/league-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.css']
})
export class ToursListComponent implements OnInit {

@Input()
leagueList: League[];

@Input()
headText: string;

  constructor(private router : Router, ) { }

  ngOnInit(): void {
  }

  viewTournament(tournamentId){
    // console.log("league id::"+league)
    this.router.navigate(["leagues", tournamentId, "seasons", 0])
  }

}
