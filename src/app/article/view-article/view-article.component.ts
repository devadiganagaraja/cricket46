import { Component, OnInit } from '@angular/core';
import {IMAGE_S3_BUCKET_URL} from 'src/app/constants';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleDataService } from 'src/app/service/data/article-data.service';
import { ArticleModel } from '../article.model';


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
  article: ArticleModel = new ArticleModel(0, '', '','','','')


  imageHostName : string = IMAGE_S3_BUCKET_URL
  commentsList: Array<object> = [];

  ngOnInit(): void {
    this.articleDataService.retrieveArticle(this.articleId).subscribe(response => {
      this.article = response;
    },  error => console.log(console.error()));
    this.fetchComments();
  }
  fetchComments(){
    this.commentsList = [{"userName":"Nags","commentedDate":"About 1year ago","message":"Nevermind my previous comment -the script works, the custom Smiirl even displays the right number in the little pictogram in Smiirl’s interface, but the “https://script.google.com/macros/s/xxxx”-link does not work with the counter at all. Instead it returns an error message for the Smiirl which seems to indicate a redirect loop on Google’s part.", "claps":2,"response":"1"},
    {"userName":"Mathi","commentedDate":"About 1year ago","message":"Nevermind my previous comment -the script works, the custom Smiirl even displays the right number in the little pictogram in Smiirl’s interface, but the “https://script.google.com/macros/s/xxxx”-link does not work with the counter at all. Instead it returns an error message for the Smiirl which seems to indicate a redirect loop on Google’s part.", "claps":1,"response":"4"},
    {"userName":"Nags","commentedDate":"About 1year ago","message":"Nevermind my previous comment -the script works, the custom Smiirl even displays the right number in the little pictogram in Smiirl’s interface, but the “https://script.google.com/macros/s/xxxx”-link does not work with the counter at all. Instead it returns an error message for the Smiirl which seems to indicate a redirect loop on Google’s part.", "claps":2,"response":"1"}]
  }
}