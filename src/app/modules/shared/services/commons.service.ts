import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class CommonsService {
	constructor(
		private loadingCtrl: LoadingController,
		private router: Router
	) {}
	/**
	 * Navigate to internal
	 * @param url
	 */
	async navigate(url: string, params?: any): Promise<void> {
		await this.router.navigate(['/' + url], {
			state: params ?? {}
		});
	}
	async showLoading(message: string, duration: number): Promise<void> {
		const loading = await this.loadingCtrl.create({
			message,
			duration
		});
		loading.present();
	}
	getAuthenticationValidation(): string {
		return sessionStorage.getItem('auth');
	}
}
