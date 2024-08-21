import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiveLessonPageRoutingModule } from './live-lesson-routing.module';

import { LiveLessonPage } from './live-lesson.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiveLessonPageRoutingModule
  ],
  declarations: [LiveLessonPage]
})
export class LiveLessonPageModule {}
