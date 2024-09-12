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
			image: 'dashboard/binaries/basic.jpg',
			title: '',
			description: '',
			color: 'secondary',
			redirect: '1'
		},
		{
			image: 'dashboard/binaries/intermedium.jpg',
			title: '',
			description: '',
			color: 'danger',
			redirect: '2'
		},
		{
			image: 'dashboard/binaries/patron.jpg',
			title: '',
			description: '',
			color: 'medium',
			redirect: '3'
		},
		{
			image: 'dashboard/binaries/lecture.jpg',
			title: '',
			description: '',
			color: 'dark',
			redirect: '4'
		}
	];
	constructor(private commonsService: CommonsService) {}

	ngOnInit() {
		if (new Date() > new Date('2024-09-25')) {
			this.options = [];
		}
	}

	navigate(route: string) {
		console.log(route);

		this.commonsService.navigate('user/binaries/course-syllabus/' + route);
	}
}
