(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-mc-sc-com-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/mc-sc.com/list/list.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/mc-sc.com/list/list.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/home/mywork\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>服务委托书</ion-title>\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n        <ion-searchbar animated [(ngModel)]=\"mod.searchData.search\" placeholder=\"请输入单号\\姓名\\车牌号搜索\" (keyup)=\"searchOnKeyup($event)\"></ion-searchbar>\r\n        <!--<ion-button color=\"primary\" slot=\"end\" size=\"small\">\r\n            搜索\r\n        </ion-button>-->\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list lines=\"full\">\r\n        <div *ngFor=\"let key of objectKeys(mod.data)\">\r\n            <ion-item-divider color=\"primary\">\r\n                <ion-label>\r\n                    {{mod.data[key].text}}\r\n                </ion-label>\r\n            </ion-item-divider>\r\n            <ion-item-sliding *ngFor=\"let item of mod.data[key].data;let key=index\">\r\n                <ion-item [routerLink]=\"['/serving/sc/detail']\" [queryParams]=\"{id:item.Id}\">\r\n                    <ion-label>\r\n                        <p>{{item.carplate}}</p>\r\n                        <p>{{item.customername}}</p>\r\n                        <p>{{item.createdon}}</p>\r\n                    </ion-label>\r\n                    <ion-note slot=\"end\">\r\n                        {{item.name}}\r\n                    </ion-note>\r\n                </ion-item>\r\n            </ion-item-sliding>\r\n        </div>\r\n    </ion-list>\r\n\r\n    <!--<ion-card *ngFor=\"let key of objectKeys(mod.data)\">\r\n        <ion-card-header>\r\n            <ion-card-title>\r\n                {{mod.data[key].text}}\r\n            </ion-card-title>\r\n        </ion-card-header>\r\n        <ion-list lines=\"full\">\r\n            <ion-item-sliding *ngFor=\"let item of mod.data[key].data;let key=index\">\r\n                <ion-item [routerLink]=\"['/serving/sc/detail']\" [queryParams]=\"{id:item.Id}\">\r\n                    <ion-label>\r\n                        <p>{{item.carplate}}</p>\r\n                        <p>{{item.customername}}</p>\r\n                        <p>{{item.createdon}}</p>\r\n                    </ion-label>\r\n                    <ion-note slot=\"end\">\r\n                        {{item.name}}\r\n                    </ion-note>\r\n                </ion-item>\r\n            </ion-item-sliding>\r\n        </ion-list>\r\n        <br />\r\n    </ion-card>-->\r\n\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button>\r\n            <ion-icon name=\"arrow-dropup\"></ion-icon>\r\n        </ion-fab-button>\r\n        <ion-fab-list side=\"top\">\r\n            <ion-fab-button color=\"danger\" [routerLink]=\"['/serving/sc/edit']\"><ion-icon name=\"add\"></ion-icon></ion-fab-button>\r\n        </ion-fab-list>\r\n    </ion-fab>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/serving/mc-sc.com/list/list.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/serving/mc-sc.com/list/list.module.ts ***!
  \*******************************************************/
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
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/serving/mc-sc.com/list/list.page.ts");








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
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/serving/mc-sc.com/list/list.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/serving/mc-sc.com/list/list.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvbWMtc2MuY29tL2xpc3QvbGlzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/serving/mc-sc.com/list/list.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/serving/mc-sc.com/list/list.page.ts ***!
  \*****************************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");




var ListPage = /** @class */ (function () {
    function ListPage(_http, _page, _datePipe) {
        this._http = _http;
        this._page = _page;
        this._datePipe = _datePipe;
        this.mod = {
            apiUrl: '',
            data: {},
            searchData: {
                type: 1,
                pageindex: 1,
                search: ""
            }
        };
        this.objectKeys = Object.keys;
        this.mod.apiUrl = "/Api/Serviceproxy/GetList";
        this.mod.searchData.type = 2;
        this.mod.searchData.search = "";
        this.mod.searchData.pageindex = 1;
    }
    ListPage.prototype.ngOnInit = function () {
        this.listOnBind();
    };
    ListPage.prototype.searchOnClick = function () {
        this.listOnBind();
    };
    ListPage.prototype.searchOnKeyup = function (event) {
        var keyCode = event ? event.keyCode : "";
        if (keyCode == 13) {
            this.listOnBind();
        }
    };
    ListPage.prototype.listOnBind = function () {
        var _this = this;
        this._page.loadingShow();
        this.mod.data = {};
        this._http.get(this.mod.apiUrl, {
            params: {
                type: this.mod.searchData.type,
                pageindex: this.mod.searchData.pageindex,
                search: this.mod.searchData.search
            }
        }, function (res) {
            console.log(res);
            if (res.Results !== null) {
                for (var key in res.Results) {
                    var date = res.Results[key]["Attributes"]["createdon"];
                    var dateKey = _this._datePipe.transform(date, "_yyyyMM");
                    var dateText = _this._datePipe.transform(date, "yyyy年MM月");
                    if (typeof _this.mod.data[dateKey] === "undefined") {
                        _this.mod.data[dateKey] = {};
                        _this.mod.data[dateKey]["text"] = dateText;
                        _this.mod.data[dateKey].data = [];
                    }
                    var obj = {};
                    obj["Id"] = res.Results[key]["Id"];
                    obj["carplate"] = res.Results[key]["Attributes"]["mcs_carplate"];
                    obj["customername"] = res.Results[key]["Attributes"]["mcs_customername"];
                    obj["createdon"] = res.Results[key]["Attributes"]["createdon@OData.Community.Display.V1.FormattedValue"];
                    obj["name"] = res.Results[key]["Attributes"]["mcs_name"];
                    _this.mod.data[dateKey].data.push(obj);
                }
                console.log(_this.mod.data);
                _this._page.loadingHide();
            }
            else {
                _this._page.alert("消息提示", "数据加载异常");
                _this._page.loadingHide();
            }
        }, function (err) {
            _this._page.alert("消息提示", "数据加载异常");
            _this._page.loadingHide();
        });
    };
    ListPage.ctorParameters = function () { return [
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }
    ]; };
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/mc-sc.com/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/serving/mc-sc.com/list/list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=serving-mc-sc-com-list-list-module-es5.js.map