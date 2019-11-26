import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/tabs/tabs.module').then(m => m.TabsPageModule)
    },
    //{
    //    path: 'index',
    //    loadChildren: () => import('./community/index/index.module').then(m => m.IndexPageModule)
    //}
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
