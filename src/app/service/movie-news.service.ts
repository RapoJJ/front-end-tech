import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FinnkinoNews} from '../classes/finnkino-news';
import {parseString} from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class MovieNewsService {
  newsSource = 'https://www.finnkino.fi/xml/News/';

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    return this.httpClient.get(this.newsSource, {responseType: 'text'}).pipe(map(response => {
      let newsData: FinnkinoNews[] = [];
      // console.log(response);
      // tslint:disable-next-line:only-arrow-functions
      parseString(response, {trim: true, explicitArray: false, mergeAttrs: true}, function(err, result) {
      //  console.log(result);
        newsData = result.News.NewsArticle;
      //  console.log(newsData);
        });
      return newsData;
    }));
  }
}
