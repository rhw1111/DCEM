import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivacypolicyPageRoutingModule } from './privacypolicy-routing.module';

import { PrivacypolicyPage } from './privacypolicy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivacypolicyPageRoutingModule
  ],
  declarations: [PrivacypolicyPage]
})
export class PrivacypolicyPageModule {}
