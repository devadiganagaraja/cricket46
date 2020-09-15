import { Component, OnInit } from '@angular/core';
import {IMAGE_S3_BUCKET_URL} from 'src/app/constants';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleDataService } from 'src/app/service/data/article-data.service';
import { ApproveArticle, ArticleModel } from '../article.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'; 
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {
  playerControl = new FormControl();
  teamControl = new FormControl();
  seriesControl = new FormControl();
  player: User[] = [
    {name: 'Sachin Tendulkar', id:1},
    {name: 'Virat Kohli', id:2},
    {name: 'Rahul Dravid', id:3}
  ];

  team: User[] = [
    {name: 'India', id:1},
    {name: 'Australia', id:2},
    {name: 'Englan', id:3}
  ];

  series: User[] = [
    {name: 'Mary', id:1},
    {name: 'Shelley', id:2},
    {name: 'Igor', id:3}
  ];
  filteredPlayer: Observable<User[]>;
  filteredTeam: Observable<User[]>;
  filteredSeries: Observable<User[]>;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleDataService: ArticleDataService,
    private modalService: NgbModal
  ) { }

  closeResult = ''; 
  appArticle = 'none';
  rejArticle = 'none'

  articleId: string = this.route.snapshot.params['articleId'];
  article: ArticleModel = new ArticleModel(0, '', '','','','')
  aproveArticle: ApproveArticle = new ApproveArticle(); 

  
    
 


  imageHostName : string = IMAGE_S3_BUCKET_URL


  
  ngOnInit(): void {
    
    this.filteredPlayer = this.playerControl.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filterPlayer(name) : this.player.slice())
    );

    this.filteredTeam = this.teamControl.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filterTeam(name) : this.team.slice())
    );

    this.filteredSeries = this.seriesControl.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filterSeries(name) : this.series.slice())
    );

    this.articleDataService.retrieveArticle(this.articleId).subscribe(response => {
      this.article = response;
    },  error => console.log(console.error()));


  }



  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filterPlayer(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.player.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  
  private _filterTeam(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.team.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  
  private _filterSeries(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.series.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  scroll(el: HTMLElement) {
    this.appArticle= 'block';
    setTimeout(() => {  el.scrollIntoView({behavior: 'smooth'});}, 500);
  
   
  }

  onClickSubmit() {
    this.appArticle= 'none';
    console.log('player: '+ this.playerControl.value['id']);
   
  }

}

export interface User {
  name: string;
  id: number;
}
