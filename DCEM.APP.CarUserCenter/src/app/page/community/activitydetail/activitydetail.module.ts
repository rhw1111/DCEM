import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivitydetailPageRoutingModule } from './activitydetail-routing.module';

import { ActivitydetailPage } from './activitydetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivitydetailPageRoutingModule,
  ],
  declarations: [ActivitydetailPage]
})
export class ActivitydetailPageModule { }
