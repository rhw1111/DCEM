import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TestDriveAddPage } from './test-drive-add.page';
const routes = [
    {
        path: '',
        component: TestDriveAddPage
    }
];
let TestDriveAddPageModule = class TestDriveAddPageModule {
};
TestDriveAddPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [TestDriveAddPage]
    })
], TestDriveAddPageModule);
export { TestDriveAddPageModule };
//# sourceMappingURL=test-drive-add.module.js.map