import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockConstellationComponent } from './lock-constellation.component';

describe('LockConstellationComponent', () => {
  let component: LockConstellationComponent;
  let fixture: ComponentFixture<LockConstellationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LockConstellationComponent]
    });
    fixture = TestBed.createComponent(LockConstellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
