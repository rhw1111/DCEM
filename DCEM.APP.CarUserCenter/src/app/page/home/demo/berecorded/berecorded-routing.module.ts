import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BerecordedPage } from './berecorded.page';

const routes: Routes = [
  {
    path: '',
    component: BerecordedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BerecordedPageRoutingModule {}
