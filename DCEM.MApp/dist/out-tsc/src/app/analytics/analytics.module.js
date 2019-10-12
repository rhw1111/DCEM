import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AnalyticsPage } from './analytics.page';
const routes = [
    {
        path: '',
        component: AnalyticsPage
    }
];
let AnalyticsPageModule = class AnalyticsPageModule {
};
AnalyticsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [AnalyticsPage]
    })
], AnalyticsPageModule);
export { AnalyticsPageModule };
//# sourceMappingURL=analytics.module.js.map