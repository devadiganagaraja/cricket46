import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_PUBLIC_IP} from 'src/app/constants';
import { ArticleModel, ClapArticle, ArticleResponse } from 'src/app/article/article.model';


@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {

  constructor(private http: HttpClient) { }

  hostName : string = API_PUBLIC_IP




  createArticle(article){
    article.author = localStorage.getItem("loggedInUser");

    console.log("article::"+article)
    return this.http.put<ArticleModel>(`${this.hostName}/articles`, article)
  }

  retrieveArticle(articleId){
    return this.http.get<ArticleModel>(`${this.hostName}/articles/${articleId}`)
  }


  retrieveAllArticle(){
    return this.http.get<ArticleModel[]>(`${this.hostName}/articles`)
  }


  deleteArticle(articleid){
    return this.http.delete(`${this.hostName}/articles/${articleid}`)
  }


  updateArticle(article){
    return this.http.post<ArticleModel>(`${this.hostName}/articles`, article)
  }

  clapArticle(articleId){
    let clapArticle = new ClapArticle();
    clapArticle.articleId = articleId;
    clapArticle.userName = localStorage.getItem("loggedInUser");

    return this.http.post(`${this.hostName}/articles/clap`, clapArticle)

  }



  clapArticleComment(articleId, commentId){
    let clapArticle = new ClapArticle();
    clapArticle.articleId = articleId;
    clapArticle.commentId = commentId;
    clapArticle.userName = localStorage.getItem("loggedInUser");

    return this.http.post(`${this.hostName}/articles/clap-comment`, clapArticle)

  }

  commentArticle(articleId, comment){
    let commentArticle = new ArticleResponse();
    commentArticle.articleId = articleId;
    commentArticle.userName = localStorage.getItem("loggedInUser");
    commentArticle.comment = comment;

    return this.http.put<ArticleModel>(`${this.hostName}/articles/comment`, commentArticle)

  }
}
