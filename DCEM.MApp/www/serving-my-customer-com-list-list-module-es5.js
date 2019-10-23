(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-my-customer-com-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/my-customer.com/list/list.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/my-customer.com/list/list.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/home/mywork\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>我的客户</ion-title>\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n        <ion-searchbar></ion-searchbar>\r\n    </ion-toolbar>\r\n\r\n    <ion-toolbar>\r\n        <ion-segment>\r\n            <ion-segment-button checked>\r\n                <ion-label>全部</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button>\r\n                <ion-label>保修到期(10)</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button>\r\n                <ion-label>保险到期(10)</ion-label>\r\n            </ion-segment-button>\r\n        </ion-segment>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n    <ion-list lines=\"full\">\r\n        <!--<ion-item-divider>\r\n            <ion-label>\r\n                A\r\n            </ion-label>\r\n        </ion-item-divider>-->\r\n\r\n        <ion-item-sliding>\r\n            <ion-item [routerLink]=\"['/serving/mycustomer/detail']\">\r\n                <ion-icon slot=\"start\" color=\"primary\" name=\"man\" size=\"large\"></ion-icon>\r\n                <ion-label>\r\n                    <h2>独孤求败</h2>\r\n                    <p>渝A9877H</p>\r\n                    <p>S01</p>\r\n                </ion-label>\r\n                <ion-icon name=\"phone-portrait\" size=\"small\"></ion-icon>\r\n                <ion-note slot=\"end\">\r\n                    15023224233\r\n                </ion-note>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n                <ion-item-option color=\"tertiary\" expandable>\r\n                    预约\r\n                </ion-item-option>\r\n            </ion-item-options>\r\n        </ion-item-sliding>\r\n\r\n        <ion-item-sliding>\r\n            <ion-item [routerLink]=\"['/serving/mycustomer/detail']\">\r\n                <ion-icon slot=\"start\" color=\"danger\" name=\"woman\" size=\"large\"></ion-icon>\r\n                <ion-label>\r\n                    <h2>李秋水</h2>\r\n                    <p>渝A9877H</p>\r\n                    <p>S01</p>\r\n                </ion-label>\r\n                <ion-icon name=\"phone-portrait\" size=\"small\"></ion-icon>\r\n                <ion-note slot=\"end\">\r\n                    15023224233\r\n                </ion-note>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n                <ion-item-option color=\"tertiary\" expandable>\r\n                    预约\r\n                </ion-item-option>\r\n            </ion-item-options>\r\n        </ion-item-sliding>\r\n    </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/serving/my-customer.com/list/list.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/serving/my-customer.com/list/list.module.ts ***!
  \*************************************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/serving/my-customer.com/list/list.page.ts");







var routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]
    }
];
var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/serving/my-customer.com/list/list.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/serving/my-customer.com/list/list.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvbXktY3VzdG9tZXIuY29tL2xpc3QvbGlzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/serving/my-customer.com/list/list.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/serving/my-customer.com/list/list.page.ts ***!
  \***********************************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var ListPage = /** @class */ (function () {
    function ListPage(httpClient, alertCtr) {
        this.httpClient = httpClient;
        this.alertCtr = alertCtr;
    }
    ListPage.prototype.ngOnInit = function () {
        var _this = this;
        var httpGet = this.httpClient.get('https://subcrmdevapi.sokon.com/dcem/api/test/Test1', {
            params: {}
        });
        httpGet.subscribe(function (res) {
            _this.presentAlert('��Ϣ��ʾ', '�������ֻ�����');
        }, function (err) {
        });
    };
    // ������ʾ
    ListPage.prototype.presentAlert = function (header, message) {
        var alert = this.alertCtr.create({
            header: header,
            message: message,
            buttons: ['ȷ��']
        });
        alert.then(function (a) {
            a.present();
        });
    };
    ListPage.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/my-customer.com/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/serving/my-customer.com/list/list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=serving-my-customer-com-list-list-module-es5.js.map