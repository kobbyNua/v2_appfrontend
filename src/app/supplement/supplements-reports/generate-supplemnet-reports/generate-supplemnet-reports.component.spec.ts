import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateSupplemnetReportsComponent } from './generate-supplemnet-reports.component';

describe('GenerateSupplemnetReportsComponent', () => {
  let component: GenerateSupplemnetReportsComponent;
  let fixture: ComponentFixture<GenerateSupplemnetReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateSupplemnetReportsComponent]
    });
    fixture = TestBed.createComponent(GenerateSupplemnetReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
