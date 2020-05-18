import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarconditionPage } from './carcondition.page';

const routes: Routes = [
  {
    path: '',
    component: CarconditionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarconditionPageRoutingModule {}
