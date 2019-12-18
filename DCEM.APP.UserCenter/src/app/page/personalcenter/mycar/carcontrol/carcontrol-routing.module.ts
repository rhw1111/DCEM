import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarcontrolPage } from './carcontrol.page';

const routes: Routes = [
  {
    path: '',
    component: CarcontrolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarcontrolPageRoutingModule {}
