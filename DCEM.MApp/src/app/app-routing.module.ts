import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' },
   //{ path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
   { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
   { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
