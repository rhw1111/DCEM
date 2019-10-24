import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EditPage } from './edit.page';
const routes = [
    {
        path: '',
        component: EditPage
    }
];
let EditPageModule = class EditPageModule {
};
EditPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EditPage]
    })
], EditPageModule);
export { EditPageModule };
//# sourceMappingURL=edit.module.js.map