import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancelPage } from './cancel.page';

const routes: Routes = [
  {
    path: '',
    component: CancelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancelPageRoutingModule {}
