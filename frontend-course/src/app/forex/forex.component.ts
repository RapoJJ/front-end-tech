import {Component, OnInit} from '@angular/core';
import {ForexRatesService} from '../service/forex-rates.service';
import {ForexRates} from '../classes/forex-rates';

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})
export class ForexComponent implements OnInit {
  forexList: string[];
  forexRates: ForexRates;
  selectedForex: string;
  targetForex: string;
  currentRate: number;
  inputAmount: number;
  targetAmount: number;

  constructor(private forexRatesService: ForexRatesService) {
    this.targetAmount = 0;
    this.currentRate = 1;
    this.forexList = ['EUR'];
    this.forexRates = new ForexRates();
  }

  ngOnInit() {
    this.forexRatesService.getRatesData().subscribe(response => {
      const ratesArray = Object.entries(response.rates);
      ratesArray.forEach(([key]) => {
        this.forexList.push(key);
      });
    });
  }

  onChange() {
    if (this.targetForex !== undefined && this.inputAmount !== undefined && this.selectedForex !== undefined) {
      this.forexRatesService.getData(this.selectedForex).subscribe(response => {
        this.forexRates = response;
        const ratesArray = Object.entries(this.forexRates.rates);

        ratesArray.forEach(([key, value]) => {
          if (key === this.targetForex) {
            this.currentRate = value;
          }
        });
        console.log('Summa = ' + this.inputAmount * this.currentRate);
        this.targetAmount = Number((this.inputAmount * this.currentRate + 0.001).toFixed(2));
      });
    }
  }
}
