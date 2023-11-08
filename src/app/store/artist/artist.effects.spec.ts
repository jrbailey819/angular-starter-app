import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ArtistEffects } from './artist.effects';
import { ArtistApiService } from 'src/app/services/artist-api.service';

describe('ArtistEffects', () => {
  let actions$: Observable<any>;
  let effects: ArtistEffects;

  const mockArtistApiService = {
    getArtists: () => []
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ArtistEffects,
        provideMockActions(() => actions$),
        { provide: ArtistApiService, useValue: mockArtistApiService }
      ]
    });

    effects = TestBed.inject(ArtistEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
