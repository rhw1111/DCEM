import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditPage } from './edit.page';
import { SelectCustomerComponent } from 'app/serving/serving.ser/components/select-customer/select-customer.component';

const routes: Routes = [
    {
        path: '',
        component: EditPage
    }
];

@NgModule({
    declarations: [EditPage, SelectCustomerComponent],
    entryComponents: [SelectCustomerComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ]
})
export class EditPageModule { }
