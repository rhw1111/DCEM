import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IndexPage } from './index.page';
import { ShareModule } from 'app/component/module/share.module';
@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ShareModule,
        RouterModule.forChild([{ path: '', component: IndexPage }])
    ],
    declarations: [IndexPage]
})
export class IndexPageModule { }
