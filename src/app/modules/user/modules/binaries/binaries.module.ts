import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { ThemeModule } from '@theme/theme.module';
import { BinariesPageRoutingModule } from './binaries-routing.module';
import { BinariesPage } from './binaries.page';

@NgModule({
	imports: [CommonModule, FormsModule, ThemeModule, BinariesPageRoutingModule, SharedModule],
	declarations: [BinariesPage]
})
export class BinariesPageModule {}
