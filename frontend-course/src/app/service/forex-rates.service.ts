import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ForexRates} from '../classes/forex-rates';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForexRatesService {
  ratesSource = 'https://api.exchangeratesapi.io/latest';

  constructor(private httpClient: HttpClient) {
  }

  getData(): Observable<any> {
    return this.httpClient.get(this.ratesSource).pipe(map( response => {
      return response as ForexRates;
    }));
  }
}
