import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancelPageRoutingModule } from './cancel-routing.module';

import { CancelPage } from './cancel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancelPageRoutingModule
  ],
  declarations: [CancelPage]
})
export class CancelPageModule {}
