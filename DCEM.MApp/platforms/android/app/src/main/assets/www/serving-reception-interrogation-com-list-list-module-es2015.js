(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-reception-interrogation-com-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/reception-interrogation.com/list/list.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/reception-interrogation.com/list/list.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/home/mywork\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>问诊单</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button [routerLink]=\"['/serving/home/tabs']\">\r\n                <ion-icon slot=\"icon-only\" name=\"home\" [routerLink]=\"['/serving/home/tabs']\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n        <ion-searchbar animated [(ngModel)]=\"mod.searchData.search\" placeholder=\"请输入单号\\姓名\\车牌号搜索\" (keyup)=\"searchOnKeyup($event)\"></ion-searchbar>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-list lines=\"full\">\r\n        <div *ngFor=\"let groupkey of mod.objectKeys(mod.data)\">\r\n            <ion-item-divider color=\"primary\">\r\n                <ion-label>\r\n                    {{mod.data[groupkey].text}}\r\n                </ion-label>\r\n            </ion-item-divider>\r\n            <ion-item-sliding *ngFor=\"let item of mod.data[groupkey].data;let key=index\">\r\n                <ion-item [routerLink]=\"['/serving/ri/detail']\" [queryParams]=\"{id:item.Id}\">\r\n                    <ion-icon color=\"{{item.statuscolor}}\" name=\"document\"></ion-icon>\r\n                    <ion-label style=\"margin-left:10px\">\r\n                        <h6>{{item.name}}</h6>\r\n                        <p>{{item.carplate}}&nbsp;&nbsp;{{item.customername}}</p>\r\n                        <p>{{item.createdonformat}}</p>\r\n                    </ion-label>\r\n                    <ion-note slot=\"end\">\r\n                        {{item.statusformat}}\r\n                    </ion-note>\r\n                </ion-item>\r\n                <ion-item-options *ngIf=\"item.status===100\" side=\"end\">\r\n                    <ion-item-option color=\"tertiary\" expandable [routerLink]=\"['/serving/ri/edit']\" [queryParams]=\"{id:item.Id,actionCode:2}\">\r\n                        编辑\r\n                    </ion-item-option>\r\n                </ion-item-options>\r\n\r\n            </ion-item-sliding>\r\n        </div>\r\n        <ion-item *ngIf=\"ionInfiniteScroll.disabled\">\r\n            <ion-label>\r\n                <p>\r\n                    没有更多的记录显示啦\r\n                </p>\r\n            </ion-label>\r\n        </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\r\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button>\r\n            <ion-icon name=\"arrow-dropup\"></ion-icon>\r\n        </ion-fab-button>\r\n        <ion-fab-list side=\"top\">\r\n            <ion-fab-button color=\"success\" [routerLink]=\"['/serving/ri/edit']\"><ion-icon name=\"add\"></ion-icon></ion-fab-button>\r\n        </ion-fab-list>\r\n    </ion-fab>\r\n</ion-content>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/serving/reception-interrogation.com/list/list.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/serving/reception-interrogation.com/list/list.module.ts ***!
  \*************************************************************************/
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
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/serving/reception-interrogation.com/list/list.page.ts");








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
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
        ],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
    })
], ListPageModule);



/***/ }),

/***/ "./src/app/serving/reception-interrogation.com/list/list.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/serving/reception-interrogation.com/list/list.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvcmVjZXB0aW9uLWludGVycm9nYXRpb24uY29tL2xpc3QvbGlzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/serving/reception-interrogation.com/list/list.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/serving/reception-interrogation.com/list/list.page.ts ***!
  \***********************************************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");





let ListPage = class ListPage {
    constructor(_http, _page, _valid, _datePipe) {
        this._http = _http;
        this._page = _page;
        this._valid = _valid;
        this._datePipe = _datePipe;
        this.mod = {
            apiUrl: '/Api/Serviceproxy/GetList',
            data: {},
            searchData: {
                type: 1,
                pageindex: 1,
                search: ""
            },
            objectKeys: Object.keys
        };
    }
    ngOnInit() {
        //this.listOnBind();
    }
    //每次页面加载
    ionViewWillEnter() {
        this.mod.data = {};
        this.mod.searchData = {
            type: 1,
            pageindex: 1,
            search: ""
        };
        this.listOnBind();
    }
    //下拉刷新
    doInfinite(event) {
        this.mod.searchData.pageindex = this.mod.searchData.pageindex + 1;
        this.listOnBind();
    }
    //搜索事件
    searchOnKeyup(event) {
        var keyCode = event ? event.keyCode : "";
        if (keyCode == 13) {
            this.mod.data = {};
            this.mod.searchData.pageindex = 1;
            this.ionInfiniteScroll.disabled = false;
            this.ionContent.scrollToTop(200);
            this.listOnBind();
        }
    }
    //列表绑定
    listOnBind() {
        if (this.mod.searchData.pageindex == 1)
            this._page.loadingShow();
        this._http.get(this.mod.apiUrl, {
            params: {
                type: this.mod.searchData.type,
                pageindex: this.mod.searchData.pageindex,
                search: this.mod.searchData.search
            }
        }, (res) => {
            if (!this._valid.isNull(res.Results) !== null && res.Results.length > 0) {
                for (var key in res.Results) {
                    var date = res.Results[key]["Attributes"]["createdon"];
                    var dateKey = this._datePipe.transform(date, "_yyyyMM");
                    var dateText = this._datePipe.transform(date, "yyyy年MM月");
                    if (typeof this.mod.data[dateKey] === "undefined") {
                        this.mod.data[dateKey] = {};
                        this.mod.data[dateKey]["text"] = dateText;
                        this.mod.data[dateKey].data = [];
                    }
                    var obj = {};
                    obj["Id"] = res.Results[key]["Id"];
                    obj["carplate"] = res.Results[key]["Attributes"]["mcs_carplate"];
                    obj["customername"] = res.Results[key]["Attributes"]["mcs_customername"];
                    obj["createdonformat"] = res.Results[key]["Attributes"]["createdon@OData.Community.Display.V1.FormattedValue"];
                    obj["name"] = res.Results[key]["Attributes"]["mcs_name"];
                    obj["status"] = res.Results[key]["Attributes"]["mcs_status"];
                    obj["statusformat"] = res.Results[key]["Attributes"]["mcs_status@OData.Community.Display.V1.FormattedValue"];
                    //设置颜色
                    obj["statuscolor"] = "primary";
                    if (obj["status"] < 100) {
                        obj["statuscolor"] = "primary";
                    }
                    else if (obj["status"] < 180) {
                        obj["statuscolor"] = "tertiary";
                    }
                    else {
                        obj["statuscolor"] = "success";
                    }
                    this.mod.data[dateKey].data.push(obj);
                }
            }
            else {
                this.ionInfiniteScroll.disabled = true;
            }
            this.ionInfiniteScroll.complete();
            if (this.mod.searchData.pageindex == 1)
                this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
            if (this.mod.searchData.pageindex == 1)
                this._page.loadingHide();
            this.ionInfiniteScroll.complete();
        });
    }
};
ListPage.ctorParameters = () => [
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Page"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Valid"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }
];
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
        template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/reception-interrogation.com/list/list.page.html"),
        styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/serving/reception-interrogation.com/list/list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Page"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Valid"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])
], ListPage);



/***/ })

}]);
//# sourceMappingURL=serving-reception-interrogation-com-list-list-module-es2015.js.map