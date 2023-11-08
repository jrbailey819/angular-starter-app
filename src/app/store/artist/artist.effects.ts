import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ArtistActions } from './artist.actions';
import { ArtistApiService } from '../../services/artist-api.service';


@Injectable()
export class ArtistEffects {

  loadArtists$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(ArtistActions.loadArtists),
      concatMap(() =>
        this.artistApiService.getArtists().pipe(
          map(data => ArtistActions.loadArtistsSuccess({ data })),
          catchError(err => of(ArtistActions.loadArtistsFailure(err)))
        )
      )
    );
  });


  constructor(
    private actions$: Actions,
    private artistApiService: ArtistApiService
  ) {}
}
