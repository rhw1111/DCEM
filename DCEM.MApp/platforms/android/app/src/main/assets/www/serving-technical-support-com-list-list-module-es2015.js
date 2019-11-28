(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-technical-support-com-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/technical-support.com/list/list.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/technical-support.com/list/list.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"返回\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>技术支持</ion-title>\n    <ion-buttons slot=\"end\">\n        <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar>\n      <ion-searchbar [(ngModel)]=\"this.model.seachkey\" placeholder=\"支持项目名称和编号模糊查找\" (keyup)=\"search($event)\" ></ion-searchbar>\n  </ion-toolbar>\n  <ion-toolbar>\n      <ion-segment>\n        <ion-segment-button value=\"0\" checked (click)=\"selectTab(0)\">\n            <ion-label>全部</ion-label>\n        </ion-segment-button>\n        <!-- <ion-segment-button (click)=\"selectTab(10)\">\n            <ion-label>未处理</ion-label>\n        </ion-segment-button> -->\n        <ion-segment-button (click)=\"selectTab(30)\">\n            <ion-label>处理中</ion-label>\n        </ion-segment-button>\n        <ion-segment-button (click)=\"selectTab(40)\">\n            <ion-label>已关闭</ion-label>\n        </ion-segment-button>\n        <!-- <ion-segment-button (click)=\"selectTab(50)\">\n            <ion-label>已取消</ion-label>\n        </ion-segment-button> -->\n      </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"下拉刷新\" refreshingSpinner=\"circles\" refreshingText=\"刷新中...\">\n        </ion-refresher-content> \n    </ion-refresher> -->\n    <ion-list lines=\"full\">\n        <ion-item *ngFor=\"let item of model.data\" [routerLink]=\"['/serving/ts/detail']\" [queryParams]=\"{id:item.Id}\">\n            <!-- <ion-icon slot=\"start\" name=\"hammer\" size=\"large\"></ion-icon> -->\n            <ion-avatar class=\"header-ion-avatar\" *ngIf=\"item.mcs_orderstatus==10\" item-start>技</ion-avatar>\n            <ion-avatar *ngIf=\"item.mcs_orderstatus==40\" class=\"header-ion-avatar bggray\" item-start>技</ion-avatar>\n            <ion-avatar *ngIf=\"item.mcs_orderstatus==30\" class=\"header-ion-avatar bgorage\" item-start>技</ion-avatar>\n            <ion-avatar *ngIf=\"item.mcs_orderstatus==50\" class=\"header-ion-avatar bgored\" item-start>技</ion-avatar>\n            <ion-label>\n                <h3>{{item.mcs_name}}</h3>\n                <p>{{item.mcs_title}}</p>\n                <p>\n                    <ion-icon name=\"calendar\" size=\"small\" color=\"primary\"></ion-icon> {{FormatToDate(item.mcs_repairdate)}}\n                </p>\n            </ion-label>\n            <ion-note slot=\"end\" *ngIf=\"item.mcs_orderstatus==10\">\n                未处理\n            </ion-note>\n            <ion-note slot=\"end\" *ngIf=\"item.mcs_orderstatus==30\">\n                处理中\n            </ion-note>\n            <ion-note slot=\"end\" *ngIf=\"item.mcs_orderstatus==40\">\n                <label>已关闭</label>\n            </ion-note>\n            <ion-note slot=\"end\" *ngIf=\"item.mcs_orderstatus==50\">\n                已取消\n            </ion-note>\n        </ion-item>\n    </ion-list>\n\n    <ion-row *ngIf=\"model.isending\">\n        <ion-col class=\"nodata\" text-center>\n            <label>{{PageMessage.PageNoMore}}</label>\n        </ion-col>\n    </ion-row>\n    \n    <ion-infinite-scroll #myInfiniteScroll threshold=\"100px\" (ionInfinite)=\"doLoading($event)\"> \n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载更多...\"> \n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button [routerLink]=\"['/serving/ts/edit']\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n"

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

module.exports = ".nodata label {\n  color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.4);\n  font-size: 14px;\n  text-align: center;\n  padding-bottom: 10px;\n  margin-bottom: 10px; }\n\nion-note {\n  vertical-align: middle; }\n\n.iconside {\n  width: 50px;\n  height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmluZy90ZWNobmljYWwtc3VwcG9ydC5jb20vbGlzdC9FOlxcQXBwUHJvamVjdFxcRENFTVxcRENFTS5NQXBwL3NyY1xcYXBwXFxzZXJ2aW5nXFx0ZWNobmljYWwtc3VwcG9ydC5jb21cXGxpc3RcXGxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRU8sb0RBQStDO0VBQy9DLGVBQWU7RUFDZixrQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQixFQUFBOztBQUcxQjtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLFdBQVc7RUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aW5nL3RlY2huaWNhbC1zdXBwb3J0LmNvbS9saXN0L2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vZGF0YXtcclxuICAgIGxhYmVse1xyXG4gICAgICAgY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLDAsMCwwKSwuNCk7IFxyXG4gICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuaW9uLW5vdGV7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uaWNvbnNpZGUge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLy8gaW9uLWF2YXRhcntcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzdjY2E7XHJcbi8vICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuLy8gICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuLy8gICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4vLyAgICAgaGVpZ2h0OiA1MHB4O1xyXG4vLyAgICAgd2lkdGg6IDUwcHg7XHJcbi8vICAgICBmb250LXNpemU6IDIwcHg7XHJcbi8vICAgICBjb2xvcjogI2ZmZmZmZjtcclxuLy8gICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4vLyB9XHJcbi8vIC5zdGF0dXMtY2xvc2V7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xyXG4vLyB9XHJcbi8vIC5zdGF0dXMtcHJvY2Vzc3tcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmFmMWQ7XHJcbi8vIH1cclxuLy8gLnN0YXR1cy1jYW5jZWx7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xyXG4vLyB9Il19 */"

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
/* harmony import */ var app_base_base_ser_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/base/base.ser/message.service */ "./src/app/base/base.ser/message.service.ts");
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! silly-datetime */ "./node_modules/silly-datetime/dest/index.js");
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(silly_datetime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let ListPage = class ListPage {
    constructor(_http, _page, httpService) {
        this._http = _http;
        this._page = _page;
        this.httpService = httpService;
        this.tab = "0";
        this.model = {
            name: 'technicalsupportlist',
            apiUrl: '/api/tech-support/GetList',
            seachkey: '',
            orderstatus: 0,
            data: [],
            pageSize: 10,
            page: 1,
            sort: 'mcs_supportorderid desc',
            isending: false //是否加载完成
        };
        this.PageMessage = {
            PageNoMore: app_base_base_ser_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"].PageNoMore,
            PageNoData: app_base_base_ser_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"].PageNoData,
        };
    }
    ngOnInit() {
        this.model.page = 1;
        this._page.loadingShow();
        this.getList(null);
    }
    //每次页面加载
    ionViewWillEnter() {
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
        //切换标签初始化下拉控件事件
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = false;
        this.model.data = [];
        this.model.page = 1;
        this.model.isending = false;
        if (status != "" && status != undefined) {
            this.model.orderstatus = status;
        }
        else {
            this.model.orderstatus = 0;
        }
        this._page.loadingShow();
        this.getList(null);
    }
    //获取列表数据
    getList(event) {
        this._http.getForToaken(this.model.apiUrl, {
            orderstatus: this.model.orderstatus,
            seachkey: this.model.seachkey,
            sort: this.model.sort,
            pageSize: this.model.pageSize,
            page: this.model.page
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
                if (res.Results.length < this.model.pageSize) {
                    event ? event.target.disabled = true : "";
                    if (this.model.page > 1) {
                        this.model.isending = true;
                    }
                }
            }
            else {
                this._page.alert(app_base_base_ser_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"].AlterTitleMessage, app_base_base_ser_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"].ErrorRequestException);
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.alert(app_base_base_ser_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"].AlterTitleMessage, app_base_base_ser_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"].ErrorRequestException);
            this._page.loadingHide();
        });
    }
    FormatToDate(date) {
        if (date != null && date != undefined) {
            return silly_datetime__WEBPACK_IMPORTED_MODULE_5___default.a.format(date, 'YYYY-MM-DD');
        }
        else {
            return '';
        }
    }
    FormatToDateTime(date) {
        if (date != null && date != undefined) {
            return silly_datetime__WEBPACK_IMPORTED_MODULE_5___default.a.format(date, 'YYYY-MM-DD hh:mm:ss');
        }
        else {
            return '';
        }
    }
};
ListPage.ctorParameters = () => [
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"] },
    { type: _base_base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"], null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"])
], ListPage.prototype, "infiniteScroll", void 0);
ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/technical-support.com/list/list.page.html"),
        styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/serving/technical-support.com/list/list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"],
        _base_base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
], ListPage);



/***/ })

}]);
//# sourceMappingURL=serving-technical-support-com-list-list-module-es2015.js.map