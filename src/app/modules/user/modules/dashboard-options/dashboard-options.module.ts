import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ThemeModule } from '@theme/theme.module';
import { DashboardOptionsComponent } from './dashboard-options.component';

@NgModule({
	declarations: [DashboardOptionsComponent],
	imports: [CommonModule, ThemeModule, SharedModule],
	exports: [DashboardOptionsComponent]
})
export class DashboardOptionsModule {}
