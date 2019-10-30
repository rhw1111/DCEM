import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditPage } from './edit.page';

const routes: Routes = [
    {
        path: '',
        component: EditPage
    }
];

@NgModule({
    declarations: [EditPage],
    entryComponents: [],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ]
})
export class EditPageModule { }
