import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HirepurchasePage } from './hirepurchase.page';

const routes: Routes = [
  {
    path: '',
    component: HirepurchasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HirepurchasePageRoutingModule {}
