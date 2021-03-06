import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular'; 
import { ListPageRoutingModule } from './list-routing.module';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { ListPage } from './list.page'; 

import { GaoDeLocation } from '@ionic-native/gao-de-location';
@NgModule({
  imports: [ 
    NgZorroAntdMobileModule,
    CommonModule,
    FormsModule,
    IonicModule,   
    ListPageRoutingModule
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
