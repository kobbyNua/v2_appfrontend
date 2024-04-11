import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSupplementComponent } from './stock-supplement.component';

describe('StockSupplementComponent', () => {
  let component: StockSupplementComponent;
  let fixture: ComponentFixture<StockSupplementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockSupplementComponent]
    });
    fixture = TestBed.createComponent(StockSupplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
