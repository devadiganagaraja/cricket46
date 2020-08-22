import { Component, OnInit, Input } from '@angular/core';
import { GameInfo } from 'src/app/service/data/league-data.service';
import {IMAGE_S3_BUCKET_URL} from 'src/app/constants';

@Component({
  selector: 'app-match-desc',
  templateUrl: './match-desc.component.html',
  styleUrls: ['./match-desc.component.css']
})
export class MatchDescComponent implements OnInit {

  constructor() { }
  imageHostName : string = IMAGE_S3_BUCKET_URL
  @Input()
  matchInfo: GameInfo;
  ngOnInit(): void {
  }

}
