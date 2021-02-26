import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
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

  getRatesData(): Observable<any> {
    return this.httpClient.get(this.ratesSource).pipe(map(response => {
      console.log(response);
      return response as ForexRates;
    }));
  }

  getData(currency): Observable<any> {
    const param = new HttpParams().set('base', String(currency));
    return this.httpClient.get(this.ratesSource, {params: param}).pipe(map( response => {
      return response as ForexRates;
    }));
  }
}
