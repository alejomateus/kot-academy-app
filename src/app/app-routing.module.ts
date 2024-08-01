import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'sign-in',
		pathMatch: 'full'
	},
	{
		path: 'sign-in',
		loadChildren: () => import('@sign-in/sign-in.module').then((m) => m.SignInPageModule)
	},
	{
		path: 'sign-up',
		loadChildren: () => import('./modules/sign-up/sign-up.module').then((m) => m.SignUpPageModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule {}
