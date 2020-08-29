import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_PUBLIC_IP} from 'src/app/constants';
import { HomeModel } from '../../home/home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  hostName : string = API_PUBLIC_IP;

  constructor(private http: HttpClient) { }

  getHomeRecords() {
    return this.http.get<any>(`${this.hostName}/cricket46`);
  }

}
