import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '@theme/theme.module';
import { DashboardOptionsModule } from '../dashboard-options/dashboard-options.module';
import { BinariesPageRoutingModule } from './binaries-routing.module';
import { BinariesPage } from './binaries.page';

@NgModule({
	imports: [CommonModule, FormsModule, ThemeModule, BinariesPageRoutingModule, DashboardOptionsModule],
	declarations: [BinariesPage]
})
export class BinariesPageModule {}
