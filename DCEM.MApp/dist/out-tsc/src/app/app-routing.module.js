import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
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
                path: 'mycustomer',
                children: [
                    { path: 'list', loadChildren: './serving/my-customer.com/list/list.module#ListPageModule' },
                    { path: 'detail', loadChildren: './serving/my-customer.com/detail/detail.module#DetailPageModule' },
                    { path: 'select', loadChildren: './serving/my-customer.com/select/select.module#SelectPageModule' },
                    { path: 'edit', loadChildren: './serving/my-customer.com/edit/edit.module#EditPageModule' }
                ]
            },
            {
                path: 'reservation',
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
                path: 'sc',
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
                path: 'ri',
                children: [
                    { path: 'list', loadChildren: './serving/reception-interrogation.com/list/list.module#ListPageModule' },
                    { path: 'detail', loadChildren: './serving/reception-interrogation.com/detail/detail.module#DetailPageModule' },
                    { path: 'edit', loadChildren: './serving/reception-interrogation.com/edit/edit.module#EditPageModule' },
                    { path: 'edit2', loadChildren: './serving/reception-interrogation.com/edit2/edit2.module#Edit2PageModule' },
                    { path: 'success', loadChildren: './serving/reception-interrogation.com/success/success.module#SuccessPageModule' }
                ]
            },
            {
                path: 'ts',
                children: [
                    { path: 'list', loadChildren: './serving/technical-support.com/list/list.module#ListPageModule' },
                    { path: 'detail', loadChildren: './serving/technical-support.com/detail/detail.module#DetailPageModule' },
                    { path: 'edit', loadChildren: './serving/technical-support.com/edit/edit.module#EditPageModule' },
                    { path: 'success', loadChildren: './serving/technical-support.com/success/success.module#SuccessPageModule' }
                ]
            },
            {
                path: 'report',
                children: [
                    { path: 'analytics', loadChildren: './serving/report/analytics/analytics.module#AnalyticsPageModule' },
                    { path: 'appointmentstatistics', loadChildren: './serving/report/appointmentstatistics/appointmentstatistics.module#AppointmentstatisticsPageModule' },
                    { path: 'appointmenttrend', loadChildren: './serving/report/appointmenttrend/appointmenttrend.module#AppointmenttrendPageModule' },
                    { path: 'testdriverate', loadChildren: './serving/report/testdriverate/testdriverate.module#TestdriveratePageModule' }
                ]
            },
            {
                path: 'spmdspstock',
                children: [
                    { path: 'list', loadChildren: './serving/spmdspstock.com/list/list.module#ListPageModule' },
                ]
            },
        ],
    },
    {
        path: 'saleing',
        children: [
            {
                path: 'lead',
                children: [
                    { path: 'list', loadChildren: './saleing/lead.com/list/list.module#ListPageModule' },
                    { path: 'edit', loadChildren: './saleing/lead.com/edit/edit.module#EditPageModule' },
                    { path: 'detail', loadChildren: './saleing/lead.com/detail/detail.module#DetailPageModule' },
                    { path: 'success', loadChildren: './saleing/lead.com/success/success.module#successPageModule' }
                ]
            },
            {
                path: 'onlylead',
                children: [
                    { path: 'list', loadChildren: './saleing/mcs-onlylead.com/list/list.module#ListPageModule' },
                    { path: 'edit', loadChildren: './saleing/mcs-onlylead.com/edit/edit.module#EditPageModule' },
                    { path: 'detail', loadChildren: './saleing/mcs-onlylead.com/detail/detail.module#DetailPageModule' },
                    { path: 'success', loadChildren: './saleing/mcs-onlylead.com/success/success.module#successPageModule' }
                ]
            },
            {
                path: 'contactrecord',
                children: [
                    { path: 'list', loadChildren: './saleing/mcs-contactrecord/list/list.module#ListPageModule' },
                    { path: 'edit', loadChildren: './saleing/mcs-contactrecord/edit/edit.module#EditPageModule' },
                ]
            },
            {
                path: 'cultivatetask',
                children: [
                    { path: 'list', loadChildren: './saleing/mcs-cultivatetask.com/list/list.module#ListPageModule' },
                    { path: 'edit', loadChildren: './saleing/mcs-cultivatetask.com/edit/edit.module#EditPageModule' },
                    { path: 'detail', loadChildren: './saleing/mcs-cultivatetask.com/detail/detail.module#DetailPageModule' },
                    { path: 'success', loadChildren: './saleing/mcs-cultivatetask.com/success/success.module#successPageModule' },
                ]
            },
            {
                path: 'account',
                children: [
                    { path: 'list', loadChildren: './saleing/mcs-account.com/list/list.module#ListPageModule' },
                    { path: 'edit', loadChildren: './saleing/mcs-account.com/edit/edit.module#EditPageModule' },
                    { path: 'detail', loadChildren: './saleing/mcs-account.com/detail/detail.module#DetailPageModule' },
                    { path: 'success', loadChildren: './saleing/mcs-account.com/success/success.module#SuccessPageModule' }
                ]
            },
            {
                path: 'delivery',
                children: [
                    { path: 'list', loadChildren: './saleing/delivery/list/list.module#ListPageModule' },
                    { path: 'edit', loadChildren: './saleing/delivery/edit/edit.module#EditPageModule' },
                    { path: 'detail', loadChildren: './saleing/delivery/detail/detail.module#DetailPageModule' },
                    { path: 'success', loadChildren: './saleing/delivery/success/success.module#SuccessPageModule' },
                    { path: 'timeline', loadChildren: './saleing/delivery/timeline/timeline.module#TimelinePageModule' },
                    { path: 'appointment', loadChildren: './saleing/delivery/appointment/appointment.module#AppointmentPageModule' },
                    { path: 'pdiservice', loadChildren: './saleing/delivery/pdiservice/pdiservice.module#PdiservicePageModule' }
                ]
            },
            {
                path: 'deliverycentercarstock',
                children: [
                    { path: 'list', loadChildren: './saleing/mcs-deliverycentercarstock.com/list/list.module#ListPageModule' },
                    { path: 'detail', loadChildren: './saleing/mcs-deliverycentercarstock.com/detail/detail.module#DetailPageModule' }
                ]
            },
            {
                path: 'vehorder',
                children: [
                    { path: 'list', loadChildren: './saleing/mc-vehorder.com/list/list.module#ListPageModule' },
                    { path: 'detail', loadChildren: './saleing/mc-vehorder.com/detail/detail.module#DetailPageModule' }
                ]
            },
            {
                path: 'orderpaydetail',
                children: [
                    { path: 'detail', loadChildren: './saleing/orderpaydetail/detail/detail.module#DetailPageModule' },
                    { path: 'edit', loadChildren: './saleing/orderpaydetail/edit/edit.module#EditPageModule' }
                ]
            },
            {
                path: 'vehnetwork',
                children: [
                    { path: 'list', loadChildren: './saleing/vehnetwork/list/list.module#ListPageModule' },
                    { path: 'detail', loadChildren: './saleing/vehnetwork/detail/detail.module#DetailPageModule' },
                    { path: 'success', loadChildren: './saleing/vehnetwork/success/success.module#SuccessPageModule' },
                ]
            },
            {
                path: 'vehlisense',
                children: [
                    { path: 'list', loadChildren: './saleing/vehlisense/list/list.module#ListPageModule' },
                    { path: 'detail', loadChildren: './saleing/vehlisense/detail/detail.module#DetailPageModule' },
                    { path: 'success', loadChildren: './saleing/vehlisense/success/success.module#SuccessPageModule' },
                ]
            },
            {
                path: 'surveyorder',
                children: [
                    { path: 'list', loadChildren: './saleing/mcs_surveyorder/list/list.module#ListPageModule' }
                ]
            }
        ]
    },
    {
        path: 'demo',
        children: [
            { path: 'steps', loadChildren: './base/demo/steps/steps.module#StepsPageModule' }
        ]
    },
    { path: 'list', loadChildren: './saleing/mcs_surveyorder/list/list.module#ListPageModule' },
    { path: 'fileupload-test', loadChildren: './serving/serving.ser/components/fileupload-test/fileupload-test.module#FileuploadTestPageModule' }
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