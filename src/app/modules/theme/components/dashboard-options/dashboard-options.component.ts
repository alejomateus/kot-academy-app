import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DashboardOptions } from '@models/dashboard-options';

@Component({
	selector: 'kot-dashboard-options',
	templateUrl: './dashboard-options.component.html',
	styleUrls: ['./dashboard-options.component.scss']
})
export class DashboardOptionsComponent {
	@Input() dashboardOptions: DashboardOptions[];
	@Output() containerClick = new EventEmitter<string>();
	@Input() title: string = 'Binaries';
	constructor(private sanitizer: DomSanitizer) {}
	clickContainer(option: DashboardOptions): void {
		if (!option.url) {
			this.containerClick.emit(option.redirect);
		}
	}
  sanizate(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
