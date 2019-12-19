import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarconditionPageRoutingModule } from './carcondition-routing.module';

import { CarconditionPage } from './carcondition.page';
import { TopheadModule } from 'app/component/assembly/tophead/tophead.module';
@NgModule({
    imports: [
        TopheadModule,
        CommonModule,
        FormsModule,
        IonicModule,
        CarconditionPageRoutingModule
    ],
    declarations: [CarconditionPage]
})
export class CarconditionPageModule { }
