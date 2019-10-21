import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SelectPage } from './select.page';
const routes = [
    {
        path: '',
        component: SelectPage
    }
];
let SelectPageModule = class SelectPageModule {
};
SelectPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [SelectPage]
    })
], SelectPageModule);
export { SelectPageModule };
//# sourceMappingURL=select.module.js.map