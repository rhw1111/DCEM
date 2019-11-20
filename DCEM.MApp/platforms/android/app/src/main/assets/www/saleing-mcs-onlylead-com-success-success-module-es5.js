(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-mcs-onlylead-com-success-success-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-onlylead.com/success/success.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/mcs-onlylead.com/success/success.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/saleing/onlylead/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>保存成功</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button [routerLink]=\"['/serving/home/tabs']\">\r\n                <ion-icon slot=\"icon-only\" name=\"home\" [routerLink]=\"['/serving/home/tabs']\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen scroll-y=\"false\">\r\n    <ion-card>\r\n        <ion-card-content>\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <div style=\"height: 30px;\">\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <div style=\"height: 80px;\">\r\n                            <img src=\"./assets/img/circle.png\" />\r\n                        </div>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col class=\"title\">\r\n                      保存成功\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <ion-button color=\"primary\" class=\"button-outline\" [routerLink]=\"['/saleing/onlylead/detail']\" [queryParams]=\"{id:mod.id}\">\r\n                            查看详情\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <ion-button color=\"primary\" class=\"button-outline\" [routerLink]=\"['/saleing/onlylead/list']\">\r\n                            返回列表\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ion-card-content>\r\n    </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/saleing/mcs-onlylead.com/success/success.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/saleing/mcs-onlylead.com/success/success.module.ts ***!
  \********************************************************************/
/*! exports provided: successPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successPageModule", function() { return successPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./success.page */ "./src/app/saleing/mcs-onlylead.com/success/success.page.ts");







var routes = [
    {
        path: '',
        component: _success_page__WEBPACK_IMPORTED_MODULE_6__["successPage"]
    }
];
var successPageModule = /** @class */ (function () {
    function successPageModule() {
    }
    successPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_success_page__WEBPACK_IMPORTED_MODULE_6__["successPage"]]
        })
    ], successPageModule);
    return successPageModule;
}());



/***/ }),

/***/ "./src/app/saleing/mcs-onlylead.com/success/success.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/saleing/mcs-onlylead.com/success/success.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".orderno {\n  font-size: 14px;\n  text-align: center;\n  height: 80px;\n  border-bottom: 1px solid #00000042; }\n\n.title {\n  font-size: 25px;\n  text-align: center;\n  color: black; }\n\nion-card {\n  top: 40%;\n  position: relative;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsZWluZy9tY3Mtb25seWxlYWQuY29tL3N1Y2Nlc3MvRTpcXEFwcFByb2plY3RcXERDRU1cXERDRU0uTUFwcC9zcmNcXGFwcFxcc2FsZWluZ1xcbWNzLW9ubHlsZWFkLmNvbVxcc3VjY2Vzc1xcc3VjY2Vzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQ0FBa0MsRUFBQTs7QUFHdEM7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NhbGVpbmcvbWNzLW9ubHlsZWFkLmNvbS9zdWNjZXNzL3N1Y2Nlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVybm8ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDA0MjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/saleing/mcs-onlylead.com/success/success.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/saleing/mcs-onlylead.com/success/success.page.ts ***!
  \******************************************************************/
/*! exports provided: successPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successPage", function() { return successPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var successPage = /** @class */ (function () {
    function successPage(activeRoute) {
        this.activeRoute = activeRoute;
        this.mod = {
            id: ""
        };
    }
    successPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.queryParams.subscribe(function (params) {
            if (params['guid'] != null && params['guid'] != undefined) {
                _this.mod.id = params['guid'];
                console.log(_this.mod.id);
            }
        });
    };
    successPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    successPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-success',
            template: __webpack_require__(/*! raw-loader!./success.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-onlylead.com/success/success.page.html"),
            styles: [__webpack_require__(/*! ./success.page.scss */ "./src/app/saleing/mcs-onlylead.com/success/success.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], successPage);
    return successPage;
}());



/***/ })

}]);
//# sourceMappingURL=saleing-mcs-onlylead-com-success-success-module-es5.js.map