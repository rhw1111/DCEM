import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectDealerDemoPage } from './select-dealer-demo.page';

const routes: Routes = [
  {
    path: '',
    component: SelectDealerDemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectDealerDemoPageRoutingModule {}
