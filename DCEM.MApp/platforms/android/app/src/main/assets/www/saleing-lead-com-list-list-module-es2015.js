(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-lead-com-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/lead.com/list/list.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/lead.com/list/list.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/home/index\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>我的留资</ion-title>\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n        <ion-searchbar animated [(ngModel)]=\"mod.searchData.search\" placeholder=\"请输入姓名\\手机号搜索\"\r\n            (keyup)=\"searchOnKeyup($event)\"></ion-searchbar>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"下拉刷新\" refreshingSpinner=\"circles\"\r\n            refreshingText=\"刷新中...\">\r\n        </ion-refresher-content>\r\n    </ion-refresher> -->\r\n    <ion-list lines=\"full\">\r\n        <ion-item-sliding *ngFor=\"let item of mod.data;let key=index\">\r\n            <ion-item [routerLink]=\"['/saleing/lead/detail']\" [queryParams]=\"{id:item.Id}\">\r\n                <ion-icon *ngIf=\"item.gender==1\" slot=\"start\" color=\"primary\" name=\"contact\" size=\"large\"></ion-icon>\r\n                <ion-icon *ngIf=\"item.gender==2\" slot=\"start\" color=\"danger\" name=\"contact\" size=\"large\"></ion-icon>\r\n                <ion-icon *ngIf=\"item.gender==3\" slot=\"start\" color=\"medium\" name=\"contact\" size=\"large\"></ion-icon>\r\n                <ion-icon *ngIf=\"!item.gender\" slot=\"start\" color=\"medium\" name=\"contact\" size=\"large\"></ion-icon>\r\n                <ion-label>\r\n                    <h2>{{item.username}}</h2>\r\n                    <ion-icon *ngIf=\"item.mobilephone\" name=\"phone-portrait\" size=\"small\"></ion-icon>\r\n                    <ion-note slot=\"end\">\r\n                        {{item.mobilephone}}\r\n                    </ion-note>\r\n                    <p> 线索来源：{{item.clues}}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n                <ion-item-option color=\"tertiary\" expandable [routerLink]=\"['/saleing/lead/detail']\"\r\n                    [queryParams]=\"{id:item.Id}\">\r\n                    详情\r\n                </ion-item-option>\r\n            </ion-item-options>\r\n        </ion-item-sliding>\r\n    </ion-list> \r\n    <ion-label *ngIf=\"this.mod.isending\" text-center>\r\n            <p>\r\n              没有更多的记录显示啦\r\n            </p>\r\n          </ion-label>\r\n    <ion-infinite-scroll #myInfiniteScroll threshold=\"100px\" (ionInfinite)=\"doLoading($event)\">\r\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载更多...\">\r\n        </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button [routerLink]=\"['/saleing/lead/edit']\">\r\n            <ion-icon name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/saleing/lead.com/list/list.module.ts":
/*!******************************************************!*\
  !*** ./src/app/saleing/lead.com/list/list.module.ts ***!
  \******************************************************/
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
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/saleing/lead.com/list/list.page.ts");







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

/***/ "./src/app/saleing/lead.com/list/list.page.scss":
/*!******************************************************!*\
  !*** ./src/app/saleing/lead.com/list/list.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVpbmcvbGVhZC5jb20vbGlzdC9saXN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/saleing/lead.com/list/list.page.ts":
/*!****************************************************!*\
  !*** ./src/app/saleing/lead.com/list/list.page.ts ***!
  \****************************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/base/base.ser/logininfo.storage */ "./src/app/base/base.ser/logininfo.storage.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../saleing.ser/optionset.service */ "./src/app/saleing/saleing.ser/optionset.service.ts");






let ListPage = class ListPage {
    constructor(_http, _page, _userinfo, _optionset) {
        this._http = _http;
        this._page = _page;
        this._userinfo = _userinfo;
        this._optionset = _optionset;
        this.mod = {
            apiUrl: '/api/Originalclue/getlist',
            data: [],
            isending: false,
            searchData: {
                pageindex: 1,
                pagesize: 10,
                search: "",
                userId: this._userinfo.GetSystemUserId(),
                dealerid: "3EFBFFF6-EF1A-E911-A821-A4A314186A20",
            }
        };
    }
    ngOnInit() {
        this.listOnBind(null);
    }
    //下拉刷新
    doRefresh(event) {
        this.mod.data = [];
        this.mod.isending = false;
        this.mod.searchData.pageindex = 1;
        this.listOnBind(event);
    }
    //加载下一页
    doLoading(event) {
        this.mod.searchData.pageindex++;
        this.mod.isending = false;
        this.listOnBind(event);
    }
    //搜索
    searchOnKeyup(event) {
        var keyCode = event ? event.keyCode : "";
        if (keyCode == 13) {
            this.mod.data = [];
            this.listOnBind(null);
        }
    }
    listOnBind(event) {
        this._page.loadingShow();
        this._http.post(this.mod.apiUrl, this.mod.searchData, (res) => {
            if (res.Results !== null) {
                var data = res.originalclues;
                for (var i in data) {
                    var attr = data[i]["Attributes"];
                    var obj = {};
                    obj["username"] = attr["fullname"];
                    obj["gender"] = attr["mcs_gender"];
                    obj["mobilephone"] = attr["mobilephone"];
                    obj["clues"] = this._optionset.GetOptionSetNameByValue("mcs_leadorigin", attr["mcs_leadorigin"]);
                    obj["Id"] = data[i]["Id"];
                    this.mod.data.push(obj);
                }
                event ? event.target.complete() : '';
                if (data.length < this.mod.searchData.pagesize) {
                    event ? event.target.disabled = true : "";
                    this.mod.isending = true;
                }
                this._page.loadingHide();
            }
            else {
                this._page.alert("消息提示", "原始线索数据加载异常");
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "原始线索数据加载异常");
            this._page.loadingHide();
        });
    }
};
ListPage.ctorParameters = () => [
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
    { type: app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__["Storage_LoginInfo"] },
    { type: _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__["OptionSetService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"])
], ListPage.prototype, "infiniteScroll", void 0);
ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/lead.com/list/list.page.html"),
        styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/saleing/lead.com/list/list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
        app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__["Storage_LoginInfo"],
        _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__["OptionSetService"]])
], ListPage);



/***/ })

}]);
//# sourceMappingURL=saleing-lead-com-list-list-module-es2015.js.map