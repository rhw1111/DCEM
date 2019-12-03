import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectattrPage } from './selectattr.page';

const routes: Routes = [
  {
    path: '',
    component: SelectattrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectattrPageRoutingModule {}
