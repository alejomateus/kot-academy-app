import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BinariesPage } from './binaries.page';

describe('BinariesPage', () => {
  let component: BinariesPage;
  let fixture: ComponentFixture<BinariesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BinariesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
