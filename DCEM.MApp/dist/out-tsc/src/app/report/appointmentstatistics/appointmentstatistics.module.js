import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppointmentstatisticsPage } from './appointmentstatistics.page';
const routes = [
    {
        path: '',
        component: AppointmentstatisticsPage
    }
];
let AppointmentstatisticsPageModule = class AppointmentstatisticsPageModule {
};
AppointmentstatisticsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [AppointmentstatisticsPage]
    })
], AppointmentstatisticsPageModule);
export { AppointmentstatisticsPageModule };
//# sourceMappingURL=appointmentstatistics.module.js.map