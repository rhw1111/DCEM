import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaidumapPageRoutingModule } from './baidumap-routing.module';

import { BaidumapPage } from './baidumap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaidumapPageRoutingModule
  ],
  declarations: [BaidumapPage]
})
export class BaidumapPageModule {}
