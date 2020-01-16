import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityintroPageRoutingModule } from './activityintro-routing.module';

import { ActivityintroPage } from './activityintro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityintroPageRoutingModule
  ],
  declarations: [ActivityintroPage]
})
export class ActivityintroPageModule {}
