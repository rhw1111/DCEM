import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EditPage } from './edit.page';
import { SelectCustomerComponent } from '../../serving.ser/components/select-customer/select-customer.component';
const routes = [
    {
        path: '',
        component: EditPage
    }
];
let EditPageModule = class EditPageModule {
};
EditPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        entryComponents: [SelectCustomerComponent],
        declarations: [EditPage, SelectCustomerComponent]
    })
], EditPageModule);
export { EditPageModule };
//# sourceMappingURL=edit.module.js.map