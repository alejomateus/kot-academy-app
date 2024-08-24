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
			image: 'dashboard/forex/basics.jpeg',
			title: '',
			description: '',
			color: 'secondary',
			redirect: '1'
		},
		{
			image: 'dashboard/forex/analysis.jpeg',
			title: '',
			description: '',
			color: 'danger',
			redirect: '2'
		},
		{
			image: 'dashboard/forex/ondes.jpeg',
			title: '',
			description: '',
			color: 'medium',
			redirect: '3'
		},
		{
			image: 'dashboard/forex/indicators.jpeg',
			title: '',
			description: '',
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
