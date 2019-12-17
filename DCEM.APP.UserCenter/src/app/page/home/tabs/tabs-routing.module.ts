import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {//社区
                path: 'community',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../../community/index/index.module').then(m => m.IndexPageModule)
                    },
                    {
                        path: 'index',
                        loadChildren: () =>
                            import('../../community/index/index.module').then(m => m.IndexPageModule)
                    }
                ]
            },
            {//消息中心
                path: 'message',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../../message/index/index.module').then(m => m.IndexPageModule)
                    }
                ]
            },

            // {//？
            //     path: 'charging',
            //     children: [
            //         {
            //             path: '',
            //             loadChildren: () =>
            //                 import('../../charging/index/index.module').then(m => m.IndexPageModule)
            //         }
            //     ]
            // },
            {//爱车
                path: 'carcenter',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../../carcenter/index/index.module').then(m => m.IndexPageModule)
                    }
                ]
            },
            {//服务助手
                path: 'servicecenter',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../../servicecenter/index/index.module').then(m => m.IndexPageModule)
                    }
                ]
            },
            {//我的
                path: 'personalcenter',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../../personalcenter/index/index.module').then(m => m.IndexPageModule)
                    },
                    { path: 'index', loadChildren: () => import('../../personalcenter/index/index.module').then(m => m.IndexPageModule) },
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/community',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/community',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule { }
