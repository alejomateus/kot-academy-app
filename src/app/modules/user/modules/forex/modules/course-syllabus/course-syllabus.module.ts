import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ThemeModule } from '@theme/theme.module';
import { SubCourseSyllabusComponent } from './components/sub-course-syllabus/sub-course-syllabus.component';
import { CourseSyllabusPageRoutingModule } from './course-syllabus-routing.module';
import { CourseSyllabusPage } from './course-syllabus.page';

@NgModule({
	imports: [CommonModule, CourseSyllabusPageRoutingModule, ThemeModule, SharedModule],
	declarations: [CourseSyllabusPage, SubCourseSyllabusComponent]
})
export class CourseSyllabusPageModule {}
