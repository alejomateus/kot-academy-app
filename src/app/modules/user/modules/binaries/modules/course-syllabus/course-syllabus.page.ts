import { Component, OnInit } from '@angular/core';
import { DashboardOptions } from '@models/dashboard-options';
import { CommonsService } from '@shared/services/commons.service';

@Component({
  selector: 'kot-course-syllabus',
  templateUrl: './course-syllabus.page.html',
  styleUrls: ['./course-syllabus.page.scss'],
})
export class CourseSyllabusPage implements OnInit {
	options: DashboardOptions[] = [
		{
			title: 'Basicos del trading',
			description: 'Basicos del trading',
			color: 'secondary',
			redirect: '1'
		},
		{
			title: 'Uso de trading view',
			description: 'Uso de trading view',
			color: 'danger',
			redirect: '2'
		},
		{
			title: 'Patrones armonicos',
			description: 'Patrones armonicos',
			color: 'medium',
			redirect: '3'
		},
		{
			title: 'Lectura de mercado de alto nivel',
			description: 'Lectura de mercado de alto nivel',
			color: 'dark',
			redirect: '4'
		}
	];
	constructor(private commonsService: CommonsService) {}

  ngOnInit() {
  }

  navigate(route: string) {
    console.log(route);

		this.commonsService.navigate('user/binaries/course-syllabus/' + route);
	}
}
