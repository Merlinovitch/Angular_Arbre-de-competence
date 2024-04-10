import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseeConstellationComponent } from './fusee-constellation.component';

describe('FuseeConstellationComponent', () => {
  let component: FuseeConstellationComponent;
  let fixture: ComponentFixture<FuseeConstellationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FuseeConstellationComponent]
    });
    fixture = TestBed.createComponent(FuseeConstellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
