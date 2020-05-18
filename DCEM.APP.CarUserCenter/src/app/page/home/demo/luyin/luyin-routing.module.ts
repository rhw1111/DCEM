import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LuyinPage } from './luyin.page';

const routes: Routes = [
  {
    path: '',
    component: LuyinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LuyinPageRoutingModule {}
