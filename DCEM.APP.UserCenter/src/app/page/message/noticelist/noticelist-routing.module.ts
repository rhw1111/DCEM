import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticelistPage } from './noticelist.page';

const routes: Routes = [
  {
    path: '',
    component: NoticelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticelistPageRoutingModule {}
