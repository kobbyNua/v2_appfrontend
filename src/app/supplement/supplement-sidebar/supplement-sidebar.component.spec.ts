import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementSidebarComponent } from './supplement-sidebar.component';

describe('SupplementSidebarComponent', () => {
  let component: SupplementSidebarComponent;
  let fixture: ComponentFixture<SupplementSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplementSidebarComponent]
    });
    fixture = TestBed.createComponent(SupplementSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
