import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: '../home/home.module#HomePageModule'
                    }
                ]
            },
            {
                path: 'appointment',
                children: [
                    {
                        path: '',
                        loadChildren: '../appointment/appointment.module#AppointmentPageModule'
                    }
                ]
            },
            {
                path: 'analytics',
                children: [
                    {
                        path: '',
                        loadChildren: '../analytics/analytics.module#AnalyticsPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'tabs/home',
                pathMatch: 'full'
            }
        ]
      },
        {
            path: '',
            redirectTo: 'tabs/home',
            pathMatch: 'full'
        }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {}