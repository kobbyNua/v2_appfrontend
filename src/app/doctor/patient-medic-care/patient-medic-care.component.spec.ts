import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMedicCareComponent } from './patient-medic-care.component';

describe('PatientMedicCareComponent', () => {
  let component: PatientMedicCareComponent;
  let fixture: ComponentFixture<PatientMedicCareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientMedicCareComponent]
    });
    fixture = TestBed.createComponent(PatientMedicCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
