(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-servicecenter-vehiclecenter-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/servicecenter/vehiclecenter/list/list.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/servicecenter/vehiclecenter/list/list.page.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar style=\"height:45px;\">\r\n    <ion-buttons slot=\"start\" style=\"margin-top: 3px;\">\r\n      <ion-back-button text=\"返回\" defaultHref=\"/tabs/servicecenter\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-searchbar  placeholder=\"搜索你感兴趣的车型\" style=\" font-size:13px;margin-top: 3px;width:250px;\" ></ion-searchbar>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <div style=\"width: 33%;float:left;\">\r\n        <ion-select name=\"clues\" cancelText=\"取消\"  okText=\"确认\" style=\"width: 70px;\" [(ngModel)]=\"model.search.mode\">\r\n            <ion-select-option  value=\"-1\">车型</ion-select-option>\r\n        </ion-select>\r\n    </div>\r\n    <div style=\"width: 33%;float:left;\">\r\n        <ion-select name=\"clues\" cancelText=\"取消\"  okText=\"确认\" style=\"width: 70px;\" [(ngModel)]=\"model.search.price\">\r\n            <ion-select-option  value=\"-1\">价格</ion-select-option>\r\n        </ion-select>\r\n    </div>\r\n    <div style=\"width: 33%;float:left;\">\r\n        <ion-select name=\"clues\" cancelText=\"取消\"  okText=\"确认\" style=\"width: 70px;\" [(ngModel)]=\"model.search.opack\">\r\n            <ion-select-option  value=\"-1\">结构</ion-select-option>\r\n        </ion-select>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n            <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"下拉刷新\" refreshingSpinner=\"circles\" refreshingText=\"刷新中...\">\r\n            </ion-refresher-content> \r\n    </ion-refresher>\r\n    <ion-list lines=\"full\">\r\n            <div class=\"goods-list\" *ngFor=\"let item of model.datalist \">\r\n                    <div class=\"panel\">\r\n                        <ion-tab-button class=\"panellist\" [routerLink]=\"['/servicecenter/vehiclemall/detail']\">\r\n                            <div class=\"img\">\r\n                                <img src=\"./assets/img/goods-list.jpg\" />\r\n                            </div>\r\n                            <div class=\"name\">\r\n                                {{item.Name}}\r\n                            </div>\r\n                            <div class=\"price\">\r\n                                ¥{{item.BasePrice}}元\r\n                            </div>\r\n                        </ion-tab-button>\r\n                    </div>\r\n                </div>\r\n    </ion-list>\r\n\r\n    <ion-row *ngIf=\"model.isending\">\r\n        <ion-col class=\"nodata\" text-center>\r\n          <label style=\"color:gray;\">没有更多内容啦</label>\r\n        </ion-col>\r\n      </ion-row>\r\n      \r\n      <ion-infinite-scroll #myInfiniteScroll threshold=\"100px\" (ionInfinite)=\"doLoading($event)\"> \r\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载更多...\"> \r\n        </ion-infinite-scroll-content>\r\n      </ion-infinite-scroll>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/page/servicecenter/vehiclecenter/list/list-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/page/servicecenter/vehiclecenter/list/list-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageRoutingModule", function() { return ListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.page */ "./src/app/page/servicecenter/vehiclecenter/list/list.page.ts");




const routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_3__["ListPage"]
    }
];
let ListPageRoutingModule = class ListPageRoutingModule {
};
ListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListPageRoutingModule);



/***/ }),

/***/ "./src/app/page/servicecenter/vehiclecenter/list/list.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/page/servicecenter/vehiclecenter/list/list.module.ts ***!
  \**********************************************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-routing.module */ "./src/app/page/servicecenter/vehiclecenter/list/list-routing.module.ts");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/page/servicecenter/vehiclecenter/list/list.page.ts");







let ListPageModule = class ListPageModule {
};
ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListPageRoutingModule"]
        ],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
    })
], ListPageModule);



/***/ }),

/***/ "./src/app/page/servicecenter/vehiclecenter/list/list.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/page/servicecenter/vehiclecenter/list/list.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".goods-list * {\n  --padding-start: 0px !important;\n  --padding-end: 0px !important; }\n\n.goods-list {\n  width: 50%;\n  height: 255px;\n  float: left;\n  position: relative; }\n\n.goods-list::after {\n  content: \"\";\n  display: block;\n  clear: both; }\n\n.goods-list .panel {\n  position: absolute;\n  border: 1px solid #dedede !important;\n  left: 10px;\n  top: 10px;\n  right: 10px;\n  bottom: 10px;\n  padding: 0px !important; }\n\n.goods-list .panel .panellist {\n  width: 100%;\n  height: 100%;\n  border: none;\n  text-decoration: none;\n  padding: 0px; }\n\n.goods-list .panel .img {\n  width: 100%;\n  height: 170px;\n  padding: 0px !important;\n  margin-top: -10px; }\n\n.goods-list .panel .img img {\n  width: 101%;\n  height: 100%; }\n\n.goods-list .panel .name {\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  font-weight: bold;\n  color: black;\n  font-size: 13px;\n  padding-left: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.goods-list .panel .price {\n  width: 100%;\n  height: 25px;\n  line-height: 25px;\n  color: orange;\n  font-size: 13px;\n  padding-left: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9zZXJ2aWNlY2VudGVyL3ZlaGljbGVjZW50ZXIvbGlzdC9FOlxcQXBwUHJvamVjdFxcRENFTVxcRENFTS5BUFAuVXNlckNlbnRlci9zcmNcXGFwcFxccGFnZVxcc2VydmljZWNlbnRlclxcdmVoaWNsZWNlbnRlclxcbGlzdFxcbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBZ0I7RUFDaEIsNkJBQWMsRUFBQTs7QUFHbEI7RUFDSSxVQUFVO0VBQ1YsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsVUFBVTtFQUNWLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9zZXJ2aWNlY2VudGVyL3ZlaGljbGVjZW50ZXIvbGlzdC9saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nb29kcy1saXN0ICoge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ29vZHMtbGlzdCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAyNTVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZ29vZHMtbGlzdDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5nb29kcy1saXN0IC5wYW5lbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdvb2RzLWxpc3QgLnBhbmVsIC5wYW5lbGxpc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5nb29kcy1saXN0IC5wYW5lbCAuaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNzBweDtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDotMTBweDtcclxufVxyXG5cclxuLmdvb2RzLWxpc3QgLnBhbmVsIC5pbWcgaW1nIHtcclxuICAgIHdpZHRoOiAxMDElO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZ29vZHMtbGlzdCAucGFuZWwgLm5hbWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uZ29vZHMtbGlzdCAucGFuZWwgLnByaWNlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/page/servicecenter/vehiclecenter/list/list.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/page/servicecenter/vehiclecenter/list/list.page.ts ***!
  \********************************************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component_typescript_dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/component/typescript/dcem.core */ "./src/app/component/typescript/dcem.core.ts");



let ListPage = class ListPage {
    constructor(_http, _page) {
        this._http = _http;
        this._page = _page;
        this.model = {
            search: {
                apiUrl: "api/product/All",
                mode: "-1",
                price: "-1",
                opack: "-1",
                pageSize: 10,
                page: 1,
            },
            datalist: [],
            isending: false,
        };
    }
    ngOnInit() {
        this.initListLoading();
    }
    //下拉刷新
    doRefresh(event) {
        this.model.datalist = [];
        this.model.search.page = 1;
        this.model.isending = false;
        this.getList(event);
    }
    //加载下一页
    doLoading(event) {
        this.model.search.page++;
        this.getList(event);
    }
    //初始化页面数据加载
    initListLoading() {
        this._page.loadingShow();
        this.getList(null);
    }
    //获取列表数据
    getList(event) {
        this._http.postForShopping(this.model.search.apiUrl, {
            StartDateTime: "2019-01-01 00:00:00",
            EndDateTime: "2019-12-31 23:59:59",
            PageSize: this.model.search.pageSize,
            PageIndex: this.model.search.page
        }, (res) => {
            console.log(res);
            //debugger;
            if (res != null && res.Datas !== null) {
                //绑定数据
                res.Datas.forEach(item => {
                    this.model.datalist.push(item);
                });
                event ? event.target.complete() : '';
                //判断是否有新数据
                if (res.Datas.length < this.model.search.pageSize) {
                    event ? event.target.disabled = true : "";
                    this.model.isending = true;
                }
            }
            else {
                this._page.alert("消息提示", "数据加载异常");
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
        });
    }
};
ListPage.ctorParameters = () => [
    { type: _app_component_typescript_dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
    { type: _app_component_typescript_dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] }
];
ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/servicecenter/vehiclecenter/list/list.page.html"),
        styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/page/servicecenter/vehiclecenter/list/list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component_typescript_dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
        _app_component_typescript_dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"]])
], ListPage);



/***/ })

}]);
//# sourceMappingURL=page-servicecenter-vehiclecenter-list-list-module-es2015.js.map