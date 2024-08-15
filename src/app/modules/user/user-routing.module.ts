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
		loadChildren: () => import('./modules/home/home.module').then((m) => m.HomePageModule)
	},
	{
		path: 'binaries',
		loadChildren: () => import('./modules/binaries/binaries.module').then((m) => m.BinariesPageModule)
	},
	{
		path: 'forex',
		loadChildren: () => import('./modules/forex/forex.module').then((m) => m.ForexPageModule)
	},
	{
		path: 'personal-training',
		loadChildren: () =>
			import('./modules/personal-training/personal-training.module').then((m) => m.PersonalTrainingPageModule)
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UserRoutingModule {}
