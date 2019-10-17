(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/tabs/tabs.page.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/tabs/tabs.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button tab=\"home\">\r\n          <ion-icon name=\"home\"></ion-icon>\r\n          <ion-label>首页</ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button tab=\"appointment\">\r\n        <ion-icon name=\"mail\"></ion-icon>\r\n          <ion-label>我的</ion-label>\r\n          <ion-badge color=\"danger\" *ngIf=\"num>0\" >{{num}}</ion-badge>\r\n      </ion-tab-button>\r\n      <ion-tab-button tab=\"analytics\">\r\n          <ion-icon name=\"analytics\"></ion-icon>\r\n          <ion-label>报表</ion-label>\r\n      </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>"

/***/ }),

/***/ "./src/app/demo/tabs/tabs.module.ts":
/*!******************************************!*\
  !*** ./src/app/demo/tabs/tabs.module.ts ***!
  \******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.page */ "./src/app/demo/tabs/tabs.page.ts");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/demo/tabs/tabs.router.module.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tabs_router_module__WEBPACK_IMPORTED_MODULE_6__["TabsPageRoutingModule"],
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/demo/tabs/tabs.page.scss":
/*!******************************************!*\
  !*** ./src/app/demo/tabs/tabs.page.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdGFicy90YWJzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/demo/tabs/tabs.page.ts":
/*!****************************************!*\
  !*** ./src/app/demo/tabs/tabs.page.ts ***!
  \****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabsPage = class TabsPage {
    constructor() {
        this.num = 0;
    }
    ngOnInit() {
    }
};
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/demo/tabs/tabs.page.html"),
        styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/demo/tabs/tabs.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TabsPage);



/***/ }),

/***/ "./src/app/demo/tabs/tabs.router.module.ts":
/*!*************************************************!*\
  !*** ./src/app/demo/tabs/tabs.router.module.ts ***!
  \*************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/demo/tabs/tabs.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: '../home/home.module#HomePageModule'
                    }
                ]
            },
            {
                path: 'appointment',
                children: [
                    {
                        path: '',
                        loadChildren: '../appointment/appointment.module#AppointmentPageModule'
                    }
                ]
            },
            {
                path: 'analytics',
                children: [
                    {
                        path: '',
                        loadChildren: '../analytics/analytics.module#AnalyticsPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=demo-tabs-tabs-module-es2015.js.map