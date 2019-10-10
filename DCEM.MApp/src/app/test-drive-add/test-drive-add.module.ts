import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TestDriveAddPage } from './test-drive-add.page';

const routes: Routes = [
  {
    path: '',
    component: TestDriveAddPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TestDriveAddPage]
})
export class TestDriveAddPageModule {}
