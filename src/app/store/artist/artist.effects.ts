import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { ArtistActions } from './artist.actions';
import { Artist } from './models/artist';


@Injectable()
export class ArtistEffects {

  loadArtists$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(ArtistActions.loadArtists),
      concatMap(() =>
        of(ArtistActions.loadArtistsSuccess({ data: [{ id: 1, name: 'Bono'} as Artist]}))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
