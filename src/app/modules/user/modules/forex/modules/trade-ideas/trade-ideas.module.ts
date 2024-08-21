import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TradeIdeasPageRoutingModule } from './trade-ideas-routing.module';

import { TradeIdeasPage } from './trade-ideas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TradeIdeasPageRoutingModule
  ],
  declarations: [TradeIdeasPage]
})
export class TradeIdeasPageModule {}
