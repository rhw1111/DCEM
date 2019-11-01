import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
let SuccessPage = class SuccessPage {
    constructor(activeRoute) {
        this.activeRoute = activeRoute;
        this.mod = {
            id: ""
        };
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params) => {
            if (params['guid'] != null && params['guid'] != undefined) {
                this.mod.id = params['guid'];
            }
        });
    }
};
SuccessPage = tslib_1.__decorate([
    Component({
        selector: 'app-success',
        templateUrl: './success.page.html',
        styleUrls: ['./success.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
], SuccessPage);
export { SuccessPage };
//# sourceMappingURL=success.page.js.map