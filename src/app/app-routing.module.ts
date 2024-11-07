import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from './guards/admin.guard';
import { authGuard } from './guards/auth.guard';

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
		loadChildren: () => import('@user/user.module').then((m) => m.UserModule),
		canActivate: [authGuard]
	},
	{
		path: 'home',
		loadChildren: () => import('@home/home.module').then((m) => m.HomePageModule)
	},
	{
		path: 'admin',
		loadChildren: () => import('@admin/admin.module').then((m) => m.AdminModule),
		canActivate: [adminGuard]
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
