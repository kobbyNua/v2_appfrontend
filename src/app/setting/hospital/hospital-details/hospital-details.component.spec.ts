import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalDetailsComponent } from './hospital-details.component';

describe('HospitalDetailsComponent', () => {
  let component: HospitalDetailsComponent;
  let fixture: ComponentFixture<HospitalDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalDetailsComponent]
    });
    fixture = TestBed.createComponent(HospitalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
