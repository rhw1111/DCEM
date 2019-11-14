(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["base-demo-timeline-timeline-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/base/demo/timeline/timeline.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/base/demo/timeline/timeline.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>timeline</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <nz-timeline>\n    <nz-timeline-item>Create a services site 2015-09-01</nz-timeline-item>\n    <nz-timeline-item>Solve initial network problems 2015-09-01</nz-timeline-item>\n    <nz-timeline-item>Technical testing 2015-09-01</nz-timeline-item>\n    <nz-timeline-item>Network problems being solved 2015-09-01</nz-timeline-item>\n  </nz-timeline>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/base/demo/timeline/timeline.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/base/demo/timeline/timeline.module.ts ***!
  \*******************************************************/
/*! exports provided: TimelinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinePageModule", function() { return TimelinePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _timeline_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timeline.page */ "./src/app/base/demo/timeline/timeline.page.ts");







const routes = [
    {
        path: '',
        component: _timeline_page__WEBPACK_IMPORTED_MODULE_6__["TimelinePage"]
    }
];
let TimelinePageModule = class TimelinePageModule {
};
TimelinePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_timeline_page__WEBPACK_IMPORTED_MODULE_6__["TimelinePage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], TimelinePageModule);



/***/ }),

/***/ "./src/app/base/demo/timeline/timeline.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/base/demo/timeline/timeline.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2UvZGVtby90aW1lbGluZS90aW1lbGluZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/base/demo/timeline/timeline.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/base/demo/timeline/timeline.page.ts ***!
  \*****************************************************/
/*! exports provided: TimelinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinePage", function() { return TimelinePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TimelinePage = class TimelinePage {
    constructor() { }
    ngOnInit() {
    }
};
TimelinePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timeline',
        template: __webpack_require__(/*! raw-loader!./timeline.page.html */ "./node_modules/raw-loader/index.js!./src/app/base/demo/timeline/timeline.page.html"),
        styles: [__webpack_require__(/*! ./timeline.page.scss */ "./src/app/base/demo/timeline/timeline.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TimelinePage);



/***/ })

}]);
//# sourceMappingURL=base-demo-timeline-timeline-module-es2015.js.map