import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Artist } from './models/artist';
import { NewArtist } from './models/new-artist';

export const ArtistActions = createActionGroup({
  source: 'Artist',
  events: {
    'Load Artists': emptyProps(),
    'Load Artists Success': props<{ data: Artist[] }>(),
    'Load Artists Failure': props<{ error: Error }>(),
    'Add Artist': props<{ data: NewArtist }>(),
    'Add Artist Success': props<{ data: Artist }>(),
    'Add Artist Failure': props<{ error: Error }>(),
  }
});
