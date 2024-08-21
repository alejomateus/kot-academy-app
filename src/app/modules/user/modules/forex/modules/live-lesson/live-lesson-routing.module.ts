import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveLessonPage } from './live-lesson.page';

const routes: Routes = [
  {
    path: '',
    component: LiveLessonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveLessonPageRoutingModule {}
