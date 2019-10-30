(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-mc-sc-com-detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/mc-sc.com/detail/detail.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/mc-sc.com/detail/detail.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/sc/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <ion-label>服务委托书明细</ion-label>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list lines=\"full\">\r\n        <ion-item-divider color=\"primary\">\r\n            <ion-label>\r\n                车主资料\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    姓名\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.customername}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    车牌\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.carplate}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    手机\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.customerphone}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item-divider color=\"primary\">\r\n            <ion-label>\r\n                委托信息\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    单号\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.name}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    送修人\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.shuttlename}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    送修人手机\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.shuttlephone}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    工单类型\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.ordertype}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    进店电量\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.inpower}}%&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    离店电量\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.outpower}}%&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    进店油量\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.oilquantity}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    离店油量\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.departureoil}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    进店里程\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.mileage}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    离店里程\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.departuremileage}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    到店时间\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.arrivalon}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    完工时间\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.finishat}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    维修工位\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.repairlocationid}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    状态\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.status}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    工时费用\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.hoursamount}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    零件费用\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.partsamount}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    优惠金额\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.discountamount}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    费用合计\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.amounttotal}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item-divider color=\"primary\">\r\n            <ion-label>\r\n                维修项目\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item-group>\r\n            <ion-item *ngFor=\"let item of mod.data.serviceorderrepairitemArray;let key=index\">\r\n                <ion-label>\r\n                    <h2>\r\n                        项目名称\r\n                    </h2>\r\n                    <p>\r\n                        {{item.name}}\r\n                    </p>\r\n                    <h2>\r\n                        项目代码\r\n                    </h2>\r\n                    <p>\r\n                        {{item.repairitemid}}\r\n                    </p>\r\n                    <h2>\r\n                        维修类别\r\n                    </h2>\r\n                    <p text-wrap>\r\n                        {{item.repairitemtypeid}}\r\n                    </p>\r\n                    <h2>\r\n                        费用明细\r\n                    </h2>\r\n                    <p>\r\n                        {{item.workinghour}}小时 X {{item.price}}  X {{item.discount}}  =  ￥{{item.repairamount}}\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"mod.data.serviceorderrepairitemArray.length===0\">\r\n                <ion-label>\r\n                    <p>\r\n                        当前单据没有维修项目\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-item-group>\r\n        <ion-item-divider color=\"primary\">\r\n            <ion-label>\r\n                维修配件\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item-group>\r\n            <ion-item *ngFor=\"let item of mod.data.serviceorderpartArray;let key=index\">\r\n                <ion-label>\r\n                    <h2>\r\n                        零件名称\r\n                    </h2>\r\n                    <p>\r\n                        {{item.partsname}}\r\n                    </p>\r\n                    <h2>\r\n                        零件代码\r\n                    </h2>\r\n                    <p>\r\n                        {{item.partsid}}\r\n                    </p>\r\n                    <h2>\r\n                        维修类别\r\n                    </h2>\r\n                    <p text-wrap>\r\n                        {{item.repairitemtypeid}}\r\n                    </p>\r\n                    <h2>\r\n                        费用明细\r\n                    </h2>\r\n                    <p>\r\n                        {{item.quantity}} X {{item.price}}  X {{item.discount}}  =  ￥{{item.amount}}\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"mod.data.serviceorderpartArray.length===0\">\r\n                <ion-label>\r\n                    <p>\r\n                        当前单据没有维修零件\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-item-group>\r\n    </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/serving/mc-sc.com/detail/detail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/serving/mc-sc.com/detail/detail.module.ts ***!
  \***********************************************************/
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
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/serving/mc-sc.com/detail/detail.page.ts");







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

/***/ "./src/app/serving/mc-sc.com/detail/detail.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/serving/mc-sc.com/detail/detail.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvbWMtc2MuY29tL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/serving/mc-sc.com/detail/detail.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/serving/mc-sc.com/detail/detail.page.ts ***!
  \*********************************************************/
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
    constructor(_http, _page, activeRoute) {
        this._http = _http;
        this._page = _page;
        this.activeRoute = activeRoute;
        this.mod = {
            apiUrl: '/Api/Serviceproxy/GetInfo',
            data: {
                serviceproxy: {
                    customername: "",
                    carplate: "",
                    customerphone: "",
                    name: "",
                    shuttlename: "",
                    shuttlephone: "",
                    ordertype: "",
                    inpower: "",
                    outpower: "",
                    oilquantity: "",
                    departureoil: "",
                    mileage: "",
                    departuremileage: "",
                    arrivalon: "",
                    finishat: "",
                    repairlocationid: "",
                    status: "",
                    hoursamount: "",
                    partsamount: "",
                    discountamount: "",
                    amounttotal: ""
                },
                serviceorderrepairitemArray: [],
                serviceorderpartArray: []
            }
        };
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params) => {
            if (params['id'] != null && params['id'] != undefined) {
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
            if (res.Carserviceadvisor !== null) {
                this.mod.data.serviceproxy["customername"] = res["Serviceproxy"]["Attributes"]["mcs_customername"];
                this.mod.data.serviceproxy["carplate"] = res["Serviceproxy"]["Attributes"]["mcs_carplate"];
                this.mod.data.serviceproxy["customerphone"] = res["Serviceproxy"]["Attributes"]["mcs_customerphone"];
                this.mod.data.serviceproxy["name"] = res["Serviceproxy"]["Attributes"]["mcs_name"];
                this.mod.data.serviceproxy["shuttlename"] = res["Serviceproxy"]["Attributes"]["mcs_shuttlename"];
                this.mod.data.serviceproxy["shuttlephone"] = res["Serviceproxy"]["Attributes"]["mcs_shuttlephone"];
                this.mod.data.serviceproxy["ordertype"] = res["Serviceproxy"]["Attributes"]["mcs_ordertype@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.serviceproxy["inpower"] = res["Serviceproxy"]["Attributes"]["mcs_inpower"];
                this.mod.data.serviceproxy["outpower"] = res["Serviceproxy"]["Attributes"]["mcs_outpower"];
                this.mod.data.serviceproxy["oilquantity"] = res["Serviceproxy"]["Attributes"]["mcs_oilquantity"];
                this.mod.data.serviceproxy["departureoil"] = res["Serviceproxy"]["Attributes"]["mcs_departureoil"];
                this.mod.data.serviceproxy["mileage"] = res["Serviceproxy"]["Attributes"]["mcs_mileage"];
                this.mod.data.serviceproxy["departuremileage"] = res["Serviceproxy"]["Attributes"]["mcs_departuremileage"];
                this.mod.data.serviceproxy["arrivalon"] = res["Serviceproxy"]["Attributes"]["mcs_arrivalon@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.serviceproxy["finishat"] = res["Serviceproxy"]["Attributes"]["mcs_finishat@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.serviceproxy["repairlocationid"] = res["Serviceproxy"]["Attributes"]["_mcs_repairlocationid_value@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.serviceproxy["status"] = res["Serviceproxy"]["Attributes"]["mcs_status@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.serviceproxy["hoursamount"] = res["Serviceproxy"]["Attributes"]["mcs_hoursamount"];
                this.mod.data.serviceproxy["partsamount"] = res["Serviceproxy"]["Attributes"]["mcs_partsamount"];
                this.mod.data.serviceproxy["discountamount"] = res["Serviceproxy"]["Attributes"]["mcs_discountamount"];
                this.mod.data.serviceproxy["amounttotal"] = res["Serviceproxy"]["Attributes"]["mcs_amounttotal"];
            }
            if (res.ServiceorderrepairitemList !== null) {
                for (var key in res.ServiceorderrepairitemList) {
                    var obj = {};
                    obj["name"] = res.ServiceorderrepairitemList[key]["Attributes"]["mcs_name"];
                    obj["repairitemid"] = res.ServiceorderrepairitemList[key]["Attributes"]["_mcs_repairitemid_value@OData.Community.Display.V1.FormattedValue"];
                    obj["repairitemtypeid"] = res.ServiceorderrepairitemList[key]["Attributes"]["_mcs_repairitemtypeid_value@OData.Community.Display.V1.FormattedValue"];
                    obj["workinghour"] = res.ServiceorderrepairitemList[key]["Attributes"]["mcs_workinghour"];
                    obj["price"] = res.ServiceorderrepairitemList[key]["Attributes"]["mcs_price"];
                    obj["discount"] = res.ServiceorderrepairitemList[key]["Attributes"]["mcs_discount"];
                    obj["repairamount"] = res.ServiceorderrepairitemList[key]["Attributes"]["mcs_repairamount"];
                    this.mod.data.serviceorderrepairitemArray.push(obj);
                }
            }
            if (res.ServiceorderpartList !== null) {
                for (var key in res.ServiceorderpartList) {
                    var obj = {};
                    obj["partsname"] = res.ServiceorderpartList[key]["Attributes"]["mcs_partsname"];
                    obj["partsid"] = res.ServiceorderpartList[key]["Attributes"]["_mcs_partsid_value@OData.Community.Display.V1.FormattedValue"];
                    obj["repairitemtypeid"] = res.ServiceorderpartList[key]["Attributes"]["_mcs_repairitemtypeid_value@OData.Community.Display.V1.FormattedValue"];
                    obj["quantity"] = res.ServiceorderpartList[key]["Attributes"]["mcs_quantity"];
                    obj["price"] = res.ServiceorderpartList[key]["Attributes"]["mcs_price"];
                    obj["discount"] = res.ServiceorderpartList[key]["Attributes"]["mcs_discount"];
                    obj["amount"] = res.ServiceorderpartList[key]["Attributes"]["mcs_amount"];
                    this.mod.data.serviceorderpartArray.push(obj);
                }
            }
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: __webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/mc-sc.com/detail/detail.page.html"),
        styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/serving/mc-sc.com/detail/detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], DetailPage);



/***/ })

}]);
//# sourceMappingURL=serving-mc-sc-com-detail-detail-module-es2015.js.map