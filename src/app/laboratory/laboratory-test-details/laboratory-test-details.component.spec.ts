import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryTestDetailsComponent } from './laboratory-test-details.component';

describe('LaboratoryTestDetailsComponent', () => {
  let component: LaboratoryTestDetailsComponent;
  let fixture: ComponentFixture<LaboratoryTestDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaboratoryTestDetailsComponent]
    });
    fixture = TestBed.createComponent(LaboratoryTestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
