import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Edit2Page } from './edit2.page';

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
    declarations: [Edit2Page],
    entryComponents: [],
})
export class Edit2PageModule { }
