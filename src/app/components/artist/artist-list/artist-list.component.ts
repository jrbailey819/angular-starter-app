import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { artistFeature } from 'src/app/store/artist/artist.reducer';
import { ArtistActions } from 'src/app/store/artist/artist.actions';

@Component({
  selector: 'app-artist-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  artists = this.store.selectSignal(artistFeature.selectArtists);

  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(ArtistActions.loadArtists());
  }
}
