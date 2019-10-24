import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
let DetailPage = class DetailPage {
    constructor(activeRoute) {
        this.activeRoute = activeRoute;
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((data) => {
            alert(data.id);
        });
    }
};
DetailPage = tslib_1.__decorate([
    Component({
        selector: 'app-detail',
        templateUrl: './detail.page.html',
        styleUrls: ['./detail.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
], DetailPage);
export { DetailPage };
//# sourceMappingURL=detail.page.js.map