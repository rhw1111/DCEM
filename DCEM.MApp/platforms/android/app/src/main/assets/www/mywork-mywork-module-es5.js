(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mywork-mywork-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/home.com/mywork/mywork.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/home.com/mywork/mywork.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/home/tabs\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>我的</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button [routerLink]=\"['/serving/home/tabs']\">\r\n                <ion-icon slot=\"icon-only\" name=\"home\" [routerLink]=\"['/serving/home/tabs']\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content color=\"light\">\r\n    <ion-list lines=\"full\">\r\n        <ion-item>\r\n            <ion-icon color=\"primary\" slot=\"start\" name=\"person\" size=\"large\"></ion-icon>\r\n            <ion-label>\r\n                <h2>张三</h2>\r\n                <p>15088888888</p>\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n    </ion-list>\r\n\r\n    <ion-list lines=\"full\">\r\n        <ion-item [routerLink]=\"['/serving/mycustomer/list']\">\r\n            <ion-icon color=\"primary\" slot=\"start\" name=\"contacts\" size=\"large\"></ion-icon>\r\n            <ion-label>\r\n                <h3>我的客户</h3>\r\n            </ion-label>\r\n        </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-list lines=\"full\">\r\n        <ion-item>\r\n            <ion-icon color=\"secondary\" slot=\"start\" name=\"alarm\" size=\"large\"></ion-icon>\r\n            <ion-label>\r\n                <h3>我的预约</h3>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item [routerLink]=\"['/serving/ri/list']\">\r\n            <ion-icon color=\"tertiary\" slot=\"start\" name=\"clipboard\" size=\"large\"></ion-icon>\r\n            <ion-label>\r\n                <h3>我的问诊</h3>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item [routerLink]=\"['/serving/sc/list']\">\r\n            <ion-icon color=\"success\" slot=\"start\" name=\"hammer\" size=\"large\"></ion-icon>\r\n            <ion-label>\r\n                <h3>我的维修</h3>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-icon color=\"danger\" slot=\"start\" name=\"happy\" size=\"large\"></ion-icon>\r\n            <ion-label>\r\n                <h3>技术支持</h3>\r\n            </ion-label>\r\n        </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-list lines=\"full\">\r\n        <ion-item>\r\n            <ion-icon color=\"warning\" slot=\"start\" name=\"settings\" size=\"large\"></ion-icon>\r\n            <ion-label>\r\n                <h3>系统设置</h3>\r\n            </ion-label>\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/serving/home.com/mywork/mywork.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/serving/home.com/mywork/mywork.module.ts ***!
  \**********************************************************/
/*! exports provided: MyworkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyworkPageModule", function() { return MyworkPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mywork_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mywork.page */ "./src/app/serving/home.com/mywork/mywork.page.ts");







var routes = [
    {
        path: '',
        component: _mywork_page__WEBPACK_IMPORTED_MODULE_6__["MyworkPage"]
    }
];
var MyworkPageModule = /** @class */ (function () {
    function MyworkPageModule() {
    }
    MyworkPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mywork_page__WEBPACK_IMPORTED_MODULE_6__["MyworkPage"]]
        })
    ], MyworkPageModule);
    return MyworkPageModule;
}());



/***/ }),

/***/ "./src/app/serving/home.com/mywork/mywork.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/serving/home.com/mywork/mywork.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  background-color: #f9f9f9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmluZy9ob21lLmNvbS9teXdvcmsvRTpcXEFwcFByb2plY3RcXERDRU1cXERDRU0uTUFwcC9zcmNcXGFwcFxcc2VydmluZ1xcaG9tZS5jb21cXG15d29ya1xcbXl3b3JrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFvQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VydmluZy9ob21lLmNvbS9teXdvcmsvbXl3b3JrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDI0OSwgMjQ5KTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/serving/home.com/mywork/mywork.page.ts":
/*!********************************************************!*\
  !*** ./src/app/serving/home.com/mywork/mywork.page.ts ***!
  \********************************************************/
/*! exports provided: MyworkPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyworkPage", function() { return MyworkPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyworkPage = /** @class */ (function () {
    function MyworkPage() {
    }
    MyworkPage.prototype.ngOnInit = function () {
    };
    MyworkPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mywork',
            template: __webpack_require__(/*! raw-loader!./mywork.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/home.com/mywork/mywork.page.html"),
            styles: [__webpack_require__(/*! ./mywork.page.scss */ "./src/app/serving/home.com/mywork/mywork.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyworkPage);
    return MyworkPage;
}());



/***/ })

}]);
//# sourceMappingURL=mywork-mywork-module-es5.js.map