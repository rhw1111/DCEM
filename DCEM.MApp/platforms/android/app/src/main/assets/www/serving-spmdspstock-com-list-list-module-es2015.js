(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-spmdspstock-com-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/spmdspstock.com/list/list.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/spmdspstock.com/list/list.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/home/index\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>备件库存</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n        <ion-searchbar animated [(ngModel)]=\"mod.searchData.search\" placeholder=\"请输入备件名称\\编码搜索\" (keyup)=\"searchOnKeyup($event)\"></ion-searchbar>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list lines=\"full\">\r\n        <ion-item-sliding *ngFor=\"let item of mod.data.spmdspstockArray;let key=index\">\r\n            <ion-item>\r\n                <ion-icon color=\"{{item['icoColor']}}\" name=\"cube\"></ion-icon>\r\n                <ion-label style=\"margin-left:10px\">\r\n                    <h6>{{item[\"mcs_partscode\"]}}</h6>\r\n                    <p>{{item[\"mcs_name\"]}}</p>\r\n                    <p>{{item[\"a_x002e_mcs_spmdspwarehouseid@OData.Community.Display.V1.FormattedValue\"]}}</p>\r\n                    <p>{{item[\"a_x002e_mcs_spmdsplocationid@OData.Community.Display.V1.FormattedValue\"]}}</p>\r\n                </ion-label>\r\n                <ion-note slot=\"end\">\r\n                    {{item[\"a_x002e_mcs_availableq\"]}}\r\n                </ion-note>\r\n            </ion-item>\r\n        </ion-item-sliding>\r\n        <ion-item *ngIf=\"ionInfiniteScroll.disabled\">\r\n            <ion-label>\r\n                <p>\r\n                    没有更多的记录显示啦\r\n                </p>\r\n            </ion-label>\r\n        </ion-item>\r\n    </ion-list>\r\n    <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\r\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/serving/spmdspstock.com/list/list.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/serving/spmdspstock.com/list/list.module.ts ***!
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
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/serving/spmdspstock.com/list/list.page.ts");








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

/***/ "./src/app/serving/spmdspstock.com/list/list.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/serving/spmdspstock.com/list/list.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*ion-list {\r\n    ion-item-divider {\r\n        ion-label {\r\n            font-size: 14px;\r\n        }\r\n    }\r\n\r\n    ion-label:first-of-type {\r\n        margin-left: 0.6em;\r\n\r\n        h2 {\r\n            margin-left: 0em;\r\n            font-size: 0.5em;\r\n        }\r\n\r\n        p {\r\n            font-size: 0.3em;\r\n        }\r\n    }\r\n\r\n    ion-label:last-child {\r\n        font-size: 0.5em;\r\n        text-align: right;\r\n    }\r\n}*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmluZy9zcG1kc3BzdG9jay5jb20vbGlzdC9FOlxcQXBwUHJvamVjdFxcRENFTVxcRENFTS5NQXBwL3NyY1xcYXBwXFxzZXJ2aW5nXFxzcG1kc3BzdG9jay5jb21cXGxpc3RcXGxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9zZXJ2aW5nL3NwbWRzcHN0b2NrLmNvbS9saXN0L2xpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUNzQkUiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aW5nL3NwbWRzcHN0b2NrLmNvbS9saXN0L2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vKmlvbi1saXN0IHtcclxuICAgIGlvbi1pdGVtLWRpdmlkZXIge1xyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWxhYmVsOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjZlbTtcclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMGVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNWVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC4zZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1sYWJlbDpsYXN0LWNoaWxkIHtcclxuICAgICAgICBmb250LXNpemU6IDAuNWVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG59Ki9cclxuIiwiLyppb24tbGlzdCB7XHJcbiAgICBpb24taXRlbS1kaXZpZGVyIHtcclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1sYWJlbDpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMC42ZW07XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjVlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuM2VtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tbGFiZWw6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjVlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxufSovXG4iXX0= */"

/***/ }),

/***/ "./src/app/serving/spmdspstock.com/list/list.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/serving/spmdspstock.com/list/list.page.ts ***!
  \***********************************************************/
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
            apiUrl: '/Api/Stock/GetSpmdspStockList',
            data: {
                spmdspstockArray: []
            },
            searchData: {
                pageindex: 1,
                search: ""
            },
            objectKeys: Object.keys
        };
    }
    ngOnInit() {
        this.listOnBind();
    }
    //每次页面加载
    //ionViewWillEnter() {
    //    this.mod.searchData = {
    //        pageindex: 1,
    //        search: ""
    //    };
    //    this.listOnBind();
    //}
    //下拉刷新
    doInfinite(event) {
        this.mod.searchData.pageindex = this.mod.searchData.pageindex + 1;
        this.listOnBind();
    }
    //搜索事件
    searchOnKeyup(event) {
        var keyCode = event ? event.keyCode : "";
        if (keyCode == 13) {
            this.mod.data.spmdspstockArray = [];
            this.mod.searchData.pageindex = 1;
            this.ionInfiniteScroll.disabled = false;
            this.ionContent.scrollToTop(200);
            this.listOnBind();
        }
    }
    //列表绑定
    listOnBind() {
        console.log(this.mod.searchData.pageindex);
        if (this.mod.searchData.pageindex == 1)
            this._page.loadingShow();
        this._http.get(this.mod.apiUrl, {
            params: {
                pageindex: this.mod.searchData.pageindex,
                search: this.mod.searchData.search
            }
        }, (res) => {
            if (!this._valid.isNull(res.Results) !== null && res.Results.length > 0) {
                for (var key in res.Results) {
                    var obj = {};
                    obj = res.Results[key]["Attributes"];
                    //设置颜色
                    obj["icoColor"] = "dark";
                    if (obj["a_x002e_mcs_availableq"] > 0) {
                        obj["icoColor"] = "primary";
                    }
                    this.mod.data.spmdspstockArray.push(obj);
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
        template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/spmdspstock.com/list/list.page.html"),
        styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/serving/spmdspstock.com/list/list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Page"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Valid"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])
], ListPage);



/***/ })

}]);
//# sourceMappingURL=serving-spmdspstock-com-list-list-module-es2015.js.map