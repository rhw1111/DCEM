(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-report-testdriverate-testdriverate-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/report/testdriverate/testdriverate.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/report/testdriverate/testdriverate.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n    <ion-title>适驾率</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"chart\" style=\"height: 700px; width: 100%\"></div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/demo/report/testdriverate/testdriverate.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/demo/report/testdriverate/testdriverate.module.ts ***!
  \*******************************************************************/
/*! exports provided: TestdriveratePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestdriveratePageModule", function() { return TestdriveratePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _testdriverate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testdriverate.page */ "./src/app/demo/report/testdriverate/testdriverate.page.ts");







const routes = [
    {
        path: '',
        component: _testdriverate_page__WEBPACK_IMPORTED_MODULE_6__["TestdriveratePage"]
    }
];
let TestdriveratePageModule = class TestdriveratePageModule {
};
TestdriveratePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_testdriverate_page__WEBPACK_IMPORTED_MODULE_6__["TestdriveratePage"]]
    })
], TestdriveratePageModule);



/***/ }),

/***/ "./src/app/demo/report/testdriverate/testdriverate.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/demo/report/testdriverate/testdriverate.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcmVwb3J0L3Rlc3Rkcml2ZXJhdGUvdGVzdGRyaXZlcmF0ZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/report/testdriverate/testdriverate.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/demo/report/testdriverate/testdriverate.page.ts ***!
  \*****************************************************************/
/*! exports provided: TestdriveratePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestdriveratePage", function() { return TestdriveratePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_2__);



let TestdriveratePage = class TestdriveratePage {
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
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 335, name: '直接访问' },
                        { value: 310, name: '邮件营销' },
                        { value: 234, name: '联盟广告' },
                        { value: 135, name: '视频广告' },
                        { value: 1548, name: '搜索引擎' }
                    ]
                }
            ]
        };
        chart.setOption(option);
    }
};
TestdriveratePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-testdriverate',
        template: __webpack_require__(/*! raw-loader!./testdriverate.page.html */ "./node_modules/raw-loader/index.js!./src/app/demo/report/testdriverate/testdriverate.page.html"),
        styles: [__webpack_require__(/*! ./testdriverate.page.scss */ "./src/app/demo/report/testdriverate/testdriverate.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TestdriveratePage);



/***/ })

}]);
//# sourceMappingURL=demo-report-testdriverate-testdriverate-module-es2015.js.map