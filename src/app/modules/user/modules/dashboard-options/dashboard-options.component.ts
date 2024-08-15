import { Component, Input, OnInit } from '@angular/core';
import { CommonsService } from '@shared/services/commons.service';
import { DashboardOptions } from '@user/models/dashboard-options';

@Component({
	selector: 'kot-dashboard-options',
	templateUrl: './dashboard-options.component.html',
	styleUrls: ['./dashboard-options.component.scss']
})
export class DashboardOptionsComponent implements OnInit {
  @Input() dashboardOptions: DashboardOptions[];
	constructor(private commonsService: CommonsService) {}

	ngOnInit() {}

	redirect(url: string): void {
		this.commonsService.navigate('user/binaries/' + url);
	}
}
