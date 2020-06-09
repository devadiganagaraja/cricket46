import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelloWorldBean } from 'src/app/welcome/welcome.component';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }

  executeHelloworldBeanService(){
    return this.httpClient.get<HelloWorldBean>("http://localhost:8080/greeting");
  }
}
