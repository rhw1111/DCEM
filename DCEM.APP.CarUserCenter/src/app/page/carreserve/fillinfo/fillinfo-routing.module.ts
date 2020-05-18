import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FillinfoPage } from './fillinfo.page';

const routes: Routes = [
  {
    path: '',
    component: FillinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FillinfoPageRoutingModule {}
