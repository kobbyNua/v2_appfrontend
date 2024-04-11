import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientLaboratoryDetailsComponent } from './patient-laboratory-details.component';

describe('PatientLaboratoryDetailsComponent', () => {
  let component: PatientLaboratoryDetailsComponent;
  let fixture: ComponentFixture<PatientLaboratoryDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientLaboratoryDetailsComponent]
    });
    fixture = TestBed.createComponent(PatientLaboratoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
