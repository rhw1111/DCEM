import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdcardPage } from './idcard.page';

const routes: Routes = [
  {
    path: '',
    component: IdcardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdcardPageRoutingModule {}
