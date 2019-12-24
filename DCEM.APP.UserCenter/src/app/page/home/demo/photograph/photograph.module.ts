import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotographPageRoutingModule } from './photograph-routing.module';

import { PhotographPage } from './photograph.page';
import { TopheadModule } from 'app/component/assembly/tophead/tophead.module';
import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
    imports: [
        TopheadModule,
        CommonModule,
        FormsModule,
        IonicModule,
        PhotographPageRoutingModule,

    ],
    declarations: [PhotographPage],
    providers: [Camera]
})
export class PhotographPageModule { }
