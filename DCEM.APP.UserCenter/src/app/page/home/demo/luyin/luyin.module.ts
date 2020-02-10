import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LuyinPageRoutingModule } from './luyin-routing.module';

import { LuyinPage } from './luyin.page';
import { Media } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LuyinPageRoutingModule
  ],
  declarations: [LuyinPage],
  providers: [Media, File]
})
export class LuyinPageModule {}
