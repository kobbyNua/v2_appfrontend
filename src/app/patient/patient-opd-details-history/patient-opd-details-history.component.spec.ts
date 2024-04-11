import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientOpdDetailsHistoryComponent } from './patient-opd-details-history.component';

describe('PatientOpdDetailsHistoryComponent', () => {
  let component: PatientOpdDetailsHistoryComponent;
  let fixture: ComponentFixture<PatientOpdDetailsHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientOpdDetailsHistoryComponent]
    });
    fixture = TestBed.createComponent(PatientOpdDetailsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
