import { TestBed } from '@angular/core/testing';

import { ArtistApiService } from './artist-api.service';
import { HttpClient } from '@angular/common/http';

describe('ArtistApiService', () => {
  let service: ArtistApiService;

  const mockHttpClient = {
    get: () => []
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: mockHttpClient }
      ]
    });
    service = TestBed.inject(ArtistApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
