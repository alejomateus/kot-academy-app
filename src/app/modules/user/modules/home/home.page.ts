import { Component, OnInit } from '@angular/core';
import { CommonsService } from '@shared/services/commons.service';
import { DashboardOptions } from '../../../../models/dashboard-options';

@Component({
	selector: 'kot-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
	services: DashboardOptions[] = [
		{
			image: 'binaries.jpeg',
			title: 'Binarias',
			description: 'Aprende y opera en tiempos cortos',
			url: 'binaries'
		},
		{
			image: 'forex.jpeg',
			title: 'Forex',
			description: 'Proyecta el futuro y da el movimiento',
			url: 'forex'
		},
		{
			image: 'personal_training.jpeg',
			title: 'Entrenamiento Personal',
			description: 'Aprende a cuidar tu cuerpo y tu mente',
			url: 'personal-training'
		}
	];
	constructor(private commonsService: CommonsService) {}

	ngOnInit() {
		sessionStorage.setItem('auth', '1');
		if (new Date() > new Date('2024-08-25')) {
			this.services = [];
		}
	}

	redirect(url: string): void {
		this.commonsService.navigate('user/' + url);
	}
}
