import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FillinfoPageRoutingModule } from './fillinfo-routing.module';

import { FillinfoPage } from './fillinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FillinfoPageRoutingModule
  ],
  declarations: [FillinfoPage]
})
export class FillinfoPageModule {}
