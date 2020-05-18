import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfectPageRoutingModule } from './perfect-routing.module';

import { PerfectPage } from './perfect.page';
import { TopheadModule } from 'app/component/assembly/tophead/tophead.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PerfectPageRoutingModule,
        TopheadModule
    ],
    declarations: [PerfectPage]
})
export class PerfectPageModule { }
