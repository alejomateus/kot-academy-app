import { Component, OnInit } from '@angular/core';
import { DashboardOptions } from '@models/dashboard-options';
import { CommonsService } from '@shared/services/commons.service';

@Component({
	selector: 'kot-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
	services: DashboardOptions[] = [
		{
			image: 'binaries.png',
			url: 'binaries'
		},
		{
			image: 'forex.png',
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
		if (new Date() > new Date('2025-09-25')) {
			this.services = [];
		}
	}

	redirect(url: string): void {
		this.commonsService.navigate('user/' + url);
	}
}
