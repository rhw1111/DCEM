import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DCore_SafeHtml, DCore_SafeUrl } from 'app/component/typescript/pipe.core';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';



@NgModule({
    declarations: [
        DCore_SafeHtml,
        DCore_SafeUrl,
    ],
    entryComponents: [
    ],

    imports: [
        CommonModule,
    ],
    exports: [
        DCore_SafeHtml,
        DCore_SafeUrl,
    ]
})
export class ShareModule { }
