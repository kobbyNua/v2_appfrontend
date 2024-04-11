import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrttingdashboardComponent } from './srttingdashboard.component';

describe('SrttingdashboardComponent', () => {
  let component: SrttingdashboardComponent;
  let fixture: ComponentFixture<SrttingdashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SrttingdashboardComponent]
    });
    fixture = TestBed.createComponent(SrttingdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
