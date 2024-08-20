import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { DashboardOptionsComponent } from './components/dashboard-options/dashboard-options.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

const COMPONENTS = [ScheduleComponent, DashboardOptionsComponent];
const MODULES = [NgxIntlTelInputModule, FormsModule, ReactiveFormsModule, IonicModule, NgbCarouselModule, IonicModule];
@NgModule({
	declarations: [...COMPONENTS],
	imports: [CommonModule, ...MODULES],
	exports: [...MODULES, ...COMPONENTS]
})
export class ThemeModule {}
