import { TestBed } from '@angular/core/testing';

import { ArtistMockDataService } from './artist-mock-data.service';

describe('ArtistMockDataService', () => {
  let service: ArtistMockDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistMockDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
