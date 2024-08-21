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
	},
	{
		path: 'live-lesson',
		loadChildren: () => import('./modules/live-lesson/live-lesson.module').then((m) => m.LiveLessonPageModule)
	},
	{
		path: 'trade-ideas',
		loadChildren: () => import('./modules/trade-ideas/trade-ideas.module').then((m) => m.TradeIdeasPageModule)
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BinariesPageRoutingModule {}
