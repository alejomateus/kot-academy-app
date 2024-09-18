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
	isNavbarOpen = false; // Controla el estado del menú responsive

	// Función para navegar y cerrar el menú responsive

	// Función para seleccionar un enlace y cerrar el menú
	selectLink() {
		console.log('Enlace seleccionado');
		this.isNavbarOpen = false; // Oculta el menú responsive
	}

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
		this.selectLink();
	}
}
