import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DCore_SafeHtml } from 'app/component/typescript/pipe.core';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';



@NgModule({
    declarations: [
        DCore_SafeHtml,
    ],
    entryComponents: [
    ],

    imports: [
        CommonModule,
    ],
    exports: [
        DCore_SafeHtml
    ]
})
export class ShareModule { }
