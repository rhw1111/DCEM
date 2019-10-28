import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import sd from 'silly-datetime';
let DetailPage = class DetailPage {
    constructor() { }
    ngOnInit() {
    }
    FormatToDate(date) {
        if (date != null && date != undefined) {
            return sd.format(date, 'YYYY-MM-DD');
        }
        else {
            return '';
        }
    }
    FormatToDateTime(date) {
        if (date != null && date != undefined) {
            return sd.format(date, 'YYYY-MM-DD hh:mm:ss');
        }
        else {
            return '';
        }
    }
};
DetailPage = tslib_1.__decorate([
    Component({
        selector: 'app-detail',
        templateUrl: './detail.page.html',
        styleUrls: ['./detail.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], DetailPage);
export { DetailPage };
//# sourceMappingURL=detail.page.js.map