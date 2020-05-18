import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarcontrolPageRoutingModule } from './carcontrol-routing.module';

import { CarcontrolPage } from './carcontrol.page';
import { TopheadModule } from 'app/component/assembly/tophead/tophead.module';
@NgModule({
    imports: [
        TopheadModule,
        CommonModule,
        FormsModule,
        IonicModule,
        CarcontrolPageRoutingModule
    ],
    declarations: [CarcontrolPage]
})
export class CarcontrolPageModule { }
