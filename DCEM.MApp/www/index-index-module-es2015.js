(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index-index-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/home.com/index/index.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/home.com/index/index.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>首页</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen scroll-y=\"false\">\r\n    <ion-list lines=\"none\">\r\n        <ion-list-header text-center>\r\n            <img src=\"./assets/img/default.png\" />\r\n        </ion-list-header>\r\n    </ion-list>\r\n\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-label>待办项</ion-label>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/reservation/list']\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"document\"></ion-icon>\r\n                    <ion-badge color=\"danger\">6</ion-badge>\r\n                    <ion-label>预约单</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/ri/list']\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"document\"></ion-icon>\r\n                    <ion-label>问诊单</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/resume/list']\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"card\"></ion-icon>\r\n                    <ion-badge color=\"danger\">6</ion-badge>\r\n                    <ion-label>维修履历</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/mycustomer/list']\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"contacts\"></ion-icon>\r\n                    <ion-label>客户</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/ts/list']\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"document\"></ion-icon>\r\n                    <ion-label>技术支持</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/demo/analytics']\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"analytics\"></ion-icon>\r\n                    <ion-label>报表</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n            </ion-col>\r\n            <ion-col>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-label>工作台</ion-label>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/reservation/edit']\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"calendar\"></ion-icon>\r\n                    <ion-label>快速预约</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/ri/edit']\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"archive\"></ion-icon>\r\n                    <ion-label>快速问诊</ion-label>\r\n                    <ion-badge color=\"danger\">6</ion-badge>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/resume/edit']\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"book\"></ion-icon>\r\n                    <ion-label>快速开单</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/ts/edit']\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"cog\"></ion-icon>\r\n                    <ion-label>技术支持</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n        </ion-row>\r\n        \r\n    </ion-grid>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/serving/home.com/index/index.module.ts":
/*!********************************************************!*\
  !*** ./src/app/serving/home.com/index/index.module.ts ***!
  \********************************************************/
/*! exports provided: IndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageModule", function() { return IndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.page */ "./src/app/serving/home.com/index/index.page.ts");







const routes = [
    {
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"]
    }
];
let IndexPageModule = class IndexPageModule {
};
IndexPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"]]
    })
], IndexPageModule);



/***/ }),

/***/ "./src/app/serving/home.com/index/index.page.scss":
/*!********************************************************!*\
  !*** ./src/app/serving/home.com/index/index.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list {\n  height: 30%; }\n  ion-list ion-list-header {\n    height: 100%;\n    text-align: center;\n    background-color: #f9f9f9; }\n  ion-list ion-list-header img {\n      left: 50%;\n      position: relative;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%);\n      max-width: 50%;\n      max-height: 50%; }\n  ion-grid:nth-child(even) ion-col {\n  border-bottom: 2px solid #e6e6e6;\n  border-top: 2px solid #e6e6e6;\n  padding-left: 15px;\n  height: 55px;\n  padding-top: 15px; }\n  ion-grid:nth-child(even) ion-col ion-label {\n    font-size: 14px;\n    font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmluZy9ob21lLmNvbS9pbmRleC9FOlxcQXBwUHJvamVjdFxcRENFTVxcRENFTS5NQXBwL3NyY1xcYXBwXFxzZXJ2aW5nXFxob21lLmNvbVxcaW5kZXhcXGluZGV4LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQTtFQURmO0lBSVEsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBb0MsRUFBQTtFQU41QztNQVNZLFNBQVM7TUFDVCxrQkFBa0I7TUFDbEIsbUNBQTJCO2NBQTNCLDJCQUEyQjtNQUMzQixjQUFjO01BQ2QsZUFBZSxFQUFBO0VBSzNCO0VBRVEsZ0NBQTJDO0VBQzNDLDZCQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQixFQUFBO0VBTnpCO0lBU1ksZUFBZTtJQUNmLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VydmluZy9ob21lLmNvbS9pbmRleC9pbmRleC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdCB7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuXHJcbiAgICBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSwgMjQ5LCAyNDkpO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWdyaWQ6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGlvbi1jb2wge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYigyMzAsIDIzMCwgMjMwKTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG5cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/serving/home.com/index/index.page.ts":
/*!******************************************************!*\
  !*** ./src/app/serving/home.com/index/index.page.ts ***!
  \******************************************************/
/*! exports provided: IndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPage", function() { return IndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IndexPage = class IndexPage {
    constructor() { }
    ngOnInit() {
    }
};
IndexPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: __webpack_require__(/*! raw-loader!./index.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/home.com/index/index.page.html"),
        styles: [__webpack_require__(/*! ./index.page.scss */ "./src/app/serving/home.com/index/index.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IndexPage);



/***/ })

}]);
//# sourceMappingURL=index-index-module-es2015.js.map