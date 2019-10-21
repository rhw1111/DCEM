import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MessagePage } from './message.page';
const routes = [
    {
        path: '',
        component: MessagePage
    }
];
let MessagePageModule = class MessagePageModule {
};
MessagePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [MessagePage]
    })
], MessagePageModule);
export { MessagePageModule };
//# sourceMappingURL=message.module.js.map