(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-my-customer-com-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/my-customer.com/list/list.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/my-customer.com/list/list.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/home/mywork\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>我的客户</ion-title>\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n        <ion-searchbar animated [(ngModel)]=\"mod.searchData.search\" placeholder=\"请输入姓名\\手机号\\车牌号搜索\" (keyup)=\"searchOnKeyup($event)\"></ion-searchbar>\r\n        <!--<ion-button color=\"primary\" slot=\"end\" size=\"small\" (click)=\"searchOnClick()\">\r\n            搜索\r\n        </ion-button>-->\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n        <ion-segment>\r\n            <ion-segment-button checked (click)=\"tagOnClick(1)\">\r\n                <ion-label>全部({{mod.allTotalCount}})</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button (click)=\"tagOnClick(2)\">\r\n                <ion-label>保修到期({{mod.warrantyTotalCount}})</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button (click)=\"tagOnClick(3)\">\r\n                <ion-label>保险到期({{mod.insuranceTotalCount}})</ion-label>\r\n            </ion-segment-button>\r\n        </ion-segment>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n    <ion-list lines=\"full\">\r\n        <!--<ion-item-divider>\r\n            <ion-label>\r\n                A\r\n            </ion-label>\r\n        </ion-item-divider>-->\r\n\r\n        <ion-item-sliding *ngFor=\"let item of mod.data;let key=index\">\r\n            <ion-item [routerLink]=\"['/serving/mycustomer/detail']\" [queryParams]=\"{id:item.Id}\">\r\n                <ion-icon *ngIf=\"item.genderval===1\" slot=\"start\" color=\"primary\" name=\"contact\" size=\"large\" style=\"width:60px;height:60px\"></ion-icon>\r\n                <ion-icon *ngIf=\"item.genderval===2\" slot=\"start\" color=\"danger\" name=\"contact\" size=\"large\" style=\"width:60px;height:60px\"></ion-icon>\r\n                <ion-icon *ngIf=\"item.genderval===3\" slot=\"start\" color=\"medium\" name=\"contact\" size=\"large\" style=\"width:60px;height:60px\"></ion-icon>\r\n                <ion-icon *ngIf=\"!item.genderval\" slot=\"start\" color=\"medium\" name=\"contact\" size=\"large\" style=\"width:60px;height:60px\"></ion-icon>\r\n                <ion-label>\r\n                    <h2>{{item.fullname}}</h2>\r\n                    <p>{{item.vehplate}}</p>\r\n                    <p>{{item.vehtype}}</p>\r\n                </ion-label>\r\n                <ion-icon *ngIf=\"item.mobilephone\" name=\"phone-portrait\" size=\"small\"></ion-icon>\r\n                <ion-note slot=\"end\">\r\n                    {{item.mobilephone}}\r\n                </ion-note>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n                <ion-item-option color=\"tertiary\" expandable>\r\n                    预约\r\n                </ion-item-option>\r\n            </ion-item-options>\r\n        </ion-item-sliding>\r\n\r\n\r\n        <!--<ion-item-sliding>\r\n            <ion-item [routerLink]=\"['/serving/mycustomer/detail']\">\r\n                <ion-icon slot=\"start\" color=\"primary\" name=\"man\" size=\"large\"></ion-icon>\r\n                <ion-label>\r\n                    <h2>独孤求败</h2>\r\n                    <p>渝A9877H</p>\r\n                    <p>S01</p>\r\n                </ion-label>\r\n                <ion-icon name=\"phone-portrait\" size=\"small\"></ion-icon>\r\n                <ion-note slot=\"end\">\r\n                    15023224233\r\n                </ion-note>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n                <ion-item-option color=\"tertiary\" expandable>\r\n                    预约\r\n                </ion-item-option>\r\n            </ion-item-options>\r\n        </ion-item-sliding>\r\n\r\n        <ion-item-sliding>\r\n            <ion-item [routerLink]=\"['/serving/mycustomer/detail']\">\r\n                <ion-icon slot=\"start\" color=\"danger\" name=\"woman\" size=\"large\"></ion-icon>\r\n                <ion-label>\r\n                    <h2>李秋水</h2>\r\n                    <p>渝A9877H</p>\r\n                    <p>S01</p>\r\n                </ion-label>\r\n                <ion-icon name=\"phone-portrait\" size=\"small\"></ion-icon>\r\n                <ion-note slot=\"end\">\r\n                    15023224233\r\n                </ion-note>\r\n            </ion-item>\r\n            <ion-item-options side=\"end\">\r\n                <ion-item-option color=\"tertiary\" expandable>\r\n                    预约\r\n                </ion-item-option>\r\n            </ion-item-options>\r\n        </ion-item-sliding>-->\r\n    </ion-list>\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/serving/my-customer.com/list/list.page.ts");







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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");



var ListPage = /** @class */ (function () {
    function ListPage(_http, _page) {
        this._http = _http;
        this._page = _page;
        this.mod = {
            apiUrl: '',
            data: [],
            searchData: {
                type: 1,
                pageindex: 1,
                search: ""
            },
            allTotalCount: 0,
            warrantyTotalCount: 0,
            insuranceTotalCount: 0
        };
        this.mod.apiUrl = "/Api/Customer/GetMyCustomerList";
    }
    ListPage.prototype.ngOnInit = function () {
        this.listOnBind();
    };
    ListPage.prototype.tagOnClick = function (type) {
        this.mod.searchData.type = type;
        this.mod.searchData.pageindex = 1;
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
        this.mod.data = [];
        this._http.get(this.mod.apiUrl, {
            params: {
                type: this.mod.searchData.type,
                pageindex: this.mod.searchData.pageindex,
                search: this.mod.searchData.search
            }
        }, function (res) {
            if (res.Results !== null) {
                for (var key in res.Results) {
                    var obj = {};
                    obj["Id"] = res.Results[key]["Id"];
                    obj["fullname"] = res.Results[key]["Attributes"]["a_x002e_mcs_fullname"];
                    obj["gender"] = res.Results[key]["Attributes"]["a_x002e_mcs_gender@OData.Community.Display.V1.FormattedValue"];
                    obj["genderval"] = res.Results[key]["Attributes"]["a_x002e_mcs_gender"];
                    obj["mobilephone"] = res.Results[key]["Attributes"]["a_x002e_mcs_mobilephone"];
                    obj["vehplate"] = res.Results[key]["Attributes"]["a_x002e_mcs_vehplate"];
                    obj["vehtype"] = res.Results[key]["Attributes"]["a_x002e_mcs_vehtype@OData.Community.Display.V1.FormattedValue"];
                    _this.mod.data.push(obj);
                }
                _this.mod.allTotalCount = res.ALLTotalCount;
                _this.mod.warrantyTotalCount = res.WarrantyTotalCount;
                _this.mod.insuranceTotalCount = res.InsuranceTotalCount;
                _this._page.loadingHide();
            }
            else {
                _this._page.alert("消息提示", "客户数据加载异常");
                _this._page.loadingHide();
            }
        }, function (err) {
            _this._page.alert("消息提示", "客户数据加载异常");
            _this._page.loadingHide();
        });
    };
    ListPage.ctorParameters = function () { return [
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] }
    ]; };
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/my-customer.com/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/serving/my-customer.com/list/list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"]])
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=serving-my-customer-com-list-list-module-es5.js.map