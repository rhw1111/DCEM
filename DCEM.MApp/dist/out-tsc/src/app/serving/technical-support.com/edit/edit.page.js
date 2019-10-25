import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
let EditPage = class EditPage {
    constructor(_http, _page) {
        this._http = _http;
        this._page = _page;
    }
    ngOnInit() {
    }
};
EditPage = tslib_1.__decorate([
    Component({
        selector: 'app-edit',
        templateUrl: './edit.page.html',
        styleUrls: ['./edit.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [DCore_Http,
        DCore_Page])
], EditPage);
export { EditPage };
//# sourceMappingURL=edit.page.js.map