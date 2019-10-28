(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-my-customer-com-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/my-customer.com/list/list.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/my-customer.com/list/list.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/home/mywork\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>我的客户</ion-title>\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n        <ion-searchbar animated [(ngModel)]=\"mod.searchData.search\" placeholder=\"请输入姓名\\手机号\\车牌号搜索\"></ion-searchbar>\r\n        <ion-button color=\"primary\" slot=\"end\" size=\"small\" (click)=\"searchOnClick()\">\r\n            搜索\r\n        </ion-button>\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n        <ion-segment>\r\n            <ion-segment-button checked (click)=\"tagOnClick(1)\">\r\n                <ion-label>全部</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button (click)=\"tagOnClick(2)\">\r\n                <ion-label>保修到期(3)</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button (click)=\"tagOnClick(3)\">\r\n                <ion-label>保险到期(1)</ion-label>\r\n            </ion-segment-button>\r\n        </ion-segment>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n    <ion-list lines=\"full\">\r\n        <!--<ion-item-divider>\r\n            <ion-label>\r\n                A\r\n            </ion-label>\r\n        </ion-item-divider>-->\r\n\r\n        <ion-item-sliding *ngFor=\"let item of mod.data;let key=index\">\r\n            <ion-item [routerLink]=\"['/serving/mycustomer/detail']\" [queryParams]=\"{id:item.Id}\">\r\n                <ion-icon slot=\"start\" color=\"primary\" name=\"contact\" size=\"large\" style=\"width:60px;height:60px\"></ion-icon>\r\n                <ion-label>\r\n                    <h2>{{item.fullname}}</h2>\r\n                    <p>车牌:{{item.vehplate}}</p>\r\n                    <p>车型:{{item.motormodel}}</p>\r\n                </ion-label>\r\n                <ion-icon name=\"phone-portrait\" size=\"small\"></ion-icon>\r\n                <ion-note slot=\"end\">\r\n                    {{item.mobilephone}}\r\n                </ion-note>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n                <ion-item-option color=\"tertiary\" expandable>\r\n                    预约\r\n                </ion-item-option>\r\n            </ion-item-options>\r\n        </ion-item-sliding>\r\n\r\n\r\n        <!--<ion-item-sliding>\r\n            <ion-item [routerLink]=\"['/serving/mycustomer/detail']\">\r\n                <ion-icon slot=\"start\" color=\"primary\" name=\"man\" size=\"large\"></ion-icon>\r\n                <ion-label>\r\n                    <h2>独孤求败</h2>\r\n                    <p>渝A9877H</p>\r\n                    <p>S01</p>\r\n                </ion-label>\r\n                <ion-icon name=\"phone-portrait\" size=\"small\"></ion-icon>\r\n                <ion-note slot=\"end\">\r\n                    15023224233\r\n                </ion-note>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n                <ion-item-option color=\"tertiary\" expandable>\r\n                    预约\r\n                </ion-item-option>\r\n            </ion-item-options>\r\n        </ion-item-sliding>\r\n\r\n        <ion-item-sliding>\r\n            <ion-item [routerLink]=\"['/serving/mycustomer/detail']\">\r\n                <ion-icon slot=\"start\" color=\"danger\" name=\"woman\" size=\"large\"></ion-icon>\r\n                <ion-label>\r\n                    <h2>李秋水</h2>\r\n                    <p>渝A9877H</p>\r\n                    <p>S01</p>\r\n                </ion-label>\r\n                <ion-icon name=\"phone-portrait\" size=\"small\"></ion-icon>\r\n                <ion-note slot=\"end\">\r\n                    15023224233\r\n                </ion-note>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n                <ion-item-option color=\"tertiary\" expandable>\r\n                    预约\r\n                </ion-item-option>\r\n            </ion-item-options>\r\n        </ion-item-sliding>-->\r\n    </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/base/base.ser/Dcem.core.ts":
/*!********************************************!*\
  !*** ./src/app/base/base.ser/Dcem.core.ts ***!
  \********************************************/
/*! exports provided: DCore_Window, DCore_Config, DCore_Http, DCore_Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DCore_Window", function() { return DCore_Window; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DCore_Config", function() { return DCore_Config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DCore_Http", function() { return DCore_Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DCore_Page", function() { return DCore_Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let DCore_Window = class DCore_Window {
    storageSet(key, val) {
        window.localStorage.setItem(key, val);
    }
    storageGet(key) {
        return window.localStorage.getItem(key);
    }
};
DCore_Window = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: 'root'
    })
], DCore_Window);

let DCore_Config = class DCore_Config {
    constructor(_window) {
        this._window = _window;
        this.serverUrl = _window.storageGet("apiDomainUrl");
    }
    getDomain() {
        this.serverUrl = this._window.storageGet("apiDomainUrl");
        return this.serverUrl;
    }
};
DCore_Config.ctorParameters = () => [
    { type: DCore_Window }
];
DCore_Config = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [DCore_Window])
], DCore_Config);

let DCore_Http = class DCore_Http {
    constructor(_httpClient, _config) {
        this._httpClient = _httpClient;
        this._config = _config;
    }
    //get请求
    get(url, params, rescallback, errcallback) {
        console.log(this._config.getDomain() + url);
        this._httpClient.get(this._config.getDomain() + url, params).subscribe((res) => {
            rescallback && rescallback(res);
        }, (err) => {
            errcallback && errcallback(err);
        });
    }
};
DCore_Http.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: DCore_Config }
];
DCore_Http = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        DCore_Config])
], DCore_Http);

let DCore_Page = class DCore_Page {
    constructor(alertCtr, loadingCtr, navCtr, router, activeRoute) {
        this.alertCtr = alertCtr;
        this.loadingCtr = loadingCtr;
        this.navCtr = navCtr;
        this.router = router;
        this.activeRoute = activeRoute;
    }
    //弹出提示
    alert(header, message) {
        const alert = this.alertCtr.create({
            header,
            message,
            buttons: ['确定']
        });
        alert.then(a => {
            a.present();
        });
    }
    //打开等待动画
    loadingShow() {
        if (this.loading !== null) {
            this.loading = this.loadingCtr.create({ translucent: true });
        }
        this.loading.then(a => { a.present(); });
    }
    //关闭等待动画
    loadingHide() {
        if (this.loading !== null) {
            this.loading.then(a => { a.dismiss(); });
        }
    }
    //跳转到指定页
    goto(url, params) {
        if (params === null) {
            params = {};
        }
        //this.navCtr.navigateRoot(url);
        this.router.navigate([url], params);
    }
};
DCore_Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
DCore_Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], DCore_Page);



/***/ }),

/***/ "./src/app/serving/my-customer.com/list/list.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/serving/my-customer.com/list/list.module.ts ***!
  \*************************************************************/
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
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/serving/my-customer.com/list/list.page.ts");







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

/***/ "./src/app/serving/my-customer.com/list/list.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/serving/my-customer.com/list/list.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvbXktY3VzdG9tZXIuY29tL2xpc3QvbGlzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/serving/my-customer.com/list/list.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/serving/my-customer.com/list/list.page.ts ***!
  \***********************************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");



let ListPage = class ListPage {
    constructor(_http, _page) {
        this._http = _http;
        this._page = _page;
        this.mod = {
            apiUrl: '',
            data: [],
            searchData: {
                type: 1,
                pageindex: 1,
                search: ""
            }
        };
        this.mod.apiUrl = "/Api/Customer/GetMyCustomerList";
    }
    ngOnInit() {
        this.listOnBind();
    }
    tagOnClick(type) {
        this.mod.searchData.type = type;
        this.mod.searchData.pageindex = 1;
        this.listOnBind();
    }
    searchOnClick() {
        this.listOnBind();
    }
    listOnBind() {
        this._page.loadingShow();
        this.mod.data = [];
        this._http.get(this.mod.apiUrl, {
            params: {
                type: this.mod.searchData.type,
                pageindex: this.mod.searchData.pageindex,
                search: this.mod.searchData.search
            }
        }, (res) => {
            if (res.Results !== null) {
                console.log(res);
                for (var key in res.Results) {
                    var obj = {};
                    obj["Id"] = res.Results[key]["Id"];
                    obj["fullname"] = res.Results[key]["Attributes"]["a_x002e_mcs_fullname"];
                    obj["gender"] = res.Results[key]["Attributes"]["a_x002e_mcs_gender"];
                    obj["mobilephone"] = res.Results[key]["Attributes"]["a_x002e_mcs_mobilephone"];
                    obj["vehplate"] = res.Results[key]["Attributes"]["a_x002e_mcs_vehplate"];
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
};
ListPage.ctorParameters = () => [
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] }
];
ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/my-customer.com/list/list.page.html"),
        styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/serving/my-customer.com/list/list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"]])
], ListPage);



/***/ })

}]);
//# sourceMappingURL=serving-my-customer-com-list-list-module-es2015.js.map