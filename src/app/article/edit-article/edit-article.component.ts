import { Component, OnInit } from '@angular/core';
import { ArticleModel, AuthorInfo } from '../article.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleDataService } from 'src/app/service/data/article-data.service';
import { UploadService } from 'src/app/service/data/upload.service';


@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleDataService: ArticleDataService,
    private uploadService: UploadService
  ) { }

  articleId: string = this.route.snapshot.params['articleId'];
  article: ArticleModel = new ArticleModel();
  selectedFiles: FileList;


 

  ngOnInit(): void {

    this.articleDataService.retrieveArticle(this.articleId).subscribe(response => {
      console.log("response:"+response.title)
      this.article = response;
    },  error => console.log(console.error()));
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    }

  onClickUpdate(formData) {

    this.articleDataService.updateArticle(formData).subscribe(response => {
      console.log("put tes"+response.id);
      const file = this.selectedFiles.item(0);
      console.log("put file"+file);
      this.uploadService.uploadFile(file, "articles", response.id+".jpg");
    },  error => console.log(console.error()))
    

    this.router.navigate(["article"])
    console.log(formData)
  }

}
