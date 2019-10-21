import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './base/uc.com/welcome/welcome.module#WelcomePageModule' },
    {
        path: 'base',
        children: [
            {
                path: 'uc',
                children: [
                    { path: 'login', loadChildren: './base/uc.com/login/login.module#LoginPageModule' },
                    { path: 'welcome', loadChildren: './base/uc.com/welcome/welcome.module#WelcomePageModule' }
                ]
            }
        ],
    },
    {
        path: 'serving',
        children: [
            {
                path: 'home',
                children: [
                    { path: 'index', loadChildren: './serving/home.com/index/index.module#IndexPageModule' },
                    { path: 'tabs', loadChildren: './serving/home.com/tabs/tabs.module#TabsPageModule' },
                    { path: 'mywork', loadChildren: './serving/home.com/mywork/mywork.module#MyworkPageModule' },
                ]
            },
            {
                path: 'mycustomer',
                children: [
                    { path: 'list', loadChildren: './serving/my-customer.com/list/list.module#ListPageModule' }
                ]
            }
        ],
    },    { path: 'testpage', loadChildren: './demo/testpage/testpage.module#TestpagePageModule' },
    //{ path: 'message', loadChildren: './serving/home.com/message/message.module#MessagePageModule' },
    //{ path: 'mywork', loadChildren: './serving/home.com/mywork/mywork.module#MyworkPageModule' },
    //{ path: 'list', loadChildren: './serving/my-customer.com/list/list.module#ListPageModule' }




    //{ path: 'login', loadChildren: './base/login.com/login/login.module#LoginPageModule' },
    //{ path: 'tabs', loadChildren: './demo/tabs/tabs.module#TabsPageModule' },
    //{ path: 'test-drive-add', loadChildren: './demo/test-drive-add/test-drive-add.module#TestDriveAddPageModule' },
    //{ path: 'test-drive-detail', loadChildren: './demo/test-drive-detail/test-drive-detail.module#TestDriveDetailPageModule' },
    //{ path: 'appointment', loadChildren: './demo/appointment/appointment.module#AppointmentPageModule' },
    //{ path: 'appointmentstatistics', loadChildren: './demo/report/appointmentstatistics/appointmentstatistics.module#AppointmentstatisticsPageModule' },
    //{ path: 'appointmenttrend', loadChildren: './demo/report/appointmenttrend/appointmenttrend.module#AppointmenttrendPageModule' },
    //{ path: 'testdriverate', loadChildren: './demo/report/testdriverate/testdriverate.module#TestdriveratePageModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
