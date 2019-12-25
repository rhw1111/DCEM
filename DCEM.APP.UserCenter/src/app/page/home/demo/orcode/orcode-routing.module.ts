import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrcodePage } from './orcode.page';

const routes: Routes = [
  {
    path: '',
    component: OrcodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrcodePageRoutingModule {}
