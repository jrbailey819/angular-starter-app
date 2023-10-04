import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Artist } from './models/artist';

export const ArtistActions = createActionGroup({
  source: 'Artist',
  events: {
    'Load Artists': emptyProps(),
    'Load Artists Success': props<{ data: Artist[] }>(),
    'Load Artists Failure': props<{ error: Error }>(),
  }
});
