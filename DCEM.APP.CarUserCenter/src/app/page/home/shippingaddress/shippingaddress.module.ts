import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShippingaddressPageRoutingModule } from './shippingaddress-routing.module';

import { ShippingaddressPage } from './shippingaddress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShippingaddressPageRoutingModule
  ],
  declarations: [ShippingaddressPage]
})
export class ShippingaddressPageModule {}
