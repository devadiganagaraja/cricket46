import { Component, OnInit } from '@angular/core';
import { ArticleModel } from './article.model';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }
  model: ArticleModel = new ArticleModel();
  modelList : ArticleModel[];
  
  ngOnInit(): void {
    this.modelList = [
      {id:1, content: "This is test", title:"Title1"},
      {id:1, content: "This is test", title:"Title2"}
    ];
  }

  onClickSubmit(formData) {
   console.log(formData)
 }

}
