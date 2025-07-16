import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';
import { DashboardOptions } from '@models/dashboard-options';

@Component({
	selector: 'kot-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
	items = [
		{ id: 1, name: 'a' },
		{ id: 2, name: 'b' },
		{ id: 3, name: 'v' },
		{ id: 4, name: 'h' },
		{ id: 1, name: 'j' }
	];

	dashboardOptions: DashboardOptions[] = [
		{
			title: '100 (90%)',
			description: 'Usuarios activos',
			color: 'light'
		},
		{
			title: '10 (10%)',
			description: 'Usuarios inactivos',
			color: 'light'
		},
		{
			title: '50 ',
			description: 'Prospectos',
			color: 'light'
		},
		{
			title: '3',
			description: 'Academias activas',
			color: 'light'
		}
	];

	handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
		// Before complete is called with the items they will remain in the
		// order before the drag
		console.log('Before complete', this.items);

		// Finish the reorder and position the item in the DOM based on
		// where the gesture ended. Update the items variable to the
		// new order of items
		this.items = ev.detail.complete(this.items);

		// After complete is called the items will be in the new order
		console.log('After complete', this.items);
	}

	constructor() {}

	ngOnInit() {}

	a() {
		console.log('evento');
	}
}
