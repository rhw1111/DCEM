import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticePage } from './notice.page';

const routes: Routes = [
  {
    path: '',
    component: NoticePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticePageRoutingModule {}
