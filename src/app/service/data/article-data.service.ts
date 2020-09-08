import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_PUBLIC_IP} from 'src/app/constants';
import { ArticleModel } from 'src/app/article/article.model';


@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {

  constructor(private http: HttpClient) { }

  hostName : string = API_PUBLIC_IP


  createArticle(article){
    return this.http.put(`${this.hostName}/articles`, article)
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
    return this.http.post(`${this.hostName}/articles`, article)
  }
}
