(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-technical-support-com-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/technical-support.com/list/list.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/technical-support.com/list/list.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"返回\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>技术支持</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n      <ion-searchbar [(ngModel)]=\"this.model.seachkey\" placeholder=\"支持项目名称和编号模糊查找\" (keyup)=\"search($event)\" ></ion-searchbar>\n  </ion-toolbar>\n  <ion-toolbar>\n      <ion-segment>\n        <ion-segment-button checked (click)=\"selectTab(0)\">\n            <ion-label>全部</ion-label>\n        </ion-segment-button>\n        <ion-segment-button (click)=\"selectTab(10)\">\n            <ion-label>未处理</ion-label>\n        </ion-segment-button>\n        <ion-segment-button (click)=\"selectTab(30)\">\n            <ion-label>处理中</ion-label>\n        </ion-segment-button>\n        <ion-segment-button (click)=\"selectTab(40)\">\n            <ion-label>已关闭</ion-label>\n        </ion-segment-button>\n        <ion-segment-button (click)=\"selectTab(50)\">\n            <ion-label>已取消</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"下拉刷新\" refreshingSpinner=\"circles\" refreshingText=\"刷新中...\">\n        </ion-refresher-content> \n    </ion-refresher>\n    <ion-list lines=\"full\">\n        <ion-item *ngFor=\"let item of model.data\" [routerLink]=\"['/serving/ts/detail']\" [queryParams]=\"{id:item.Id}\">\n            <ion-icon slot=\"start\" color=\"primary\" name=\"hammer\" size=\"large\"></ion-icon>\n            <ion-label>\n                <h2>{{item.mcs_name}}</h2>\n                <p>施工项目：{{item.mcs_title}}</p>\n                <p>施工日期：{{FormatToDateTime(item.mcs_repairdate)}}</p>\n                <p *ngIf=\"item.mcs_orderstatus==10\">施工状态：未处理</p>\n                <p *ngIf=\"item.mcs_orderstatus==30\">施工状态：处理中</p>\n                <p *ngIf=\"item.mcs_orderstatus==40\">施工状态：已关闭</p>\n                <p *ngIf=\"item.mcs_orderstatus==50\">施工状态：已取消</p>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n\n    <ion-row *ngIf=\"model.isending\">\n        <ion-col class=\"nodata\" text-center>\n            没有更多内容啦\n        </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"this.model.nodata\">\n        <ion-col class=\"nodata\" text-center>\n            没有查询到数据\n        </ion-col>\n    </ion-row>\n    \n    <ion-infinite-scroll #myInfiniteScroll threshold=\"100px\" (ionInfinite)=\"doLoading($event)\"> \n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载更多...\"> \n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button [routerLink]=\"['/serving/ts/edit']\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/base/base.ser/http-service.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/base/base.ser/http-service.service.ts ***!
  \*******************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let HttpService = class HttpService {
    constructor(http, loadingCtrl, toastCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.isLoadingOpen = false;
        this.InterfacePreURL = "";
    }
    postForToaken(url, params, successCallback, errorCallback) {
        // 此处使用的post模式为非严格模式，如果要使用严格模式，请把参数放在第二个位置 覆盖null
        return this.http
            .post(this.getEnvironmentUrl() + url, null, {
            params: this.encodeHttpParams(params),
            headers: this.getHeaders()
        })
            .subscribe((res) => {
            console.log(res);
            this.responseSuccess(res, function (msg) {
                if (successCallback) {
                    successCallback(res, msg);
                }
            });
        }, err => {
            if (errorCallback) {
                errorCallback(err);
            }
        });
    }
    //get数据
    getForToaken(url, params) {
        return this.http.get(this.getEnvironmentUrl() + url, {
            params: this.encodeComplexHttpParams(params),
            headers: this.getHeaders()
        });
    }
    GET(url, params, callback) {
        this.http
            .get(this.getEnvironmentUrl() + url, { params: this.encodeComplexHttpParams(params) })
            .subscribe(res => {
            console.log('get res=' + res);
            callback && callback(res, null);
        }, error => {
            callback && callback(null, error);
        });
    }
    POST(url, params, callback) {
        console.log('POST...');
        this.http.post(this.getEnvironmentUrl() + url, this.encodeComplexHttpParams(params)).subscribe((res) => {
            console.log('POST res=' + res);
            console.log(res);
            callback && callback(res, null);
        }, err => {
            console.log('POST err=');
            console.log(err);
            this.requestFailed(err);
            callback && callback(null, err);
        });
    }
    //对象参数请求
    encodeHttpParams(params) {
        if (!params)
            return null;
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromObject: params });
    }
    //字符串参数封装
    encodeComplexHttpParams(params) {
        if (!params)
            return null;
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromString: params });
    }
    /**
     * 处理响应的事件
     * @param res
     * @param {Function} error
     */
    responseSuccess(res, callback) {
        if (res.code !== '0') {
            // 失败
            if (res.msg) {
                callback({ code: res.code, msg: res.msg });
            }
            else {
                const data = res.datas;
                let errorMsg = res.message;
                if (data != null) {
                    data.map(i => {
                        errorMsg = i.errorMsg + '\n';
                    });
                }
                callback({ code: res.code, msg: errorMsg });
            }
        }
        else {
            callback(res);
        }
    }
    /**
     * 处理请求失败事件
     * @param url
     * @param err
     */
    requestFailed(err) {
        let msg = '请求发生异常';
        const status = err.status;
        console.log('status=' + status);
        if (status === 0) {
            msg = '请求失败，请求响应出错';
        }
        else if (status === 404) {
            msg = '请求失败，未找到请求地址';
        }
        else if (status === 500) {
            msg = '请求失败，服务器出错，请稍后再试';
        }
        else {
            msg = '未知错误，请检查网络';
        }
        return msg;
    }
    /**
     * 头部信息获取，主要用于处理token
    **/
    getHeaders() {
        const token = this.getToken();
        console.log(token);
        return token ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            token: token,
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': 'application/json'
        }) : null;
    }
    /*
     * 使用本地缓存的方式来获取token信息
     */
    getToken() {
        return window.localStorage.getItem('auth-token');
    }
    /**
     * 将token信息保存到本地缓存中 用缓存的形式实现token验证
     * @param token
     */
    setToken(token) {
        // 目前只解析token字段，缓存先只存该字段
        // JSON.stringify(token)
        window.localStorage.setItem('auth-token', token);
    }
    //获取接口请求地址
    getEnvironmentUrl() {
        console.log("sdad:" + url);
        var url = window.localStorage.getItem('environmenturl');
        if (url == null || url == undefined) {
            url = "https://subcrmdevapi.sokon.com/dcem";
        }
        return url;
    }
    //跟进环境设置请求地址
    setEnvironmentUrl(environment) {
        let url = "";
        console.log("environment:" + environment);
        switch (environment) {
            case 'Dev':
                url = "https://subcrmdevapi.sokon.com/dcem";
                break;
            case 'Sit':
                url = "https://subcrmdevapi.sokon.com/dcem";
                break;
            case 'Uat':
                url = "https://subcrmuatapi.sokon.com/dcem";
                break;
            case 'Pro':
                url = "https://mscrm.sokon.com/dcem";
                break;
            default:
                url = "http://localhost:52151";
                break;
        }
        window.localStorage.setItem('environmenturl', url);
    }
    /**
     * 清理token
     */
    clearToken() {
        window.localStorage.setItem('auth-token', null);
    }
    /**
     * 统一调用此方法显示loading
     * @param content 显示的内容
     */
    showLoading(content) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.isLoadingOpen) {
                const loading = yield this.loadingCtrl.create({
                    message: content,
                    duration: 300,
                    translucent: false
                });
                console.log('showLoading....');
                return yield loading.present();
            }
        });
    }
    /**
     * 关闭loading
    */
    hideLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('hideLoading....');
            if (this.isLoadingOpen) {
                yield this.loadingCtrl.dismiss();
                this.isLoadingOpen = false;
            }
        });
    }
    /**
     * Toast 提示
     * @param message
     */
    presentToastError(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: 2000,
                color: "danger",
                position: "top"
            });
            toast.present();
        });
    }
    presentToastSucess(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: 1500,
                color: "success",
                position: "middle"
            });
            toast.present();
        });
    }
    /*------------------------------------------------------- */
    /*
    api/focus
    */
    ajaxGet(url) {
        var api = this.getEnvironmentUrl() + url;
        return new Promise((resove, reject) => {
            this.http.get(api).subscribe((response) => {
                resove(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    /*
   api/focus
   */
    ajaxPost(url, json) {
        var api = this.getEnvironmentUrl() + url;
        return new Promise((resove, reject) => {
            this.http.post(api, json).subscribe((response) => {
                resove(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    /*本地缓存处理*/
    /*
     * 使用本地缓存的方式来获取数据
     */
    GetDataCache(name) {
        return window.localStorage.getItem('datacache-' + name);
    }
    /**
     *  将数据存储到本地缓存中
     * @param name
     * @param data
     */
    SetDataCache(name, data) {
        window.localStorage.setItem('datacache-' + name, data);
    }
    /*
     * 清楚本地缓存数据
     */
    ClearDataCache(name) {
        return window.localStorage.setItem('datacache-' + name, "");
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], HttpService);



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