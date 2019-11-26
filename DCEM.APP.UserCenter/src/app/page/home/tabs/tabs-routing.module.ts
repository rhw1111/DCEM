import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'community',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../../community/index/index.module').then(m => m.IndexPageModule)
                    }
                ]
            },
            {
                path: 'charging',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../../charging/index/index.module').then(m => m.IndexPageModule)
                    }
                ]
            },
            {
                path: 'carcenter',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../../carcenter/index/index.module').then(m => m.IndexPageModule)
                    }
                ]
            },
            {
                path: 'servicecenter',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../../servicecenter/index/index.module').then(m => m.IndexPageModule)
                    }
                ]
            },
            {
                path: 'personalcenter',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../../personalcenter/index/index.module').then(m => m.IndexPageModule)
                    }
                ]
            },

            {
                path: '',
                redirectTo: '/tabs/carcenter',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/carcenter',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule { }
