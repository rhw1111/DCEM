(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-lead-com-success-success-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/lead.com/success/success.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/lead.com/success/success.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/saleing/lead/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>操作成功</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen scroll-y=\"false\">\r\n    <ion-card>\r\n        <ion-card-content>\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <div style=\"height: 30px;\">\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <div style=\"height: 80px;\">\r\n                            <img src=\"./assets/img/circle.png\" />\r\n                        </div>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col class=\"title\" style=\"text-align:center\">\r\n                        新建留资操作成功\r\n                    </ion-col>\r\n                </ion-row>\r\n                <!--<ion-row>\r\n                    <ion-col>\r\n                        <div class=\"orderno\">\r\n                            单号:D00142019225567\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>-->\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <ion-button color=\"primary\" class=\"button-outline\" [routerLink]=\"['/saleing/lead/detail']\" [queryParams]=\"{id:mod.id}\">\r\n                            查看详情\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <ion-button color=\"primary\" class=\"button-outline\" [routerLink]=\"['/saleing/lead/edit']\">\r\n                            新建留资\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ion-card-content>\r\n    </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/saleing/lead.com/success/success.module.ts":
/*!************************************************************!*\
  !*** ./src/app/saleing/lead.com/success/success.module.ts ***!
  \************************************************************/
/*! exports provided: successPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successPageModule", function() { return successPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./success.page */ "./src/app/saleing/lead.com/success/success.page.ts");







const routes = [
    {
        path: '',
        component: _success_page__WEBPACK_IMPORTED_MODULE_6__["successPage"]
    }
];
let successPageModule = class successPageModule {
};
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



/***/ }),

/***/ "./src/app/saleing/lead.com/success/success.page.scss":
/*!************************************************************!*\
  !*** ./src/app/saleing/lead.com/success/success.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVpbmcvbGVhZC5jb20vc3VjY2Vzcy9zdWNjZXNzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/saleing/lead.com/success/success.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/saleing/lead.com/success/success.page.ts ***!
  \**********************************************************/
/*! exports provided: successPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successPage", function() { return successPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let successPage = class successPage {
    constructor(activeRoute) {
        this.activeRoute = activeRoute;
        this.mod = {
            id: ""
        };
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params) => {
            if (params['guid'] != null && params['guid'] != undefined) {
                this.mod.id = params['guid'];
            }
        });
    }
};
successPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
successPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-success',
        template: __webpack_require__(/*! raw-loader!./success.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/lead.com/success/success.page.html"),
        styles: [__webpack_require__(/*! ./success.page.scss */ "./src/app/saleing/lead.com/success/success.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], successPage);



/***/ })

}]);
//# sourceMappingURL=saleing-lead-com-success-success-module-es2015.js.map