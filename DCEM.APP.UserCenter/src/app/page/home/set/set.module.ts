import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetPageRoutingModule } from './set-routing.module';

import { SetPage } from './set.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetPageRoutingModule
  ],
  declarations: [SetPage]
})
export class SetPageModule {}
