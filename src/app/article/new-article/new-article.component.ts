import { Component, OnInit } from '@angular/core';
import { ArticleModel } from '../article.model';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  model: ArticleModel = new ArticleModel();
  constructor() { }

  ngOnInit(): void {
  }

  
  onClickSubmit(formData) {
    console.log(formData)
  }

}
