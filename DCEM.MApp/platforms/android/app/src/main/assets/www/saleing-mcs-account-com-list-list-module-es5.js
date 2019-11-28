(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-mcs-account-com-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-account.com/list/list.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/mcs-account.com/list/list.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"返回\" defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>销售机会列表</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n        <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-searchbar animated [(ngModel)]=\"model.params.SearchKey\" placeholder=\"请输入编号\\姓名\\手机号搜索\"\r\n      (keyup)=\"searchOnKeyup($event)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-segment>\r\n      <ion-segment-button value=\"0\" checked (click)=\"tagOnClick(0)\">\r\n        <ion-label>全部</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button (click)=\"tagOnClick(1)\">\r\n        <ion-label>待指派</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button (click)=\"tagOnClick(2)\">\r\n        <ion-label>已指派</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n  <ion-list lines=\"full\">\r\n    <ion-item-sliding *ngFor=\"let item of model.data;let key=index\">\r\n      <ion-item [routerLink]=\"['/saleing/account/detail']\" [queryParams]=\"{id:item.Id}\">\r\n        <ion-avatar class=\"header-ion-avatar\" item-start>机</ion-avatar>\r\n        <ion-label>\r\n          <h2 *ngIf=\"item.name\">{{item.name}}</h2>\r\n          <h2 *ngIf=\"!item.name\">--</h2>\r\n          <p>{{item.accountnumber}}</p>\r\n          <p>\r\n            <ion-icon name=\"phone-portrait\" size=\"small\"></ion-icon>\r\n            {{item.mcs_mobilephone}}\r\n          </p>\r\n        </ion-label>\r\n        <ion-note slot=\"end\">\r\n          {{item.mcs_customerstatus}}\r\n        </ion-note>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"tertiary\" [routerLink]=\"['/saleing/contactrecord/edit']\" [queryParams]=\"{id:item.Id}\">\r\n          联络\r\n        </ion-item-option>\r\n        <ion-item-option color=\"primary\" [routerLink]=\"['/saleing/cultivatetask/edit']\" [queryParams]=\"{type:3,sourid:item.Id}\">\r\n          培育\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n  <ion-label *ngIf=\"ionInfiniteScroll.disabled\" text-center>\r\n    <p style=\"height: 30px;\">\r\n      没有更多的记录显示啦\r\n    </p>\r\n  </ion-label>\r\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite()\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载更多...\"></ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"arrow-dropup\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button  title=\"成交\" color=\"success\">\r\n          +试驾\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"warning\" [routerLink]=\"['/saleing/account/edit']\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab> -->\r\n</ion-content>"

/***/ }),

/***/ "./src/app/saleing/mcs-account.com/list/list.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/saleing/mcs-account.com/list/list.module.ts ***!
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
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/saleing/mcs-account.com/list/list.page.ts");







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

/***/ "./src/app/saleing/mcs-account.com/list/list.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/saleing/mcs-account.com/list/list.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVpbmcvbWNzLWFjY291bnQuY29tL2xpc3QvbGlzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/saleing/mcs-account.com/list/list.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/saleing/mcs-account.com/list/list.page.ts ***!
  \***********************************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var _base_base_ser_optionset_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../base/base.ser/optionset.service */ "./src/app/base/base.ser/optionset.service.ts");





var ListPage = /** @class */ (function () {
    function ListPage(_http, _page, optionset) {
        this._http = _http;
        this._page = _page;
        this.optionset = optionset;
        this.tab = "1";
        this.model = {
            apiUrl: '/api/account/GetList',
            data: [],
            params: {
                SearchKey: '',
                mcs_customerstatus: -1,
                PageSize: 10,
                PageIndex: 1,
                Sort: '',
                UserId: "",
                mcs_dealerid: ""
            }
        };
    }
    ListPage.prototype.ngOnInit = function () {
    };
    //每次页面加载
    ListPage.prototype.ionViewWillEnter = function () {
        this.ionInfiniteScroll.disabled = false;
        this.model.params.PageIndex = 1;
        this._page.loadingShow();
        this.listOnBind();
    };
    ///搜索
    ListPage.prototype.searchOnKeyup = function (event) {
        var keyCode = event ? event.keyCode : "";
        if (keyCode == 13) {
            this.model.data = [];
            this.model.params.PageIndex = 1;
            this.ionInfiniteScroll.disabled = false;
            this.ionContent.scrollToTop(0);
            this.listOnBind();
        }
    };
    //下拉刷新
    ListPage.prototype.doInfinite = function () {
        this.model.params.PageIndex += 1;
        this.listOnBind();
        this.ionContent.scrollToBottom(0);
    };
    //切换tab
    ListPage.prototype.tagOnClick = function (status) {
        this.ionInfiniteScroll.disabled = false;
        this.model.data = [];
        this.model.params.PageIndex = 1;
        this.model.params.mcs_customerstatus = status;
        this.ionContent.scrollToTop(0);
        this._page.loadingShow();
        this.listOnBind();
    };
    //列表数据绑定
    ListPage.prototype.listOnBind = function () {
        var _this = this;
        this._http.postForToaken(this.model.apiUrl, this.model.params, function (res) {
            if (res.Results !== null) {
                //绑定数据
                if (res.Results.length > 0) {
                    res.Results.forEach(function (item) {
                        var value = item["Attributes"];
                        _this.model.data.push({
                            "Id": value.accountid,
                            "name": value.name,
                            "accountnumber": value.accountnumber,
                            "mcs_mobilephone": value.mcs_mobilephone == "" ? "--" : value.mcs_mobilephon,
                            "mcs_customerstatus": _this.optionset.GetOptionSetNameByValue("mcs_customerstatus", value.mcs_customerstatus),
                            "createdon": value.createdon
                        });
                    });
                }
                _this.ionInfiniteScroll.complete();
                //判断是否有新数据
                if (res.Results.length < _this.model.params.PageSize) {
                    if (_this.model.params.PageIndex > 1) {
                        _this.ionInfiniteScroll.disabled = true;
                    }
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
        { type: _base_base_ser_optionset_service__WEBPACK_IMPORTED_MODULE_4__["OptionSetService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], ListPage.prototype, "ionContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], ListPage.prototype, "ionInfiniteScroll", void 0);
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-account.com/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/saleing/mcs-account.com/list/list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"],
            _base_base_ser_optionset_service__WEBPACK_IMPORTED_MODULE_4__["OptionSetService"]])
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=saleing-mcs-account-com-list-list-module-es5.js.map