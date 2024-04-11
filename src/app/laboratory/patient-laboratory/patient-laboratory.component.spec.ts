import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientLaboratoryComponent } from './patient-laboratory.component';

describe('PatientLaboratoryComponent', () => {
  let component: PatientLaboratoryComponent;
  let fixture: ComponentFixture<PatientLaboratoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientLaboratoryComponent]
    });
    fixture = TestBed.createComponent(PatientLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
