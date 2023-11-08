import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../store/artist/models/artist';

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
}
