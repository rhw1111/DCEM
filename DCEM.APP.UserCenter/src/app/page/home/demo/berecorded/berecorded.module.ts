import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BerecordedPageRoutingModule } from './berecorded-routing.module';

import { BerecordedPage } from './berecorded.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BerecordedPageRoutingModule
  ],
  declarations: [BerecordedPage]
})
export class BerecordedPageModule {}
