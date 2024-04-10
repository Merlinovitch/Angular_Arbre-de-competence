import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcConstellationComponent } from './pc-constellation.component';

describe('PcConstellationComponent', () => {
  let component: PcConstellationComponent;
  let fixture: ComponentFixture<PcConstellationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PcConstellationComponent]
    });
    fixture = TestBed.createComponent(PcConstellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
