import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaidumapPage } from './baidumap.page';

const routes: Routes = [
  {
    path: '',
    component: BaidumapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaidumapPageRoutingModule {}
