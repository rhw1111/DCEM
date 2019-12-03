(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-mcs-cultivatetask-com-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-cultivatetask.com/list/list.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/mcs-cultivatetask.com/list/list.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>我的任务</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        \r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n        <ion-searchbar [(ngModel)]=\"this.model.seachkey\" placeholder=\"可根据姓名、手机号模糊查找\" (keyup)=\"search($event)\">\r\n        </ion-searchbar>\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n        <ion-segment>\r\n            <ion-segment-button checked (click)=\"selectTab(-1)\" value=\"0\">\r\n                <ion-label>全部</ion-label>\r\n            </ion-segment-button>\r\n\r\n            <ion-segment-button (click)=\"selectTab(0)\">\r\n                <ion-label>打开</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button (click)=\"selectTab(1)\">\r\n                <ion-label>关闭</ion-label>\r\n            </ion-segment-button>\r\n\r\n        </ion-segment>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"下拉刷新\" refreshingSpinner=\"circles\"\r\n            refreshingText=\"刷新中...\">\r\n        </ion-refresher-content>\r\n    </ion-refresher> -->\r\n    <ion-list lines=\"full\">\r\n        <ion-item-sliding *ngFor=\"let item of model.datalist\" >\r\n            <ion-item [routerLink]=\"['/saleing/cultivatetask/detail']\" [queryParams]=\"{id:item.mcs_activityid}\">\r\n                <ion-icon slot=\"start\" name=\"logo-instagram\" size=\"large\" color=\"primary\"></ion-icon>\r\n                <ion-label>\r\n                    <h2>{{item.Custname}}</h2>\r\n                    <p>{{item.mcs_name}}</p>\r\n                    <p>{{item.mcs_mobilephone}}</p>\r\n                    <p>{{item.mcs_importantlevel}}</p>\r\n                </ion-label>\r\n                <ion-note slot=\"end\">                   \r\n                    <p>{{item.mcs_activitystatus}}</p>\r\n                </ion-note>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\" *ngIf=\"item.mcs_activitystatus=='open'\">\r\n               <ion-item-option color=\"tertiary\" expandable [routerLink]=\"['/saleing/cultivatetask/edit']\" [queryParams]=\"{id:item.mcs_activityid}\">\r\n                 编辑\r\n               </ion-item-option> \r\n               <ion-item-option color=\"primary\" expandable (click)=\"TaskFinish(item.mcs_activityid)\">\r\n                 完成\r\n               </ion-item-option>                   \r\n            </ion-item-options>\r\n        </ion-item-sliding>\r\n    </ion-list>\r\n   \r\n        <ion-label *ngIf=\"infiniteScroll.disabled && !model.searchnodata\"  text-center>\r\n            <p>\r\n                没有更多的记录显示啦\r\n            </p>\r\n        </ion-label>\r\n        <ion-label *ngIf=\"!infiniteScroll.disabled && model.searchnodata\"  text-center>\r\n            <p>\r\n                没有数据！\r\n            </p>\r\n        </ion-label>\r\n\r\n    <ion-infinite-scroll #myInfiniteScroll threshold=\"100px\" (ionInfinite)=\"doLoading($event)\">\r\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载更多...\">\r\n        </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n    \r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n            <ion-fab-button [routerLink]=\"['/saleing/cultivatetask/edit']\" [queryParams]=\"\">\r\n                <ion-icon name=\"add\"></ion-icon>\r\n            </ion-fab-button>\r\n    </ion-fab>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/saleing/mcs-cultivatetask.com/list/list.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/saleing/mcs-cultivatetask.com/list/list.module.ts ***!
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
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/saleing/mcs-cultivatetask.com/list/list.page.ts");







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

/***/ "./src/app/saleing/mcs-cultivatetask.com/list/list.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/saleing/mcs-cultivatetask.com/list/list.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVpbmcvbWNzLWN1bHRpdmF0ZXRhc2suY29tL2xpc3QvbGlzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/saleing/mcs-cultivatetask.com/list/list.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/saleing/mcs-cultivatetask.com/list/list.page.ts ***!
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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _base_base_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../base/base.ser/optionset.service */ "./src/app/base/base.ser/optionset.service.ts");
/* harmony import */ var app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/base/base.ser/logininfo.storage */ "./src/app/base/base.ser/logininfo.storage.ts");







let ListPage = class ListPage {
    constructor(_http, _page, httpService, optionset, _logininfo) {
        this._http = _http;
        this._page = _page;
        this.httpService = httpService;
        this.optionset = optionset;
        this._logininfo = _logininfo;
        this.model = {
            name: 'activitylist',
            apiUrl: '/api/only-lead/GetMyActivityList',
            addoreditUrl: '/api/activity/addoredit',
            seachkey: '',
            mcs_activitystatus: -1,
            pageSize: 10,
            page: 1,
            sort: '',
            isending: false,
            datalist: [],
            systemUserId: '',
            searchnodata: false,
        };
    }
    ngOnInit() {
        this.model.page = 1;
        this.model.systemUserId = this._logininfo.GetSystemUserId();
        this._page.loadingShow();
        this.getList(null);
    }
    //搜索方法
    search(event) {
        var keyCode = event ? event.keyCode : "";
        if (keyCode == 13) {
            this.model.searchnodata = false;
            this.model.datalist = [];
            this.model.page = 1;
            this._page.loadingShow();
            this.getList(null);
        }
    }
    //下拉刷新
    doRefresh(event) {
        //debugger;
        this.model.datalist = [];
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
        this.infiniteScroll.disabled = false; //切换标签初始化下拉控件事件
        this.model.datalist = [];
        this.model.page = 1;
        this.model.isending = false;
        if (status.toString() != "" && status != undefined) {
            this.model.mcs_activitystatus = status;
        }
        else {
            this.model.mcs_activitystatus = -1;
        }
        this._page.loadingShow();
        this.getList(null);
    }
    //获取列表数据
    getList(event) {
        this._http.get(this.model.apiUrl, {
            params: {
                mcs_activitystatus: this.model.mcs_activitystatus,
                seachkey: this.model.seachkey,
                sort: this.model.sort,
                pageSize: this.model.pageSize,
                page: this.model.page,
                systemuserid: this.model.systemUserId
            }
        }, (res) => {
            //debugger;
            if (res.Results !== null) {
                //绑定数据
                res.Results.forEach(item => {
                    var obj = {};
                    obj["mcs_activityid"] = item["Attributes"].mcs_activityid;
                    obj["Custname"] = item["Attributes"].mcs_name;
                    obj["mcs_thisfollowupcontent"] = item["Attributes"].mcs_thisfollowupcontent;
                    obj["mcs_activitystatus"] = this.optionset.GetOptionSetNameByValue("mcs_activitystatus", item["Attributes"].mcs_activitystatus);
                    obj["mcs_importantlevel"] = this.optionset.GetOptionSetNameByValue("mcs_importantlevel", item["Attributes"].mcs_importantlevel);
                    obj["mcs_name"] = item["Attributes"].a_x002e_mcs_name;
                    obj["mcs_mobilephone"] = item["Attributes"].a_x002e_mcs_mobilephone;
                    this.model.datalist.push(obj);
                });
                //设置数据存储到本地
                if (this.model.page == 1) {
                    this.httpService.SetDataCache(this.model.name, JSON.stringify(this.model.datalist).toString());
                }
                event ? event.target.complete() : '';
                //判断是否有新数据
                this.model.searchnodata = res.Results.length == 0;
                if (res.Results.length < this.model.pageSize) {
                    if (this.model.page > 1) {
                        this.infiniteScroll.disabled = true;
                    }
                }
            }
            else {
                this._page.alert("消息提示", "数据加载异常");
            }
            this.infiniteScroll.complete();
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
            this.infiniteScroll.complete();
            this._page.loadingHide();
        });
    }
    //任务完成
    TaskFinish(id) {
        this._page.confirm("确认提示", "确定完成该任务？", () => {
            this.UpdateState(id);
        });
    }
    UpdateState(id) {
        //debugger;
        var postData = {};
        postData["id"] = id;
        postData["mcs_activitystatus"] = 1; //已完成
        postData["mcs_endtime"] = new Date();
        this._page.loadingShow();
        this._http.post(this.model.addoreditUrl, postData, (res) => {
            this._page.loadingHide();
            console.log(res);
            if (res.Result == true) {
                const that = this;
                this._page.alert("消息提示", "操作成功", () => {
                    this.doRefresh(null);
                });
            }
            else {
                this._page.alert("消息提示", "操作失败");
            }
        }, (err) => {
            this._page.loadingHide();
            this._page.alert("消息提示", "操作失败");
        });
    }
};
ListPage.ctorParameters = () => [
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"] },
    { type: _base_base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _base_base_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__["OptionSetService"] },
    { type: app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_6__["Storage_LoginInfo"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"])
], ListPage.prototype, "infiniteScroll", void 0);
ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-cultivatetask.com/list/list.page.html"),
        styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/saleing/mcs-cultivatetask.com/list/list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"],
        _base_base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
        _base_base_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__["OptionSetService"],
        app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_6__["Storage_LoginInfo"]])
], ListPage);



/***/ })

}]);
//# sourceMappingURL=saleing-mcs-cultivatetask-com-list-list-module-es2015.js.map