(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["analytics-analytics-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/analytics/analytics.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/analytics/analytics.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>报表</ion-title>\r\n      </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n<ion-list>\r\n    <ion-item (click)=\"toRedict('appointmentstatistics')\">\r\n      <ion-icon size=\"large\" slot=\"start\" name=\"stats\"></ion-icon>\r\n      <ion-label>\r\n        <h3>预约统计</h3>\r\n      </ion-label>\r\n      <ion-icon class=\"item-detail-icon ios hydrated\" role=\"img\" aria-label=\"arrow forward\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item (click)=\"toRedict('testdriverate')\">\r\n        <ion-icon size=\"large\" slot=\"start\" name=\"car\" ></ion-icon>\r\n        <ion-label>\r\n          <h3>试驾率</h3>\r\n        </ion-label>\r\n        <ion-icon class=\"item-detail-icon ios hydrated\" role=\"img\" aria-label=\"arrow forward\"></ion-icon>\r\n      </ion-item>\r\n    <ion-item (click)=\"toRedict('appointmenttrend')\">\r\n      <ion-icon size=\"large\" slot=\"start\" name=\"pulse\"></ion-icon>\r\n      <ion-label>\r\n        <h3>预约趋势</h3>\r\n      </ion-label>\r\n      <ion-icon class=\"item-detail-icon ios hydrated\" role=\"img\" aria-label=\"arrow forward\"></ion-icon>\r\n    </ion-item>\r\n</ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/analytics/analytics.module.ts":
/*!***********************************************!*\
  !*** ./src/app/analytics/analytics.module.ts ***!
  \***********************************************/
/*! exports provided: AnalyticsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsPageModule", function() { return AnalyticsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _analytics_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./analytics.page */ "./src/app/analytics/analytics.page.ts");







const routes = [
    {
        path: '',
        component: _analytics_page__WEBPACK_IMPORTED_MODULE_6__["AnalyticsPage"]
    }
];
let AnalyticsPageModule = class AnalyticsPageModule {
};
AnalyticsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_analytics_page__WEBPACK_IMPORTED_MODULE_6__["AnalyticsPage"]]
    })
], AnalyticsPageModule);



/***/ }),

/***/ "./src/app/analytics/analytics.page.scss":
/*!***********************************************!*\
  !*** ./src/app/analytics/analytics.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYWx5dGljcy9hbmFseXRpY3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/analytics/analytics.page.ts":
/*!*********************************************!*\
  !*** ./src/app/analytics/analytics.page.ts ***!
  \*********************************************/
/*! exports provided: AnalyticsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsPage", function() { return AnalyticsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




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
AnalyticsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AnalyticsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-analytics',
        template: __webpack_require__(/*! raw-loader!./analytics.page.html */ "./node_modules/raw-loader/index.js!./src/app/analytics/analytics.page.html"),
        styles: [__webpack_require__(/*! ./analytics.page.scss */ "./src/app/analytics/analytics.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AnalyticsPage);



/***/ })

}]);
//# sourceMappingURL=analytics-analytics-module-es2015.js.map