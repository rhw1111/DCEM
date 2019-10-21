import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
const routes = [
    {
        path: '', component: TabsPage,
        children: [
            {
                path: 'index',
                loadChildren: () => import('../index/index.module').then(m => m.IndexPageModule)
            },
            {
                path: 'message',
                loadChildren: () => import('../message/message.module').then(m => m.MessagePageModule)
            },
            {
                path: 'mywork',
                loadChildren: () => import('../mywork/mywork.module').then(m => m.MyworkPageModule)
            },
            {
                path: '',
                redirectTo: 'index',
                pathMatch: 'full'
            }
        ]
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], TabsPageRoutingModule);
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs.router.module.js.map