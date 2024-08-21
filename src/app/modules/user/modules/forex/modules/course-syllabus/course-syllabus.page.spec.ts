import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseSyllabusPage } from './course-syllabus.page';

describe('CourseSyllabusPage', () => {
  let component: CourseSyllabusPage;
  let fixture: ComponentFixture<CourseSyllabusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSyllabusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
