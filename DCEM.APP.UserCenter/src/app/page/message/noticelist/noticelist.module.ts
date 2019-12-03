import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticelistPageRoutingModule } from './noticelist-routing.module';

import { NoticelistPage } from './noticelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticelistPageRoutingModule
  ],
  declarations: [NoticelistPage]
})
export class NoticelistPageModule {}
