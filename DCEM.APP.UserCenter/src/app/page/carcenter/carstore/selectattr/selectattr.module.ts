
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectattrPageRoutingModule } from './selectattr-routing.module';

import { SelectattrPage } from './selectattr.page';
import { ShareModule } from 'app/component/module/share.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SelectattrPageRoutingModule,
        ShareModule,
    ],
    declarations: [SelectattrPage]
})
export class SelectattrPageModule { }
