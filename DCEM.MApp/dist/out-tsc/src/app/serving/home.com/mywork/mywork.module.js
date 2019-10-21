import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MyworkPage } from './mywork.page';
const routes = [
    {
        path: '',
        component: MyworkPage
    }
];
let MyworkPageModule = class MyworkPageModule {
};
MyworkPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [MyworkPage]
    })
], MyworkPageModule);
export { MyworkPageModule };
//# sourceMappingURL=mywork.module.js.map