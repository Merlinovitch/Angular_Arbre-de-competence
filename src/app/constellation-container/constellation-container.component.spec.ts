import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstellationContainerComponent } from './constellation-container.component';

describe('ConstellationContainerComponent', () => {
  let component: ConstellationContainerComponent;
  let fixture: ComponentFixture<ConstellationContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ConstellationContainerComponent]
    });
    fixture = TestBed.createComponent(ConstellationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
