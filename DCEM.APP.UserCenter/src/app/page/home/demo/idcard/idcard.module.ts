import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdcardPageRoutingModule } from './idcard-routing.module';

import { IdcardPage } from './idcard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdcardPageRoutingModule
  ],
  declarations: [IdcardPage]
})
export class IdcardPageModule {}
