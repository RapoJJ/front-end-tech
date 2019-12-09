import { Component, OnInit } from '@angular/core';
import {FinnkinoNews} from '../classes/finnkino-news';
import {MovieNewsService} from '../service/movie-news.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-finnkino',
  templateUrl: './finnkino.component.html',
  styleUrls: ['./finnkino.component.css']
})
export class FinnkinoComponent implements OnInit {
  newsData$: Observable<any>;

  constructor(private newsService: MovieNewsService) { }

  ngOnInit() {
    this.newsData$ = this.newsService.getData();
  }

}
