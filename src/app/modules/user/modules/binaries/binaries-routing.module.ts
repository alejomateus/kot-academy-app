import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BinariesPage } from './binaries.page';

const routes: Routes = [
	{
		path: '',
		component: BinariesPage
	},
	{
		path: 'class-schedule',
		loadChildren: () => import('./modules/class-schedule/class-schedule.module').then((m) => m.ClassSchedulePageModule)
	},
	{
		path: 'course-syllabus',
		loadChildren: () =>
			import('./modules/course-syllabus/course-syllabus.module').then((m) => m.CourseSyllabusPageModule)
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BinariesPageRoutingModule {}
