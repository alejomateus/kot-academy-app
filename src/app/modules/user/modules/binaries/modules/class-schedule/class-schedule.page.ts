import { Component, OnInit } from '@angular/core';
import { Schedule } from '@models/schedule';

@Component({
	selector: 'kot-class-schedule',
	templateUrl: './class-schedule.page.html',
	styleUrls: ['./class-schedule.page.scss']
})
export class ClassSchedulePage implements OnInit {
	schedule: Schedule;
	constructor() {}

	ngOnInit() {
		this.schedule = {
			monday: {
				label: 'Lunes',
				hours: [
					{ start_time: '09:00', end_time: '10:00' },
					{ start_time: '09:00', end_time: '10:00' }
				]
			},
			tuesday: {
				label: 'Martes',
				hours: [
					{ start_time: '09:00', end_time: '10:00' },
					{ start_time: '09:00', end_time: '10:00' }
				]
			},
			wednesday: {
				label: 'Miercoles',
				hours: [
					{ start_time: '09:00', end_time: '10:00' },
					{ start_time: '09:00', end_time: '10:00' }
				]
			},
			thursday: {
				label: 'Jueves',
				hours: [
					{ start_time: '09:00', end_time: '10:00' },
					{ start_time: '09:00', end_time: '10:00' }
				]
			},
			friday: {
				label: 'Viernes',
				hours: [
					{ start_time: '09:00', end_time: '10:00' },
					{ start_time: '09:00', end_time: '10:00' }
				]
			},
			saturday: { label: 'Sabado', hours: [] },
			sunday: { label: 'Domingo', hours: [{ start_time: '09:00', end_time: '10:00' }] }
		};
	}
}
