import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectDealerDemoPageRoutingModule } from './select-dealer-demo-routing.module';

import { SelectDealerDemoPage } from './select-dealer-demo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectDealerDemoPageRoutingModule
  ],
  declarations: [SelectDealerDemoPage]
})
export class SelectDealerDemoPageModule {}
