import { Component, OnInit } from '@angular/core';
import {ForexRatesService} from '../service/forex-rates.service';
import {ForexRates} from '../classes/forex-rates';

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})
export class ForexComponent implements OnInit {
  forexRates: ForexRates;

  constructor(private forexRatesService: ForexRatesService) {
    this.forexRates = new ForexRates();
  }

  ngOnInit() {
    this.forexRatesService.getData().subscribe(response =>{
      console.log(response);
      this.forexRates = response;
    });
  }


}
