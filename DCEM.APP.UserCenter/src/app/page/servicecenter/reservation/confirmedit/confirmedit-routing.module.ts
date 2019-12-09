import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmeditPage } from './confirmedit.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmeditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmeditPageRoutingModule {}
