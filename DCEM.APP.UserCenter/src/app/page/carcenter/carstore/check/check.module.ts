/// <reference path="../component/assembly/tophead/tophead.module.ts" />
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckPageRoutingModule } from './check-routing.module';

import { CheckPage } from './check.page';
import { ShareModule } from 'app/component/module/share.module';
import { TopheadModule } from 'app/page/carcenter/carstore/component/assembly/tophead/tophead.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CheckPageRoutingModule,
        ShareModule,
        TopheadModule
    ],
    declarations: [CheckPage]
})
export class CheckPageModule { }
