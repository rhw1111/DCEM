(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-mc-reservation-com-calendar-calendar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/mc-reservation.com/calendar/calendar.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/mc-reservation.com/calendar/calendar.page.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>calendar</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/serving/mc-reservation.com/calendar/calendar.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/serving/mc-reservation.com/calendar/calendar.module.ts ***!
  \************************************************************************/
/*! exports provided: CalendarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageModule", function() { return CalendarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar.page */ "./src/app/serving/mc-reservation.com/calendar/calendar.page.ts");







var routes = [
    {
        path: '',
        component: _calendar_page__WEBPACK_IMPORTED_MODULE_6__["CalendarPage"]
    }
];
var CalendarPageModule = /** @class */ (function () {
    function CalendarPageModule() {
    }
    CalendarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_calendar_page__WEBPACK_IMPORTED_MODULE_6__["CalendarPage"]]
        })
    ], CalendarPageModule);
    return CalendarPageModule;
}());



/***/ }),

/***/ "./src/app/serving/mc-reservation.com/calendar/calendar.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/serving/mc-reservation.com/calendar/calendar.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvbWMtcmVzZXJ2YXRpb24uY29tL2NhbGVuZGFyL2NhbGVuZGFyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/serving/mc-reservation.com/calendar/calendar.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/serving/mc-reservation.com/calendar/calendar.page.ts ***!
  \**********************************************************************/
/*! exports provided: CalendarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPage", function() { return CalendarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CalendarPage = /** @class */ (function () {
    function CalendarPage() {
    }
    CalendarPage.prototype.ngOnInit = function () {
    };
    CalendarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! raw-loader!./calendar.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/mc-reservation.com/calendar/calendar.page.html"),
            styles: [__webpack_require__(/*! ./calendar.page.scss */ "./src/app/serving/mc-reservation.com/calendar/calendar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CalendarPage);
    return CalendarPage;
}());



/***/ })

}]);
//# sourceMappingURL=serving-mc-reservation-com-calendar-calendar-module-es5.js.map