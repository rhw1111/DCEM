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
                    { path: 'welcome', loadChildren: './base/uc.com/welcome/welcome.module#WelcomePageModule' },
                    { path: 'detail', loadChildren: './base/uc.com/detail/detail.module#DetailPageModule' }
                ]
            },
            {
                path:'message',
                children:[
                    { path: 'charts', loadChildren: './base/message.com/charts/charts.module#ChartsPageModule' },
                    { path: 'chat-detail', loadChildren: './base/message.com/chat-detail/chat-detail.module#ChatDetailPageModule' },
                    { path: 'room', loadChildren: './base/message.com/room/room.module#RoomPageModule' },
                    { path: 'activities', loadChildren: './base/message.com/activities/activities.module#ActivitiesPageModule' },
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
                    { path: 'select', loadChildren: './serving/my-customer.com/select/select.module#SelectPageModule' },
                    { path: 'edit', loadChildren: './serving/my-customer.com/edit/edit.module#EditPageModule' }
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
                    { path: 'success', loadChildren: './serving/technical-support.com/success/success.module#SuccessPageModule' }
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
            {
                path: 'spmdspstock',//备件库存
                children: [
                    { path: 'list', loadChildren: './serving/spmdspstock.com/list/list.module#ListPageModule' },
                ]
            },
            {
                path: 'maintenance',//维修保养-预约日历
                children: [
                    { path: 'calendar', loadChildren: './serving/maintenance/calendar/calendar.module#CalendarPageModule' }
                ]
            }
        ],
    },
    {
        path: 'saleing',//销售助手
        children: [
            {
                path: 'lead',//原始线索
                children: [
                    { path: 'list', loadChildren: './saleing/lead.com/list/list.module#ListPageModule' },
                    { path: 'edit', loadChildren: './saleing/lead.com/edit/edit.module#EditPageModule' },
                    { path: 'detail', loadChildren: './saleing/lead.com/detail/detail.module#DetailPageModule' },
                    { path: 'success', loadChildren: './saleing/lead.com/success/success.module#successPageModule' }
                ]
            },
            {
                path: 'onlylead',//唯一线索
                children: [
                    { path: 'list', loadChildren: './saleing/mcs-onlylead.com/list/list.module#ListPageModule' },
                    { path: 'edit', loadChildren: './saleing/mcs-onlylead.com/edit/edit.module#EditPageModule' },
                    { path: 'detail', loadChildren: './saleing/mcs-onlylead.com/detail/detail.module#DetailPageModule' },
                    { path: 'success', loadChildren: './saleing/mcs-onlylead.com/success/success.module#successPageModule' }
                ]
            },
            {
                path: 'contactrecord',//联络记录
                children: [
                    { path: 'list', loadChildren: './saleing/mcs-contactrecord/list/list.module#ListPageModule' },
                    { path: 'edit', loadChildren: './saleing/mcs-contactrecord/edit/edit.module#EditPageModule' },
                    { path: 'success', loadChildren: './saleing/mcs-contactrecord/success/success.module#successPageModule' }
                ]
            },
            {
                path: 'cultivatetask',//培育任务
                children: [
                    { path: 'list', loadChildren: './saleing/mcs-cultivatetask.com/list/list.module#ListPageModule' },
                    { path: 'edit', loadChildren: './saleing/mcs-cultivatetask.com/edit/edit.module#EditPageModule' },
                    { path: 'detail', loadChildren: './saleing/mcs-cultivatetask.com/detail/detail.module#DetailPageModule' },
                    { path: 'success', loadChildren: './saleing/mcs-cultivatetask.com/success/success.module#successPageModule' },
                ]
            },
            {
                path: 'account',//门店销售机会
                children: [
                    { path: 'list', loadChildren: './saleing/mcs-account.com/list/list.module#ListPageModule' },
                    { path: 'edit', loadChildren: './saleing/mcs-account.com/edit/edit.module#EditPageModule' },
                    { path: 'detail', loadChildren: './saleing/mcs-account.com/detail/detail.module#DetailPageModule' },
                    { path: 'success', loadChildren: './saleing/mcs-account.com/success/success.module#SuccessPageModule' }
                ]
            },
            {
                path: 'delivery',//整车销售-交车单
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
                path: 'deliverycentercarstock',//整车库存-车辆库存台帐
                children: [
                    { path: 'list', loadChildren: './saleing/mcs-deliverycentercarstock.com/list/list.module#ListPageModule' },
                    { path: 'detail', loadChildren: './saleing/mcs-deliverycentercarstock.com/detail/detail.module#DetailPageModule' }
                ]
            },
            {
                path: 'vehorder',//门店整车订单
                children: [
                    { path: 'list', loadChildren: './saleing/mc-vehorder.com/list/list.module#ListPageModule' },
                    { path: 'detail', loadChildren: './saleing/mc-vehorder.com/detail/detail.module#DetailPageModule' }

                ]
            },
            {
                path: 'orderpaydetail',//交车单-收款记录
                children: [
                    { path: 'detail', loadChildren: './saleing/orderpaydetail/detail/detail.module#DetailPageModule' },
                    { path: 'edit', loadChildren: './saleing/orderpaydetail/edit/edit.module#EditPageModule' }
                ]
            },
            {
                path: 'vehnetwork',//交车单-开票记录
                children: [

                    { path: 'list', loadChildren: './saleing/vehnetwork/list/list.module#ListPageModule' },
                    { path: 'detail', loadChildren: './saleing/vehnetwork/detail/detail.module#DetailPageModule' },
                    { path: 'success', loadChildren: './saleing/vehnetwork/success/success.module#SuccessPageModule' },
                ]
            },
            {
                path: 'vehlisense',//交车单-上牌记录
                children: [

                    { path: 'list', loadChildren: './saleing/vehlisense/list/list.module#ListPageModule' },
                    { path: 'detail', loadChildren: './saleing/vehlisense/detail/detail.module#DetailPageModule' },
                    { path: 'success', loadChildren: './saleing/vehlisense/success/success.module#SuccessPageModule' },
                ]
            },
            {
                path: 'surveyorder',//勘测单-记录
                children: [

                    { path: 'list', loadChildren: './saleing/mcs_surveyorder/list/list.module#ListPageModule' },
                    { path: 'detail', loadChildren: './saleing/mcs_surveyorder/detail/detail.module#DetailPageModule' }
                ]
            },
            {
                path: 'installationorder',//安装单
                children: [

                    { path: 'list', loadChildren: './saleing/mcs_installationorder/list/list.module#ListPageModule' },
                    { path: 'detail', loadChildren: './saleing/mcs_installationorder/detail/detail.module#DetailPageModule' }
                ]
            },
             {
                 path: 'driverecord',//试车试驾
                children: [
                    { path: 'list', loadChildren: './saleing/mcs_driverecord.com/list/list.module#ListPageModule' },
                    { path: 'detail', loadChildren: './saleing/mcs_driverecord.com/detail/detail.module#DetailPageModule' },
                    { path: 'edit', loadChildren: './saleing/mcs_driverecord.com/edit/edit.module#EditPageModule' },
                    { path: 'success', loadChildren: './saleing/mcs_driverecord.com/success/success.module#SuccessPageModule'},
                    { path: 'calendar', loadChildren: './saleing/mcs_driverecord.com/calendar/calendar.module#CalendarPageModule' },
                    { path: 'feedback', loadChildren: './saleing/mcs_driverecord.com/feedback/feedback.module#FeedbackPageModule' }
                ]
            }
        ]
    },
    {
        path: 'demo',//ng.mobile.ant demo
        children: [
            { path: 'steps', loadChildren: './base/demo/steps/steps.module#StepsPageModule' }
        ]
    },
    { path: 'fileupload-test', loadChildren: './serving/serving.ser/components/fileupload-test/fileupload-test.module#FileuploadTestPageModule' },
    { path: 'fileupload', loadChildren: './serving/serving.ser/components/fileupload/fileupload.module#FileuploadPageModule' },
  { path: 'list', loadChildren: './saleing/mcs_installationorder/list/list.module#ListPageModule' },
  { path: 'detail', loadChildren: './saleing/mcs_installationorder/detail/detail.module#DetailPageModule' },
  { path: 'success', loadChildren: './saleing/mcs-contactrecord/success/success.module#SuccessPageModule' },


 


 
 


];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
