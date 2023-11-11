import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ArtistActions } from 'src/app/store/artist/artist.actions';
import { NewArtist } from 'src/app/store/artist/models/new-artist';

@Component({
  selector: 'app-artist-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.scss']
})
export class ArtistFormComponent {
  artistForm = this.formBuilder.group({
    name: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store) {}

  onSubmit() {
    if (!this.artistForm.valid) {
      return;
    }
    const newArtist = {
      name: this.artistForm.value.name
    } as NewArtist;
    this.store.dispatch(ArtistActions.addArtist({ data: newArtist }))
    this.artistForm.reset();
  }
}
