import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotographPage } from './photograph.page';

const routes: Routes = [
  {
        path: '',
        component: PhotographPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotographPageRoutingModule {}
