
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./page/home/tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'home',  //通用目录
        children: [
            {
                path: 'tabs',
                loadChildren: () => import('./page/home/tabs/tabs.module').then(m => m.TabsPageModule)
            },
            {
                path: 'shippingaddress', //收货地址
                loadChildren: () => import('./page/home/shippingaddress/shippingaddress.module').then(m => m.ShippingaddressPageModule)
            },
            {
                path: 'frontcontent',
                loadChildren: () => import('./page/home/frontcontent/frontcontent.module').then(m => m.FrontcontentPageModule)
            },
            {
                path: 'set', //系统设置
                loadChildren: () => import('./page/home/set/set.module').then(m => m.SetPageModule)
            },
            {
                path: 'demo',  // demo
                children: [
                    {
                        path: 'index',
                        loadChildren: () => import('./page/home/demo/index/index.module').then(m => m.IndexPageModule)
                    },

                    {
                        path: 'baidumap',
                        loadChildren: () => import('./page/home/demo/baidumap/baidumap.module').then(m => m.BaidumapPageModule)
                    },

                    {
                        path: 'photograph',
                        loadChildren: () => import('./page/home/demo/photograph/photograph.module').then(m => m.PhotographPageModule)
                    },
                    {
                        path: 'orcode',
                        loadChildren: () => import('./page/home/demo/orcode/orcode.module').then(m => m.OrcodePageModule)
                    },
                ]
            },
        ]
    },
    {
        path: 'carcenter',  //汽车中心(购车)
        children: [
            { path: 'index', loadChildren: () => import('./page/carcenter/index/index.module').then(m => m.IndexPageModule) },
            {
                path: 'carstore',  //整车商城(new)
                children: [
                    {
                        //选择车型版本
                        path: 'index', loadChildren: () => import('./page/carcenter/carstore/index/index.module').then(m => m.IndexPageModule)
                    },
                    {
                        //选择外观内饰
                        path: 'selectattr', loadChildren: () => import('./page/carcenter/carstore/selectattr/selectattr.module').then(m => m.SelectattrPageModule)
                    },
                    {
                        //选择选装件
                        path: 'selectitem', loadChildren: () => import('./page/carcenter/carstore/selectitem/selectitem.module').then(m => m.SelectitemPageModule)
                    },
                    {
                        //核对配置单
                        path: 'check', loadChildren: () => import('./page/carcenter/carstore/check/check.module').then(m => m.CheckPageModule)
                    },
                    {
                        //完善用户信息
                        path: 'perfect', loadChildren: () => import('./page/carcenter/carstore/perfect/perfect.module').then(m => m.PerfectPageModule)
                    },
                    {
                        //支付
                        path: 'payment', loadChildren: () => import('./page/carcenter/carstore/payment/payment.module').then(m => m.PaymentPageModule)
                    },
                    {
                        //分期付款
                        path: 'hirepurchase', loadChildren: () => import('./page/carcenter/carstore/hirepurchase/hirepurchase.module').then(m => m.HirepurchasePageModule)
                    }
                ]
            },
        ]
    }, {
        path: 'community',  //社区
        children: [
            {
                path: 'activitydetail',
                loadChildren: () => import('./page/community/activitydetail/activitydetail.module').then(m => m.ActivitydetailPageModule)
            },
            {
                path: 'newsdetail',
                loadChildren: () => import('./page/community/newsdetail/newsdetail.module').then(m => m.NewsdetailPageModule)
            },

        ]
    },
    {
        path: 'personalcenter',  //用户中心
        children: [
            {
                path: 'config',
                children: [
                    {
                        path: 'about',
                        loadChildren: () => import('./page/personalcenter/config/about/about.module').then(m => m.AboutPageModule)
                    }
                ]
            },
            {
                path: 'userinfo',
                children: [
                    {
                        path: 'detail',
                        loadChildren: () => import('./page/personalcenter/userinfo/detail/detail.module').then(m => m.DetailPageModule)
                    }
                    , {
                        path: 'edit',
                        loadChildren: () => import('./page/personalcenter/userinfo/edit/edit.module').then(m => m.EditPageModule)
                    }

                ]
            },
            {
                path: 'mycar',  //我的汽车
                children: [
                    {
                        path: 'index',  //入口导航
                        loadChildren: () => import('./page/personalcenter/mycar/index/index.module').then(m => m.IndexPageModule)
                    },
                    {
                        path: 'carcondition', //车况
                        loadChildren: () => import('./page/personalcenter/mycar/carcondition/carcondition.module').then(m => m.CarconditionPageModule)
                    },

                    {
                        path: 'carcontrol',  //汽车控制
                        loadChildren: () => import('./page/personalcenter/mycar/carcontrol/carcontrol.module').then(m => m.CarcontrolPageModule)
                    },
                ]
            },
            {
                path: 'scores',
                children: [
                    {
                        path: 'list',
                        loadChildren: () => import('./page/personalcenter/scores/list/list.module').then(m => m.ListPageModule)
                    }
                ]
            },
            {
                path: 'usercarinfo',
                children: [
                    {
                        path: 'list',
                        loadChildren: () => import('./page/personalcenter/usercarinfo/list/list.module').then(m => m.ListPageModule)
                    }
                ]
            },
            {
                path: 'myorder',
                children: [
                    {
                        path: 'index',
                        loadChildren: () => import('./page/personalcenter/myorder/index/index.module').then(m => m.IndexPageModule)
                    },
                    {
                        path: 'fineorder',
                        children: [
                            {
                                path: 'list',
                                loadChildren: () => import('./page/personalcenter/myorder/fineorder/list/list.module').then(m => m.ListPageModule)
                            },
                            {
                                path: 'detail',
                                loadChildren: () => import('./page/personalcenter/myorder/fineorder/detail/detail.module').then(m => m.DetailPageModule)
                            },
                        ]
                    },
                    {
                        path: 'carorder',
                        children: [
                            {
                                path: 'list',
                                loadChildren: () => import('./page/personalcenter/myorder/carorder/list/list.module').then(m => m.ListPageModule)
                            },
                            {
                                path: 'detail',
                                loadChildren: () => import('./page/personalcenter/myorder/carorder/detail/detail.module').then(m => m.DetailPageModule)
                            },
                        ]
                    }

                ]
            },
            {
                path: 'testdrive',  //试乘试驾
                children: [
                    { path: 'edit', loadChildren: () => import('./page/personalcenter/testdrive/edit/edit.module').then(m => m.EditPageModule) },
                    { path: 'list', loadChildren: () => import('./page/personalcenter/testdrive/list/list.module').then(m => m.ListPageModule) },
                    { path: 'success', loadChildren: () => import('./page/personalcenter/testdrive/success/success.module').then(m => m.SuccessPageModule) },
                ]
            },
            {
                path: 'testdriveFeedback',  //试乘试驾反馈报告
                children: [
                    { path: 'detail', loadChildren: () => import('./page/personalcenter/testdrivefeedback/detail/detail.module').then(m => m.DetailPageModule) },
                    { path: 'list', loadChildren: () => import('./page/personalcenter/testdrivefeedback/list/list.module').then(m => m.ListPageModule) },

                ]
            },
         
        ]
    },
    {
        path: 'message',  //消息中心
        children: [
            { path: 'index', loadChildren: () => import('./page/message/index/index.module').then(m => m.IndexPageModule) },
            { path: 'room', loadChildren: () => import('./page/message/room/room.module').then(m => m.RoomPageModule) },
            { path: 'sys', loadChildren: () => import('./page/message/sys/sys.module').then(m => m.SysPageModule) },
            { path: 'noticelist', loadChildren: () => import('./page/message/noticelist/noticelist.module').then(m => m.NoticelistPageModule) },
            { path: 'notice', loadChildren: () => import('./page/message/notice/notice.module').then(m => m.NoticePageModule) },
            {
                path: 'questionsetting',
                loadChildren: () => import('./page/message/questionsetting/questionsetting.module').then(m => m.QuestionsettingPageModule)
            },
        ]
    },
    {
        path: 'servicecenter',  //服务中心
        children: [
            {
                path: 'index', loadChildren: () => import('./page/servicecenter/index/index.module').then(m => m.IndexPageModule)
            },
            {

                path: 'vehiclemall',  //整车商城
                children: [
                    { path: 'list', loadChildren: () => import('./page/servicecenter/vehiclecenter/list/list.module').then(m => m.ListPageModule) },
                    { path: 'detail', loadChildren: () => import('./page/servicecenter/vehiclecenter/detail/detail.module').then(m => m.DetailPageModule) },
                ]
            },
            {
                path: 'boutique',  //精品商城
                children: [
                    { path: 'list', loadChildren: () => import('./page/servicecenter/boutique/list/list.module').then(m => m.ListPageModule) },
                    { path: 'detail', loadChildren: () => import('./page/servicecenter/boutique/detail/detail.module').then(m => m.DetailPageModule) },
                ]
            },
            {
                path: 'dealer',  //体验中心
                children: [
                    { path: 'list', loadChildren: () => import('./page/servicecenter/dealer/list/list.module').then(m => m.ListPageModule) },
                ]
            },
            {
                path: 'shoppingcart',  //购物车
                children: [
                    { path: 'list', loadChildren: () => import('./page/servicecenter/shoppingcart/list/list.module').then(m => m.ListPageModule) },
                ]
            },
            {
                path: 'reservation',  //维保预约
                children: [
                    { path: 'list', loadChildren: () => import('./page/servicecenter/reservation/list/list.module').then(m => m.ListPageModule) },
                    { path: 'edit', loadChildren: () => import('./page/servicecenter/reservation/edit/edit.module').then(m => m.EditPageModule) },
                    { path: 'detail', loadChildren: () => import('./page/servicecenter/reservation/detail/detail.module').then(m => m.DetailPageModule) },
                    { path: 'success', loadChildren: () => import('./page/servicecenter/reservation/success/success.module').then(m => m.SuccessPageModule) },
                    { path: 'confirmedit', loadChildren: () => import('./page/servicecenter/reservation/confirmedit/confirmedit.module').then(m => m.ConfirmeditPageModule) },
                    { path: 'cancel', loadChildren: () => import('./page/servicecenter/reservation/cancel/cancel.module').then(m => m.CancelPageModule) },
                ]
            },
            {
                path: 'preorder',  //提交订单
                children: [
                    { path: 'preorder', loadChildren: () => import('./page/servicecenter/preorder/preorder/preorder.module').then(m => m.PreorderPageModule) }
                ]
            },
            {
                path: 'payment',  //支付
                children: [
                    { path: 'payment', loadChildren: () => import('./page/servicecenter/payment/payment/payment.module').then(m => m.PaymentPageModule) }
                ]
            },
            {
                path: 'category',  //精品分类
                children: [
                    { path: 'list', loadChildren: () => import('./page/servicecenter/category/list/list.module').then(m => m.ListPageModule) },
                ]
            },
            {
                path: 'serviceproxy',  //维修履历
                children: [
                    { path: 'list', loadChildren: () => import('./page/servicecenter/serviceproxy/list/list.module').then(m => m.ListPageModule) },
                    { path: 'detail', loadChildren: () => import('./page/servicecenter/serviceproxy/detail/detail.module').then(m => m.DetailPageModule) },
                ]
            },

        ]
    },
    {
        path: 'carreserve',
        children: [
            {
                path: 'index', loadChildren: () => import('./page/carreserve/index/index.module').then(m => m.IndexPageModule)
            },
            {
                path: 'fillinfo',
                loadChildren: () => import('./page/carreserve/fillinfo/fillinfo.module').then(m => m.FillinfoPageModule)
            },
            {
                path: 'blindorder',  //领预约号
                children: [
                    { path: 'success', loadChildren: () => import('./page/carreserve/blindorder/success/success.module').then(m => m.SuccessPageModule) },
                    { path: 'edit', loadChildren: () => import('./page/carreserve/blindorder/edit/edit.module').then(m => m.EditPageModule) }
                ]
            }
        ]
    },
    
]
;


@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }