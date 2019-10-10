(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-drive-add-test-drive-add-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/test-drive-add/test-drive-add.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/test-drive-add/test-drive-add.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\n        </ion-buttons>\n      <ion-title>创建试乘试驾记录</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content fullscreen>\n    <form onsubmit=\"processForm(event)\">\n      <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n            <ion-item>\n              <ion-label>姓名<ion-text color=\"danger\">*</ion-text></ion-label>\n              <ion-input></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>手机号<ion-text color=\"danger\">*</ion-text></ion-label>\n              <ion-input></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>车型<ion-text color=\"danger\">*</ion-text></ion-label>\n              <ion-input></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>开始时间<ion-text color=\"danger\">*</ion-text></ion-label>\n              <ion-datetime value=\"1990-02-19\" placeholder=\"选择日期\"></ion-datetime>\n              <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"1990-02-19T07:43Z\"></ion-datetime>\n            </ion-item>\n            <ion-item>\n                <ion-label>结束时间<ion-text color=\"danger\">*</ion-text></ion-label>\n              <ion-datetime value=\"1990-02-20\" placeholder=\"选择日期\"></ion-datetime>\n              <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"1990-02-19T07:43Z\"></ion-datetime>\n            </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">基本信息</ion-label>\n          <ion-input placeholder=\"省\"></ion-input>\n          <ion-input placeholder=\"市\"></ion-input>\n          <ion-input placeholder=\"区\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">备注</ion-label>\n          <ion-textarea rows=\"8\"></ion-textarea>\n        </ion-item>\n      </ion-list>\n\n      <div class=\"ion-padding\">\n        <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\">创建</ion-button>\n      </div>\n    </form>\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/test-drive-add/test-drive-add.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/test-drive-add/test-drive-add.module.ts ***!
  \*********************************************************/
/*! exports provided: TestDriveAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestDriveAddPageModule", function() { return TestDriveAddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _test_drive_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-drive-add.page */ "./src/app/test-drive-add/test-drive-add.page.ts");







const routes = [
    {
        path: '',
        component: _test_drive_add_page__WEBPACK_IMPORTED_MODULE_6__["TestDriveAddPage"]
    }
];
let TestDriveAddPageModule = class TestDriveAddPageModule {
};
TestDriveAddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_test_drive_add_page__WEBPACK_IMPORTED_MODULE_6__["TestDriveAddPage"]]
    })
], TestDriveAddPageModule);



/***/ }),

/***/ "./src/app/test-drive-add/test-drive-add.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/test-drive-add/test-drive-add.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtZHJpdmUtYWRkL3Rlc3QtZHJpdmUtYWRkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/test-drive-add/test-drive-add.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/test-drive-add/test-drive-add.page.ts ***!
  \*******************************************************/
/*! exports provided: TestDriveAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestDriveAddPage", function() { return TestDriveAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestDriveAddPage = class TestDriveAddPage {
    constructor() { }
    ngOnInit() {
    }
};
TestDriveAddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-drive-add',
        template: __webpack_require__(/*! raw-loader!./test-drive-add.page.html */ "./node_modules/raw-loader/index.js!./src/app/test-drive-add/test-drive-add.page.html"),
        styles: [__webpack_require__(/*! ./test-drive-add.page.scss */ "./src/app/test-drive-add/test-drive-add.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TestDriveAddPage);



/***/ })

}]);
//# sourceMappingURL=test-drive-add-test-drive-add-module-es2015.js.map