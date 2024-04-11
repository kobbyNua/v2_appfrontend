import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementInventoryComponent } from './supplement-inventory.component';

describe('SupplementInventoryComponent', () => {
  let component: SupplementInventoryComponent;
  let fixture: ComponentFixture<SupplementInventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplementInventoryComponent]
    });
    fixture = TestBed.createComponent(SupplementInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
