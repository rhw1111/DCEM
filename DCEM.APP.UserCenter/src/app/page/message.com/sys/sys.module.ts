import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SysPageRoutingModule } from './sys-routing.module';

import { SysPage } from './sys.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SysPageRoutingModule
  ],
  declarations: [SysPage]
})
export class SysPageModule {}
