import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CancelPage } from './cancel.page';
const routes = [
    {
        path: '',
        component: CancelPage
    }
];
let CancelPageModule = class CancelPageModule {
};
CancelPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [CancelPage]
    })
], CancelPageModule);
export { CancelPageModule };
//# sourceMappingURL=cancel.module.js.map