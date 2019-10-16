import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './base/login.com/login/login.module#LoginPageModule' },
  { path: 'tabs', loadChildren: './demo/tabs/tabs.module#TabsPageModule' },
  { path: 'test-drive-add', loadChildren: './demo/test-drive-add/test-drive-add.module#TestDriveAddPageModule' },
  { path: 'test-drive-detail', loadChildren: './demo/test-drive-detail/test-drive-detail.module#TestDriveDetailPageModule' },
  { path: 'appointment', loadChildren: './demo/appointment/appointment.module#AppointmentPageModule' },
  { path: 'appointmentstatistics', loadChildren: './demo/report/appointmentstatistics/appointmentstatistics.module#AppointmentstatisticsPageModule' },
  { path: 'appointmenttrend', loadChildren: './demo/report/appointmenttrend/appointmenttrend.module#AppointmenttrendPageModule' },
  { path: 'testdriverate', loadChildren: './demo/report/testdriverate/testdriverate.module#TestdriveratePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
