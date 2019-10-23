(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-my-customer-com-detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/my-customer.com/detail/detail.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/my-customer.com/detail/detail.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/mycustomer/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>张三</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list lines=\"full\">\r\n        <ion-item-divider>\r\n            <ion-label>\r\n                车主信息\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n            <ion-label>\r\n                <ion-note>\r\n                    姓名\r\n                </ion-note>\r\n                <h3>张三</h3>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <ion-note>\r\n                    证件类型\r\n                </ion-note>\r\n                <h3>身份证</h3>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <ion-note>\r\n                    证件号码\r\n                </ion-note>\r\n                <h3>510215198308180418</h3>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h3>客户标签</h3>\r\n            </ion-label>\r\n            <ion-label>\r\n                <h4>大气</h4>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h3>客户标签</h3>\r\n            </ion-label>\r\n            <ion-label>\r\n                <h4>大气</h4>\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n\r\n        <ion-item-divider>\r\n            <ion-label>\r\n                车辆信息\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h3>姓名</h3>\r\n            </ion-label>\r\n            <ion-label>\r\n                <h4>张三</h4>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h3>手机号</h3>\r\n            </ion-label>\r\n            <ion-label>\r\n                <h4>15088888888</h4>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h3>证件类型</h3>\r\n            </ion-label>\r\n            <ion-label>\r\n                <h4>身份证件</h4>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h3>证件号码</h3>\r\n            </ion-label>\r\n            <ion-label>\r\n                <h4>510215198808080088</h4>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h3>客户标签</h3>\r\n            </ion-label>\r\n            <ion-label>\r\n                <h4>大气</h4>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h3>客户标签</h3>\r\n            </ion-label>\r\n            <ion-label>\r\n                <h4>大气</h4>\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item-divider>\r\n            <ion-label>\r\n                跟进记录\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h3>跟进人</h3>\r\n            </ion-label>\r\n            <ion-label>\r\n                <h4>跟进内容</h4>\r\n            </ion-label>\r\n            <ion-label>\r\n                <h4>跟进时间</h4>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h3>张三</h3>\r\n            </ion-label>\r\n            <ion-label>\r\n                <h4>100</h4>\r\n            </ion-label>\r\n            <ion-label>\r\n                <h4>跟进时间</h4>\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n    </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/serving/my-customer.com/detail/detail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/serving/my-customer.com/detail/detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: DetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/serving/my-customer.com/detail/detail.page.ts");







const routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]
    }
];
let DetailPageModule = class DetailPageModule {
};
DetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
    })
], DetailPageModule);



/***/ }),

/***/ "./src/app/serving/my-customer.com/detail/detail.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/serving/my-customer.com/detail/detail.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvbXktY3VzdG9tZXIuY29tL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/serving/my-customer.com/detail/detail.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/serving/my-customer.com/detail/detail.page.ts ***!
  \***************************************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DetailPage = class DetailPage {
    constructor() { }
    ngOnInit() {
    }
};
DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: __webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/my-customer.com/detail/detail.page.html"),
        styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/serving/my-customer.com/detail/detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DetailPage);



/***/ })

}]);
//# sourceMappingURL=serving-my-customer-com-detail-detail-module-es2015.js.map