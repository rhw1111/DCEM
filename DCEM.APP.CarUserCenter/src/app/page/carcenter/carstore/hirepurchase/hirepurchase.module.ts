import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HirepurchasePageRoutingModule } from './hirepurchase-routing.module';

import { HirepurchasePage } from './hirepurchase.page';
import { TopheadModule } from 'app/component/assembly/tophead/tophead.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HirepurchasePageRoutingModule,
        TopheadModule
    ],
    declarations: [HirepurchasePage]
})
export class HirepurchasePageModule { }
