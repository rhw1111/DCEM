import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckPageRoutingModule } from './check-routing.module';

import { CheckPage } from './check.page';
import { ShareModule } from 'app/component/module/share.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CheckPageRoutingModule,
        ShareModule
    ],
    declarations: [CheckPage]
})
export class CheckPageModule { }
