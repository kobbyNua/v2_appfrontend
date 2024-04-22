import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardfeesComponent } from './cardfees.component';

describe('CardfeesComponent', () => {
  let component: CardfeesComponent;
  let fixture: ComponentFixture<CardfeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardfeesComponent]
    });
    fixture = TestBed.createComponent(CardfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
