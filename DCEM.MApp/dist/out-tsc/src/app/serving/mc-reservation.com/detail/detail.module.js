import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DetailPage } from './detail.page';
const routes = [
    {
        path: '',
        component: DetailPage
    }
];
let DetailPageModule = class DetailPageModule {
};
DetailPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DetailPage]
    })
], DetailPageModule);
export { DetailPageModule };
//# sourceMappingURL=detail.module.js.map