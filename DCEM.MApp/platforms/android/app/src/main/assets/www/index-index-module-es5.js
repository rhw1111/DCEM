(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index-index-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/home.com/index/index.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/home.com/index/index.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>首页</ion-title>\r\n    </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content fullscreen scroll-y=\"true\">\r\n    <!-- <ion-list lines=\"none\">\r\n        \r\n    </ion-list> -->\r\n    <img src=\"./assets/img/index.jpg\" />\r\n    <!-- <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-label>待办项</ion-label>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid> -->\r\n    <ion-item-divider>\r\n        <ion-label>维保-待办项</ion-label>\r\n    </ion-item-divider>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/reservation/list']\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"document\"></ion-icon>\r\n                    <ion-badge color=\"danger\">6</ion-badge>\r\n                    <ion-label>预约单</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/ri/list']\">\r\n                    <ion-icon color=\"secondary\" size=\"large\" name=\"document\"></ion-icon>\r\n                    <ion-label>问诊单</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/sc/list']\">\r\n                    <ion-icon color=\"tertiary\" size=\"large\" name=\"card\"></ion-icon>\r\n                    <ion-badge color=\"danger\">6</ion-badge>\r\n                    <ion-label>服务委托书</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/mycustomer/list']\">\r\n                    <ion-icon color=\"success\" size=\"large\" name=\"contacts\"></ion-icon>\r\n                    <ion-label>客户</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/ts/list']\">\r\n                    <ion-icon color=\"warning\" size=\"large\" name=\"document\"></ion-icon>\r\n                    <ion-label>技术支持</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/report/analytics']\">\r\n                    <ion-icon color=\"danger\" size=\"large\" name=\"analytics\"></ion-icon>\r\n                    <ion-label>报表</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/spmdspstock/list']\">\r\n                    <ion-icon color=\"success\" size=\"large\" name=\"cube\"></ion-icon>\r\n                    <ion-label>备件库存</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/maintenance/calendar']\">\r\n                    <ion-icon name=\"calendar\" color=\"danger\" size=\"large\"></ion-icon>\r\n                    <ion-label>维保预约</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-item-divider>\r\n        <ion-label>售前-待办项</ion-label>\r\n    </ion-item-divider>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/saleing/lead/list']\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"git-branch\"></ion-icon>\r\n                    <ion-label>原始线索</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/saleing/onlylead/list']\">\r\n                    <ion-icon size=\"large\" name=\"infinite\"></ion-icon>\r\n                    <ion-label>唯一线索</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/saleing/cultivatetask/list']\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"map\"></ion-icon>\r\n                    <ion-label>培育任务</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/saleing/account/list']\">\r\n                    <ion-icon size=\"large\" name=\"logo-model-s\"></ion-icon>\r\n                    <ion-label>销售机会</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/saleing/deliverycentercarstock/list']\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"car\"></ion-icon>\r\n                    <ion-label>整车库存台帐</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/saleing/vehorder/list']\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"cube\"></ion-icon>\r\n                    <ion-label>整车订单</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/saleing/delivery/list']\">\r\n                    <ion-icon color=\"danger\" size=\"large\" name=\"checkbox-outline\"></ion-icon>\r\n                    <ion-label>交车单</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/saleing/vehnetwork/list']\">\r\n                    <ion-icon size=\"large\" name=\"logo-model-s\"></ion-icon>\r\n                    <ion-label>开票信息</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/saleing/vehlisense/list']\">\r\n                    <ion-icon color=\"success\" size=\"large\" name=\"cube\"></ion-icon>\r\n                    <ion-label>上牌信息</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col> \r\n                    <ion-tab-button [routerLink]=\"['/saleing/surveyorder/list']\">\r\n                        <ion-icon name=\"cube\" color=\"success\" size=\"large\"></ion-icon>\r\n                        <ion-label>勘测单</ion-label>\r\n                    </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n            </ion-col>\r\n            <ion-col>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <!-- <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-label>工作台</ion-label>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid> -->\r\n    <ion-item-divider>\r\n        <ion-label>工作台</ion-label>\r\n    </ion-item-divider>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/reservation/edit']\">\r\n                    <ion-icon color=\"dark\" size=\"large\" name=\"calendar\"></ion-icon>\r\n                    <ion-label>快速预约</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/ri/edit']\">\r\n                    <ion-icon color=\"medium\" size=\"large\" name=\"archive\"></ion-icon>\r\n                    <ion-label>快速问诊</ion-label>\r\n                    <ion-badge color=\"danger\">6</ion-badge>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/resume/edit']\">\r\n                    <ion-icon color=\"success\" size=\"large\" name=\"book\"></ion-icon>\r\n                    <ion-label>快速开单</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-tab-button [routerLink]=\"['/serving/ts/edit']\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"cog\"></ion-icon>\r\n                    <ion-label>技术支持</ion-label>\r\n                </ion-tab-button>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n    </ion-grid>\r\n\r\n</ion-content>"

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

module.exports = "/** {\r\n    margin: 0px;\r\n    padding: 0px;\r\n}*/\nion-list {\n  height: 30%; }\nion-list ion-list-header {\n    height: auto;\n    text-align: center;\n    background-color: #f9f9f9;\n    padding: 0px 0px; }\nimg {\n  /*left: 50%;*/\n  position: relative;\n  /*transform: translateX(-50%);*/\n  width: 100%;\n  /*max-height: 100%;*/ }\nion-grid:nth-child(even) ion-col {\n  border-bottom: 2px solid #e6e6e6;\n  border-top: 2px solid #e6e6e6;\n  padding-left: 15px;\n  height: 55px;\n  padding-top: 15px; }\nion-grid:nth-child(even) ion-col ion-label {\n    font-size: 14px;\n    font-weight: bold; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmluZy9ob21lLmNvbS9pbmRleC9FOlxcQXBwUHJvamVjdFxcRENFTVxcRENFTS5NQXBwL3NyY1xcYXBwXFxzZXJ2aW5nXFxob21lLmNvbVxcaW5kZXhcXGluZGV4LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2VydmluZy9ob21lLmNvbS9pbmRleC9pbmRleC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQ0dFO0FERUY7RUFFSSxXQUFXLEVBQUE7QUFGZjtJQU1RLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQW9DO0lBQ3BDLGdCQUFnQixFQUFBO0FBSXhCO0VBQ0ksYUFBQTtFQUNBLGtCQUFrQjtFQUNsQiwrQkFBQTtFQUNBLFdBQVc7RUFDWCxvQkFBQSxFQUFxQjtBQUd6QjtFQUVRLGdDQUEyQztFQUMzQyw2QkFBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUIsRUFBQTtBQU56QjtJQVNZLGVBQWU7SUFDZixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvaG9tZS5jb20vaW5kZXgvaW5kZXgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59Ki9cclxuXHJcbmlvbi1saXN0IHtcclxuXHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuXHJcbiAgICBpb24tbGlzdC1oZWFkZXIge1xyXG5cclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDI0OSwgMjQ5KTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMHB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbmltZyB7XHJcbiAgICAvKmxlZnQ6IDUwJTsqL1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLyp0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7Ki9cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyptYXgtaGVpZ2h0OiAxMDAlOyovXHJcbn1cclxuXHJcbmlvbi1ncmlkOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBpb24tY29sIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIGhlaWdodDogNTVweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCIvKioge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn0qL1xuaW9uLWxpc3Qge1xuICBoZWlnaHQ6IDMwJTsgfVxuICBpb24tbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICBwYWRkaW5nOiAwcHggMHB4OyB9XG5cbmltZyB7XG4gIC8qbGVmdDogNTAlOyovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyp0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7Ki9cbiAgd2lkdGg6IDEwMCU7XG4gIC8qbWF4LWhlaWdodDogMTAwJTsqLyB9XG5cbmlvbi1ncmlkOm50aC1jaGlsZChldmVuKSBpb24tY29sIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlNmU2ZTY7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZTZlNmU2O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGhlaWdodDogNTVweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7IH1cbiAgaW9uLWdyaWQ6bnRoLWNoaWxkKGV2ZW4pIGlvbi1jb2wgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cbiJdfQ== */"

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