import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistListComponent } from './artist-list.component';
import { signal } from '@angular/core';
import { Store } from '@ngrx/store';

describe('ArtistListComponent', () => {
  let component: ArtistListComponent;
  let fixture: ComponentFixture<ArtistListComponent>;

  const mockStore = {
    selectSignal: () => signal([]),
    dispatch: () => {}
  };
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ArtistListComponent],
      providers: [
        { provide: Store, useValue: mockStore }
      ]
    });
    fixture = TestBed.createComponent(ArtistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
