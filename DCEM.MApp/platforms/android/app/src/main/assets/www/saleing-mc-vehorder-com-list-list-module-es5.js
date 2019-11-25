(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-mc-vehorder-com-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/mc-vehorder.com/list/list.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/mc-vehorder.com/list/list.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"返回\" defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>整车订单</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n        <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n      <ion-searchbar [(ngModel)]=\"this.model.params.SearchKey\" placeholder=\"可根据订单编码、姓名、手机号模糊查找\" (keyup)=\"search($event)\" ></ion-searchbar>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n      <ion-segment>\r\n        <ion-segment-button checked (click)=\"selectTab(0)\">\r\n            <ion-label>全部</ion-label>\r\n        </ion-segment-button>\r\n      \r\n        <ion-segment-button (click)=\"selectTab(1)\">\r\n            <ion-label>订金待支付</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button (click)=\"selectTab(2)\">\r\n            <ion-label>订金已支付</ion-label>\r\n        </ion-segment-button>\r\n       \r\n      </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"下拉刷新\" refreshingSpinner=\"circles\" refreshingText=\"刷新中...\">\r\n        </ion-refresher-content> \r\n    </ion-refresher>\r\n    <ion-list lines=\"full\">\r\n        <ion-item *ngFor=\"let item of model.datalist\" [routerLink]=\"['/saleing/vehorder/detail']\" [queryParams]=\"{id:item.mcs_vehorderid}\">          \r\n            <ion-icon slot=\"start\" name=\"logo-instagram\" size=\"large\" color=\"primary\"></ion-icon>\r\n            <ion-label>\r\n                <h2>{{item.mcs_code}}</h2> \r\n                <p>{{item.mcs_contactname}}</p>\r\n                <p>{{item.mcs_contactphone}}</p>            \r\n            </ion-label>\r\n           <!--  <ion-note slot=\"end\" >\r\n                 <ion-icon color=\"primary\" name=\"hourglass\" size=\"small\"></ion-icon> \r\n                <p>{{item.mcs_code}}</p>    \r\n            </ion-note> -->\r\n            <ion-note slot=\"end\" >\r\n                <!-- <ion-icon color=\"primary\" name=\"hourglass\" size=\"small\"></ion-icon>  -->\r\n                <p>{{item.mcs_rostatus}}</p>   \r\n            </ion-note>\r\n            \r\n        </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-row *ngIf=\"model.isending\">\r\n        <ion-label>\r\n            <p>\r\n                没有更多的记录显示啦\r\n            </p>\r\n        </ion-label>\r\n    </ion-row>\r\n    \r\n    <ion-infinite-scroll #myInfiniteScroll threshold=\"100px\" (ionInfinite)=\"doLoading($event)\"> \r\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载更多...\"> \r\n        </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n  \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/saleing/mc-vehorder.com/list/list.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/saleing/mc-vehorder.com/list/list.module.ts ***!
  \*************************************************************/
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
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/saleing/mc-vehorder.com/list/list.page.ts");







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

/***/ "./src/app/saleing/mc-vehorder.com/list/list.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/saleing/mc-vehorder.com/list/list.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVpbmcvbWMtdmVob3JkZXIuY29tL2xpc3QvbGlzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/saleing/mc-vehorder.com/list/list.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/saleing/mc-vehorder.com/list/list.page.ts ***!
  \***********************************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../base/base.ser/http-service.service */ "./src/app/base/base.ser/http-service.service.ts");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../saleing.ser/optionset.service */ "./src/app/saleing/saleing.ser/optionset.service.ts");






var ListPage = /** @class */ (function () {
    function ListPage(_http, _page, httpService, optionset) {
        this._http = _http;
        this._page = _page;
        this.httpService = httpService;
        this.optionset = optionset;
        this.model = {
            name: 'vehorderlist',
            apiUrl: '/api/vehorder/GetVehorderList',
            isending: false,
            datalist: [],
            params: {
                mcs_rostatus: 0,
                SearchKey: '',
                Sort: '',
                PageSize: 10,
                PageIndex: 1,
            }
        };
    }
    ListPage.prototype.ngOnInit = function () {
        this.model.params.PageIndex = 1;
        this.getList(null);
    };
    //搜索方法
    ListPage.prototype.search = function (event) {
        var keyCode = event ? event.keyCode : "";
        if (keyCode == 13) {
            this.model.datalist = [];
            this.model.params.PageIndex = 1;
            this.model.isending = false;
            this.getList(null);
        }
    };
    //下拉刷新
    ListPage.prototype.doRefresh = function (event) {
        this.model.datalist = [];
        this.model.params.PageIndex = 1;
        this.model.isending = false;
        this.getList(event);
    };
    //加载下一页
    ListPage.prototype.doLoading = function (event) {
        this.model.params.PageIndex++;
        this.getList(event);
    };
    //切换tab
    ListPage.prototype.selectTab = function (status) {
        this.infiniteScroll.disabled = false; //切换标签初始化下拉控件事件
        this.model.datalist = [];
        this.model.params.PageIndex = 1;
        this.model.isending = false;
        if (status.toString() != "" && status != undefined) {
            this.model.params.mcs_rostatus = status;
        }
        else {
            this.model.params.mcs_rostatus = 0;
        }
        this.getList(null);
    };
    //获取列表数据
    ListPage.prototype.getList = function (event) {
        //debugger;
        var _this = this;
        this._page.loadingShow();
        this._http.postForToaken(this.model.apiUrl, this.model.params, function (res) {
            //debugger;
            if (res.Results !== null) {
                //绑定数据
                res.Results.forEach(function (item) {
                    var obj = {};
                    obj["mcs_vehorderid"] = item["Attributes"].mcs_vehorderid;
                    obj["mcs_contactname"] = item["Attributes"].mcs_contactname;
                    obj["mcs_contactphone"] = item["Attributes"].mcs_contactphone;
                    obj["mcs_code"] = item["Attributes"].mcs_code;
                    obj["mcs_rostatus"] = _this.optionset.GetOptionSetNameByValue("mcs_rostatus", item["Attributes"].mcs_rostatus);
                    _this.model.datalist.push(obj);
                });
                //设置数据存储到本地
                if (_this.model.params.PageIndex == 1) {
                    _this.httpService.SetDataCache(_this.model.name, JSON.stringify(_this.model.datalist).toString());
                }
                event ? event.target.complete() : '';
                //判断是否有新数据
                if (res.Results.length < _this.model.params.PageIndex) {
                    event ? event.target.disabled = true : "";
                    _this.model.isending = true;
                }
            }
            else {
                _this._page.alert("消息提示", "数据加载异常");
            }
            _this._page.loadingHide();
        }, function (err) {
            _this._page.alert("消息提示", "数据加载异常");
            _this._page.loadingHide();
        });
    };
    ListPage.ctorParameters = function () { return [
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"] },
        { type: _base_base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__["OptionSetService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"])
    ], ListPage.prototype, "infiniteScroll", void 0);
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/mc-vehorder.com/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/saleing/mc-vehorder.com/list/list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"],
            _base_base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__["OptionSetService"]])
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=saleing-mc-vehorder-com-list-list-module-es5.js.map