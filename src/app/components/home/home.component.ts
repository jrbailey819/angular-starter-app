import { Component, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { artistFeature } from '../../store/artist/artist.reducer';
import { ArtistActions } from 'src/app/store/artist/artist.actions';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  artists = this.store.selectSignal(artistFeature.selectArtists);
  count = computed(() => this.artists()?.length || -1);

  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(ArtistActions.loadArtists());
  }
}
