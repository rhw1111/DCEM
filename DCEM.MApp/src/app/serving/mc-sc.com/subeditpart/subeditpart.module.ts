import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SubeditpartPage } from './subeditpart.page';

const routes: Routes = [
    {
        path: '',
        component: SubeditpartPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [SubeditpartPage],
    entryComponents: [SubeditpartPage],
})
export class SubeditpartPageModule { }
