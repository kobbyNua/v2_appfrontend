import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsidePatientLaboratoryComponent } from './outside-patient-laboratory.component';

describe('OutsidePatientLaboratoryComponent', () => {
  let component: OutsidePatientLaboratoryComponent;
  let fixture: ComponentFixture<OutsidePatientLaboratoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutsidePatientLaboratoryComponent]
    });
    fixture = TestBed.createComponent(OutsidePatientLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
