import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementsReportsComponent } from './supplements-reports.component';

describe('SupplementsReportsComponent', () => {
  let component: SupplementsReportsComponent;
  let fixture: ComponentFixture<SupplementsReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplementsReportsComponent]
    });
    fixture = TestBed.createComponent(SupplementsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
