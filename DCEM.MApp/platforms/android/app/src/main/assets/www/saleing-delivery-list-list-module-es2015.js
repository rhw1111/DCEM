(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-delivery-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/delivery/list/list.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/delivery/list/list.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/home/index\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>我的交车单</ion-title>\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n        <ion-searchbar animated [(ngModel)]=\"model.search.searchkey\" placeholder=\"请输入交车单号\\订单号\\车辆VIN号搜索\"\r\n            (keyup)=\"searchOnKeyup($event)\"></ion-searchbar>\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n        <ion-item>\r\n            <ion-text color=\"danger\">*</ion-text>\r\n            <ion-label>\r\n                <h2>交车单状态：</h2>\r\n            </ion-label>\r\n            <ion-select name=\"clues\" okText=\"确认\" cancelText=\"取消\" (ionChange)=\"searchOnCharge()\"  [(ngModel)]=\"model.search.deliverystatus\">\r\n                <ion-select-option *ngFor=\"let item of model.deliverystatusOptions\" value=\"{{item.value}}\">\r\n                    {{item.name}}\r\n                </ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n      <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"下拉刷新\" refreshingSpinner=\"circles\"\r\n          refreshingText=\"刷新中...\">\r\n      </ion-refresher-content>\r\n  </ion-refresher> -->\r\n    <ion-list lines=\"full\">\r\n        <ion-item-sliding *ngFor=\"let item of model.deliverys;let key=index\">\r\n            <ion-item [routerLink]=\"['/saleing/delivery/detail']\" [queryParams]=\"{id:item.id}\">\r\n                <ion-icon slot=\"start\" color=\"primary\" name=\"car\" size=\"large\"></ion-icon>\r\n                <ion-label>\r\n                    <h2>{{item.code}}</h2>\r\n                    <p>{{item.vin}}</p>\r\n                    <p>{{item.ro}}</p> \r\n                </ion-label> \r\n                <ion-note slot=\"end\">\r\n                        {{item.deliverystatus}}\r\n                    </ion-note>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n                <ion-item-option color=\"tertiary\" expandable [routerLink]=\"['/saleing/delivery/detail']\"\r\n                    [queryParams]=\"{id:item.id}\">\r\n                    详情\r\n                </ion-item-option>\r\n            </ion-item-options>\r\n        </ion-item-sliding>\r\n    </ion-list>\r\n    <ion-label *ngIf=\"this.model.isending\" text-center>\r\n        <p>\r\n            没有更多的记录显示啦\r\n        </p>\r\n    </ion-label>\r\n    <ion-infinite-scroll #myInfiniteScroll threshold=\"100px\" (ionInfinite)=\"doLoading($event)\">\r\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载更多...\">\r\n        </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button [routerLink]=\"['/saleing/delivery/edit']\">\r\n            <ion-icon name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/saleing/delivery/list/list.module.ts":
/*!******************************************************!*\
  !*** ./src/app/saleing/delivery/list/list.module.ts ***!
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
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/saleing/delivery/list/list.page.ts");







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

/***/ "./src/app/saleing/delivery/list/list.page.scss":
/*!******************************************************!*\
  !*** ./src/app/saleing/delivery/list/list.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVpbmcvZGVsaXZlcnkvbGlzdC9saXN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/saleing/delivery/list/list.page.ts":
/*!****************************************************!*\
  !*** ./src/app/saleing/delivery/list/list.page.ts ***!
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
    constructor(_modalCtrl, _http, _page, _valid, _userinfo, _optionset) {
        this._modalCtrl = _modalCtrl;
        this._http = _http;
        this._page = _page;
        this._valid = _valid;
        this._userinfo = _userinfo;
        this._optionset = _optionset;
        this.model = {
            apiUrl: "/api/delivery/getlist",
            deliverystatusOptions: [],
            search: {
                pageindex: 1,
                pagesize: 10,
                searchkey: "",
                deliverystatus: "-1",
                userId: this._userinfo.GetSystemUserId(),
                dealerid: "d2b7ae95-72f4-e911-a821-f2106c4094a1",
            },
            deliverys: [],
            isending: false
        };
    }
    ngOnInit() {
        this.model.deliverystatusOptions = this._optionset.Get("mcs_deliverystatus");
        this.listOnBind(null);
    }
    //加载下一页
    doLoading(event) {
        this.model.search.pageindex++;
        this.model.isending = false;
        this.listOnBind(event);
    }
    //搜索
    searchOnCharge() {
        this.model.deliverys = [];
        this.listOnBind(null);
    }
    //搜索
    searchOnKeyup(event) {
        var keyCode = event ? event.keyCode : "";
        if (keyCode == 13) {
            this.model.deliverys = [];
            this.listOnBind(null);
        }
    }
    listOnBind(event) {
        this._page.loadingShow();
        this._http.post(this.model.apiUrl, this.model.search, (res) => {
            if (res.Results !== null) {
                var data = res.Deliverys;
                for (var i in data) {
                    var attr = data[i]["Attributes"];
                    var obj = {};
                    obj["id"] = data[i]["Id"];
                    obj["vin"] = attr["_mcs_vin_value@OData.Community.Display.V1.FormattedValue"];
                    obj["code"] = attr["mcs_code"];
                    obj["ro"] = attr["_mcs_vehorder_value@OData.Community.Display.V1.FormattedValue"];
                    obj["createdon"] = attr["createdon"];
                    obj["deliverystatus"] = this._optionset.GetOptionSetNameByValue("mcs_deliverystatus", attr["mcs_deliverystatus"]);
                    this.model.deliverys.push(obj);
                }
                event ? event.target.complete() : '';
                if (data.length < this.model.search.pagesize) {
                    event ? event.target.disabled = true : "";
                    this.model.isending = true;
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Valid"] },
    { type: app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__["Storage_LoginInfo"] },
    { type: _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__["OptionSetService"] }
];
ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/delivery/list/list.page.html"),
        styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/saleing/delivery/list/list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Valid"],
        app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__["Storage_LoginInfo"],
        _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__["OptionSetService"]])
], ListPage);



/***/ })

}]);
//# sourceMappingURL=saleing-delivery-list-list-module-es2015.js.map