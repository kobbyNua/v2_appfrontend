import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementSalesComponent } from './supplement-sales.component';

describe('SupplementSalesComponent', () => {
  let component: SupplementSalesComponent;
  let fixture: ComponentFixture<SupplementSalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplementSalesComponent]
    });
    fixture = TestBed.createComponent(SupplementSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
