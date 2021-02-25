import { TestBed } from '@angular/core/testing';

import { MovieNewsService } from './movie-news.service';

describe('MovieNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieNewsService = TestBed.get(MovieNewsService);
    expect(service).toBeTruthy();
  });
});
