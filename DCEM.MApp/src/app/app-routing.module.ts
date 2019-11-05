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
        ]
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
                path: 'mycustomer',  //我的客户
                children: [
                    { path: 'list', loadChildren: './serving/my-customer.com/list/list.module#ListPageModule' },
                    { path: 'detail', loadChildren: './serving/my-customer.com/detail/detail.module#DetailPageModule' },
                    { path: 'select', loadChildren: './serving/my-customer.com/select/select.module#SelectPageModule' }
                ]
            },
            {
                path: 'reservation',//预约
                children: [
                    { path: 'list', loadChildren: './serving/mc-reservation.com/list/list.module#ListPageModule' },
                    { path: 'detail', loadChildren: './serving/mc-reservation.com/detail/detail.module#DetailPageModule' },
                    { path: 'edit', loadChildren: './serving/mc-reservation.com/edit/edit.module#EditPageModule' },
                    { path: 'success', loadChildren: './serving/mc-reservation.com/success/success.module#SuccessPageModule' },
                    { path: 'cancel', loadChildren: './serving/mc-reservation.com/cancel/cancel.module#CancelPageModule' },
                    { path: 'calendar', loadChildren: './serving/mc-reservation.com/calendar/calendar.module#CalendarPageModule' }
                ]
            },
            {
                path: 'sc',  //服务委托书
                children: [
                    { path: 'list', loadChildren: './serving/mc-sc.com/list/list.module#ListPageModule' },
                    { path: 'detail', loadChildren: './serving/mc-sc.com/detail/detail.module#DetailPageModule' },
                    { path: 'edit', loadChildren: './serving/mc-sc.com/edit/edit.module#EditPageModule' },
                    { path: 'edit2', loadChildren: './serving/mc-sc.com/edit2/edit2.module#Edit2PageModule' },
                    { path: 'subeditworking', loadChildren: './serving/mc-sc.com/subeditworking/subeditworking.module#SubeditworkingPageModule' },
                    { path: 'subeditpart', loadChildren: './serving/mc-sc.com/subeditpart/subeditpart.module#SubeditpartPageModule' },
                    { path: 'success', loadChildren: './serving/mc-sc.com/success/success.module#SuccessPageModule' }
                ]
            },
            {
                path: 'resume',
                children: [
                    { path: 'list', loadChildren: './serving/mc-resume.com/list/list.module#ListPageModule' },
                    { path: 'detail', loadChildren: './serving/mc-resume.com/detail/detail.module#DetailPageModule' },
                    { path: 'edit', loadChildren: './serving/mc-resume.com/edit/edit.module#EditPageModule' },
                    { path: 'success', loadChildren: './serving/mc-resume.com/success/success.module#SuccessPageModule' }
                ]
            },
            {
                path: 'ri',  //维保接待问诊
                children: [
                    { path: 'list', loadChildren: './serving/reception-interrogation.com/list/list.module#ListPageModule' },
                    { path: 'detail', loadChildren: './serving/reception-interrogation.com/detail/detail.module#DetailPageModule' },
                    { path: 'edit', loadChildren: './serving/reception-interrogation.com/edit/edit.module#EditPageModule' },
                    { path: 'edit2', loadChildren: './serving/reception-interrogation.com/edit2/edit2.module#Edit2PageModule' },
                    { path: 'success', loadChildren: './serving/reception-interrogation.com/success/success.module#SuccessPageModule' }
                ]
            },
            {
                path: 'ts',//技术支持
                children: [
                    { path: 'list', loadChildren: './serving/technical-support.com/list/list.module#ListPageModule' },
                    { path: 'detail', loadChildren: './serving/technical-support.com/detail/detail.module#DetailPageModule' },
                    { path: 'edit', loadChildren: './serving/technical-support.com/edit/edit.module#EditPageModule' },
                    { path: 'success', loadChildren: './serving/technical-support.com/success/success.module#SuccessPageModule'}
                ]
            },
            {
                path: 'report',//技术支持
                children: [
                    { path: 'analytics', loadChildren: './serving/report/analytics/analytics.module#AnalyticsPageModule' },
                    { path: 'appointmentstatistics', loadChildren: './serving/report/appointmentstatistics/appointmentstatistics.module#AppointmentstatisticsPageModule' },
                    { path: 'appointmenttrend', loadChildren: './serving/report/appointmenttrend/appointmenttrend.module#AppointmenttrendPageModule' },
                    { path: 'testdriverate', loadChildren: './serving/report/testdriverate/testdriverate.module#TestdriveratePageModule' }
                ]
            },
        ],
    },
    {
        path:'saleing',//销售助手
        children:[
            {
                path:'lead',//原始线索
                children:[
                    { path: 'list', loadChildren: './saleing/lead.com/list/list.module#ListPageModule' },
                    { path: 'edit', loadChildren: './saleing/lead.com/edit/edit.module#EditPageModule' },
                    { path: 'detail', loadChildren: './saleing/lead.com/detail/detail.module#DetailPageModule' },
                    { path: 'sucess', loadChildren: './saleing/lead.com/sucess/sucess.module#SucessPageModule' }
                ]
            },
            {
                path:'onlylead',//唯一线索
                children:[
                    { path: 'list', loadChildren: './saleing/mcs-onlylead.com/list/list.module#ListPageModule' },
                    { path: 'edit', loadChildren: './saleing/mcs-onlylead.com/edit/edit.module#EditPageModule' },
                    { path: 'detail', loadChildren: './saleing/mcs-onlylead.com/detail/detail.module#DetailPageModule' },
                    { path: 'sucess', loadChildren: './saleing/mcs-onlylead.com/sucess/sucess.module#SucessPageModule' }
                ]
            },
            {
                path:'contactrecord',//联络记录
                children:[
                    { path: 'list', loadChildren: './saleing/mcs-contactrecord/list/list.module#ListPageModule' },
                    { path: 'edit', loadChildren: './saleing/mcs-contactrecord/edit/edit.module#EditPageModule' },
                ]
            },
            {
                path:'cultivatetask',//培育任务
                children:[
                    { path: 'list', loadChildren: './saleing/mcs-cultivatetask.com/list/list.module#ListPageModule' },
                    { path: 'edit', loadChildren: './saleing/mcs-cultivatetask.com/edit/edit.module#EditPageModule' },
                    { path: 'detail', loadChildren: './saleing/mcs-cultivatetask.com/detail/detail.module#DetailPageModule' },
                    { path: 'sucess', loadChildren: './saleing/mcs-cultivatetask.com/sucess/sucess.module#SucessPageModule' },
                ]
            },
            {
                path:'account',//门店销售机会
                children:[
                    { path: 'list', loadChildren: './saleing/mcs-account.com/list/list.module#ListPageModule' },
                    { path: 'edit', loadChildren: './saleing/mcs-account.com/edit/edit.module#EditPageModule' },
                    { path: 'detail', loadChildren: './saleing/mcs-account.com/detail/detail.module#DetailPageModule' }
                ]
            }
        ]
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
