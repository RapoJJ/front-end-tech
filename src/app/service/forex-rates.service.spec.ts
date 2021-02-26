import { TestBed } from '@angular/core/testing';

import { ForexRatesService } from './forex-rates.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {ForexRates} from '../classes/forex-rates';

describe('ForexRatesService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let forexService: ForexRatesService;


  beforeEach(() => {
    // Configures testing app module
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ForexRatesService]
    });

    // Instantiates HttpClient, HttpTestingController and EmployeeService
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    forexService = TestBed.inject(ForexRatesService);
  });
  afterEach(() => {
    httpTestingController.verify(); // Verifies that no requests are outstanding.
  });

  describe('get forex rates', () => {
    let expectedRate: ForexRates;

    beforeEach(() => {
      // DUMMY DATA
      expectedRate = {base: 'EUR', date: '2021-02-25', rates: []};
    });

    it('should return one forex rate for EUR', () => {
      forexService.getRatesData().subscribe(
        rates => expect(rates).toEqual(expectedRate,
          'should return expected values'), fail
      );
      const req = httpTestingController.expectOne(forexService.ratesSource);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedRate);
    });
  });
});
