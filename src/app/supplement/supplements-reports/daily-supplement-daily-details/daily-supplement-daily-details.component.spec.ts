import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySupplementDailyDetailsComponent } from './daily-supplement-daily-details.component';

describe('DailySupplementDailyDetailsComponent', () => {
  let component: DailySupplementDailyDetailsComponent;
  let fixture: ComponentFixture<DailySupplementDailyDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailySupplementDailyDetailsComponent]
    });
    fixture = TestBed.createComponent(DailySupplementDailyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
