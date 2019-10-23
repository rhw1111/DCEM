(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-mc-reservation-com-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/mc-reservation.com/list/list.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/mc-reservation.com/list/list.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>预约单</ion-title>\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n        <ion-searchbar></ion-searchbar>\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n        <ion-segment>\r\n            <ion-segment-button checked>\r\n                <ion-label>全部</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button>\r\n                <ion-label>待跟进(10)</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button>\r\n                <ion-label>已跟进(2)</ion-label>\r\n            </ion-segment-button>\r\n        </ion-segment>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list lines=\"full\">\r\n        <ion-item-divider>\r\n            <ion-label>\r\n               10月07日\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item button=\"true\" mode=\"ios\" >\r\n            <ion-icon slot=\"start\" color=\"primary\" name=\"man\" size=\"large\"></ion-icon>\r\n            <ion-label>\r\n                <h2>渝B00002</h2>\r\n                <p>郑建成</p>\r\n            </ion-label>\r\n            <div>\r\n                <span>2019-10-07</span>\r\n                <span>08:30-90:00</span>\r\n                <span>待跟进</span>\r\n            </div>\r\n        </ion-item>\r\n        <ion-item button=\"true\" mode=\"ios\">\r\n            <ion-icon slot=\"start\" color=\"danger\" name=\"woman\" size=\"large\"></ion-icon>\r\n            <ion-label>\r\n                <h2>渝B00002</h2>\r\n                <p>郑建成</p>\r\n            </ion-label>\r\n            <div>\r\n                <span>2019-10-07</span>\r\n                <span>08:30-90:00</span>\r\n                <span>待跟进</span>\r\n            </div>\r\n        </ion-item>\r\n        <ion-item button=\"true\" mode=\"ios\">\r\n            <ion-icon slot=\"start\" color=\"danger\" name=\"woman\" size=\"large\"></ion-icon>\r\n            <ion-label>\r\n                <h2>渝B00002</h2>\r\n                <p>郑建成</p>\r\n            </ion-label>\r\n            <div>\r\n                <span>2019-10-07</span>\r\n                <span>08:30-90:00</span>\r\n                <span>待跟进</span>\r\n            </div>\r\n        </ion-item>\r\n        <ion-item-divider>\r\n            <ion-label>\r\n                10月08日\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item button=\"true\" mode=\"ios\">\r\n            <ion-icon slot=\"start\" color=\"primary\" name=\"man\" size=\"large\"></ion-icon>\r\n            <ion-label>\r\n                <h2>渝B00002</h2>\r\n                <p>郑建成</p>\r\n            </ion-label>\r\n            <div>\r\n                <span>2019-10-08</span>\r\n                <span>08:30-90:00</span>\r\n                <span>已跟进</span>\r\n            </div>\r\n        </ion-item>\r\n        <ion-item button=\"true\" mode=\"ios\">\r\n            <ion-icon slot=\"start\" color=\"danger\" name=\"woman\" size=\"large\"></ion-icon>\r\n            <ion-label>\r\n                <h2>渝B00002</h2>\r\n                <p>郑建成</p>\r\n            </ion-label>\r\n            <div>\r\n                <span>2019-10-08</span>\r\n                <span>08:30-90:00</span>\r\n                <span>已跟进</span>\r\n            </div>\r\n        </ion-item>\r\n        <ion-item button=\"true\" mode=\"ios\">\r\n            <ion-icon slot=\"start\" color=\"danger\" name=\"woman\" size=\"large\"></ion-icon>\r\n            <ion-label>\r\n                <h2>渝B00002</h2>\r\n                <p>郑建成</p>\r\n            </ion-label>\r\n            <div>\r\n                <span>2019-10-08</span>\r\n                <span>08:30-90:00</span>\r\n                <span>已跟进</span>\r\n            </div>\r\n        </ion-item>\r\n\r\n    </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/serving/mc-reservation.com/list/list.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/serving/mc-reservation.com/list/list.module.ts ***!
  \****************************************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/serving/mc-reservation.com/list/list.page.ts");







var routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]
    }
];
var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/serving/mc-reservation.com/list/list.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/serving/mc-reservation.com/list/list.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list ion-item div {\n  font-size: 15px; }\n  ion-list ion-item div span {\n    padding-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmluZy9tYy1yZXNlcnZhdGlvbi5jb20vbGlzdC9FOlxcQXBwUHJvamVjdFxcRENFTVxcRENFTS5NQXBwL3NyY1xcYXBwXFxzZXJ2aW5nXFxtYy1yZXNlcnZhdGlvbi5jb21cXGxpc3RcXGxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSVksZUFBYyxFQUFBO0VBSjFCO0lBT2dCLGlCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VydmluZy9tYy1yZXNlcnZhdGlvbi5jb20vbGlzdC9saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0IHtcclxuICAgIGlvbi1pdGVte1xyXG5cclxuICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNXB4O1xyXG5cclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDo1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/serving/mc-reservation.com/list/list.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/serving/mc-reservation.com/list/list.page.ts ***!
  \**************************************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListPage = /** @class */ (function () {
    function ListPage() {
    }
    ListPage.prototype.ngOnInit = function () {
    };
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/mc-reservation.com/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/serving/mc-reservation.com/list/list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=serving-mc-reservation-com-list-list-module-es5.js.map