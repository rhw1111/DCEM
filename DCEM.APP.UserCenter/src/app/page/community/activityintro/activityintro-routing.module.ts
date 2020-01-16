import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityintroPage } from './activityintro.page';

const routes: Routes = [
  {
    path: '',
    component: ActivityintroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityintroPageRoutingModule {}
