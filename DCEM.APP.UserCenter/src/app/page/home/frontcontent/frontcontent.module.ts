import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrontcontentPageRoutingModule } from './frontcontent-routing.module';

import { FrontcontentPage } from './frontcontent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrontcontentPageRoutingModule
  ],
  declarations: [FrontcontentPage]
})
export class FrontcontentPageModule {}
