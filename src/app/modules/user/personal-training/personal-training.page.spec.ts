import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalTrainingPage } from './personal-training.page';

describe('PersonalTrainingPage', () => {
  let component: PersonalTrainingPage;
  let fixture: ComponentFixture<PersonalTrainingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalTrainingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
