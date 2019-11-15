(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-mc-reservation-com-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/mc-reservation.com/list/list.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/mc-reservation.com/list/list.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/home/mywork\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>预约单</ion-title>\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n        <ion-searchbar [(ngModel)]=\"this.model.seachkey\" placeholder=\"支持姓名\\手机号\\车牌号查找\" (keyup)=\"search($event)\"></ion-searchbar>\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n        <ion-segment>\r\n            <ion-segment-button checked (click)=\"selectTab(0)\">\r\n                <ion-label>全部({{model.aLLTotalCount}})</ion-label>\r\n            </ion-segment-button >\r\n            <ion-segment-button (click)=\"selectTab(10)\">\r\n                <ion-label>待跟进({{model.followingCount}})</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button (click)=\"selectTab(20)\">\r\n                <ion-label>已跟进({{model.followedCount}})</ion-label>\r\n            </ion-segment-button>\r\n        </ion-segment>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"下拉刷新\" refreshingSpinner=\"circles\" refreshingText=\"刷新中...\">\r\n        </ion-refresher-content>\r\n    </ion-refresher>\r\n    <ion-list lines=\"full\">\r\n        <ion-item  *ngFor=\"let r of model.data\" button=\"true\" [routerLink]=\"['/serving/reservation/detail']\" [queryParams]=\"{id:r.mcs_appointmentinfoid}\">\r\n            <ion-label>\r\n                <h2>车牌号：{{r.mcs_carplate}}</h2>\r\n                <p>车主姓名：{{r.mcs_customername}}</p>\r\n                <p>预约日期：{{FormatToDate(r.mcs_appointmentat)}}</p>\r\n                <p>预约时段：{{r.mcs_appointmentconfigid}}</p>\r\n                <p *ngIf=\"r.mcs_status==10\">跟进状态：待跟进</p>\r\n                <p *ngIf=\"r.mcs_status==20\">跟进状态：已跟进</p>\r\n                <p *ngIf=\"r.mcs_status==30\">跟进状态：已入场</p>\r\n                <p *ngIf=\"r.mcs_status==50\">跟进状态：已取消</p>\r\n            </ion-label>\r\n        </ion-item>\r\n    </ion-list>\r\n    <ion-row *ngIf=\"model.isending\">\r\n        <ion-col class=\"nodata\" text-center>\r\n            没有更多内容啦\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-infinite-scroll #myInfiniteScroll threshold=\"100px\" (ionInfinite)=\"doLoading($event)\">\r\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载更多...\">\r\n        </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button [routerLink]=\"['/serving/reservation/edit']\">\r\n            <ion-icon name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/serving/mc-reservation.com/list/list.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/serving/mc-reservation.com/list/list.module.ts ***!
  \****************************************************************/
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
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/serving/mc-reservation.com/list/list.page.ts");







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

/***/ "./src/app/serving/mc-reservation.com/list/list.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/serving/mc-reservation.com/list/list.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list ion-item div p {\n  padding-left: 5px;\n  font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmluZy9tYy1yZXNlcnZhdGlvbi5jb20vbGlzdC9FOlxcQXBwUHJvamVjdFxcRENFTVxcRENFTS5NQXBwL3NyY1xcYXBwXFxzZXJ2aW5nXFxtYy1yZXNlcnZhdGlvbi5jb21cXGxpc3RcXGxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS2dCLGlCQUFpQjtFQUNqQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aW5nL21jLXJlc2VydmF0aW9uLmNvbS9saXN0L2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3Qge1xyXG4gICAgaW9uLWl0ZW0ge1xyXG5cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/serving/mc-reservation.com/list/list.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/serving/mc-reservation.com/list/list.page.ts ***!
  \**************************************************************/
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
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! silly-datetime */ "./node_modules/silly-datetime/dest/index.js");
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(silly_datetime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var ListPage = /** @class */ (function () {
    function ListPage(router, _http, _page, httpService) {
        this.router = router;
        this._http = _http;
        this._page = _page;
        this.httpService = httpService;
        this.model = {
            name: 'appointmentlistinfo',
            apiUrl: '/api/appointment-info/GetList',
            seachkey: '',
            status: 0,
            data: [],
            pageSize: 10,
            page: 1,
            sort: 'mcs_appointmentinfoid desc',
            isending: false,
            nodata: false,
            aLLTotalCount: 0,
            followingCount: 0,
            followedCount: 0 //已跟进
        };
    }
    ListPage.prototype.ngOnInit = function () {
        this.model.page = 1;
        //先不加缓存
        this.showlist(null);
        //var cachedata = this.httpService.GetDataCache(this.model.name);
        //if (cachedata == "") {
        //    this.showlist(null);
        //}
        //else {
        //    this.model.data = JSON.parse(cachedata);
        //}
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
        this.showlist(event);
    };
    //切换tab
    ListPage.prototype.selectTab = function (status) {
        this.infiniteScroll.disabled = false; //切换标签初始化下拉控件事件
        this.model.data = [];
        this.model.page = 1;
        this.model.isending = false;
        if (status != "" && status != undefined) {
            this.model.status = status;
        }
        else {
            this.model.status = 0;
        }
        this.showlist(null);
    };
    //展示数据
    ListPage.prototype.showlist = function (event) {
        var _this = this;
        this._page.loadingShow();
        console.log("地址:" + this.model.apiUrl, "预约状态:" + this.model.status, "搜索:" + this.model.seachkey, "排序:" + this.model.sort, "页条数:" + this.model.pageSize, "页数:" + this.model.page);
        this._http.get(this.model.apiUrl, {
            params: {
                status: this.model.status,
                seachkey: this.model.seachkey,
                sort: this.model.sort,
                pageSize: this.model.pageSize,
                page: this.model.page
            }
        }, function (res) {
            if (res.Results !== null) {
                for (var key in res.Results) {
                    var obj = {};
                    obj["mcs_appointmentinfoid"] = res.Results[key]["Id"];
                    obj["mcs_carplate"] = res.Results[key]["Attributes"]["mcs_carplate"];
                    obj["mcs_customername"] = res.Results[key]["Attributes"]["mcs_customername"];
                    obj["mcs_appointmentat"] = res.Results[key]["Attributes"]["mcs_appointmentat"];
                    obj["mcs_appointmentconfigid"] = res.Results[key]["Attributes"]["appointmentconfig_x002e_mcs_name"];
                    obj["mcs_status"] = res.Results[key]["Attributes"]["mcs_status"];
                    _this.model.data.push(obj);
                }
                _this.model.aLLTotalCount = res.ALLTotalCount;
                _this.model.followingCount = res.FollowingCount;
                _this.model.followedCount = res.FollowedCount;
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
                _this._page.alert("消息提示", "预约单数据加载异常");
            }
            _this._page.loadingHide();
        }, function (err) {
            _this._page.alert("消息提示", "预约单数据加载异常");
            _this._page.loadingHide();
        });
    };
    //日期格式
    ListPage.prototype.FormatToDate = function (date) {
        if (date != null && date != undefined) {
            return silly_datetime__WEBPACK_IMPORTED_MODULE_5___default.a.format(date, 'YYYY-MM-DD');
        }
        else {
            return '';
        }
    };
    ListPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Http"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Page"] },
        { type: _base_base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"], null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"])
    ], ListPage.prototype, "infiniteScroll", void 0);
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/mc-reservation.com/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/serving/mc-reservation.com/list/list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Http"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Page"],
            _base_base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=serving-mc-reservation-com-list-list-module-es5.js.map