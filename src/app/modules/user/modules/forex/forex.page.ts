import { Component, OnInit } from '@angular/core';
import { DashboardOptions } from '@user/models/dashboard-options';

@Component({
  selector: 'kot-forex',
  templateUrl: './forex.page.html',
  styleUrls: ['./forex.page.scss'],
})
export class ForexPage implements OnInit {
	dashboardOptions: DashboardOptions[] = [
		{
			image: 'live-lessons.jpeg',
			title: 'Clases en vivo',
			description: 'Ingresa ahora',
			color: 'secondary',
			redirect: 'live-lessons'
		},
		{
			image: 'course-syllabus.jpeg',
			title: 'Aprende ahora',
			description: 'Aprende en todo momento con nuestro temario completo',
			color: 'danger',
			redirect: 'course-syllabus'
		},
		{
			image: 'forex-options.jpeg',
			title: 'Ideas de trade',
			description: 'Revisa nuestra ideas de trade y opera con gestion',
			color: 'medium',
			redirect: 'trade-ideas'
		},
		{
			image: 'binaries-options.jpeg',
			title: 'Horario',
			description: 'Verifica el horario e ingresa siempre a clases',
			color: 'dark',
			redirect: 'class-shedule'
		}
	];
  constructor() { }

  ngOnInit() {
  }

}
