import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSupplementReportsComponent } from './general-supplement-reports.component';

describe('GeneralSupplementReportsComponent', () => {
  let component: GeneralSupplementReportsComponent;
  let fixture: ComponentFixture<GeneralSupplementReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralSupplementReportsComponent]
    });
    fixture = TestBed.createComponent(GeneralSupplementReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
