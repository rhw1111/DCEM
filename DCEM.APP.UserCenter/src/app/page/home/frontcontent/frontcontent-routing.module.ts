import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontcontentPage } from './frontcontent.page';

const routes: Routes = [
  {
    path: '',
    component: FrontcontentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontcontentPageRoutingModule {}
