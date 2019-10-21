import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
let TestDriveDetailPage = class TestDriveDetailPage {
    constructor(activeRoute) {
        this.activeRoute = activeRoute;
        this.activeRoute.queryParams.subscribe((params) => {
            if (params['Item'] != null && params['Item'] != undefined) {
                this.DetailItem = JSON.parse(params['Item']);
            }
        });
    }
    ngOnInit() {
    }
};
TestDriveDetailPage = tslib_1.__decorate([
    Component({
        selector: 'app-test-drive-detail',
        templateUrl: './test-drive-detail.page.html',
        styleUrls: ['./test-drive-detail.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
], TestDriveDetailPage);
export { TestDriveDetailPage };
//# sourceMappingURL=test-drive-detail.page.js.map