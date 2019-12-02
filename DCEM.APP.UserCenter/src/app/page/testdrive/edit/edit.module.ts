import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

import { EditPageRoutingModule } from './edit-routing.module';

import { EditPage } from './edit.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPageRoutingModule,
    NgZorroAntdMobileModule
  ],
  declarations: [EditPage]
})
export class EditPageModule {}
