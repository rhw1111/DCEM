(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-report-appointmentstatistics-appointmentstatistics-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/report/appointmentstatistics/appointmentstatistics.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/report/appointmentstatistics/appointmentstatistics.page.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button text=\"返回\" defaultHref=\"/\"></ion-back-button>\n      </ion-buttons>\n    <ion-title>预约统计</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"chart\" style=\"height: 700px; width: 100%\"></div>\n</ion-content>"

/***/ }),

/***/ "./src/app/serving/report/appointmentstatistics/appointmentstatistics.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/serving/report/appointmentstatistics/appointmentstatistics.module.ts ***!
  \**************************************************************************************/
/*! exports provided: AppointmentstatisticsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentstatisticsPageModule", function() { return AppointmentstatisticsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _appointmentstatistics_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appointmentstatistics.page */ "./src/app/serving/report/appointmentstatistics/appointmentstatistics.page.ts");







var routes = [
    {
        path: '',
        component: _appointmentstatistics_page__WEBPACK_IMPORTED_MODULE_6__["AppointmentstatisticsPage"]
    }
];
var AppointmentstatisticsPageModule = /** @class */ (function () {
    function AppointmentstatisticsPageModule() {
    }
    AppointmentstatisticsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_appointmentstatistics_page__WEBPACK_IMPORTED_MODULE_6__["AppointmentstatisticsPage"]]
        })
    ], AppointmentstatisticsPageModule);
    return AppointmentstatisticsPageModule;
}());



/***/ }),

/***/ "./src/app/serving/report/appointmentstatistics/appointmentstatistics.page.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/serving/report/appointmentstatistics/appointmentstatistics.page.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvcmVwb3J0L2FwcG9pbnRtZW50c3RhdGlzdGljcy9hcHBvaW50bWVudHN0YXRpc3RpY3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/serving/report/appointmentstatistics/appointmentstatistics.page.ts":
/*!************************************************************************************!*\
  !*** ./src/app/serving/report/appointmentstatistics/appointmentstatistics.page.ts ***!
  \************************************************************************************/
/*! exports provided: AppointmentstatisticsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentstatisticsPage", function() { return AppointmentstatisticsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_2__);



var AppointmentstatisticsPage = /** @class */ (function () {
    function AppointmentstatisticsPage() {
    }
    AppointmentstatisticsPage.prototype.ngOnInit = function () {
    };
    AppointmentstatisticsPage.prototype.ionViewDidEnter = function () {
        var ec = echarts__WEBPACK_IMPORTED_MODULE_2__;
        var container = document.getElementById('chart');
        var chart = ec.init(container);
        var option = {
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 52, 200, 334, 390, 330, 220]
                }
            ]
        };
        chart.setOption(option);
    };
    AppointmentstatisticsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-appointmentstatistics',
            template: __webpack_require__(/*! raw-loader!./appointmentstatistics.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/report/appointmentstatistics/appointmentstatistics.page.html"),
            styles: [__webpack_require__(/*! ./appointmentstatistics.page.scss */ "./src/app/serving/report/appointmentstatistics/appointmentstatistics.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppointmentstatisticsPage);
    return AppointmentstatisticsPage;
}());



/***/ })

}]);
//# sourceMappingURL=serving-report-appointmentstatistics-appointmentstatistics-module-es5.js.map