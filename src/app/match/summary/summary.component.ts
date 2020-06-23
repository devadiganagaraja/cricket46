import { Component, OnInit, Input } from '@angular/core';
import { MatchModel } from '../MatchModel';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

 
  constructor() { }

  @Input('matchModel') matchModel: MatchModel;
 
  

  ngOnInit(): void {

    
  }

}
