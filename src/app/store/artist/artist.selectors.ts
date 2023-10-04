import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromArtist from './artist.reducer';

export const selectArtistState = createFeatureSelector<fromArtist.State>(
  fromArtist.artistFeatureKey
);
