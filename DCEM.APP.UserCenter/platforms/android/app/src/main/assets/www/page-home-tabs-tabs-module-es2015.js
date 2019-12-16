(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-home-tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/home/tabs/tabs.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/home/tabs/tabs.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\r\n\r\n    <ion-tab-bar slot=\"bottom\">\r\n        <ion-tab-button tab=\"community\">\r\n            <ion-icon name=\"aperture\"></ion-icon>\r\n            <ion-label>发现</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"message\">\r\n            <ion-icon name=\"chatboxes\"></ion-icon>\r\n            <ion-label>消息</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"carcenter\">\r\n            <ion-icon name=\"car\"></ion-icon>\r\n            <ion-label>爱车</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"servicecenter\">\r\n            <ion-icon name=\"desktop\"></ion-icon>\r\n            <ion-label>服务</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"personalcenter\">\r\n            <ion-icon name=\"person\"></ion-icon>\r\n            <ion-label>我的</ion-label>\r\n        </ion-tab-button>\r\n    </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n"

/***/ }),

/***/ "./src/app/page/home/tabs/tabs-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/page/home/tabs/tabs-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/page/home/tabs/tabs.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'community',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | community-index-index-module */[__webpack_require__.e("common"), __webpack_require__.e("community-index-index-module")]).then(__webpack_require__.bind(null, /*! ../../community/index/index.module */ "./src/app/page/community/index/index.module.ts")).then(m => m.IndexPageModule)
                    }
                ]
            },
            {
                path: 'message',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | message-index-index-module */ "message-index-index-module").then(__webpack_require__.bind(null, /*! ../../message/index/index.module */ "./src/app/page/message/index/index.module.ts")).then(m => m.IndexPageModule)
                    }
                ]
            },
            {
                path: 'charging',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | charging-index-index-module */ "charging-index-index-module").then(__webpack_require__.bind(null, /*! ../../charging/index/index.module */ "./src/app/page/charging/index/index.module.ts")).then(m => m.IndexPageModule)
                    }
                ]
            },
            {
                path: 'carcenter',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | carcenter-index-index-module */ "carcenter-index-index-module").then(__webpack_require__.bind(null, /*! ../../carcenter/index/index.module */ "./src/app/page/carcenter/index/index.module.ts")).then(m => m.IndexPageModule)
                    }
                ]
            },
            {
                path: 'servicecenter',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | servicecenter-index-index-module */ "servicecenter-index-index-module").then(__webpack_require__.bind(null, /*! ../../servicecenter/index/index.module */ "./src/app/page/servicecenter/index/index.module.ts")).then(m => m.IndexPageModule)
                    }
                ]
            },
            {
                path: 'personalcenter',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | personalcenter-index-index-module */ "personalcenter-index-index-module").then(__webpack_require__.bind(null, /*! ../../personalcenter/index/index.module */ "./src/app/page/personalcenter/index/index.module.ts")).then(m => m.IndexPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/carcenter',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/carcenter',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/page/home/tabs/tabs.module.ts":
/*!***********************************************!*\
  !*** ./src/app/page/home/tabs/tabs.module.ts ***!
  \***********************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/page/home/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/page/home/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/page/home/tabs/tabs.page.scss":
/*!***********************************************!*\
  !*** ./src/app/page/home/tabs/tabs.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvaG9tZS90YWJzL3RhYnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/page/home/tabs/tabs.page.ts":
/*!*********************************************!*\
  !*** ./src/app/page/home/tabs/tabs.page.ts ***!
  \*********************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/home/tabs/tabs.page.html"),
        styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/page/home/tabs/tabs.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=page-home-tabs-tabs-module-es2015.js.map