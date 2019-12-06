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
            { path: 'tabs', loadChildren: () => import('./page/home/tabs/tabs.module').then(m => m.TabsPageModule) },
        ]
    },
    {
        path: 'carcenter',  //汽车中心(爱车)
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
    },
    {
        path: 'charging',  //充电桩
        children: [
            { path: 'index', loadChildren: () => import('./page/charging/index/index.module').then(m => m.IndexPageModule) },
        ]
    },
    {
        path: 'community',  //社区
        children: [
            { path: 'index', loadChildren: () => import('./page/community/index/index.module').then(m => m.IndexPageModule) },
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
                path: 'scores',
                children: [
                    {
                        path: 'list',
                        loadChildren: () => import('./page/personalcenter/scores/list/list.module').then(m => m.ListPageModule)
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
                        ]
                    },
                    {
                        path: 'carorder',
                        children: [
                            {
                                path: 'list',
                                loadChildren: () => import('./page/personalcenter/myorder/carorder/list/list.module').then(m => m.ListPageModule)
                            }
                        ]
                    }

                ]
            },
            { path: 'index', loadChildren: () => import('./page/personalcenter/index/index.module').then(m => m.IndexPageModule) },

        ]
    },
    {
        path: 'message',  //消息中心
        children: [
            { path: 'index', loadChildren: () => import('./page/message/index/index.module').then(m => m.IndexPageModule) },
            { path: 'room', loadChildren: () => import('./page/message/room/room.module').then(m => m.RoomPageModule) },
            { path: 'sys', loadChildren: () => import('./page/message/sys/sys.module').then(m => m.SysPageModule) },
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
                    { path: 'success', loadChildren: () => import('./page/servicecenter/reservation/success/success.module').then(m => m.SuccessPageModule) }
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
        ]
    },
    {
        path: 'testdrive',  //试乘试驾
        children: [
            { path: 'edit', loadChildren: () => import('./page/testdrive/edit/edit.module').then(m => m.EditPageModule) },
            { path: 'list', loadChildren: () => import('./page/testdrive/list/list.module').then(m => m.ListPageModule) },
            { path: 'success', loadChildren: () => import('./page/testdrive/success/success.module').then(m => m.SuccessPageModule) },
        ]
    },
    {
        path: 'testdriveFeedback',  //试乘试驾反馈报告
        children: [
            { path: 'detail', loadChildren: () => import('./page/testdrivefeedback/detail/detail.module').then(m => m.DetailPageModule) },
            { path: 'list', loadChildren: () => import('./page/testdrivefeedback/list/list.module').then(m => m.ListPageModule) },

        ]
    },


    {
        path: 'detail',
        loadChildren: () => import('./page/servicecenter/vehiclecenter/detail/detail.module').then(m => m.DetailPageModule)
    },
    {
        path: 'list',
        loadChildren: () => import('./page/servicecenter/boutique/list/list.module').then(m => m.ListPageModule)
    },
    {
        path: 'detail',
        loadChildren: () => import('./page/servicecenter/boutique/detail/detail.module').then(m => m.DetailPageModule)
    },
    {
        path: 'list',
        loadChildren: () => import('./page/servicecenter/shoppingcart/list/list.module').then(m => m.ListPageModule)
    },
    {
        path: 'demo',
        children: [
            {
                path: 'dealer',
                loadChildren: () => import('./component/demo/select-dealer-demo/select-dealer-demo.module').then(m => m.SelectDealerDemoPageModule)
            }
        ]
    },
    {
        path: 'set',
        loadChildren: () => import('./page/home/set/set.module').then(m => m.SetPageModule)
    },
    {
        path: 'preorder',
        loadChildren: () => import('./page/servicecenter/preorder/preorder/preorder.module').then(m => m.PreorderPageModule)
    },
    {
        path: 'payment',
        loadChildren: () => import('./page/servicecenter/payment/payment/payment.module').then(m => m.PaymentPageModule)
    },
    {
        path: 'shippingaddress',
        loadChildren: () => import('./page/home/shippingaddress/shippingaddress.module').then(m => m.ShippingaddressPageModule)
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
