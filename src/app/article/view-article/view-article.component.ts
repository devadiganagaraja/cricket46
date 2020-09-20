import { Component, OnInit } from '@angular/core';
import {IMAGE_S3_BUCKET_URL} from 'src/app/constants';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleDataService } from 'src/app/service/data/article-data.service';
import { ArticleModel, AuthorInfo, ArticleResponse } from '../article.model';


@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleDataService: ArticleDataService
  ) { }

  articleId: string = this.route.snapshot.params['articleId'];
  article: ArticleModel = new ArticleModel();
  articleComment: ArticleResponse = new ArticleResponse();



  imageHostName : string = IMAGE_S3_BUCKET_URL

  ngOnInit(): void {
    this.articleDataService.retrieveArticle(this.articleId).subscribe(response => {
      this.article = response;
    },  error => console.log(console.error()));
  }
  

  onClickArticleClap() {
    this.articleDataService.clapArticle(this.articleId).subscribe(response => {
      console.log("success");
    },  error => console.log(console.error()));
  }

  onClickArticleCommentClap(commentId) {
    console.log(commentId)
    this.articleDataService.clapArticleComment(this.articleId, commentId).subscribe(response => {
      console.log("success");
    },  error => console.log(console.error()));
  }

  onClickArticleComment(formData) {
    console.log(this.article.id)
    console.log(formData.comment)

    this.articleDataService.commentArticle(this.articleId, formData.comment).subscribe(response => {
      this.article = response;
    },  error => console.log(console.error()));


  
  }
}