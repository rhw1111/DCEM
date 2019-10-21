import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TestpagePage } from './testpage.page';
const routes = [
    {
        path: '',
        component: TestpagePage
    }
];
let TestpagePageModule = class TestpagePageModule {
};
TestpagePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [TestpagePage]
    })
], TestpagePageModule);
export { TestpagePageModule };
//# sourceMappingURL=testpage.module.js.map