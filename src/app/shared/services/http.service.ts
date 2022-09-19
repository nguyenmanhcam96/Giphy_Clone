import { urlInfo } from './../../../environments/environment.prod';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  httpOptions: any;
  apiKey = urlInfo.apiKey;
  searchKey = urlInfo.searchKey;
  baseUrl: string = urlInfo.baseUrl;
  pingbackId = urlInfo.pingbackId

  constructor(private http: HttpClient) {

  }
  getTrendingGif(sort: string, limit: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}gifs/trending?api_key=${this.apiKey}&sort=${sort}&limit=${limit}&pingback_id=${this.pingbackId}`);
  }


  searchGif(text:string, limit: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}gifs/search?q=${text}&limit=${limit}&api_key=${this.searchKey}&pingback_id=${this.pingbackId}`);
  }

}
