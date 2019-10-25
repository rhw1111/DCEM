(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-mc-reservation-com-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/mc-reservation.com/list/list.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/mc-reservation.com/list/list.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/home/mywork\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>预约单</ion-title>\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n        <ion-searchbar placeholder=\"支持姓名\\手机号\\车牌号搜索\"></ion-searchbar>\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n        <ion-segment>\r\n            <ion-segment-button checked (click)=\"showlist('')\">\r\n                <ion-label>全部</ion-label>\r\n            </ion-segment-button >\r\n            <ion-segment-button (click)=\"showlist(10)\">\r\n                <ion-label>待跟进</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button (click)=\"showlist(20)\">\r\n                <ion-label>已跟进</ion-label>\r\n            </ion-segment-button>\r\n        </ion-segment>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list lines=\"full\"  *ngFor=\"let r of mod.data\">\r\n        <ion-item button=\"true\" mode=\"ios\" [routerLink]=\"['/serving/reservation/detail']\" [queryParams]=\"{id:r.mcs_appointmentinfoid}\" >\r\n            <ion-label>\r\n                <h2>车牌号：{{r.mcs_carplate}}</h2>\r\n                <p>车主姓名：{{r.mcs_customername}}</p>\r\n                <p>预约日期：{{FormatToDate(r.mcs_appointmentat)}}</p>\r\n                <p>预约时段：{{r.mcs_appointmentconfigid}}</p>\r\n                <p *ngIf=\"r.mcs_status==10\">跟进状态：待跟进</p>\r\n                <p *ngIf=\"r.mcs_status==20\">跟进状态：已跟进</p>\r\n                <p *ngIf=\"r.mcs_status==30\">跟进状态：已入场</p>\r\n                <p *ngIf=\"r.mcs_status==50\">跟进状态：已取消</p>\r\n            </ion-label>\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/serving/mc-reservation.com/list/list.page.ts");







const routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]
    }
];
let ListPageModule = class ListPageModule {
};
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



/***/ }),

/***/ "./src/app/serving/mc-reservation.com/list/list.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/serving/mc-reservation.com/list/list.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list ion-item div p {\n  padding-left: 5px;\n  font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmluZy9tYy1yZXNlcnZhdGlvbi5jb20vbGlzdC9FOlxcQXBwUHJvamVjdFxcRENFTVxcRENFTS5NQXBwL3NyY1xcYXBwXFxzZXJ2aW5nXFxtYy1yZXNlcnZhdGlvbi5jb21cXGxpc3RcXGxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS2dCLGlCQUFpQjtFQUNqQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aW5nL21jLXJlc2VydmF0aW9uLmNvbS9saXN0L2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3Qge1xyXG4gICAgaW9uLWl0ZW0ge1xyXG5cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! silly-datetime */ "./node_modules/silly-datetime/dest/index.js");
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(silly_datetime__WEBPACK_IMPORTED_MODULE_4__);





let ListPage = class ListPage {
    constructor(router, _http, _page) {
        this.router = router;
        this._http = _http;
        this._page = _page;
        this.mod = {
            apiUrl: '',
            data: []
        };
        this.mod.apiUrl = "/api/appointment-info/GetList";
    }
    ngOnInit() {
        this.showlist("");
    }
    showlist(id) {
        this._page.loadingShow();
        this._http.get(this.mod.apiUrl + "?status=" + id + "&search=", {}, (res) => {
            if (res.Results !== null) {
                this.mod.data = [];
                //console.log('get res=' + res.data);
                for (var key in res.Results) {
                    var obj = {};
                    obj["mcs_appointmentinfoid"] = res.Results[key]["Id"];
                    obj["mcs_carplate"] = res.Results[key]["Attributes"]["mcs_carplate"];
                    obj["mcs_customername"] = res.Results[key]["Attributes"]["mcs_customername"];
                    obj["mcs_appointmentat"] = res.Results[key]["Attributes"]["mcs_appointmentat"];
                    obj["mcs_appointmentconfigid"] = res.Results[key]["Attributes"]["appointmentconfig_x002e_mcs_name"];
                    obj["mcs_status"] = res.Results[key]["Attributes"]["mcs_status"];
                    this.mod.data.push(obj);
                }
                this._page.loadingHide();
            }
            else {
                this._page.alert("消息提示", "客户数据加载异常");
                this._page.loadingHide();
            }
        }, (err) => {
            this._page.alert("消息提示", "客户数据加载异常");
            this._page.loadingHide();
        });
    }
    FormatToDate(date) {
        if (date != null && date != undefined) {
            return silly_datetime__WEBPACK_IMPORTED_MODULE_4___default.a.format(date, 'YYYY-MM-DD');
        }
        else {
            return '';
        }
    }
};
ListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["Dcem"].Core.Http },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["Dcem"].Core.Page }
];
ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/mc-reservation.com/list/list.page.html"),
        styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/serving/mc-reservation.com/list/list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["Dcem"].Core.Http, app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["Dcem"].Core.Page])
], ListPage);



/***/ })

}]);
//# sourceMappingURL=serving-mc-reservation-com-list-list-module-es2015.js.map