import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientOpdDetailsComponent } from './patient-opd-details.component';

describe('PatientOpdDetailsComponent', () => {
  let component: PatientOpdDetailsComponent;
  let fixture: ComponentFixture<PatientOpdDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientOpdDetailsComponent]
    });
    fixture = TestBed.createComponent(PatientOpdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
