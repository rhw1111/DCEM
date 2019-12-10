import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectitemPageRoutingModule } from './selectitem-routing.module';

import { SelectitemPage } from './selectitem.page';
import { TopheadModule } from 'app/page/carcenter/carstore/component/assembly/tophead/tophead.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SelectitemPageRoutingModule,
        TopheadModule,
    ],
    declarations: [SelectitemPage]
})
export class SelectitemPageModule { }
