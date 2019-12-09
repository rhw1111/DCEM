import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivitydetailPage } from './activitydetail.page';

const routes: Routes = [
  {
    path: '',
    component: ActivitydetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivitydetailPageRoutingModule {}
