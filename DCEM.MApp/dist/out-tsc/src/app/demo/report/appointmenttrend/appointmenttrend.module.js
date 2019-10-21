import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppointmenttrendPage } from './appointmenttrend.page';
const routes = [
    {
        path: '',
        component: AppointmenttrendPage
    }
];
let AppointmenttrendPageModule = class AppointmenttrendPageModule {
};
AppointmenttrendPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [AppointmenttrendPage]
    })
], AppointmenttrendPageModule);
export { AppointmenttrendPageModule };
//# sourceMappingURL=appointmenttrend.module.js.map