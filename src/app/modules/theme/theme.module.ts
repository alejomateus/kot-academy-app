import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

const MODULES = [NgxIntlTelInputModule, FormsModule, ReactiveFormsModule];
@NgModule({
	declarations: [],
	imports: [CommonModule, ...MODULES],
	exports: [...MODULES]
})
export class ThemeModule {}
