import { createFeature, createReducer, on } from '@ngrx/store';
import { ArtistActions } from './artist.actions';
import { Artist } from './models/artist';

export const artistFeatureKey = 'artist';

export interface State {
  artists: Artist[] | null,
  artistsLoading: boolean,
  artistsError: Error | null,
  addArtistExecuting: boolean,
  addArtistError: Error | null
}

export const initialState: State = {
  artists: null,
  artistsLoading: false,
  artistsError: null,
  addArtistExecuting: false,
  addArtistError: null
};

export const reducer = createReducer(
  initialState,
  on(ArtistActions.loadArtists, state => ({ ...state, artistsLoading: true, artistsError: null })),
  on(ArtistActions.loadArtistsSuccess, (state, { data }) => ({ ...state, artists: data, artistsLoading: false })),
  on(ArtistActions.loadArtistsFailure, (state, { error }) => ({ ...state, artistsError: error, artistsLoading: false })),
  on(ArtistActions.addArtist, state => ({ ...state, addArtistExecuting: true, addArtistError: null })),
  on(ArtistActions.addArtistSuccess, (state, _) => ({ ...state, addArtistExecuting: false })),
  on(ArtistActions.addArtistFailure, (state, { error }) => ({ ...state, addArtistError: error, addArtistExecuting: false })),
);

export const artistFeature = createFeature({
  name: artistFeatureKey,
  reducer,
});

