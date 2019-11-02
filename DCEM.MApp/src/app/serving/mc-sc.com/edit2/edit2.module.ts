import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Edit2Page } from './edit2.page';
import { SubeditworkingPage } from 'app/serving/mc-sc.com/subeditworking/subeditworking.page';
import { SubeditpartPage } from 'app/serving/mc-sc.com/subeditpart/subeditpart.page';
const routes: Routes = [
    {
        path: '',
        component: Edit2Page
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [Edit2Page, SubeditworkingPage, SubeditpartPage],
    entryComponents: [SubeditworkingPage, SubeditpartPage],
})
export class Edit2PageModule { }
