import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoicePageRoutingModule } from './voice-routing.module';

import { VoicePage } from './voice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoicePageRoutingModule
  ],
  declarations: [VoicePage]
})
export class VoicePageModule {}
