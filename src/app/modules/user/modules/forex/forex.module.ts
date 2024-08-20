import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '@theme/theme.module';
import { ForexPageRoutingModule } from './forex-routing.module';
import { ForexPage } from './forex.page';
@NgModule({
	imports: [CommonModule, FormsModule, ForexPageRoutingModule, ThemeModule],
	declarations: [ForexPage]
})
export class ForexPageModule {}
