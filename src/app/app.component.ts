import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CommonsService } from './modules/shared/services/commons.service';

@Component({
	selector: 'kot-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
	validation: boolean;
	constructor(
		private commonsService: CommonsService,
		private router: Router
	) {}
	ngOnInit(): void {
		this.registerRouteChanges();
	}
	registerRouteChanges(): void {
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.validation = this.commonsService.getAuthenticationValidation() === '1';
				console.log(this.validation);
			}
		});
	}

	navigate(route: string): void {
		this.commonsService.navigate(route);
	}
}
