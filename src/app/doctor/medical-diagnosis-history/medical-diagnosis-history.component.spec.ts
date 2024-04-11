import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalDiagnosisHistoryComponent } from './medical-diagnosis-history.component';

describe('MedicalDiagnosisHistoryComponent', () => {
  let component: MedicalDiagnosisHistoryComponent;
  let fixture: ComponentFixture<MedicalDiagnosisHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalDiagnosisHistoryComponent]
    });
    fixture = TestBed.createComponent(MedicalDiagnosisHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
