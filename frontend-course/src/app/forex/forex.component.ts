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
  amount: number;

  constructor(private forexRatesService: ForexRatesService) {
    this.forexList = [];
    this.forexRates = new ForexRates();
  }

  ngOnInit() {
    this.forexRatesService.getRatesData().subscribe( response => {
      const objectArray = Object.entries(response.rates);
      objectArray.forEach(([key]) => {
        this.forexList.push(key);
      });
    });
  }

  onChange() {
    this.forexRatesService.getData(this.selectedForex).subscribe( response => {
      this.forexRates = response;
      const objectArray = Object.entries(this.forexRates.rates);

      objectArray.forEach(([key, value]) => {
        console.log(key);
        console.log(value);
      });
      if (this.targetForex !== undefined && this.amount !== undefined) {
        let targetForex;
        console.log(this.forexRates.rates);
        console.log('Summa' + this.amount);
      }
    });
  }

}
