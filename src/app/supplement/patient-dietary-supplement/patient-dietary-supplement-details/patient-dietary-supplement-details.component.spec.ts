import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDietarySupplementDetailsComponent } from './patient-dietary-supplement-details.component';

describe('PatientDietarySupplementDetailsComponent', () => {
  let component: PatientDietarySupplementDetailsComponent;
  let fixture: ComponentFixture<PatientDietarySupplementDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientDietarySupplementDetailsComponent]
    });
    fixture = TestBed.createComponent(PatientDietarySupplementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
