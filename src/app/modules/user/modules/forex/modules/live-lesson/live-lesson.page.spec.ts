import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LiveLessonPage } from './live-lesson.page';

describe('LiveLessonPage', () => {
  let component: LiveLessonPage;
  let fixture: ComponentFixture<LiveLessonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveLessonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
