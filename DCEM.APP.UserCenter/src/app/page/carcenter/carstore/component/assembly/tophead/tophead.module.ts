import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopheadComponent } from './tophead.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
@NgModule({
    declarations: [TopheadComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        RouterModule
    ],
    exports: [TopheadComponent, RouterModule]
})
export class TopheadModule { }