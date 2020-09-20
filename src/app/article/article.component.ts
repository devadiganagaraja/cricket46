import { Component, OnInit } from '@angular/core';
import { ArticleModel } from './article.model';
import { ArticleDataService } from '../service/data/article-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(
    private articleDataService: ArticleDataService,
    private router: Router

  ) { }
 
  articles : ArticleModel[];
  
  ngOnInit(): void {
      this.articleDataService.retrieveAllArticle().subscribe(response => 
      {
        this.articles=response
      }, 
      error => {
        console.log("error==>"+error)
      })
  }


  onClickEdit(articleId) {
    this.router.navigate(["editArticle", articleId])
  }

  onClickView(articleId) {
    this.router.navigate(["viewArticle", articleId])
  }


  onClickDelete(formData) {

    this.articleDataService.deleteArticle(formData).subscribe(response => {console.log("put tes"+response)})

    this.router.navigate(["article"])
    console.log(formData)
  }


}
