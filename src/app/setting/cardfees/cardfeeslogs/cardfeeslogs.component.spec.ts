import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardfeeslogsComponent } from './cardfeeslogs.component';

describe('CardfeeslogsComponent', () => {
  let component: CardfeeslogsComponent;
  let fixture: ComponentFixture<CardfeeslogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardfeeslogsComponent]
    });
    fixture = TestBed.createComponent(CardfeeslogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
