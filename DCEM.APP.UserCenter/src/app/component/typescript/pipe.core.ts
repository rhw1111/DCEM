import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
//去掉Angular安全过滤器
@Pipe({ name: 'safeHtml' }) //自定义管道
export class DCore_SafeHtml implements PipeTransform {
    constructor(private sanitized: DomSanitizer) { }

    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}


@Pipe({ name: 'safeResourceUrl' }) 
export class DCore_SafeUrl implements PipeTransform {
    constructor(private sanitized: DomSanitizer) { }

    transform(value) {
        return this.sanitized.bypassSecurityTrustResourceUrl(value);
    }
}






