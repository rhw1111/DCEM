(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-my-customer-com-detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/my-customer.com/detail/detail.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/my-customer.com/detail/detail.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/mycustomer/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{mod.data.vehowner.fullname}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list lines=\"full\">\r\n        <ion-item-divider color=\"primary\">\r\n            <ion-label>\r\n                车主信息\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    姓名\r\n                </h2>\r\n                <p>{{mod.data.vehowner.fullname}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    证件类型\r\n                </h2>\r\n                <p>{{mod.data.vehowner.idtype}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    证件号码\r\n                </h2>\r\n                <p>{{mod.data.vehowner.identitycard}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label text-wrap>\r\n                <h2>\r\n                    客户标签\r\n                </h2>\r\n                <ion-text>\r\n                    <ion-chip *ngFor=\"let item of mod.data.tagArray;let key=index\" color=\"success\">\r\n                        {{item.name}}\r\n                    </ion-chip>\r\n                </ion-text>\r\n                &nbsp;\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    送修人\r\n                </h2>\r\n                <p>{{mod.data.vehowner.shuttlename}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    送修人手机\r\n                </h2>\r\n                <p>{{mod.data.vehowner.shuttlephone}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item-divider color=\"primary\">\r\n            <ion-label>\r\n                车辆信息\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    VIN\r\n                </h2>\r\n                <p>{{mod.data.vehowner.name}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    发动机号\r\n                </h2>\r\n                <p>{{mod.data.vehowner.enginennumber}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    车型\r\n                </h2>\r\n                <p>{{mod.data.vehowner.vehtype}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    销售日期\r\n                </h2>\r\n                <p>{{mod.data.vehowner.salesdate}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    生产日期\r\n                </h2>\r\n                <p>{{mod.data.vehowner.prodtime}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    下次保养日期\r\n                </h2>\r\n                <p>{{mod.data.vehowner.nextmaintainat}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    下次保养里程\r\n                </h2>\r\n                <p>{{mod.data.vehowner.nextmaintainmileage}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item-divider color=\"primary\">\r\n            <ion-label>\r\n                跟进记录\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item-group>\r\n            <ion-item *ngFor=\"let item of mod.data.customerfollowuplogArray;let key=index\">\r\n                <ion-label>\r\n                    <h2>\r\n                        跟进人\r\n                    </h2>\r\n                    <p>\r\n                        {{item.createdby}}\r\n                    </p>\r\n                    <h2>\r\n                        跟进时间\r\n                    </h2>\r\n                    <p>\r\n                        {{item.createdon}}&nbsp;\r\n                    </p>\r\n                    <h2>\r\n                        跟进内容\r\n                    </h2>\r\n                    <p text-wrap>\r\n                        {{item.remark}}&nbsp;\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"mod.data.customerfollowuplogArray.length===0\">\r\n                <ion-label>\r\n                    <p>\r\n                        当前客户没有跟进记录\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-item-group>\r\n    </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/serving/my-customer.com/detail/detail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/serving/my-customer.com/detail/detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: DetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/serving/my-customer.com/detail/detail.page.ts");







var routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]
    }
];
var DetailPageModule = /** @class */ (function () {
    function DetailPageModule() {
    }
    DetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
        })
    ], DetailPageModule);
    return DetailPageModule;
}());



/***/ }),

/***/ "./src/app/serving/my-customer.com/detail/detail.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/serving/my-customer.com/detail/detail.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvbXktY3VzdG9tZXIuY29tL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/serving/my-customer.com/detail/detail.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/serving/my-customer.com/detail/detail.page.ts ***!
  \***************************************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DetailPage = /** @class */ (function () {
    function DetailPage(_http, _page, activeRoute) {
        this._http = _http;
        this._page = _page;
        this.activeRoute = activeRoute;
        this.mod = {
            apiUrl: '/Api/Customer/GetCustomerInfo',
            data: {
                vehowner: {
                    fullname: "",
                    idtype: "",
                    identitycard: "",
                    shuttlename: "",
                    shuttlephone: "",
                    name: "",
                    enginennumber: "",
                    vehtype: "",
                    salesdate: "",
                    prodtime: "",
                    nextmaintainmileage: "",
                    nextmaintainat: ""
                },
                customerfollowuplogArray: [],
                tagArray: []
            }
        };
    }
    DetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.queryParams.subscribe(function (params) {
            if (params['id'] != null && params['id'] != undefined) {
                // this._page.alert("消息提示", params['id']);
                _this.pageOnBind(params['id']);
            }
        });
    };
    DetailPage.prototype.pageOnBind = function (id) {
        var _this = this;
        this._page.loadingShow();
        this._http.get(this.mod.apiUrl, {
            params: {
                guid: id,
            }
        }, function (res) {
            if (res.Carserviceadvisor !== null) {
                _this.mod.data.vehowner.fullname = res["Vehowner"]["Attributes"]["mcs_fullname"];
                _this.mod.data.vehowner.idtype = res["Vehowner"]["Attributes"]["mcs_idtype@OData.Community.Display.V1.FormattedValue"];
                _this.mod.data.vehowner.identitycard = res["Vehowner"]["Attributes"]["mcs_identitycard"];
                _this.mod.data.vehowner.shuttlename = res["Vehowner"]["Attributes"]["mcs_shuttlename"];
                _this.mod.data.vehowner.shuttlephone = res["Vehowner"]["Attributes"]["mcs_shuttlephone"];
                _this.mod.data.vehowner.name = res["Vehowner"]["Attributes"]["mcs_name"];
                _this.mod.data.vehowner.enginennumber = res["Vehowner"]["Attributes"]["mcs_enginennumber"];
                _this.mod.data.vehowner.vehtype = res["Vehowner"]["Attributes"]["_mcs_vehtype_value@OData.Community.Display.V1.FormattedValue"];
                _this.mod.data.vehowner.salesdate = res["Vehowner"]["Attributes"]["mcs_salesdate@OData.Community.Display.V1.FormattedValue"];
                _this.mod.data.vehowner.prodtime = res["Vehowner"]["Attributes"]["mcs_prodtime@OData.Community.Display.V1.FormattedValue"];
                _this.mod.data.vehowner.nextmaintainmileage = res["Vehowner"]["Attributes"]["mcs_nextmaintainmileage"];
                _this.mod.data.vehowner.nextmaintainat = res["Vehowner"]["Attributes"]["mcs_nextmaintainat@OData.Community.Display.V1.FormattedValue"];
            }
            if (res.CustomerfollowuplogList != null) {
                for (var key in res.CustomerfollowuplogList) {
                    var obj = {};
                    obj["remark"] = res.CustomerfollowuplogList[key]["Attributes"]["mcs_remark"];
                    obj["createdon"] = res.CustomerfollowuplogList[key]["Attributes"]["createdon@OData.Community.Display.V1.FormattedValue"];
                    obj["createdby"] = res.CustomerfollowuplogList[key]["Attributes"]["_createdby_value@OData.Community.Display.V1.FormattedValue"];
                    _this.mod.data.customerfollowuplogArray.push(obj);
                }
            }
            if (res.TagList != null) {
                for (var key in res.TagList) {
                    var obj = {};
                    obj["name"] = res.TagList[key]["Attributes"]["_mcs_taggroupid_value@OData.Community.Display.V1.FormattedValue"];
                    _this.mod.data.tagArray.push(obj);
                }
            }
            _this._page.loadingHide();
        }, function (err) {
            _this._page.alert("消息提示", "数据加载异常");
            _this._page.loadingHide();
        });
    };
    DetailPage.ctorParameters = function () { return [
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/my-customer.com/detail/detail.page.html"),
            styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/serving/my-customer.com/detail/detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DetailPage);
    return DetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=serving-my-customer-com-detail-detail-module-es5.js.map