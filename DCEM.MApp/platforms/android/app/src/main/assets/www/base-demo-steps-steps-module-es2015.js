(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["base-demo-steps-steps-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/base/demo/steps/steps.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/base/demo/steps/steps.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>steps</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <Steps [size]=\"'small'\" [current]=\"1\">\n    <Step [title]=\"'Finished'\" [description]=\"'This is description'\"></Step>\n    <Step [title]=\"'In Progress'\" [description]=\"'This is description'\"></Step>\n    <Step [title]=\"'Waiting'\" [description]=\"'This is description'\"></Step>\n  </Steps>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/base/demo/steps/steps.module.ts":
/*!*************************************************!*\
  !*** ./src/app/base/demo/steps/steps.module.ts ***!
  \*************************************************/
/*! exports provided: StepsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsPageModule", function() { return StepsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _steps_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./steps.page */ "./src/app/base/demo/steps/steps.page.ts");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/fesm2015/ng-zorro-antd-mobile.js");








const routes = [
    {
        path: '',
        component: _steps_page__WEBPACK_IMPORTED_MODULE_6__["StepsPage"]
    }
];
let StepsPageModule = class StepsPageModule {
};
StepsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdMobileModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_steps_page__WEBPACK_IMPORTED_MODULE_6__["StepsPage"]]
    })
], StepsPageModule);



/***/ }),

/***/ "./src/app/base/demo/steps/steps.page.scss":
/*!*************************************************!*\
  !*** ./src/app/base/demo/steps/steps.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2UvZGVtby9zdGVwcy9zdGVwcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/base/demo/steps/steps.page.ts":
/*!***********************************************!*\
  !*** ./src/app/base/demo/steps/steps.page.ts ***!
  \***********************************************/
/*! exports provided: StepsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsPage", function() { return StepsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StepsPage = class StepsPage {
    constructor() { }
    ngOnInit() {
    }
};
StepsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-steps',
        template: __webpack_require__(/*! raw-loader!./steps.page.html */ "./node_modules/raw-loader/index.js!./src/app/base/demo/steps/steps.page.html"),
        styles: [__webpack_require__(/*! ./steps.page.scss */ "./src/app/base/demo/steps/steps.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StepsPage);



/***/ })

}]);
//# sourceMappingURL=base-demo-steps-steps-module-es2015.js.map