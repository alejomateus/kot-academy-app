import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule)
	},
	{
		path: 'class-schedule',
		loadChildren: () => import('./class-schedule/class-schedule.module').then((m) => m.ClassSchedulePageModule)
	},  {
    path: 'binaries',
    loadChildren: () => import('./binaries/binaries.module').then( m => m.BinariesPageModule)
  },
  {
    path: 'forex',
    loadChildren: () => import('./forex/forex.module').then( m => m.ForexPageModule)
  },
  {
    path: 'personal-training',
    loadChildren: () => import('./personal-training/personal-training.module').then( m => m.PersonalTrainingPageModule)
  }

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UserRoutingModule {}
