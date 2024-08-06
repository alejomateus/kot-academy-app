import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { ThemeModule } from '../theme/theme.module';
import { SignUpPageRoutingModule } from './sign-up-routing.module';
import { SignUpPage } from './sign-up.page';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, SignUpPageRoutingModule, ThemeModule, SharedModule],
	declarations: [SignUpPage]
})
export class SignUpPageModule {}
