import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ArtistEffects } from './artist.effects';
import * as fromArtist from './artist.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromArtist.artistFeatureKey, fromArtist.reducer),
    EffectsModule.forFeature([ArtistEffects])
  ]
})
export class ArtistModule { }
