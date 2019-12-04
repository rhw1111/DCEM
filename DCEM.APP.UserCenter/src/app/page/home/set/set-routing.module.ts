import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetPage } from './set.page';

const routes: Routes = [
  {
    path: '',
    component: SetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetPageRoutingModule {}
