import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfectPageRoutingModule } from './perfect-routing.module';

import { PerfectPage } from './perfect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfectPageRoutingModule
  ],
  declarations: [PerfectPage]
})
export class PerfectPageModule {}
