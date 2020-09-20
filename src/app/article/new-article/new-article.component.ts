import { Component, OnInit } from '@angular/core';
import { ArticleModel, AuthorInfo } from '../article.model';
import { Router } from '@angular/router';
import { ArticleDataService } from 'src/app/service/data/article-data.service';
import { UploadService } from 'src/app/service/data/upload.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  constructor(
    private router: Router,
    private articleDataService: ArticleDataService,
    private uploadService: UploadService
  ) {}

  article: ArticleModel = new ArticleModel()
  selectedFiles: FileList;



  ngOnInit(): void {
  }


    selectFile(event) {
    this.selectedFiles = event.target.files;
    }

  
  onClickSubmit(formData) {
    formData.articleStatus = 'created';

    this.articleDataService.createArticle(formData).subscribe(response => {
      console.log("put tes"+response)

      const file = this.selectedFiles.item(0);
      this.uploadService.uploadFile(file, "articles", response.id+".jpg");
    })

    this.router.navigate(["article"])
    console.log(formData)
  }

}
