import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TradeIdeasPage } from './trade-ideas.page';

const routes: Routes = [
  {
    path: '',
    component: TradeIdeasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TradeIdeasPageRoutingModule {}
