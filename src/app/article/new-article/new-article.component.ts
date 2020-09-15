import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ArticleModel } from '../article.model';
import { Router } from '@angular/router';
import { ArticleDataService } from 'src/app/service/data/article-data.service';

import { of } from 'rxjs';  
import { catchError, map } from 'rxjs/operators';  
import { UploadService } from  'src/app/service/data/upload.service';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;files  = [];  

  constructor(
    private router: Router,
    private articleDataService: ArticleDataService,
    private uploadService: UploadService
  ) {}

  article: ArticleModel = new ArticleModel(0, '','','','','', '');


  ngOnInit(): void {
  }

  
  onClickSubmit(formData) {
    formData.articleStatus = 'created';

    this.articleDataService.createArticle(formData).subscribe(response => {console.log("put tes"+response)})

    this.router.navigate(["article"])
    console.log(formData)
  }

}
