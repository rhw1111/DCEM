import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SuccessPage } from './success.page';
const routes = [
    {
        path: '',
        component: SuccessPage
    }
];
let SuccessPageModule = class SuccessPageModule {
};
SuccessPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [SuccessPage]
    })
], SuccessPageModule);
export { SuccessPageModule };
//# sourceMappingURL=success.module.js.map