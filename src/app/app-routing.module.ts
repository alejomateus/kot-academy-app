import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'sign-in',
		loadChildren: () => import('@sign-in/sign-in.module').then((m) => m.SignInPageModule)
	},
	{
		path: 'sign-up',
		loadChildren: () => import('@sign-up/sign-up.module').then((m) => m.SignUpPageModule)
	},
	{
		path: 'user',
		loadChildren: () => import('@user/user.module').then((m) => m.UserModule)
	},
	{
		path: 'home',
		loadChildren: () => import('./modules/home/home.module').then((m) => m.HomePageModule)
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			useHash: true,
			scrollPositionRestoration: 'enabled'
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
