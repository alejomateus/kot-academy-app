import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BinariesPageRoutingModule } from './binaries-routing.module';

import { BinariesPage } from './binaries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BinariesPageRoutingModule
  ],
  declarations: [BinariesPage]
})
export class BinariesPageModule {}
