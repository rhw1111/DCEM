(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-analytics-analytics-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/analytics/analytics.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/analytics/analytics.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-back-button text=\"返回\" defaultHref=\"/\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>报表</ion-title>\r\n      </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n<ion-list>\r\n    <ion-item [routerLink]=\"['/demo/report/appointmentstatistics']\">\r\n      <ion-icon size=\"large\" slot=\"start\" name=\"stats\"></ion-icon>\r\n      <ion-label>\r\n        <h3>预约统计</h3>\r\n      </ion-label>\r\n      <ion-icon class=\"item-detail-icon ios hydrated\" role=\"img\" aria-label=\"arrow forward\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item [routerLink]=\"['/demo/report/testdriverate']\" >\r\n        <ion-icon size=\"large\" slot=\"start\" name=\"car\" ></ion-icon>\r\n        <ion-label>\r\n          <h3>试驾率</h3>\r\n        </ion-label>\r\n        <ion-icon class=\"item-detail-icon ios hydrated\" role=\"img\" aria-label=\"arrow forward\"></ion-icon>\r\n      </ion-item>\r\n    <ion-item [routerLink]=\"['/demo/report/appointmenttrend']\">\r\n      <ion-icon size=\"large\" slot=\"start\" name=\"pulse\"></ion-icon>\r\n      <ion-label>\r\n        <h3>预约趋势</h3>\r\n      </ion-label>\r\n      <ion-icon class=\"item-detail-icon ios hydrated\" role=\"img\" aria-label=\"arrow forward\"></ion-icon>\r\n    </ion-item>\r\n</ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/demo/analytics/analytics.module.ts":
/*!****************************************************!*\
  !*** ./src/app/demo/analytics/analytics.module.ts ***!
  \****************************************************/
/*! exports provided: AnalyticsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsPageModule", function() { return AnalyticsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _analytics_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./analytics.page */ "./src/app/demo/analytics/analytics.page.ts");







var routes = [
    {
        path: '',
        component: _analytics_page__WEBPACK_IMPORTED_MODULE_6__["AnalyticsPage"]
    }
];
var AnalyticsPageModule = /** @class */ (function () {
    function AnalyticsPageModule() {
    }
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
    return AnalyticsPageModule;
}());



/***/ }),

/***/ "./src/app/demo/analytics/analytics.page.scss":
/*!****************************************************!*\
  !*** ./src/app/demo/analytics/analytics.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9hbmFseXRpY3MvRDpcXOW3peS9nOebruW9lVxc5b6u6L2v6aG555uuXFzku6PnoIFcXOenu+WKqOerr1xc56e75Yqo56uvKOato+W8j+mhueebrilcXERDRU0uTUFwcC9zcmNcXGFwcFxcZGVtb1xcYW5hbHl0aWNzXFxhbmFseXRpY3MucGFnZS5zY3NzIiwic3JjL2FwcC9kZW1vL2FuYWx5dGljcy9hbmFseXRpY3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vYW5hbHl0aWNzL2FuYWx5dGljcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufSIsImlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/demo/analytics/analytics.page.ts":
/*!**************************************************!*\
  !*** ./src/app/demo/analytics/analytics.page.ts ***!
  \**************************************************/
/*! exports provided: AnalyticsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsPage", function() { return AnalyticsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AnalyticsPage = /** @class */ (function () {
    function AnalyticsPage(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
    }
    AnalyticsPage.prototype.ngOnInit = function () {
    };
    AnalyticsPage.prototype.toRedict = function (url) {
        this.navCtrl.navigateForward(url);
    };
    AnalyticsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AnalyticsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-analytics',
            template: __webpack_require__(/*! raw-loader!./analytics.page.html */ "./node_modules/raw-loader/index.js!./src/app/demo/analytics/analytics.page.html"),
            styles: [__webpack_require__(/*! ./analytics.page.scss */ "./src/app/demo/analytics/analytics.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AnalyticsPage);
    return AnalyticsPage;
}());



/***/ })

}]);
//# sourceMappingURL=demo-analytics-analytics-module-es5.js.map