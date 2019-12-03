
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { IndexPageRoutingModule } from './index-routing.module';

import { IndexPage } from './index.page';
import { SpeclistComponent } from 'app/page/carcenter/carstore/component/model/speclist/speclist.component';


@NgModule({
    entryComponents: [SpeclistComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        IndexPageRoutingModule
    ],
    declarations: [IndexPage, SpeclistComponent]
})
export class IndexPageModule { }
