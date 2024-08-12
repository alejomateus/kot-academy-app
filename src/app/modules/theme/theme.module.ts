import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { ScheduleComponent } from './components/schedule/schedule.component';

const COMPONENTS = [ScheduleComponent];
const MODULES = [NgxIntlTelInputModule, FormsModule, ReactiveFormsModule, IonicModule, NgbCarouselModule];
@NgModule({
	declarations: [...COMPONENTS],
	imports: [CommonModule, ...MODULES],
	exports: [...MODULES, ...COMPONENTS]
})
export class ThemeModule {}
