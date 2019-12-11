import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectitemPageRoutingModule } from './selectitem-routing.module';

import { SelectitemPage } from './selectitem.page';
import { TopheadModule } from 'app/page/carcenter/carstore/component/assembly/tophead/tophead.module';
import { ShareModule } from 'app/component/module/share.module';
import { SpeclistModule } from 'app/page/carcenter/carstore/component/model/speclist/speclist.module';

@NgModule({
    entryComponents: [],
    imports: [
        ShareModule,
        CommonModule,
        FormsModule,
        IonicModule,
        SelectitemPageRoutingModule,
        TopheadModule,
        SpeclistModule,
    ],
    declarations: [SelectitemPage]
})
export class SelectitemPageModule { }
