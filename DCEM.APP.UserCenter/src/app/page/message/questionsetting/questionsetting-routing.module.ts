import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionsettingPage } from './questionsetting.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionsettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionsettingPageRoutingModule {}
