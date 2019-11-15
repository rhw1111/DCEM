(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-my-customer-com-detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/my-customer.com/detail/detail.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/my-customer.com/detail/detail.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/mycustomer/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{mod.data.vehowner.fullname}}</ion-title>\r\n    </ion-toolbar>\r\n\r\n    <ion-toolbar>\r\n        <ion-segment [(ngModel)]=\"tab\" color=\"primary\">\r\n            <ion-segment-button value=\"info\">\r\n                <ion-label>基础信息</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"data\">\r\n                <ion-label>跟进记录</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"att\">\r\n                <ion-label>维修履历</ion-label>\r\n            </ion-segment-button>\r\n        </ion-segment>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div [ngSwitch]=\"tab\">\r\n        <div *ngSwitchCase=\"'info'\">\r\n            <ion-list lines=\"full\">\r\n                <ion-item-divider color=\"primary\">\r\n                    <ion-label>\r\n                        车主信息\r\n                    </ion-label>\r\n                </ion-item-divider>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            姓名\r\n                        </h2>\r\n                        <p>{{mod.data.vehowner.fullname}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            证件类型\r\n                        </h2>\r\n                        <p>{{mod.data.vehowner.idtype}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            证件号码\r\n                        </h2>\r\n                        <p>{{mod.data.vehowner.identitycard}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label text-wrap>\r\n                        <h2>\r\n                            客户标签\r\n                        </h2>\r\n                        <ion-text>\r\n                            <ion-chip *ngFor=\"let item of mod.data.tagArray;let key=index\" color=\"success\">\r\n                                {{item.name}}\r\n                            </ion-chip>\r\n                        </ion-text>\r\n                        &nbsp;\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            送修人\r\n                        </h2>\r\n                        <p>{{mod.data.vehowner.shuttlename}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            送修人手机\r\n                        </h2>\r\n                        <p>{{mod.data.vehowner.shuttlephone}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item-divider color=\"primary\">\r\n                    <ion-label>\r\n                        车辆信息\r\n                    </ion-label>\r\n                </ion-item-divider>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            VIN\r\n                        </h2>\r\n                        <p>{{mod.data.vehowner.name}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            发动机号\r\n                        </h2>\r\n                        <p>{{mod.data.vehowner.enginennumber}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            车型\r\n                        </h2>\r\n                        <p>{{mod.data.vehowner.vehtype}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            销售日期\r\n                        </h2>\r\n                        <p>{{mod.data.vehowner.salesdate}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            生产日期\r\n                        </h2>\r\n                        <p>{{mod.data.vehowner.prodtime}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            下次保养日期\r\n                        </h2>\r\n                        <p>{{mod.data.vehowner.nextmaintainat}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            下次保养里程\r\n                        </h2>\r\n                        <p>{{mod.data.vehowner.nextmaintainmileage}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n\r\n\r\n            </ion-list>\r\n        </div>\r\n        <div *ngSwitchCase=\"'data'\">\r\n            <ion-list lines=\"full\">\r\n                <ion-item-divider color=\"primary\">\r\n                    <ion-label>\r\n                        跟进记录\r\n                    </ion-label>\r\n                </ion-item-divider>\r\n                <ion-item *ngFor=\"let item of mod.data.customerfollowuplogArray;let key=index\">\r\n                    <ion-label>\r\n                        <h2>\r\n                            跟进人\r\n                        </h2>\r\n                        <p>\r\n                            {{item.createdby}}\r\n                        </p>\r\n                        <h2>\r\n                            跟进时间\r\n                        </h2>\r\n                        <p>\r\n                            {{item.createdon}}&nbsp;\r\n                        </p>\r\n                        <h2>\r\n                            跟进内容\r\n                        </h2>\r\n                        <p text-wrap>\r\n                            {{item.remark}}&nbsp;\r\n                        </p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item *ngIf=\"mod.data.customerfollowuplogArray.length===0\">\r\n                    <ion-label>\r\n                        <p>\r\n                            当前客户没有跟进记录\r\n                        </p>\r\n                    </ion-label>\r\n                </ion-item>\r\n\r\n            </ion-list>\r\n        </div>\r\n        <div *ngSwitchCase=\"'att'\">\r\n            <ion-list lines=\"full\">\r\n                <ion-item-divider color=\"primary\">\r\n                    <ion-label>\r\n                        维修履历\r\n                    </ion-label>\r\n                </ion-item-divider>\r\n                <ion-item *ngFor=\"let item of mod.data.serviceproxyResumeArray;let key=index\" [routerLink]=\"['/serving/sc/detail']\" [queryParams]=\"{id:item.Id}\">\r\n                    <ion-icon color=\"success\" name=\"document\"></ion-icon>\r\n                    <ion-label style=\"margin-left:10px\">\r\n                        <h6>{{item[\"Attributes\"][\"mcs_name\"]}}</h6>\r\n                        <p>{{item[\"Attributes\"][\"mcs_carplate\"]}}&nbsp;&nbsp;</p>\r\n                        <p>{{item[\"Attributes\"][\"createdon@OData.Community.Display.V1.FormattedValue\"]}}</p>\r\n                        <p>{{item[\"Attributes\"][\"_mcs_dealerid_value@OData.Community.Display.V1.FormattedValue\"]}}</p>\r\n                    </ion-label>\r\n                    <ion-label style=\"text-align:right;\">\r\n                        <p>{{item[\"Attributes\"][\"mcs_ordertype@OData.Community.Display.V1.FormattedValue\"]}}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item *ngIf=\"mod.data.serviceproxyResumeArray.length===0\">\r\n                    <ion-label>\r\n                        <p>\r\n                            当前车辆没有维修履历\r\n                        </p>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-list>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button>\r\n            <ion-icon name=\"arrow-dropup\"></ion-icon>\r\n        </ion-fab-button>\r\n        <ion-fab-list side=\"top\">\r\n            <ion-fab-button color=\"success\" [routerLink]=\"['/serving/mycustomer/edit']\"><ion-icon name=\"add\"></ion-icon></ion-fab-button>\r\n            <ion-fab-button color=\"warning\" [routerLink]=\"['/serving/mycustomer/edit']\" [queryParams]=\"{id:mod.data.id,actionCode:2}\"><ion-icon name=\"create\"></ion-icon></ion-fab-button>\r\n        </ion-fab-list>\r\n    </ion-fab>\r\n\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/serving/my-customer.com/detail/detail.page.ts");







const routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]
    }
];
let DetailPageModule = class DetailPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DetailPage = class DetailPage {
    constructor(_http, _page, _valid, activeRoute) {
        this._http = _http;
        this._page = _page;
        this._valid = _valid;
        this.activeRoute = activeRoute;
        this.tab = "info";
        this.mod = {
            apiUrl: '/Api/Customer/GetCustomerInfo',
            data: {
                id: "",
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
                tagArray: [],
                serviceproxyResumeArray: []
            }
        };
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params) => {
            if (params['id'] != null && params['id'] != undefined) {
                // this._page.alert("消息提示", params['id']);
                this.pageOnBind(params['id']);
            }
        });
    }
    pageOnBind(id) {
        this._page.loadingShow();
        this._http.get(this.mod.apiUrl, {
            params: {
                guid: id,
            }
        }, (res) => {
            this.mod.data.id = id;
            if (!this._valid.isNull(res.Carserviceadvisor)) {
                this.mod.data.vehowner.fullname = res["Vehowner"]["Attributes"]["mcs_fullname"];
                this.mod.data.vehowner.idtype = res["Vehowner"]["Attributes"]["mcs_idtype@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.vehowner.identitycard = res["Vehowner"]["Attributes"]["mcs_identitycard"];
                this.mod.data.vehowner.shuttlename = res["Vehowner"]["Attributes"]["mcs_shuttlename"];
                this.mod.data.vehowner.shuttlephone = res["Vehowner"]["Attributes"]["mcs_shuttlephone"];
                this.mod.data.vehowner.name = res["Vehowner"]["Attributes"]["mcs_name"];
                this.mod.data.vehowner.enginennumber = res["Vehowner"]["Attributes"]["mcs_enginennumber"];
                this.mod.data.vehowner.vehtype = res["Vehowner"]["Attributes"]["_mcs_vehtype_value@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.vehowner.salesdate = res["Vehowner"]["Attributes"]["mcs_salesdate@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.vehowner.prodtime = res["Vehowner"]["Attributes"]["mcs_prodtime@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.vehowner.nextmaintainmileage = res["Vehowner"]["Attributes"]["mcs_nextmaintainmileage"];
                this.mod.data.vehowner.nextmaintainat = res["Vehowner"]["Attributes"]["mcs_nextmaintainat@OData.Community.Display.V1.FormattedValue"];
            }
            if (!this._valid.isNull(res.CustomerfollowuplogList)) {
                for (var key in res.CustomerfollowuplogList) {
                    var obj = {};
                    obj["remark"] = res.CustomerfollowuplogList[key]["Attributes"]["mcs_remark"];
                    obj["createdon"] = res.CustomerfollowuplogList[key]["Attributes"]["createdon@OData.Community.Display.V1.FormattedValue"];
                    obj["createdby"] = res.CustomerfollowuplogList[key]["Attributes"]["_createdby_value@OData.Community.Display.V1.FormattedValue"];
                    this.mod.data.customerfollowuplogArray.push(obj);
                }
            }
            if (!this._valid.isNull(res.TagList)) {
                for (var key in res.TagList) {
                    var obj = {};
                    obj["name"] = res.TagList[key]["Attributes"]["_mcs_taggroupid_value@OData.Community.Display.V1.FormattedValue"];
                    this.mod.data.tagArray.push(obj);
                }
            }
            this.mod.data.serviceproxyResumeArray = res.ServiceproxyResumeList;
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
        });
    }
};
DetailPage.ctorParameters = () => [
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Valid"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: __webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/my-customer.com/detail/detail.page.html"),
        styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/serving/my-customer.com/detail/detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Valid"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], DetailPage);



/***/ })

}]);
//# sourceMappingURL=serving-my-customer-com-detail-detail-module-es2015.js.map