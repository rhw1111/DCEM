import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HirepurchasePageRoutingModule } from './hirepurchase-routing.module';

import { HirepurchasePage } from './hirepurchase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HirepurchasePageRoutingModule
  ],
  declarations: [HirepurchasePage]
})
export class HirepurchasePageModule {}
