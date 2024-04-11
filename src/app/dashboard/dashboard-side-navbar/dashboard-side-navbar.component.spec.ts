import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSideNavbarComponent } from './dashboard-side-navbar.component';

describe('DashboardSideNavbarComponent', () => {
  let component: DashboardSideNavbarComponent;
  let fixture: ComponentFixture<DashboardSideNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSideNavbarComponent]
    });
    fixture = TestBed.createComponent(DashboardSideNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
