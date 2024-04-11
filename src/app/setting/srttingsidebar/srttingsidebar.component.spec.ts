import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrttingsidebarComponent } from './srttingsidebar.component';

describe('SrttingsidebarComponent', () => {
  let component: SrttingsidebarComponent;
  let fixture: ComponentFixture<SrttingsidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SrttingsidebarComponent]
    });
    fixture = TestBed.createComponent(SrttingsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
