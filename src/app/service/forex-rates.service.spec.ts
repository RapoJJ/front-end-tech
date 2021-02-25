import { TestBed } from '@angular/core/testing';

import { ForexRatesService } from './forex-rates.service';

describe('ForexRatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForexRatesService = TestBed.get(ForexRatesService);
    expect(service).toBeTruthy();
  });
});
