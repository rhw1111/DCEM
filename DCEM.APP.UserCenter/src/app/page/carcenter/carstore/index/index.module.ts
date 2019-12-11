
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { IndexPageRoutingModule } from './index-routing.module';

import { IndexPage } from './index.page';
import { TopheadModule } from 'app/page/carcenter/carstore/component/assembly/tophead/tophead.module';
import { SpeclistModule } from 'app/page/carcenter/carstore/component/model/speclist/speclist.module';

@NgModule({
    entryComponents: [],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        IndexPageRoutingModule,
        TopheadModule,
        SpeclistModule
    ],
    declarations: [IndexPage]
})
export class IndexPageModule { }
