(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-technical-support-com-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/technical-support.com/list/list.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/technical-support.com/list/list.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"返回\" defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>技术支持</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n      <ion-searchbar [(ngModel)]=\"this.model.seachkey\" placeholder=\"支持项目名称和编号模糊查找\" (keyup)=\"search($event)\" ></ion-searchbar>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n      <ion-segment>\r\n        <ion-segment-button checked (click)=\"selectTab(0)\">\r\n            <ion-label>全部</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button (click)=\"selectTab(10)\">\r\n            <ion-label>未处理</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button (click)=\"selectTab(30)\">\r\n            <ion-label>处理中</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button (click)=\"selectTab(40)\">\r\n            <ion-label>已关闭</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button (click)=\"selectTab(50)\">\r\n            <ion-label>已取消</ion-label>\r\n        </ion-segment-button>\r\n      </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"下拉刷新\" refreshingSpinner=\"circles\" refreshingText=\"刷新中...\">\r\n        </ion-refresher-content> \r\n    </ion-refresher>\r\n    <ion-list lines=\"full\">\r\n        <ion-item *ngFor=\"let item of model.data\" [routerLink]=\"['/serving/ts/detail']\" [queryParams]=\"{id:item.Id}\">\r\n            <ion-icon slot=\"start\" color=\"primary\" name=\"hammer\" size=\"large\"></ion-icon>\r\n            <ion-label>\r\n                <h2>{{item.mcs_name}}</h2>\r\n                <p>施工项目：{{item.mcs_title}}</p>\r\n                <p>施工日期：{{FormatToDateTime(item.mcs_repairdate)}}</p>\r\n                <p *ngIf=\"item.mcs_orderstatus==10\">施工状态：未处理</p>\r\n                <p *ngIf=\"item.mcs_orderstatus==30\">施工状态：处理中</p>\r\n                <p *ngIf=\"item.mcs_orderstatus==40\">施工状态：已关闭</p>\r\n                <p *ngIf=\"item.mcs_orderstatus==50\">施工状态：已取消</p>\r\n            </ion-label>\r\n        </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-row *ngIf=\"model.isending\">\r\n        <ion-col class=\"nodata\" text-center>\r\n            没有更多内容啦\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"this.model.nodata\">\r\n        <ion-col class=\"nodata\" text-center>\r\n            没有查询到数据\r\n        </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-infinite-scroll #myInfiniteScroll threshold=\"100px\" (ionInfinite)=\"doLoading($event)\"> \r\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载更多...\"> \r\n        </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button [routerLink]=\"['/serving/ts/edit']\">\r\n            <ion-icon name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/serving/technical-support.com/list/list.page.ts");







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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../base/base.ser/http-service.service */ "./src/app/base/base.ser/http-service.service.ts");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! silly-datetime */ "./node_modules/silly-datetime/dest/index.js");
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(silly_datetime__WEBPACK_IMPORTED_MODULE_4__);





let ListPage = class ListPage {
    constructor(_http, _page, httpService) {
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
    ngOnInit() {
        this.model.page = 1;
        var cachedata = this.httpService.GetDataCache(this.model.name);
        if (cachedata == "") {
            this.getList(null);
        }
        else {
            this.model.data = JSON.parse(cachedata);
        }
    }
    //搜索方法
    search(event) {
        var keyCode = event ? event.keyCode : "";
        if (keyCode == 13) {
            this.model.data = [];
            this.model.page = 1;
            this.model.isending = false;
            this.getList(null);
        }
    }
    //下拉刷新
    doRefresh(event) {
        this.model.data = [];
        this.model.page = 1;
        this.model.isending = false;
        this.getList(event);
    }
    //加载下一页
    doLoading(event) {
        this.model.page++;
        this.getList(event);
    }
    //切换tab
    selectTab(status) {
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
    }
    //获取列表数据
    getList(event) {
        this._page.loadingShow();
        this._http.get(this.model.apiUrl, {
            params: {
                orderstatus: this.model.orderstatus,
                seachkey: this.model.seachkey,
                sort: this.model.sort,
                pageSize: this.model.pageSize,
                page: this.model.page
            }
        }, (res) => {
            if (res.Results !== null) {
                //绑定数据
                res.Results.forEach(item => {
                    var value = item["Attributes"];
                    this.model.data.push({
                        "Id": value.mcs_supportorderid,
                        "mcs_name": value.mcs_name,
                        "mcs_repairdate": value.mcs_repairdate,
                        "mcs_orderstatus": value.mcs_orderstatus,
                        "mcs_title": value.mcs_title
                    });
                });
                //设置数据存储到本地
                if (this.model.page == 1) {
                    this.httpService.SetDataCache(this.model.name, JSON.stringify(this.model.data).toString());
                }
                event ? event.target.complete() : '';
                //判断是否有新数据
                if (res.Results.length < 2) {
                    event ? event.target.disabled = true : "";
                    this.model.isending = true;
                }
                this._page.loadingHide();
                if (this.model.data.length == 0) {
                    this.model.nodata = true;
                }
                else {
                    this.model.nodata = false;
                }
            }
            else {
                this._page.alert("消息提示", "数据加载异常");
                this._page.loadingHide();
            }
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
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
    FormatToDateTime(date) {
        if (date != null && date != undefined) {
            return silly_datetime__WEBPACK_IMPORTED_MODULE_4___default.a.format(date, 'YYYY-MM-DD hh:mm:ss');
        }
        else {
            return '';
        }
    }
};
ListPage.ctorParameters = () => [
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["Dcem"].Core.Http },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["Dcem"].Core.Page },
    { type: _base_base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/technical-support.com/list/list.page.html"),
        styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/serving/technical-support.com/list/list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["Dcem"].Core.Http, app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["Dcem"].Core.Page, _base_base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
], ListPage);



/***/ })

}]);
//# sourceMappingURL=serving-technical-support-com-list-list-module-es2015.js.map