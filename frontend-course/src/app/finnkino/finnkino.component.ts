import { Component, OnInit } from '@angular/core';
import {MovieNewsService} from '../service/movie-news.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-finnkino',
  templateUrl: './finnkino.component.html',
  styleUrls: ['./finnkino.component.css']
})
export class FinnkinoComponent implements OnInit {
  newsData$: Observable<any>;
  searchTerm: string;

  constructor(private newsService: MovieNewsService) {
    this.searchTerm = '';
  }

  ngOnInit() {
    this.newsData$ = this.newsService.getData();
  }

}
