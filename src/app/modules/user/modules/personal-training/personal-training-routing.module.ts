import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalTrainingPage } from './personal-training.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalTrainingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalTrainingPageRoutingModule {}
