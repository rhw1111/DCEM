import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TestDriveDetailPage } from './test-drive-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TestDriveDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TestDriveDetailPage]
})
export class TestDriveDetailPageModule {}
