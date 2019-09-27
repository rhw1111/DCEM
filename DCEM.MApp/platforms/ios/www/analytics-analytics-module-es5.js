(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["analytics-analytics-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/analytics/analytics.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/analytics/analytics.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>analytics</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _analytics_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./analytics.page */ "./src/app/analytics/analytics.page.ts");







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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnalyticsPage = /** @class */ (function () {
    function AnalyticsPage() {
    }
    AnalyticsPage.prototype.ngOnInit = function () {
    };
    AnalyticsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-analytics',
            template: __webpack_require__(/*! raw-loader!./analytics.page.html */ "./node_modules/raw-loader/index.js!./src/app/analytics/analytics.page.html"),
            styles: [__webpack_require__(/*! ./analytics.page.scss */ "./src/app/analytics/analytics.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnalyticsPage);
    return AnalyticsPage;
}());



/***/ })

}]);
//# sourceMappingURL=analytics-analytics-module-es5.js.map