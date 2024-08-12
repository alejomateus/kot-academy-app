import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalTrainingPageRoutingModule } from './personal-training-routing.module';

import { PersonalTrainingPage } from './personal-training.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalTrainingPageRoutingModule
  ],
  declarations: [PersonalTrainingPage]
})
export class PersonalTrainingPageModule {}
