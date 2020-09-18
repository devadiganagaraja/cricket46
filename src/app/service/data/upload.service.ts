import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class UploadService {



  FOLDER : string = "users";
  constructor() { }


  uploadFile(file, fileName) {
    const contentType = file.type;
    const bucket = new S3(
          {
              accessKeyId: 'AKIAQGLWAPFYITUVC262',
              secretAccessKey: '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',
              region: 'us-west-2'
          }
      );
      const params = {
          Bucket: 'cricket46',
          Key: this.FOLDER + "/" +fileName,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };
      bucket.upload(params, function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data);
          return true;
      });
//for upload progress   
/*bucket.upload(params).on('httpUploadProgress', function (evt) {
          console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
      }).send(function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data);
          return true;
      });*/
}
}
