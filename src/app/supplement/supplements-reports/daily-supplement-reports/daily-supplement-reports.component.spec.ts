import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySupplementReportsComponent } from './daily-supplement-reports.component';

describe('DailySupplementReportsComponent', () => {
  let component: DailySupplementReportsComponent;
  let fixture: ComponentFixture<DailySupplementReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailySupplementReportsComponent]
    });
    fixture = TestBed.createComponent(DailySupplementReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
