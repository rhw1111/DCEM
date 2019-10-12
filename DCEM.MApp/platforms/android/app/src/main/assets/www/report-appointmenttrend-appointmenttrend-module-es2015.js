(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-appointmenttrend-appointmenttrend-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/report/appointmenttrend/appointmenttrend.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/report/appointmenttrend/appointmenttrend.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\n      </ion-buttons>\n    <ion-title>预约趋势</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"chart\" style=\"height: 700px; width: 100%\"></div>\n</ion-content>"

/***/ }),

/***/ "./src/app/report/appointmenttrend/appointmenttrend.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/report/appointmenttrend/appointmenttrend.module.ts ***!
  \********************************************************************/
/*! exports provided: AppointmenttrendPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmenttrendPageModule", function() { return AppointmenttrendPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _appointmenttrend_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appointmenttrend.page */ "./src/app/report/appointmenttrend/appointmenttrend.page.ts");







const routes = [
    {
        path: '',
        component: _appointmenttrend_page__WEBPACK_IMPORTED_MODULE_6__["AppointmenttrendPage"]
    }
];
let AppointmenttrendPageModule = class AppointmenttrendPageModule {
};
AppointmenttrendPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_appointmenttrend_page__WEBPACK_IMPORTED_MODULE_6__["AppointmenttrendPage"]]
    })
], AppointmenttrendPageModule);



/***/ }),

/***/ "./src/app/report/appointmenttrend/appointmenttrend.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/report/appointmenttrend/appointmenttrend.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9hcHBvaW50bWVudHRyZW5kL2FwcG9pbnRtZW50dHJlbmQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/report/appointmenttrend/appointmenttrend.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/report/appointmenttrend/appointmenttrend.page.ts ***!
  \******************************************************************/
/*! exports provided: AppointmenttrendPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmenttrendPage", function() { return AppointmenttrendPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_2__);



let AppointmenttrendPage = class AppointmenttrendPage {
    constructor() { }
    ngOnInit() {
    }
    ionViewDidEnter() {
        const ec = echarts__WEBPACK_IMPORTED_MODULE_2__;
        const container = document.getElementById('chart');
        const chart = ec.init(container);
        const option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}'
            },
            legend: {
                left: 'left',
                data: ['2的指数', '3的指数']
            },
            xAxis: {
                type: 'category',
                name: 'x',
                splitLine: { show: false },
                data: ['一', '二', '三', '四', '五', '六', '七', '八', '九']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            yAxis: {
                type: 'log',
                name: 'y'
            },
            series: [
                {
                    name: '3的指数',
                    type: 'line',
                    data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
                },
                {
                    name: '2的指数',
                    type: 'line',
                    data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
                },
                {
                    name: '1/2的指数',
                    type: 'line',
                    data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512]
                }
            ]
        };
        chart.setOption(option);
    }
};
AppointmenttrendPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appointmenttrend',
        template: __webpack_require__(/*! raw-loader!./appointmenttrend.page.html */ "./node_modules/raw-loader/index.js!./src/app/report/appointmenttrend/appointmenttrend.page.html"),
        styles: [__webpack_require__(/*! ./appointmenttrend.page.scss */ "./src/app/report/appointmenttrend/appointmenttrend.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppointmenttrendPage);



/***/ })

}]);
//# sourceMappingURL=report-appointmenttrend-appointmenttrend-module-es2015.js.map