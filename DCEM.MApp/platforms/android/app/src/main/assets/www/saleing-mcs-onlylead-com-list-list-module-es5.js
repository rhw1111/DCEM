(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-mcs-onlylead-com-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-onlylead.com/list/list.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/mcs-onlylead.com/list/list.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/home/tabs\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>唯一线索</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n        <ion-searchbar [(ngModel)]=\"this.model.seachkey\" placeholder=\"请输入姓名\\手机号\" (keyup)=\"search($event)\"></ion-searchbar>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <!--<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"下拉刷新\" refreshingSpinner=\"circles\" refreshingText=\"刷新中...\">\r\n        </ion-refresher-content>\r\n    </ion-refresher>-->\r\n    <ion-list lines=\"full\">\r\n        <ion-item-sliding *ngFor=\"let item of model.data;let key=index\">\r\n            <ion-item [routerLink]=\"['/saleing/onlylead/detail']\" [queryParams]=\"{id:item.mcs_onlyleadid}\">\r\n                <img src=\"./assets/img/onlylead.png\" style=\"width:50px;height:50px; margin-right:10px\" />\r\n                <ion-label>\r\n                    <h2>{{item.mcs_name}}&nbsp;</h2>\r\n                    <p>{{item.mcs_gendervalue}}&nbsp;</p>\r\n\r\n                    <p>{{item.mcs_leadoriginvalue}}&nbsp;</p>\r\n                </ion-label>\r\n                <ion-icon *ngIf=\"item.mcs_mobilephone\" name=\"phone-portrait\" size=\"small\"></ion-icon>\r\n                <ion-note slot=\"end\">\r\n                    {{item.mcs_mobilephone}}&nbsp;\r\n                </ion-note>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n                <ion-item-option color=\"tertiary\" expandable [routerLink]=\"['/saleing/contactrecord/edit']\" [queryParams]=\"{id:item.mcs_onlyleadid}\">\r\n                    联络\r\n                </ion-item-option>\r\n                <ion-item-option color=\"primary\" [routerLink]=\"['/saleing/cultivatetask/edit']\" [queryParams]=\"{id:item.mcs_onlyleadid}\">\r\n                    培育\r\n                </ion-item-option>\r\n            </ion-item-options>\r\n        </ion-item-sliding>\r\n    </ion-list>\r\n    <ion-row *ngIf=\"model.ifDoLoading&&model.isending\">\r\n        <ion-col text-center>\r\n            <ion-label>\r\n                <p>\r\n                    没有更多内容啦\r\n                </p>\r\n            </ion-label>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-infinite-scroll #myInfiniteScroll threshold=\"100px\" (ionInfinite)=\"doLoading($event)\">\r\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载更多...\">\r\n        </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/saleing/mcs-onlylead.com/list/list.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/saleing/mcs-onlylead.com/list/list.module.ts ***!
  \**************************************************************/
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
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/saleing/mcs-onlylead.com/list/list.page.ts");







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

/***/ "./src/app/saleing/mcs-onlylead.com/list/list.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/saleing/mcs-onlylead.com/list/list.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVpbmcvbWNzLW9ubHlsZWFkLmNvbS9saXN0L2xpc3QucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/saleing/mcs-onlylead.com/list/list.page.ts":
/*!************************************************************!*\
  !*** ./src/app/saleing/mcs-onlylead.com/list/list.page.ts ***!
  \************************************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../base/base.ser/http-service.service */ "./src/app/base/base.ser/http-service.service.ts");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/base/base.ser/logininfo.storage */ "./src/app/base/base.ser/logininfo.storage.ts");







var ListPage = /** @class */ (function () {
    function ListPage(router, _http, _page, httpService, _logininfo) {
        this.router = router;
        this._http = _http;
        this._page = _page;
        this.httpService = httpService;
        this._logininfo = _logininfo;
        this.model = {
            name: 'onlylead',
            apiUrl: '/api/only-lead/QueryList',
            seachkey: '',
            data: [],
            pageSize: 300,
            page: 1,
            sort: '',
            systemUserId: "",
            dealerId: "",
            isending: false,
            nodata: false,
            ifDoLoading: false,
        };
    }
    ListPage.prototype.ngOnInit = function () {
        //debugger;
        this.model.systemUserId = this._logininfo.GetSystemUserId();
        //this.model.dealerId = this._logininfo.GetDealerid();
        this.showlist(null);
    };
    //搜索方法
    ListPage.prototype.search = function (event) {
        var keyCode = event ? event.keyCode : "";
        if (keyCode == 13) {
            this.model.data = [];
            this.model.page = 1;
            this.model.isending = false;
            this.showlist(null);
        }
    };
    //下拉刷新
    ListPage.prototype.doRefresh = function (event) {
        this.model.data = [];
        this.model.page = 1;
        this.model.isending = false;
        this.showlist(event);
    };
    //加载下一页
    ListPage.prototype.doLoading = function (event) {
        this.model.page++;
        this.model.ifDoLoading = true;
        this.showlist(event);
    };
    //展示数据
    ListPage.prototype.showlist = function (event) {
        var _this = this;
        if (!this.model.ifDoLoading) {
            this._page.loadingShow();
        }
        this._http.getForToaken(this.model.apiUrl, {
            "Search": this.model.seachkey,
            "PageSize": this.model.pageSize,
            "PageIndex": this.model.page
        }, function (res) {
            if (res.Results !== null) {
                for (var key in res.Results) {
                    var obj = {};
                    obj["mcs_onlyleadid"] = res.Results[key]["Id"];
                    obj["mcs_gender"] = res.Results[key]["Attributes"]["mcs_gender"];
                    obj["mcs_gendervalue"] = res.Results[key]["Attributes"]["mcs_gender@OData.Community.Display.V1.FormattedValue"];
                    obj["mcs_leadorigin"] = res.Results[key]["Attributes"]["mcs_leadorigin"];
                    obj["mcs_leadoriginvalue"] = res.Results[key]["Attributes"]["mcs_leadorigin@OData.Community.Display.V1.FormattedValue"];
                    obj["mcs_mobilephone"] = res.Results[key]["Attributes"]["mcs_mobilephone"];
                    obj["mcs_name"] = res.Results[key]["Attributes"]["mcs_name"];
                    _this.model.data.push(obj);
                }
                //设置数据存储到本地
                if (_this.model.page == 1) {
                    _this.httpService.SetDataCache(_this.model.name, JSON.stringify(_this.model.data).toString());
                }
                event ? event.target.complete() : '';
                //判断是否有新数据
                if (res.Results.length < 10) {
                    event ? event.target.disabled = true : "";
                    _this.model.isending = true;
                }
            }
            else {
                _this._page.alert("消息提示", "唯一线索数据加载异常");
            }
            _this._page.loadingHide();
        }, function (err) {
            _this._page.alert("消息提示", "唯一线索数据加载异常");
            _this._page.loadingHide();
        });
    };
    //返回数据为空，默认“--”
    ListPage.prototype.SetDefaultValue = function (data) {
        if (data == null || data == undefined) {
            return '--';
            ;
        }
        else {
            return data;
        }
    };
    ListPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Http"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Page"] },
        { type: _base_base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_6__["Storage_LoginInfo"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"])
    ], ListPage.prototype, "infiniteScroll", void 0);
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-onlylead.com/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/saleing/mcs-onlylead.com/list/list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Http"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Page"],
            _base_base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_6__["Storage_LoginInfo"]])
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=saleing-mcs-onlylead-com-list-list-module-es5.js.map