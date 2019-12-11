import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeclistComponent } from './speclist.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
@NgModule({
    declarations: [SpeclistComponent],
    entryComponents: [SpeclistComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        RouterModule
    ],
    exports: []
})
export class SpeclistModule { }