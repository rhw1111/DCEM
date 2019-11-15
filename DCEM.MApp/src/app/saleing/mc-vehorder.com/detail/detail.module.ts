import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailPage } from './detail.page';

import { NzTimelineModule } from 'ng-zorro-antd/timeline';

const routes: Routes = [
  {
    path: '',
    component: DetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NzTimelineModule
  
  ],
  declarations: [DetailPage]
})
export class DetailPageModule {}
