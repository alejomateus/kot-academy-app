import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TradeIdeasPage } from './trade-ideas.page';

describe('TradeIdeasPage', () => {
  let component: TradeIdeasPage;
  let fixture: ComponentFixture<TradeIdeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeIdeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
