import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistFormComponent } from './artist-form.component';
import { Store } from '@ngrx/store';

describe('ArtistFormComponent', () => {
  let component: ArtistFormComponent;
  let fixture: ComponentFixture<ArtistFormComponent>;

  const mockStore = {
    dispatch: () => {}
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ArtistFormComponent],
      providers: [
        { provide: Store, useValue: mockStore }
      ]
    });
    fixture = TestBed.createComponent(ArtistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
