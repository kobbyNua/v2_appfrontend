import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientLaboratoryDetailsHistoryComponent } from './patient-laboratory-details-history.component';

describe('PatientLaboratoryDetailsHistoryComponent', () => {
  let component: PatientLaboratoryDetailsHistoryComponent;
  let fixture: ComponentFixture<PatientLaboratoryDetailsHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientLaboratoryDetailsHistoryComponent]
    });
    fixture = TestBed.createComponent(PatientLaboratoryDetailsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
