import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BerecordedPageRoutingModule } from './berecorded-routing.module';

import { BerecordedPage } from './berecorded.page';
import { TopheadModule } from 'app/component/assembly/tophead/tophead.module';
import { Media } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
@NgModule({
    imports: [
        TopheadModule,
        CommonModule,
        FormsModule,
        IonicModule,
        BerecordedPageRoutingModule
    ],
    declarations: [BerecordedPage],
    providers: [Media, File]
})
export class BerecordedPageModule { }
