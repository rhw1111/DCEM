import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: '', component: TabsPage,
        children: [
            {
                path: 'index',
                loadChildren: () =>
                    import('../index/index.module').then(m => m.IndexPageModule)
            },
            {
                path: 'message',
                loadChildren: () =>
                    import('../message/message.module').then(m => m.MessagePageModule)
            },
            {
                path: 'mywork',
                loadChildren: () =>
                    import('../mywork/mywork.module').then(m => m.MyworkPageModule)
            },
            {
                path: '',
                redirectTo: 'index',
                pathMatch: 'full'
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule { }