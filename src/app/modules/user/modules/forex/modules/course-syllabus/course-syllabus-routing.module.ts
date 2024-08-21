import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubCourseSyllabusComponent } from './components/sub-course-syllabus/sub-course-syllabus.component';
import { CourseSyllabusPage } from './course-syllabus.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: CourseSyllabusPage,
  },
  {
    path: ':id',
    component: SubCourseSyllabusComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseSyllabusPageRoutingModule {}
