(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-technical-support-com-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/technical-support.com/list/list.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/technical-support.com/list/list.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"返回\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>技术支持</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n      <ion-searchbar [(ngModel)]=\"this.model.seachkey\" placeholder=\"支持项目名称和编号模糊查找\" (keyup)=\"search($event)\" ></ion-searchbar>\n  </ion-toolbar>\n  <ion-toolbar>\n      <ion-segment>\n        <ion-segment-button checked (click)=\"selectTab(0)\">\n            <ion-label>全部</ion-label>\n        </ion-segment-button>\n        <ion-segment-button (click)=\"selectTab(10)\">\n            <ion-label>未处理</ion-label>\n        </ion-segment-button>\n        <ion-segment-button (click)=\"selectTab(30)\">\n            <ion-label>处理中</ion-label>\n        </ion-segment-button>\n        <ion-segment-button (click)=\"selectTab(40)\">\n            <ion-label>已关闭</ion-label>\n        </ion-segment-button>\n        <ion-segment-button (click)=\"selectTab(50)\">\n            <ion-label>已取消</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"下拉刷新\" refreshingSpinner=\"circles\" refreshingText=\"刷新中...\">\n        </ion-refresher-content> \n    </ion-refresher>\n    <ion-list lines=\"full\">\n        <ion-item *ngFor=\"let item of model.data\" [routerLink]=\"['/serving/ts/detail']\" [queryParams]=\"{id:item.Id}\">\n            <ion-icon slot=\"start\" color=\"primary\" name=\"hammer\" size=\"large\"></ion-icon>\n            <ion-label>\n                <h2>{{item.mcs_name}}</h2>\n                <p>施工项目：{{item.mcs_title}}</p>\n                <p>施工日期：{{FormatToDateTime(item.mcs_repairdate)}}</p>\n                <p *ngIf=\"item.mcs_orderstatus==10\">施工状态：未处理</p>\n                <p *ngIf=\"item.mcs_orderstatus==30\">施工状态：处理中</p>\n                <p *ngIf=\"item.mcs_orderstatus==40\">施工状态：已关闭</p>\n                <p *ngIf=\"item.mcs_orderstatus==50\">施工状态：已取消</p>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n\n    <ion-row *ngIf=\"model.isending\">\n        <ion-col class=\"nodata\" text-center>\n            没有更多内容啦\n        </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"this.model.nodata\">\n        <ion-col class=\"nodata\" text-center>\n            没有查询到数据\n        </ion-col>\n    </ion-row>\n    \n    <ion-infinite-scroll #myInfiniteScroll threshold=\"100px\" (ionInfinite)=\"doLoading($event)\"> \n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载更多...\"> \n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button [routerLink]=\"['/serving/ts/edit']\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/serving/technical-support.com/list/list.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/serving/technical-support.com/list/list.module.ts ***!
  \*******************************************************************/
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
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/serving/technical-support.com/list/list.page.ts");







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

/***/ "./src/app/serving/technical-support.com/list/list.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/serving/technical-support.com/list/list.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvdGVjaG5pY2FsLXN1cHBvcnQuY29tL2xpc3QvbGlzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/serving/technical-support.com/list/list.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/serving/technical-support.com/list/list.page.ts ***!
  \*****************************************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../base/base.ser/http-service.service */ "./src/app/base/base.ser/http-service.service.ts");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! silly-datetime */ "./node_modules/silly-datetime/dest/index.js");
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(silly_datetime__WEBPACK_IMPORTED_MODULE_4__);





var ListPage = /** @class */ (function () {
    function ListPage(_http, _page, httpService) {
        this._http = _http;
        this._page = _page;
        this.httpService = httpService;
        this.model = {
            name: 'technicalsupportlist',
            apiUrl: '/api/tech-support/GetList',
            seachkey: '',
            orderstatus: 0,
            data: [],
            pageSize: 10,
            page: 1,
            sort: 'mcs_supportorderid desc',
            isending: false,
            nodata: false
        };
    }
    ListPage.prototype.ngOnInit = function () {
        this.model.page = 1;
        var cachedata = this.httpService.GetDataCache(this.model.name);
        if (cachedata == "") {
            this.getList(null);
        }
        else {
            this.model.data = JSON.parse(cachedata);
        }
    };
    //搜索方法
    ListPage.prototype.search = function (event) {
        var keyCode = event ? event.keyCode : "";
        if (keyCode == 13) {
            this.model.data = [];
            this.model.page = 1;
            this.model.isending = false;
            this.getList(null);
        }
    };
    //下拉刷新
    ListPage.prototype.doRefresh = function (event) {
        this.model.data = [];
        this.model.page = 1;
        this.model.isending = false;
        this.getList(event);
    };
    //加载下一页
    ListPage.prototype.doLoading = function (event) {
        this.model.page++;
        this.getList(event);
    };
    //切换tab
    ListPage.prototype.selectTab = function (status) {
        this.model.data = [];
        this.model.page = 1;
        this.model.isending = false;
        if (status != "" && status != undefined) {
            this.model.orderstatus = status;
        }
        else {
            this.model.orderstatus = 0;
        }
        this.getList(null);
    };
    //获取列表数据
    ListPage.prototype.getList = function (event) {
        var _this = this;
        this._page.loadingShow();
        this._http.get(this.model.apiUrl, {
            params: {
                orderstatus: this.model.orderstatus,
                seachkey: this.model.seachkey,
                sort: this.model.sort,
                pageSize: this.model.pageSize,
                page: this.model.page
            }
        }, function (res) {
            if (res.Results !== null) {
                //绑定数据
                res.Results.forEach(function (item) {
                    var value = item["Attributes"];
                    _this.model.data.push({
                        "Id": value.mcs_supportorderid,
                        "mcs_name": value.mcs_name,
                        "mcs_repairdate": value.mcs_repairdate,
                        "mcs_orderstatus": value.mcs_orderstatus,
                        "mcs_title": value.mcs_title
                    });
                });
                //设置数据存储到本地
                if (_this.model.page == 1) {
                    _this.httpService.SetDataCache(_this.model.name, JSON.stringify(_this.model.data).toString());
                }
                event ? event.target.complete() : '';
                //判断是否有新数据
                if (res.Results.length < 2) {
                    event ? event.target.disabled = true : "";
                    _this.model.isending = true;
                }
                _this._page.loadingHide();
                if (_this.model.data.length == 0) {
                    _this.model.nodata = true;
                }
                else {
                    _this.model.nodata = false;
                }
            }
            else {
                _this._page.alert("消息提示", "数据加载异常");
                _this._page.loadingHide();
            }
        }, function (err) {
            _this._page.alert("消息提示", "数据加载异常");
            _this._page.loadingHide();
        });
    };
    ListPage.prototype.FormatToDate = function (date) {
        if (date != null && date != undefined) {
            return silly_datetime__WEBPACK_IMPORTED_MODULE_4___default.a.format(date, 'YYYY-MM-DD');
        }
        else {
            return '';
        }
    };
    ListPage.prototype.FormatToDateTime = function (date) {
        if (date != null && date != undefined) {
            return silly_datetime__WEBPACK_IMPORTED_MODULE_4___default.a.format(date, 'YYYY-MM-DD hh:mm:ss');
        }
        else {
            return '';
        }
    };
    ListPage.ctorParameters = function () { return [
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"] },
        { type: _base_base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
    ]; };
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/technical-support.com/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/serving/technical-support.com/list/list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"],
            _base_base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=serving-technical-support-com-list-list-module-es5.js.map