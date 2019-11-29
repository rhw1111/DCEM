import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SysPage } from './sys.page';

const routes: Routes = [
  {
    path: '',
    component: SysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SysPageRoutingModule {}
