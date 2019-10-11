import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TestDriveDetailPage } from './test-drive-detail.page';
const routes = [
    {
        path: '',
        component: TestDriveDetailPage
    }
];
let TestDriveDetailPageModule = class TestDriveDetailPageModule {
};
TestDriveDetailPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [TestDriveDetailPage]
    })
], TestDriveDetailPageModule);
export { TestDriveDetailPageModule };
//# sourceMappingURL=test-drive-detail.module.js.map