import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FileuploadTestPage } from './fileupload-test.page';

const routes: Routes = [
  {
    path: '',
    component: FileuploadTestPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FileuploadTestPage]
})
export class FileuploadTestPageModule {}
