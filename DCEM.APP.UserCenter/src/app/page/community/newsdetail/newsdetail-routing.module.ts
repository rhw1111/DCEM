import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsdetailPage } from './newsdetail.page';

const routes: Routes = [
  {
    path: '',
    component: NewsdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsdetailPageRoutingModule {}
