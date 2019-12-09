import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreorderPage } from './preorder.page';

const routes: Routes = [
  {
    path: '',
    component: PreorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreorderPageRoutingModule {}
