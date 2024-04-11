import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDietarySupplementComponent } from './patient-dietary-supplement.component';

describe('PatientDietarySupplementComponent', () => {
  let component: PatientDietarySupplementComponent;
  let fixture: ComponentFixture<PatientDietarySupplementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientDietarySupplementComponent]
    });
    fixture = TestBed.createComponent(PatientDietarySupplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
