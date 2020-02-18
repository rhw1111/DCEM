import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LuyinPageRoutingModule } from './luyin-routing.module';

import { LuyinPage } from './luyin.page';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject, FileUploadResult } from '@ionic-native/file-transfer/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LuyinPageRoutingModule
  ],
  declarations: [LuyinPage],
  providers:[Media,File,FileTransfer,FileTransferObject]
})
export class LuyinPageModule {}
