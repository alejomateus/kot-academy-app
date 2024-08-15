import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ThemeModule } from '@theme/theme.module';
import { ClassSchedulePageRoutingModule } from './class-schedule-routing.module';
import { ClassSchedulePage } from './class-schedule.page';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, ClassSchedulePageRoutingModule, ThemeModule],
	declarations: [ClassSchedulePage]
})
export class ClassSchedulePageModule {}
