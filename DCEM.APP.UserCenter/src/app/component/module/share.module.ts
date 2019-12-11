import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DCore_SafeHtml } from 'app/component/typescript/dcem.core';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';



@NgModule({
    entryComponents: [],
    declarations: [
        DCore_SafeHtml,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        DCore_SafeHtml
    ]
})
export class ShareModule { }
