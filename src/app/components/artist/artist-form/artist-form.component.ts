import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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
    name: ['', Validators.required],
    albums: this.formBuilder.array([])
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store) {}

  onSubmit() {
    if (!this.artistForm.valid) {
      return;
    }
    const newArtist = this.artistForm.value as NewArtist;
    this.store.dispatch(ArtistActions.addArtist({ data: newArtist }))
    this.artistForm.reset();
    (this.artistForm.get('albums') as FormArray).clear();
  }

  addAlbum() {
    const control = <FormArray>this.artistForm.get('albums');
    control.push(this.formBuilder.group({
      name: ['', Validators.required ],
      releaseYear: ['', [Validators.required, Validators.pattern('[0-9]{4}')]]
    }))
  }

  hasError<T>(control: AbstractControl<T | null, T | null> | null, errorName: string) {
    return control?.hasError(errorName) && (control?.dirty || control?.touched);
  }
}
