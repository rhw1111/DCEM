(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-delivery-timeline-timeline-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/delivery/timeline/timeline.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/delivery/timeline/timeline.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>timeline</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"cd-timeline-icon royal\">\r\n    尚未完成\r\n  </div>\r\n  <div class=\"cd-timeline-content royal\">\r\n    已经完成1\r\n  </div>\r\n  <div class=\"cd-timeline-content royal\">\r\n    已经完成2\r\n  </div>\r\n  <div class=\"cd-timeline-content royal\">\r\n    已经完成3\r\n  </div>\r\n  <div class=\"cd-timeline-content royal\">\r\n    已经完成4\r\n  </div>\r\n  <div class=\"cd-timeline-content royal\">\r\n    已经完成5\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/saleing/delivery/timeline/timeline.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/saleing/delivery/timeline/timeline.module.ts ***!
  \**************************************************************/
/*! exports provided: TimelinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinePageModule", function() { return TimelinePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _timeline_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timeline.page */ "./src/app/saleing/delivery/timeline/timeline.page.ts");







var routes = [
    {
        path: '',
        component: _timeline_page__WEBPACK_IMPORTED_MODULE_6__["TimelinePage"]
    }
];
var TimelinePageModule = /** @class */ (function () {
    function TimelinePageModule() {
    }
    TimelinePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_timeline_page__WEBPACK_IMPORTED_MODULE_6__["TimelinePage"]]
        })
    ], TimelinePageModule);
    return TimelinePageModule;
}());



/***/ }),

/***/ "./src/app/saleing/delivery/timeline/timeline.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/saleing/delivery/timeline/timeline.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVpbmcvZGVsaXZlcnkvdGltZWxpbmUvdGltZWxpbmUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/saleing/delivery/timeline/timeline.page.ts":
/*!************************************************************!*\
  !*** ./src/app/saleing/delivery/timeline/timeline.page.ts ***!
  \************************************************************/
/*! exports provided: TimelinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinePage", function() { return TimelinePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimelinePage = /** @class */ (function () {
    function TimelinePage() {
    }
    TimelinePage.prototype.ngOnInit = function () {
    };
    TimelinePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! raw-loader!./timeline.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/delivery/timeline/timeline.page.html"),
            styles: [__webpack_require__(/*! ./timeline.page.scss */ "./src/app/saleing/delivery/timeline/timeline.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimelinePage);
    return TimelinePage;
}());



/***/ })

}]);
//# sourceMappingURL=saleing-delivery-timeline-timeline-module-es5.js.map