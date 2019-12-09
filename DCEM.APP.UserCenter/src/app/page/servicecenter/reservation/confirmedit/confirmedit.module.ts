import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmeditPageRoutingModule } from './confirmedit-routing.module';

import { ConfirmeditPage } from './confirmedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmeditPageRoutingModule
  ],
  declarations: [ConfirmeditPage]
})
export class ConfirmeditPageModule {}
