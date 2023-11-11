import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../store/artist/models/artist';
import { NewArtist } from '../store/artist/models/new-artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistApiService {
  private artistsUrl = '/api/artists';

  constructor(
    private httpClient: HttpClient
  ) { }

  getArtists(): Observable<Artist[]> {
    return this.httpClient.get<Artist[]>(this.artistsUrl);
  }

  createArtist(artist: NewArtist): Observable<Artist> {
    return this.httpClient.post<Artist>(this.artistsUrl, artist)
  }
}
