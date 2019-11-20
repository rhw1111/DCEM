(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-mc-vehorder-com-detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/mc-vehorder.com/detail/detail.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/mc-vehorder.com/detail/detail.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"返回\" defaultHref=\"/saleing/vehorder/list\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>整车订单详情</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-segment [(ngModel)]=\"tab\">\r\n      <ion-segment-button value=\"baseinfo\" checked >\r\n        <ion-label>基础信息</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"rightitemuselist\">\r\n        <ion-label>权益项</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"vehordertracklist\">\r\n        <ion-label>透明化状态</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div [ngSwitch]=\"tab\">\r\n    <div *ngSwitchCase=\"'baseinfo'\">\r\n      <ion-list lines=\"full\">\r\n        <ion-item-divider color=\"dark\">\r\n          <ion-label>\r\n            基础信息\r\n          </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              订单编码\r\n            </h2>\r\n            <p>{{model.data.mcs_code}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              综合订单号\r\n            </h2>\r\n            <p>{{model.data.mcs_mallordercode}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              商城订单号\r\n            </h2>\r\n            <p>{{model.data.mcs_shopcode}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              商城下单时间\r\n            </h2>\r\n            <p>{{model.data.mcs_orderon}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              订单来源\r\n            </h2>\r\n            <p>{{model.data.mcs_ordersource}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              锁车VIN\r\n            </h2>\r\n            <p>{{model.data.mcs_stockvin}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              交车VIN\r\n            </h2>\r\n            <p>{{model.data.mcs_deliveryvin}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              交车时间\r\n            </h2>\r\n            <p>{{model.data.mcs_deliveryon}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              标准价格\r\n            </h2>\r\n            <p>{{model.data.mcs_stdprice}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              应收金额\r\n            </h2>\r\n            <p>{{model.data.mcs_totalamount}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              尾款\r\n            </h2>\r\n            <p>{{model.data.mcs_receiptamount}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              定金\r\n            </h2>\r\n            <p>{{model.data.mcs_earnest}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              缴定金时间\r\n            </h2>\r\n            <p>{{model.data.mcs_paydepositon}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item-divider color=\"dark\">\r\n          <ion-label>\r\n            客户信息\r\n          </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              购车人\r\n            </h2>\r\n            <p>{{model.data.mcs_contactname}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              购车人手机\r\n            </h2>\r\n            <p>{{model.data.mcs_contactphone}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              证件号\r\n            </h2>\r\n            <p>{{model.data.mcs_idcard}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              用户ID\r\n            </h2>\r\n            <p>{{model.data.mcs_contactid}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item-divider color=\"dark\">\r\n          <ion-label>\r\n            审核信息\r\n          </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              审核状态\r\n            </h2>\r\n            <p>{{model.data.mcs_approvalstatus}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              审批人\r\n            </h2>\r\n            <p>{{model.data.mcs_approvaler}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              审批意见\r\n            </h2>\r\n            <p>{{model.data.mcs_msg}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              通过时间\r\n            </h2>\r\n            <p>{{model.data.mcs_approvalon2}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              取消时间\r\n            </h2>\r\n            <p>{{model.data.mcs_cancelorderon}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              取消原因\r\n            </h2>\r\n            <p>{{model.data.mcs_canceldesc}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n   \r\n      </ion-list>\r\n    </div>\r\n    <div *ngSwitchCase=\"'rightitemuselist'\">\r\n      <ion-list lines=\"full\">\r\n          <ion-item-sliding *ngFor=\"let item of model.RightitemuseList\">\r\n              <ion-item >\r\n                  <ion-icon slot=\"start\" name=\"hammer\" size=\"large\"></ion-icon>\r\n                  <ion-label>\r\n                    <h3>{{item.mcs_name}}</h3>\r\n                    <p>{{item.mcs_code}}</p>\r\n                  </ion-label>\r\n                  <ion-note>\r\n                    <p>{{item.mcs_amount}}</p>\r\n                  </ion-note>\r\n                </ion-item>                              \r\n          </ion-item-sliding>\r\n           <ion-row *ngIf=\"model.RightitemuseList.length==0\">\r\n              <ion-col>\r\n                <div class=\"ionattbody\">\r\n                  当前无权益项记录\r\n                </div>\r\n              </ion-col>\r\n          </ion-row>\r\n      </ion-list>\r\n    </div>\r\n    <div *ngSwitchCase=\"'vehordertracklist'\">\r\n      <ion-list lines=\"full\">\r\n       <ion-item-sliding *ngFor=\"let item of model.VehordertrackList\">\r\n          <ion-item >\r\n              <ion-icon slot=\"start\" name=\"arrow-round-up\" size=\"large\"></ion-icon>\r\n              <ion-label>\r\n                <h3>{{item.mcs_optionon}}</h3>\r\n                <!-- <p>{{item.mcs_rostatus}}</p> -->\r\n              </ion-label>\r\n              <ion-note>\r\n                <p>{{item.mcs_rostatus}}</p>\r\n              </ion-note>\r\n            </ion-item>          \r\n       </ion-item-sliding>\r\n      <!--  <nz-timeline *ngFor=\"let item of model.VehordertrackList\">\r\n          <nz-timeline-item>{{item.mcs_optionon}}</nz-timeline-item>       \r\n        </nz-timeline> -->\r\n       <!--  <Steps [size]=\"'small'\" [current]=\"1\" *ngFor=\"let item of model.VehordertrackList\">\r\n          <Step [title]=\"Finished\" [description]=\"'This is description'\">我们</Step>\r\n          <Step [title]=\"'In Progress'\" [description]=\"'This is description'\"></Step>\r\n          <Step [title]=\"'Waiting'\" [description]=\"'This is description'\"></Step>\r\n        </Steps> -->\r\n       <ion-row *ngIf=\"model.VehordertrackList.length==0\">\r\n          <ion-col>\r\n            <div class=\"ionattbody\">\r\n              当前无记录\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-list>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/saleing/mc-vehorder.com/detail/detail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/saleing/mc-vehorder.com/detail/detail.module.ts ***!
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
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/saleing/mc-vehorder.com/detail/detail.page.ts");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/fesm2015/ng-zorro-antd-mobile.js");







//import { NzTimelineModule } from 'ng-zorro-antd/timeline';

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
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            //NzTimelineModule,
            ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdMobileModule"]
        ],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
    })
], DetailPageModule);



/***/ }),

/***/ "./src/app/saleing/mc-vehorder.com/detail/detail.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/saleing/mc-vehorder.com/detail/detail.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVpbmcvbWMtdmVob3JkZXIuY29tL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/saleing/mc-vehorder.com/detail/detail.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/saleing/mc-vehorder.com/detail/detail.page.ts ***!
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
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! silly-datetime */ "./node_modules/silly-datetime/dest/index.js");
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(silly_datetime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../saleing.ser/optionset.service */ "./src/app/saleing/saleing.ser/optionset.service.ts");






let DetailPage = class DetailPage {
    constructor(_http, _page, activeRoute, optionset) {
        this._http = _http;
        this._page = _page;
        this.activeRoute = activeRoute;
        this.optionset = optionset;
        this.tab = "baseinfo";
        this.model = {
            apiUrlInfo: '/api/vehorder/GetVehorderDetail',
            data: {
                mcs_code: "",
                mcs_vehorderid: "",
                mcs_mallordercode: "",
                mcs_shopcode: "",
                mcs_orderon: "",
                mcs_ordersource: "",
                mcs_stockvin: "",
                mcs_deliveryvin: "",
                mcs_deliveryon: "",
                mcs_stdprice: "",
                mcs_totalamount: "",
                mcs_receiptamount: "",
                mcs_earnest: "",
                mcs_paydepositon: "",
                mcs_contactname: "",
                mcs_contactphone: "",
                mcs_idcard: "",
                mcs_contactid: "",
                mcs_approvalstatus: "",
                mcs_approvaler: "",
                mcs_msg: "",
                mcs_approvalon2: "",
                mcs_cancelorderon: "",
                mcs_canceldesc: "" //取消原因
            },
            VehordertrackList: [],
            RightitemuseList: []
        };
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params) => {
            if (params['id'] != null && params['id'] != undefined) {
                this.model.data.mcs_vehorderid = params['id'];
                this.pageOnBind(params['id']);
            }
        });
    }
    //加载厅店整车订单详情
    pageOnBind(id) {
        //debugger;
        this._page.loadingShow();
        this._http.get(this.model.apiUrlInfo, {
            params: {
                mcs_vehorderid: this.model.data.mcs_vehorderid,
            }
        }, (res) => {
            //debugger;
            //绑定基本信息
            if (res.VehorderInfo !== null) {
                this.model.data.mcs_code = res["VehorderInfo"]["Attributes"]["mcs_code"];
                this.model.data.mcs_mallordercode = res["VehorderInfo"]["Attributes"]["mcs_mallordercode"];
                this.model.data.mcs_shopcode = res["VehorderInfo"]["Attributes"]["mcs_shopcode"];
                this.model.data.mcs_orderon = this.FormatToDateTime(res["VehorderInfo"]["Attributes"]["mcs_orderon"]);
                this.model.data.mcs_ordersource = res["VehorderInfo"]["Attributes"]["mcs_ordersource"];
                this.model.data.mcs_stockvin = res["VehorderInfo"]["Attributes"]["_mcs_stockvin_value@OData.Community.Display.V1.FormattedValue"];
                this.model.data.mcs_deliveryvin = res["VehorderInfo"]["Attributes"]["_mcs_deliveryvin_value@OData.Community.Display.V1.FormattedValue"];
                this.model.data.mcs_deliveryon = this.FormatToDateTime(res["VehorderInfo"]["Attributes"]["mcs_deliveryon"]);
                this.model.data.mcs_stdprice = res["VehorderInfo"]["Attributes"]["mcs_stdprice"];
                this.model.data.mcs_totalamount = res["VehorderInfo"]["Attributes"]["mcs_totalamount"];
                this.model.data.mcs_receiptamount = res["VehorderInfo"]["Attributes"]["mcs_receiptamount"];
                this.model.data.mcs_earnest = res["VehorderInfo"]["Attributes"]["mcs_earnest"];
                this.model.data.mcs_paydepositon = this.FormatToDateTime(res["VehorderInfo"]["Attributes"]["mcs_paydepositon"]);
                this.model.data.mcs_contactname = res["VehorderInfo"]["Attributes"]["mcs_contactname"];
                this.model.data.mcs_contactphone = res["VehorderInfo"]["Attributes"]["mcs_contactphone"];
                this.model.data.mcs_idcard = res["VehorderInfo"]["Attributes"]["mcs_idcard"];
                this.model.data.mcs_contactid = res["VehorderInfo"]["Attributes"]["mcs_contactid"];
                this.model.data.mcs_approvalstatus = this.optionset.GetOptionSetNameByValue("mcs_approvalstatus", res["VehorderInfo"]["Attributes"]["mcs_approvalstatus"]);
                this.model.data.mcs_approvaler = res["VehorderInfo"]["Attributes"]["_mcs_approvaler_value@OData.Community.Display.V1.FormattedValue"];
                this.model.data.mcs_msg = res["VehorderInfo"]["Attributes"]["mcs_msg"];
                this.model.data.mcs_approvalon2 = this.FormatToDateTime(res["VehorderInfo"]["Attributes"]["mcs_approvalon2"]);
                this.model.data.mcs_cancelorderon = this.FormatToDateTime(res["VehorderInfo"]["Attributes"]["mcs_cancelorderon"]);
                this.model.data.mcs_canceldesc = res["VehorderInfo"]["Attributes"]["mcs_canceldesc"];
            }
            //绑定订单透明化状态跟踪
            if (res.Vehordertrack != null) {
                for (var key in res.Vehordertrack) {
                    var obj = {};
                    obj["mcs_optionon"] = this.FormatToDateTime(res.Vehordertrack[key]["Attributes"]["mcs_optionon"]);
                    obj["mcs_rostatus"] = this.optionset.GetOptionSetNameByValue("mcs_rostatus", res.Vehordertrack[key]["Attributes"]["mcs_rostatus"]);
                    this.model.VehordertrackList.push(obj);
                }
            }
            //绑定权益项
            if (res.Rightitemuse != null) {
                for (var key in res.Rightitemuse) {
                    var obj = {};
                    obj["mcs_name"] = res.Rightitemuse[key]["Attributes"]["mcs_name"];
                    obj["mcs_code"] = res.Rightitemuse[key]["Attributes"]["mcs_code"];
                    obj["mcs_amount"] = res.Rightitemuse[key]["Attributes"]["mcs_amount"];
                    this.model.RightitemuseList.push(obj);
                }
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
        });
    }
    FormatToDateTime(date) {
        if (date != null && date != undefined) {
            return silly_datetime__WEBPACK_IMPORTED_MODULE_4___default.a.format(date, 'YYYY-MM-DD');
        }
        else {
            return '';
        }
    }
};
DetailPage.ctorParameters = () => [
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__["OptionSetService"] }
];
DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: __webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/mc-vehorder.com/detail/detail.page.html"),
        styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/saleing/mc-vehorder.com/detail/detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__["OptionSetService"]])
], DetailPage);



/***/ })

}]);
//# sourceMappingURL=saleing-mc-vehorder-com-detail-detail-module-es2015.js.map