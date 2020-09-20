import { Component, OnInit } from '@angular/core';
import { ArticleModel, AuthorInfo } from '../article.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleDataService } from 'src/app/service/data/article-data.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleDataService: ArticleDataService
  ) { }

  articleId: string = this.route.snapshot.params['articleId'];
  article: ArticleModel = new ArticleModel();

 

  ngOnInit(): void {

    this.articleDataService.retrieveArticle(this.articleId).subscribe(response => {
      this.article = response;
    },  error => console.log(console.error()));
  }

  onClickUpdate(formData) {

    this.articleDataService.updateArticle(formData).subscribe(response => {console.log("put tes"+response)},  error => console.log(console.error()))
    this.router.navigate(["article"])
    console.log(formData)
  }

}
