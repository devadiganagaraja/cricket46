import { Component, OnInit, Input } from '@angular/core';
import { MatchModel } from '../MatchModel';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {

  constructor() { }

  @Input('matchModel') matchModel: MatchModel;

  ngOnInit(): void {
  }

}
