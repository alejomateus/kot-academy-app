import { Component, OnInit } from '@angular/core';
import { DashboardOptions } from '@models/dashboard-options';
import { CommonsService } from '@shared/services/commons.service';

@Component({
	selector: 'kot-course-syllabus',
	templateUrl: './course-syllabus.page.html',
	styleUrls: ['./course-syllabus.page.scss']
})
export class CourseSyllabusPage implements OnInit {
	options: DashboardOptions[] = [
		{
			title: 'Basicos de forex',
			description: 'Basicos de forex',
			color: 'secondary',
			redirect: '1'
		},
		{
			title: 'Analisis de forex',
			description: 'Analisis de forex',
			color: 'danger',
			redirect: '2'
		},
		{
			title: 'Ondas de Elliot',
			description: 'Ondas de Elliot',
			color: 'medium',
			redirect: '3'
		},
		{
			title: 'Indicadores',
			description: 'Indicadores',
			color: 'dark',
			redirect: '4'
		}
	];
	constructor(private commonsService: CommonsService) {}

	ngOnInit() {
		if (new Date() > new Date('2024-08-25')) {
			this.options = [];
		}
	}

	navigate(route: string) {
		this.commonsService.navigate('user/forex/course-syllabus/' + route);
	}
}
