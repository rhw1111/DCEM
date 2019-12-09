import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from 'app/component/typescript/dcem.core';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
    declarations: [
        SafeHtmlPipe
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        SafeHtmlPipe
    ]
})
export class ShareModule { }
