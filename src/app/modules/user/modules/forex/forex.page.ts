import { Component, OnInit } from '@angular/core';
import { DashboardOptions } from '@models/dashboard-options';
import { CommonsService } from '@shared/services/commons.service';

@Component({
	selector: 'kot-forex',
	templateUrl: './forex.page.html',
	styleUrls: ['./forex.page.scss']
})
export class ForexPage implements OnInit {
	dashboardOptions: DashboardOptions[] = [
		{
			image: 'dashboard/live-lessons.jpeg',
			title: 'Clases en vivo',
			description: 'Ingresa ahora',
			color: 'secondary',
			redirect: 'live-lessons'
		},
		{
			image: 'dashboard/course-syllabus.jpeg',
			title: 'Aprende ahora',
			description: 'Aprende en todo momento con nuestro temario completo',
			color: 'danger',
			redirect: 'course-syllabus'
		},
		{
			image: 'dashboard/forex-options.jpeg',
			title: 'Ideas de trade',
			description: 'Revisa nuestra ideas de trade y opera con gestion',
			color: 'medium',
			redirect: 'trade-ideas'
		},
		{
			image: 'dashboard/schedule2.jpeg',
			title: 'Horario',
			description: 'Verifica el horario e ingresa siempre a clases',
			color: 'dark',
			redirect: 'class-schedule'
		}
	];
	constructor(private commonsService: CommonsService) {}

	ngOnInit() {
		sessionStorage.setItem('auth', '1');
		if (new Date() > new Date('2024-08-25')) {
			this.dashboardOptions = [];
		}
	}
	navigate(route: string) {
		this.commonsService.navigate('user/forex/' + route);
	}
}
