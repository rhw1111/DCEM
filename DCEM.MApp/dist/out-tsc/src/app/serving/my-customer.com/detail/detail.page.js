import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Dcem } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute } from '@angular/router';
let DetailPage = class DetailPage {
    constructor(_http, _page, activeRoute) {
        this._http = _http;
        this._page = _page;
        this.activeRoute = activeRoute;
        this.activeRoute.queryParams.subscribe((params) => {
            if (params['id'] != null && params['id'] != undefined) {
                this._page.alert("消息提示", params['id']);
            }
        });
    }
    ngOnInit() {
    }
};
DetailPage = tslib_1.__decorate([
    Component({
        selector: 'app-detail',
        templateUrl: './detail.page.html',
        styleUrls: ['./detail.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Dcem.Core.Http, Dcem.Core.Page, ActivatedRoute])
], DetailPage);
export { DetailPage };
//# sourceMappingURL=detail.page.js.map