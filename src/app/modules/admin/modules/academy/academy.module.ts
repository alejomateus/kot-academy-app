import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcademyPageRoutingModule } from './academy-routing.module';

import { AcademyPage } from './academy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcademyPageRoutingModule
  ],
  declarations: [AcademyPage]
})
export class AcademyPageModule {}
