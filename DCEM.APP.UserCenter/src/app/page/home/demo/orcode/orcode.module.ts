import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrcodePageRoutingModule } from './orcode-routing.module';

import { OrcodePage } from './orcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrcodePageRoutingModule
  ],
  declarations: [OrcodePage]
})
export class OrcodePageModule {}
