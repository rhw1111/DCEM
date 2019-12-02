import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectitemPageRoutingModule } from './selectitem-routing.module';

import { SelectitemPage } from './selectitem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectitemPageRoutingModule
  ],
  declarations: [SelectitemPage]
})
export class SelectitemPageModule {}
