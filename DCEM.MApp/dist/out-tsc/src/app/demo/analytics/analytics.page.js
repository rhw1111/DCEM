import * as tslib_1 from "tslib";
var _a, _b;
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
let AnalyticsPage = class AnalyticsPage {
    constructor(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
    }
    ngOnInit() {
    }
    toRedict(url) {
        this.navCtrl.navigateForward(url);
    }
};
AnalyticsPage = tslib_1.__decorate([
    Component({
        selector: 'app-analytics',
        templateUrl: './analytics.page.html',
        styleUrls: ['./analytics.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof NavController !== "undefined" && NavController) === "function" ? _a : Object, typeof (_b = typeof Router !== "undefined" && Router) === "function" ? _b : Object])
], AnalyticsPage);
export { AnalyticsPage };
//# sourceMappingURL=analytics.page.js.map