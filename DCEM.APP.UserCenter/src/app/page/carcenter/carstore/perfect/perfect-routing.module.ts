import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfectPage } from './perfect.page';

const routes: Routes = [
  {
    path: '',
    component: PerfectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfectPageRoutingModule {}
