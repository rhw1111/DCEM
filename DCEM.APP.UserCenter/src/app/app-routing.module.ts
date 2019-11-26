import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./page/home/tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'home',
        loadChildren: () => import('./page/home/tabs/tabs.module').then(m => m.TabsPageModule)
    },  {
    path: 'list',
    loadChildren: () => import('./page/servicecenter/vehiclecenter/list/list.module').then( m => m.ListPageModule)
  },

];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
