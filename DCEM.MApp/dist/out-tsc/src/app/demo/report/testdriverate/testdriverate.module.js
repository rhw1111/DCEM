import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TestdriveratePage } from './testdriverate.page';
const routes = [
    {
        path: '',
        component: TestdriveratePage
    }
];
let TestdriveratePageModule = class TestdriveratePageModule {
};
TestdriveratePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [TestdriveratePage]
    })
], TestdriveratePageModule);
export { TestdriveratePageModule };
//# sourceMappingURL=testdriverate.module.js.map