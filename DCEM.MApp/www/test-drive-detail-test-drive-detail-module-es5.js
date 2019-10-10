(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-drive-detail-test-drive-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/test-drive-detail/test-drive-detail.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/test-drive-detail/test-drive-detail.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\n      </ion-buttons>\n    <ion-title>试乘试驾详情</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-list-header>\n            {{DetailItem.UserName}}\n        </ion-list-header>\n        <ion-item>\n          <ion-icon slot=\"end\" name=\"call\"></ion-icon>\n          <ion-label>{{DetailItem.PhoneNumber}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon slot=\"end\" name=\"calendar\"></ion-icon>\n          <ion-label>预约日期：{{DetailItem.Date}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon slot=\"end\" name=\"timer\"></ion-icon>\n          <ion-label>预约时间：{{DetailItem.StartTime}}-{{DetailItem.EndTime}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>车型：{{DetailItem.VehicleType}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label *ngIf=\"DetailItem.Status==0\">状态：未完成</ion-label>\n          <ion-label *ngIf=\"DetailItem.Status==0\">状态：已完成</ion-label>\n          <ion-label *ngIf=\"DetailItem.Status==0\">状态：已关闭</ion-label>\n        </ion-item>\n      </ion-list>\n      <ion-card>\n          <ion-card-header>\n            <ion-card-title>备注信息：</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n              {{DetailItem.Remark}}\n          </ion-card-content>\n      </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/test-drive-detail/test-drive-detail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/test-drive-detail/test-drive-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: TestDriveDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestDriveDetailPageModule", function() { return TestDriveDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _test_drive_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-drive-detail.page */ "./src/app/test-drive-detail/test-drive-detail.page.ts");







var routes = [
    {
        path: '',
        component: _test_drive_detail_page__WEBPACK_IMPORTED_MODULE_6__["TestDriveDetailPage"]
    }
];
var TestDriveDetailPageModule = /** @class */ (function () {
    function TestDriveDetailPageModule() {
    }
    TestDriveDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_test_drive_detail_page__WEBPACK_IMPORTED_MODULE_6__["TestDriveDetailPage"]]
        })
    ], TestDriveDetailPageModule);
    return TestDriveDetailPageModule;
}());



/***/ }),

/***/ "./src/app/test-drive-detail/test-drive-detail.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/test-drive-detail/test-drive-detail.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtZHJpdmUtZGV0YWlsL3Rlc3QtZHJpdmUtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/test-drive-detail/test-drive-detail.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/test-drive-detail/test-drive-detail.page.ts ***!
  \*************************************************************/
/*! exports provided: TestDriveDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestDriveDetailPage", function() { return TestDriveDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var TestDriveDetailPage = /** @class */ (function () {
    function TestDriveDetailPage(activeRoute) {
        var _this = this;
        this.activeRoute = activeRoute;
        this.activeRoute.queryParams.subscribe(function (params) {
            if (params['Item'] != null && params['Item'] != undefined) {
                _this.DetailItem = JSON.parse(params['Item']);
            }
        });
    }
    TestDriveDetailPage.prototype.ngOnInit = function () {
    };
    TestDriveDetailPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    TestDriveDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-drive-detail',
            template: __webpack_require__(/*! raw-loader!./test-drive-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/test-drive-detail/test-drive-detail.page.html"),
            styles: [__webpack_require__(/*! ./test-drive-detail.page.scss */ "./src/app/test-drive-detail/test-drive-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TestDriveDetailPage);
    return TestDriveDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=test-drive-detail-test-drive-detail-module-es5.js.map