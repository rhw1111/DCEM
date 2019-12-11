import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentPageRoutingModule } from './payment-routing.module';

import { PaymentPage } from './payment.page';
import { TopheadModule } from 'app/page/carcenter/carstore/component/assembly/tophead/tophead.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PaymentPageRoutingModule,
        TopheadModule
    ],
    declarations: [PaymentPage]
})
export class PaymentPageModule { }
