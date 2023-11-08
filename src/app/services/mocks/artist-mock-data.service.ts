import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Artist } from 'src/app/store/artist/models/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistMockDataService implements InMemoryDbService {
  createDb() {
    const artists = [
      { id: 1, name: 'The Beatles' },
      { id: 2, name: 'Pink Floyd' }
    ];

    return { artists };
  }

  genId(artists: Artist[]) {
    return artists.length > 0 ? Math.max(...artists.map(a => a.id)) + 1 : 1;
  }
}
