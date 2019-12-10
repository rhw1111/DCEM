import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionsettingPageRoutingModule } from './questionsetting-routing.module';

import { QuestionsettingPage } from './questionsetting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionsettingPageRoutingModule
  ],
  declarations: [QuestionsettingPage]
})
export class QuestionsettingPageModule {}
