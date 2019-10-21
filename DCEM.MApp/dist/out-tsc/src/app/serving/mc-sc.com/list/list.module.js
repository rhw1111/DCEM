import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListPage } from './list.page';
const routes = [
    {
        path: '',
        component: ListPage
    }
];
let ListPageModule = class ListPageModule {
};
ListPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ListPage]
    })
], ListPageModule);
export { ListPageModule };
//# sourceMappingURL=list.module.js.map