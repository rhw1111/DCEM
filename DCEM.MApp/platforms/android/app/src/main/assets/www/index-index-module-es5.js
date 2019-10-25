(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index-index-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/home.com/index/index.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/home.com/index/index.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>首页</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen scroll-y=\"true\">\r\n    <ion-list lines=\"none\">\r\n        <ion-list-header text-center>\r\n            <img src=\"./assets/img/default.png\" />\r\n        </ion-list-header>\r\n    </ion-list>\r\n\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-label>待办项</ion-label>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/reservation/list']\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"document\"></ion-icon>\r\n                    <ion-badge color=\"danger\">6</ion-badge>\r\n                    <ion-label>预约单</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/ri/list']\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"document\"></ion-icon>\r\n                    <ion-label>问诊单</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/resume/list']\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"card\"></ion-icon>\r\n                    <ion-badge color=\"danger\">6</ion-badge>\r\n                    <ion-label>维修履历</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/mycustomer/list']\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"contacts\"></ion-icon>\r\n                    <ion-label>客户</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/ts/list']\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"document\"></ion-icon>\r\n                    <ion-label>技术支持</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/demo/analytics']\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"analytics\"></ion-icon>\r\n                    <ion-label>报表</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n            </ion-col>\r\n            <ion-col>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-label>工作台</ion-label>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/reservation/edit']\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"calendar\"></ion-icon>\r\n                    <ion-label>快速预约</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/ri/edit']\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"archive\"></ion-icon>\r\n                    <ion-label>快速问诊</ion-label>\r\n                    <ion-badge color=\"danger\">6</ion-badge>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/resume/edit']\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"book\"></ion-icon>\r\n                    <ion-label>快速开单</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/ts/edit']\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"cog\"></ion-icon>\r\n                    <ion-label>技术支持</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n        </ion-row>\r\n        \r\n    </ion-grid>\r\n\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.page */ "./src/app/serving/home.com/index/index.page.ts");







var routes = [
    {
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"]
    }
];
var IndexPageModule = /** @class */ (function () {
    function IndexPageModule() {
    }
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
    return IndexPageModule;
}());



/***/ }),

/***/ "./src/app/serving/home.com/index/index.page.scss":
/*!********************************************************!*\
  !*** ./src/app/serving/home.com/index/index.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list {\n  height: 30%;\n}\nion-list ion-list-header {\n  height: 100%;\n  text-align: center;\n  background-color: #f9f9f9;\n}\nion-list ion-list-header img {\n  left: 50%;\n  position: relative;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  max-width: 50%;\n  max-height: 50%;\n}\nion-grid:nth-child(even) ion-col {\n  border-bottom: 2px solid #e6e6e6;\n  border-top: 2px solid #e6e6e6;\n  padding-left: 15px;\n  height: 55px;\n  padding-top: 15px;\n}\nion-grid:nth-child(even) ion-col ion-label {\n  font-size: 14px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmluZy9ob21lLmNvbS9pbmRleC9EOlxc5bel5L2c55uu5b2VXFzlvq7ova/pobnnm65cXOS7o+eggVxc56e75Yqo56uvXFznp7vliqjnq68o5q2j5byP6aG555uuKVxcRENFTS5NQXBwL3NyY1xcYXBwXFxzZXJ2aW5nXFxob21lLmNvbVxcaW5kZXhcXGluZGV4LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2VydmluZy9ob21lLmNvbS9pbmRleC9pbmRleC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7QURDSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDQ1I7QURDUTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NaO0FES0k7RUFDSSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNGUjtBRElRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDRloiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aW5nL2hvbWUuY29tL2luZGV4L2luZGV4LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0IHtcclxuICAgIGhlaWdodDogMzAlO1xyXG5cclxuICAgIGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyNDksIDI0OSk7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tZ3JpZDpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyMzAsIDIzMCwgMjMwKTtcclxuICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiaW9uLWxpc3Qge1xuICBoZWlnaHQ6IDMwJTtcbn1cbmlvbi1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufVxuaW9uLWxpc3QgaW9uLWxpc3QtaGVhZGVyIGltZyB7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXgtaGVpZ2h0OiA1MCU7XG59XG5cbmlvbi1ncmlkOm50aC1jaGlsZChldmVuKSBpb24tY29sIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlNmU2ZTY7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZTZlNmU2O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGhlaWdodDogNTVweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5pb24tZ3JpZDpudGgtY2hpbGQoZXZlbikgaW9uLWNvbCBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndexPage = /** @class */ (function () {
    function IndexPage() {
    }
    IndexPage.prototype.ngOnInit = function () {
    };
    IndexPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! raw-loader!./index.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/home.com/index/index.page.html"),
            styles: [__webpack_require__(/*! ./index.page.scss */ "./src/app/serving/home.com/index/index.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IndexPage);
    return IndexPage;
}());



/***/ })

}]);
//# sourceMappingURL=index-index-module-es5.js.map