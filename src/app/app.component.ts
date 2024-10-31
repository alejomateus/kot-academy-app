import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IAuthResponse } from '@shared/models/authentication.interface';
import { AuthenticationService } from '@shared/services/authentication.service';
import { CommonsService } from '@shared/services/commons.service';
import { StorageService } from '@shared/services/storage.service';

@Component({
	selector: 'kot-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
	authData: IAuthResponse;
	selectLink() {
		console.log('Enlace seleccionado');
	}

	constructor(
		private commonsService: CommonsService,
		private storageService: StorageService,
		private authenticationService: AuthenticationService,
		private router: Router,
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		this.route.fragment.subscribe((fragment) => {
			if (fragment) {
				setTimeout(() => {
					const element = document.getElementById(fragment);
					if (document.getElementById(fragment)) {
						element.scrollIntoView({ behavior: 'smooth' });
					}
				}, 250);
			}
		});

		this.registerRouteChanges();
	}
	registerRouteChanges(): void {
		this.router.events.subscribe(async (event: any): Promise<any> => {
			if (event instanceof NavigationEnd) {
				this.authData = JSON.parse(await this.storageService.getItem('auth-data'));
			}
		});
	}

	navigate(route: string, fragment?: string): void {
		this.commonsService.navigate(route, null, fragment);
		this.selectLink();
	}

	@HostListener('window:keydown')
	@HostListener('click', ['$event.target'])
	async checkRefreshToken() {
		const user = await this.authenticationService.getCurrentAuthenticatedUser();
		if (user) {
			const time = await this.authenticationService.calculateTimeExpiration();
			if (time < 500000 && time > 100) {
				await this.authenticationService.refreshToken();
			}
			if (time <= 100) {
				this.router.navigate(['/signout']);
			}
		}
	}
}
