import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    //{ path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'test-drive-add', loadChildren: './test-drive-add/test-drive-add.module#TestDriveAddPageModule' },
    { path: 'test-drive-detail', loadChildren: './test-drive-detail/test-drive-detail.module#TestDriveDetailPageModule' },
    { path: 'appointment', loadChildren: './appointment/appointment.module#AppointmentPageModule' },
    { path: 'appointmentstatistics', loadChildren: './report/appointmentstatistics/appointmentstatistics.module#AppointmentstatisticsPageModule' },
    { path: 'appointmenttrend', loadChildren: './report/appointmenttrend/appointmenttrend.module#AppointmenttrendPageModule' },
    { path: 'testdriverate', loadChildren: './report/testdriverate/testdriverate.module#TestdriveratePageModule' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map