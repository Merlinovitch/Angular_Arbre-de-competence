import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageCharacterListComponent } from './homepage-character-list.component';

describe('HomepageCharacterListComponent', () => {
  let component: HomepageCharacterListComponent;
  let fixture: ComponentFixture<HomepageCharacterListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomepageCharacterListComponent]
    });
    fixture = TestBed.createComponent(HomepageCharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});