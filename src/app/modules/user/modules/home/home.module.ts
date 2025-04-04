import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@shared/shared.module';
import { ThemeModule } from '@theme/theme.module';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule, ThemeModule, SharedModule],
	declarations: [HomePage]
})
export class HomePageModule {}
