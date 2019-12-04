(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-home-com-tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/home.com/tabs/tabs.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/home.com/tabs/tabs.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n        <ion-tab-button tab=\"index\">\r\n            <ion-icon name=\"home\"></ion-icon>\r\n            <ion-label>首页</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"message\">\r\n            <ion-icon name=\"mail\"></ion-icon>\r\n            <ion-label>消息</ion-label>\r\n            <ion-badge color=\"danger\">6</ion-badge>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"mywork\">\r\n            <ion-icon name=\"person\"></ion-icon>\r\n            <ion-label>我的</ion-label>\r\n        </ion-tab-button>\r\n    </ion-tab-bar>\r\n</ion-tabs>\r\n"

/***/ }),

/***/ "./src/app/serving/home.com/tabs/tabs.module.ts":
/*!******************************************************!*\
  !*** ./src/app/serving/home.com/tabs/tabs.module.ts ***!
  \******************************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/serving/home.com/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/serving/home.com/tabs/tabs.page.ts");







var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/serving/home.com/tabs/tabs.page.scss":
/*!******************************************************!*\
  !*** ./src/app/serving/home.com/tabs/tabs.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvaG9tZS5jb20vdGFicy90YWJzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/serving/home.com/tabs/tabs.page.ts":
/*!****************************************************!*\
  !*** ./src/app/serving/home.com/tabs/tabs.page.ts ***!
  \****************************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");




var TabsPage = /** @class */ (function () {
    function TabsPage(events, loadingCtrl, _config, _page, _http, menuController) {
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this._config = _config;
        this._page = _page;
        this._http = _http;
        this.menuController = menuController;
    }
    TabsPage.prototype.ngOnInit = function () {
    };
    //每次进入页面时，我们将初始化禁用侧滑菜单
    TabsPage.prototype.ionViewDidEnter = function () {
        this.menuController.enable(false);
    };
    TabsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Config"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
    ]; };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/home.com/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/serving/home.com/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Config"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/serving/home.com/tabs/tabs.router.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/serving/home.com/tabs/tabs.router.module.ts ***!
  \*************************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/serving/home.com/tabs/tabs.page.ts");




var routes = [
    {
        path: '', component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'index',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | index-index-module */ "index-index-module").then(__webpack_require__.bind(null, /*! ../index/index.module */ "./src/app/serving/home.com/index/index.module.ts")).then(function (m) { return m.IndexPageModule; });
                }
            },
            {
                path: 'message',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | message-message-module */ "message-message-module").then(__webpack_require__.bind(null, /*! ../message/message.module */ "./src/app/serving/home.com/message/message.module.ts")).then(function (m) { return m.MessagePageModule; });
                }
            },
            {
                path: 'mywork',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | mywork-mywork-module */ "mywork-mywork-module").then(__webpack_require__.bind(null, /*! ../mywork/mywork.module */ "./src/app/serving/home.com/mywork/mywork.module.ts")).then(function (m) { return m.MyworkPageModule; });
                }
            },
            {
                path: '',
                redirectTo: 'index',
                pathMatch: 'full'
            }
        ]
    },
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=serving-home-com-tabs-tabs-module-es5.js.map