import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistFormComponent } from '../artist/artist-form/artist-form.component';
import { ArtistListComponent } from '../artist/artist-list/artist-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ArtistFormComponent, ArtistListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
}
