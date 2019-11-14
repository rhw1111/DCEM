(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-reception-interrogation-com-success-success-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/reception-interrogation.com/success/success.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/reception-interrogation.com/success/success.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" [routerLink]=\"['/serving/ri/list']\" defaultHref=\"/serving/sc/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>开单成功</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen scroll-y=\"false\">\r\n    <ion-card>\r\n        <ion-card-content>\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <div style=\"height: 30px;\">\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <div style=\"height: 80px;\">\r\n                            <img src=\"./assets/img/circle.png\" />\r\n                        </div>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col class=\"title\">\r\n                        问诊开单成功\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <div class=\"orderno\">\r\n                            单号:{{mod.no}}\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <ion-button color=\"primary\" class=\"button-outline\" [routerLink]=\"['/serving/ri/detail']\" [queryParams]=\"{id:mod.id}\">\r\n                            查看详情\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <ion-button color=\"primary\" class=\"button-outline\" [routerLink]=\"['/serving/ri/edit']\">\r\n                            接待问诊\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ion-card-content>\r\n    </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/serving/reception-interrogation.com/success/success.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/serving/reception-interrogation.com/success/success.module.ts ***!
  \*******************************************************************************/
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
/* harmony import */ var _success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./success.page */ "./src/app/serving/reception-interrogation.com/success/success.page.ts");







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

/***/ "./src/app/serving/reception-interrogation.com/success/success.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/serving/reception-interrogation.com/success/success.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".orderno {\n  font-size: 14px;\n  text-align: center;\n  height: 80px;\n  border-bottom: 1px solid #00000042; }\n\n.title {\n  font-size: 25px;\n  text-align: center;\n  color: black; }\n\nion-card {\n  top: 40%;\n  position: relative;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmluZy9yZWNlcHRpb24taW50ZXJyb2dhdGlvbi5jb20vc3VjY2Vzcy9FOlxcQXBwUHJvamVjdFxcRENFTVxcRENFTS5NQXBwL3NyY1xcYXBwXFxzZXJ2aW5nXFxyZWNlcHRpb24taW50ZXJyb2dhdGlvbi5jb21cXHN1Y2Nlc3NcXHN1Y2Nlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0NBQWtDLEVBQUE7O0FBR3RDO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixtQ0FBMkI7VUFBM0IsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aW5nL3JlY2VwdGlvbi1pbnRlcnJvZ2F0aW9uLmNvbS9zdWNjZXNzL3N1Y2Nlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVybm8ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDA0MjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/serving/reception-interrogation.com/success/success.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/serving/reception-interrogation.com/success/success.page.ts ***!
  \*****************************************************************************/
/*! exports provided: SuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPage", function() { return SuccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");




var SuccessPage = /** @class */ (function () {
    function SuccessPage(activeRoute, _http, _page, _shareData, _valid) {
        this.activeRoute = activeRoute;
        this._http = _http;
        this._page = _page;
        this._shareData = _shareData;
        this._valid = _valid;
        this.mod = {
            id: "",
            no: ""
        };
    }
    SuccessPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.queryParams.subscribe(function (params) {
            if (!_this._valid.isNull("id")) {
                _this.mod.id = params['id'];
            }
            if (!_this._valid.isNull("no")) {
                _this.mod.no = params['no'];
            }
        });
    };
    SuccessPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_ShareData"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Valid"] }
    ]; };
    SuccessPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-success',
            template: __webpack_require__(/*! raw-loader!./success.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/reception-interrogation.com/success/success.page.html"),
            styles: [__webpack_require__(/*! ./success.page.scss */ "./src/app/serving/reception-interrogation.com/success/success.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_ShareData"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Valid"]])
    ], SuccessPage);
    return SuccessPage;
}());



/***/ })

}]);
//# sourceMappingURL=serving-reception-interrogation-com-success-success-module-es5.js.map