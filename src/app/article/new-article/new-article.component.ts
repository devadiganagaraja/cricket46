import { Component, OnInit } from '@angular/core';
import { ArticleModel } from '../article.model';
import { Router } from '@angular/router';
import { ArticleDataService } from 'src/app/service/data/article-data.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  constructor(
    private router: Router,
    private articleDataService: ArticleDataService
  ) {}

  article: ArticleModel = new ArticleModel(0, '','','','','');


  ngOnInit(): void {
  }

  
  onClickSubmit(formData) {
    formData.articleStatus = 'created';

    this.articleDataService.createArticle(formData).subscribe(response => {console.log("put tes"+response)})

    this.router.navigate(["article"])
    console.log(formData)
  }

}
