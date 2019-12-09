import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivacypolicyPage } from './privacypolicy.page';

const routes: Routes = [
  {
    path: '',
    component: PrivacypolicyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivacypolicyPageRoutingModule {}
