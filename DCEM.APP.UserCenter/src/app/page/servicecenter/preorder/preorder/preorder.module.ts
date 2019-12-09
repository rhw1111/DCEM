import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreorderPageRoutingModule } from './preorder-routing.module';

import { PreorderPage } from './preorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreorderPageRoutingModule
  ],
  declarations: [PreorderPage]
})
export class PreorderPageModule {}
