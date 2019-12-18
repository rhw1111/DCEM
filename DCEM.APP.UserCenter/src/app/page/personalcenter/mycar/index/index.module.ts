import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexPageRoutingModule } from './index-routing.module';

import { IndexPage } from './index.page';
import { TopheadModule } from 'app/component/assembly/tophead/tophead.module';
@NgModule({
    imports: [
        TopheadModule,
        CommonModule,
        FormsModule,
        IonicModule,
        IndexPageRoutingModule
    ],
    declarations: [IndexPage]
})
export class IndexPageModule { }
