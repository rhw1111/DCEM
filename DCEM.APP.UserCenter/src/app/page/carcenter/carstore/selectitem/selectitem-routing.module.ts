import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectitemPage } from './selectitem.page';

const routes: Routes = [
  {
    path: '',
    component: SelectitemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectitemPageRoutingModule {}
