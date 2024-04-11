import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdVitalsComponent } from './opd-vitals.component';

describe('OpdVitalsComponent', () => {
  let component: OpdVitalsComponent;
  let fixture: ComponentFixture<OpdVitalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpdVitalsComponent]
    });
    fixture = TestBed.createComponent(OpdVitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
