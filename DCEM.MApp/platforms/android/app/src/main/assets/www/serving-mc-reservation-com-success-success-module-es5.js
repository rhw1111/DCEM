(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-mc-reservation-com-success-success-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/mc-reservation.com/success/success.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/mc-reservation.com/success/success.page.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/reservation/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>操作成功</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button [routerLink]=\"['/serving/home/tabs']\">\r\n                <ion-icon slot=\"icon-only\" name=\"home\" [routerLink]=\"['/serving/home/tabs']\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen scroll-y=\"false\">\r\n    <ion-card>\r\n        <ion-card-content>\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <div style=\"height: 30px;\">\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <div style=\"height: 80px;\">\r\n                            <img src=\"./assets/img/circle.png\" />\r\n                        </div>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col class=\"title\" style=\"text-align:center\">\r\n                        预约单操作成功\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <ion-button color=\"primary\" class=\"button-outline\" [routerLink]=\"['/serving/reservation/detail']\" [queryParams]=\"{id:mod.id}\">\r\n                            查看详情\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <ion-button color=\"primary\" class=\"button-outline\" [routerLink]=\"['/serving/reservation/list']\">\r\n                            预约单列表\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ion-card-content>\r\n    </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/serving/mc-reservation.com/success/success.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/serving/mc-reservation.com/success/success.module.ts ***!
  \**********************************************************************/
/*! exports provided: SuccessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPageModule", function() { return SuccessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./success.page */ "./src/app/serving/mc-reservation.com/success/success.page.ts");







var routes = [
    {
        path: '',
        component: _success_page__WEBPACK_IMPORTED_MODULE_6__["SuccessPage"]
    }
];
var SuccessPageModule = /** @class */ (function () {
    function SuccessPageModule() {
    }
    SuccessPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_success_page__WEBPACK_IMPORTED_MODULE_6__["SuccessPage"]]
        })
    ], SuccessPageModule);
    return SuccessPageModule;
}());



/***/ }),

/***/ "./src/app/serving/mc-reservation.com/success/success.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/serving/mc-reservation.com/success/success.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvbWMtcmVzZXJ2YXRpb24uY29tL3N1Y2Nlc3Mvc3VjY2Vzcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/serving/mc-reservation.com/success/success.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/serving/mc-reservation.com/success/success.page.ts ***!
  \********************************************************************/
/*! exports provided: SuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPage", function() { return SuccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SuccessPage = /** @class */ (function () {
    function SuccessPage(activeRoute) {
        this.activeRoute = activeRoute;
        this.mod = {
            id: ""
        };
    }
    SuccessPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.queryParams.subscribe(function (params) {
            if (params['guid'] != null && params['guid'] != undefined) {
                _this.mod.id = params['guid'];
            }
        });
    };
    SuccessPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    SuccessPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-success',
            template: __webpack_require__(/*! raw-loader!./success.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/mc-reservation.com/success/success.page.html"),
            styles: [__webpack_require__(/*! ./success.page.scss */ "./src/app/serving/mc-reservation.com/success/success.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SuccessPage);
    return SuccessPage;
}());



/***/ })

}]);
//# sourceMappingURL=serving-mc-reservation-com-success-success-module-es5.js.map