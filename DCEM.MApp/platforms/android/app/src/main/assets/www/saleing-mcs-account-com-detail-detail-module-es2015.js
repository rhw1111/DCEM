(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-mcs-account-com-detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-account.com/detail/detail.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/mcs-account.com/detail/detail.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"返回\" defaultHref=\"/saleing/account/list\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>销售机会详情</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-segment [(ngModel)]=\"tab\">\n      <ion-segment-button value=\"info\">\n        <ion-label>基础信息</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"logcall\" (click)=\"LogcallTabLoading()\">\n        <ion-label>联络记录</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"activity\">\n        <ion-label>培育任务</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]=\"tab\">\n    <div *ngSwitchCase=\"'info'\">\n      <ion-item-group>\n        <ion-item-divider color=\"primary\">\n          <ion-label>客户信息</ion-label>\n        </ion-item-divider>\n        <ion-item>\n          <ion-label>\n            <h2>机会编号</h2>\n          </ion-label>\n          <ion-note slot=\"end\">\n            <p>{{this.mod.data.Account.accountnumber}}</p>\n          </ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2>状态</h2>\n          </ion-label>\n          <ion-note slot=\"end\">\n            <p>{{this.mod.data.Account.mcs_customerstatusname}}</p>\n          </ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2>姓名</h2>\n          </ion-label>\n          <ion-note slot=\"end\">\n            <p>{{this.mod.data.Account.name}}</p>\n          </ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2>手机号</h2>\n          </ion-label>\n          <ion-note slot=\"end\">\n            <p>{{this.mod.data.Account.mcs_mobilephone}}</p>\n          </ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2>称呼</h2>\n          </ion-label>\n          <ion-note slot=\"end\">\n            <p>{{this.mod.data.Account.mcs_gender}}</p>\n          </ion-note>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>\n            <h2>引荐车主</h2>\n          </ion-label>\n          <ion-note slot=\"end\">\n            <p>{{this.mod.data.Account.mcs_introducecarowner}}</p>\n          </ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2>小订单号</h2>\n          </ion-label>\n          <ion-note slot=\"end\">\n            <p>{{this.mod.data.Account.mcs_smallorderid}}</p>\n          </ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2>大订单号</h2>\n          </ion-label>\n          <ion-note slot=\"end\">\n            <p>{{this.mod.data.Account.mcs_tc_order}}</p>\n          </ion-note>\n        </ion-item>\n      </ion-item-group>\n      <ion-item-group>\n        <ion-item-divider color=\"primary\">\n          <ion-label>购车意向</ion-label>\n        </ion-item-divider>\n        <ion-item>\n          <ion-label>\n            <h2>意向等级</h2>\n          </ion-label>\n          <ion-note slot=\"end\">\n            <p>{{this.mod.data.Account.mcs_level}}</p>\n          </ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2>预测成交日期</h2>\n          </ion-label>\n          <ion-note slot=\"end\">\n            <p>{{this.mod.data.Account.mcs_estimatedtransactiondate}}</p>\n          </ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2>意向颜色</h2>\n          </ion-label>\n          <ion-note slot=\"end\">\n            <p>{{this.mod.data.Account.mcs_vehcolorid}}</p>\n          </ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2>意向车型</h2>\n          </ion-label>\n          <ion-note slot=\"end\">\n            <p>{{this.mod.data.Account.mcs_vehtypeid}}</p>\n          </ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2>购车用途</h2>\n          </ion-label>\n          <ion-note slot=\"end\">\n            <p>{{this.mod.data.Account.mcs_purchasepurpose}}</p>\n          </ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2>车辆使用人</h2>\n          </ion-label>\n          <ion-note slot=\"end\">\n            <p>{{this.mod.data.Account.mcs_vehicleusers}}</p>\n          </ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2>购车关注</h2>\n          </ion-label>\n          <ion-note slot=\"end\">\n            <p>{{this.mod.data.Account.mcs_carattention}}</p>\n          </ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2>年龄段</h2>\n          </ion-label>\n          <ion-note slot=\"end\">\n            <p>{{this.mod.data.Account.mcs_generation}}</p>\n          </ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2>购买方式</h2>\n          </ion-label>\n          <ion-note slot=\"end\">\n            <p>{{this.mod.data.Account.mcs_purchaseway}}</p>\n          </ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2>竞品车型</h2>\n          </ion-label>\n          <ion-note slot=\"end\">\n            <p>{{this.mod.data.Account.mcs_competingtype}}</p>\n          </ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2>关注原因</h2>\n          </ion-label>\n          <ion-note slot=\"end\">\n            <p>{{this.mod.data.Account.mcs_carereason}}</p>\n          </ion-note>\n        </ion-item>\n\n      </ion-item-group>\n      <ion-item-group>\n        <ion-item-divider color=\"primary\">\n          <ion-label>特殊备注</ion-label>\n        </ion-item-divider>\n        <ion-item detail>\n          <ion-label>\n            {{this.mod.data.Account.description}}\n          </ion-label>\n        </ion-item>\n      </ion-item-group>\n\n    </div>\n    <div *ngSwitchCase=\"'logcall'\">\n      <ion-list lines=\"full\">\n        <ion-item *ngFor=\"let item of mod.LogcallModel.list\" [routerLink]=\"['/saleing/account/detail']\"\n          [queryParams]=\"{id:item.Id}\">\n          <ion-icon slot=\"start\" name=\"call\" size=\"large\"></ion-icon>\n          <ion-label>\n            <h3>{{item.mcs_name}}</h3>\n            <p>{{item.mcs_content}}</p>\n          </ion-label>\n          <ion-note slot=\"end\">\n            {{item.mcs_visittime}}\n          </ion-note>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div *ngSwitchCase=\"'activity'\">\n      <ion-list>\n        <ion-item *ngFor=\"let item of mod.ActivityModel.list\" [routerLink]=\"['/saleing/account/detail']\"\n          [queryParams]=\"{id:item.Id}\">\n          <ion-icon slot=\"start\" name=\"logo-whatsapp\" size=\"large\"></ion-icon>\n          <ion-label>\n            <h3>{{item.mcs_name}}</h3>\n            <p></p>\n          </ion-label>\n          <ion-note slot=\"end\">\n\n          </ion-note>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n\n  <ion-label *ngIf=\"ionInfiniteScroll.disabled\" text-center>\n      <p>\n        没有更多的记录显示啦\n      </p>\n  </ion-label>\n  <ion-infinite-scroll (ionInfinite)=\"DownLoadLogcall()\">\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载更多...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  <ion-fab *ngIf=\"tab=='info'\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"arrow-dropup\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button *ngIf=\"mod.data.Account.mcs_customerstatus<4\" title=\"成交\" color=\"success\">\n        成交\n      </ion-fab-button>\n      <ion-fab-button *ngIf=\"mod.data.Account.mcs_customerstatus<4\" title=\"战败\" color=\"danger\">\n        战败\n      </ion-fab-button>\n      <ion-fab-button color=\"warning\" [routerLink]=\"['/saleing/account/edit']\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n  <ion-fab *ngIf=\"tab=='logcall'\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button [routerLink]=\"['/saleing/logcall/edit']\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab *ngIf=\"tab=='activity'\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button [routerLink]=\"['/saleing/activity/edit']\" color=\"danger\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/base/base.ser/dateformat.ts":
/*!*********************************************!*\
  !*** ./src/app/base/base.ser/dateformat.ts ***!
  \*********************************************/
/*! exports provided: Dateformat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dateformat", function() { return Dateformat; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! silly-datetime */ "./node_modules/silly-datetime/dest/index.js");
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(silly_datetime__WEBPACK_IMPORTED_MODULE_2__);



let Dateformat = 
/*
日期时间格式化处理
*/
class Dateformat {
    FormatToDate(date) {
        if (date != null && date != undefined) {
            return silly_datetime__WEBPACK_IMPORTED_MODULE_2___default.a.format(date, 'YYYY-MM-DD');
        }
        else {
            return '--';
        }
    }
    FormatToDateTime(date) {
        if (date != null && date != undefined) {
            return silly_datetime__WEBPACK_IMPORTED_MODULE_2___default.a.format(date, 'YYYY-MM-DD hh:mm:ss');
        }
        else {
            return '--';
        }
    }
};
Dateformat = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
    /*
    日期时间格式化处理
    */
], Dateformat);



/***/ }),

/***/ "./src/app/saleing/mcs-account.com/detail/detail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/saleing/mcs-account.com/detail/detail.module.ts ***!
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
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/saleing/mcs-account.com/detail/detail.page.ts");







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

/***/ "./src/app/saleing/mcs-account.com/detail/detail.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/saleing/mcs-account.com/detail/detail.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVpbmcvbWNzLWFjY291bnQuY29tL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/saleing/mcs-account.com/detail/detail.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/saleing/mcs-account.com/detail/detail.page.ts ***!
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
/* harmony import */ var _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../saleing.ser/optionset.service */ "./src/app/saleing/saleing.ser/optionset.service.ts");
/* harmony import */ var _base_base_ser_dateformat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../base/base.ser/dateformat */ "./src/app/base/base.ser/dateformat.ts");
/* harmony import */ var _base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../base/base.ser/logininfo.storage */ "./src/app/base/base.ser/logininfo.storage.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








let DetailPage = class DetailPage {
    constructor(_http, _page, activeRoute, optionset, dateformat, userInfo) {
        this._http = _http;
        this._page = _page;
        this.activeRoute = activeRoute;
        this.optionset = optionset;
        this.dateformat = dateformat;
        this.userInfo = userInfo;
        this.tab = "info";
        this.mod = {
            apiUrl: '/Api/account/GetDetail',
            LogcallModel: {
                apiUrl: '/api/only-lead/GetLogCallList',
                list: [],
                isending: false,
                page: 1,
                pageSize: 10,
                sort: ''
            },
            ActivityModel: {
                list: [],
                page: 1,
                pageSize: 10,
                sort: ''
            },
            data: {
                Account: {
                    Id: "",
                    name: "",
                    accountnumber: "",
                    mcs_cityid: "",
                    mcs_consultantid: "",
                    mcs_contactid: "",
                    mcs_countryid: "",
                    mcs_cultivatetaskid: "",
                    mcs_customerid: "",
                    mcs_dealerid: "",
                    mcs_districtid: "",
                    mcs_mediaid: "",
                    mcs_onlyleadid: "",
                    mcs_productid: "",
                    mcs_provinceid: "",
                    mcs_singleperson: "",
                    mcs_smallorderid: "",
                    mcs_storemanagerid: "",
                    mcs_tc_order: "",
                    mcs_vehcolorid: "",
                    mcs_vehorderid: "",
                    mcs_vehtypeid: "",
                    mcs_address: "",
                    mcs_areacode: "",
                    mcs_business: "",
                    mcs_carattention: "",
                    mcs_company: "",
                    mcs_competingtype: "",
                    mcs_faxareacode: "",
                    mcs_firstappoint: "",
                    mcs_firstname: "",
                    mcs_hobby: "",
                    mcs_homeaddress: "",
                    mcs_identitycard: "",
                    mcs_introducecarowner: "",
                    mcs_jobtitle: "",
                    mcs_lastname: "",
                    mcs_mobilephone: "",
                    mcs_mobilephonemask: "",
                    mcs_ordernumber: "",
                    mcs_qq: "",
                    mcs_stagename: "",
                    mcs_taxcode: "",
                    mcs_updatekey: "",
                    mcs_userid: "",
                    mcs_weibo: "",
                    mcs_weixin: "",
                    mcs_workaddress: "",
                    mcs_zipcode: "",
                    mcs_topic: "",
                    mcs_donotsms: "",
                    mcs_donotweibo: "",
                    mcs_donotweixin: "",
                    mcs_drivefinished: "",
                    mcs_assigneddeadline: "",
                    mcs_birthdate: "",
                    mcs_estimatedtransactiondate: "",
                    mcs_accountpoints: 0,
                    mcs_arrival: 0,
                    mcs_blindorderpaymentstatus: 0,
                    mcs_carereason: -1,
                    mcs_channel: 0,
                    mcs_constellation: 0,
                    mcs_contactlevel: 0,
                    mcs_customerstatusname: "",
                    mcs_customerstatus: 0,
                    mcs_depositpaymentstatus: 0,
                    mcs_gender: 0,
                    mcs_generation: 0,
                    mcs_idtype: 0,
                    mcs_ishavechildren: 0,
                    mcs_ismarry: -1,
                    mcs_level: -1,
                    mcs_purchasepurpose: 0,
                    mcs_purchaseway: 0,
                    mcs_religion: 0,
                    mcs_salesopportunitytype: 0,
                    mcs_salestype: 0,
                    mcs_vehicleusers: 0,
                    mcs_familymembernum: 0,
                    description: "",
                }
            }
        };
        this.activeRoute.queryParams.subscribe((params) => {
            if (params['id'] != null && params['id'] != undefined) {
                this.mod.data.Account.Id = params['id'];
            }
        });
    }
    ngOnInit() {
        this.mod.LogcallModel.list = [];
        this.mod.LogcallModel.page = 1;
        this.BindInfo(this.mod.data.Account.Id);
    }
    //绑定数据
    BindInfo(id) {
        this._page.loadingShow();
        this._http.get(this.mod.apiUrl, {
            params: {
                id: id,
            }
        }, (res) => {
            if (res != null) {
                //初始化字段值
                this.mod.data.Account.name = res["Attributes"]["name"];
                this.mod.data.Account.accountnumber = res["Attributes"]["accountnumber"];
                //this.mod.data.Account.mcs_cityid = res["Attributes"]["_mcs_cityid_value@OData.Community.Display.V1.FormattedValue"];//市
                //this.mod.data.Account.mcs_consultantid = res["Attributes"]["_mcs_consultantid_value@OData.Community.Display.V1.FormattedValue"];//门店体验顾问
                //this.mod.data.Account.mcs_contactid = res["Attributes"]["_mcs_contactid_value@OData.Community.Display.V1.FormattedValue"];//潜客
                //this.mod.data.Account.mcs_countryid = res["Attributes"]["_mcs_countryid_value@OData.Community.Display.V1.FormattedValue"];//国家
                //this.mod.data.Account.mcs_cultivatetaskid = res["Attributes"]["_mcs_cultivatetaskid_value@OData.Community.Display.V1.FormattedValue"];//培育任务
                //this.mod.data.Account.mcs_customerid = res["Attributes"]["_mcs_customerid_value@OData.Community.Display.V1.FormattedValue"];//主机厂销售机会
                //this.mod.data.Account.mcs_dealerid = res["Attributes"]["_mcs_dealerid_value@OData.Community.Display.V1.FormattedValue"];//所属厅/店
                //this.mod.data.Account.mcs_districtid = res["Attributes"]["_mcs_districtid_value@OData.Community.Display.V1.FormattedValue"];//区
                // this.mod.data.Account.mcs_mediaid = res["Attributes"]["_mcs_mediaid_value@OData.Community.Display.V1.FormattedValue"];//线索媒体
                this.mod.data.Account.mcs_onlyleadid = res["Attributes"]["_mcs_onlyleadid_value"]; //唯一线索
                // this.mod.data.Account.mcs_productid = res["Attributes"]["_mcs_productid_value@OData.Community.Display.V1.FormattedValue"];//产品
                // this.mod.data.Account.mcs_provinceid = res["Attributes"]["_mcs_provinceid_value@OData.Community.Display.V1.FormattedValue"];//省
                this.mod.data.Account.mcs_singleperson = res["Attributes"]["_mcs_singleperson_value@OData.Community.Display.V1.FormattedValue"]; //成单人
                this.mod.data.Account.mcs_smallorderid = res["Attributes"]["_mcs_smallorderid_value@OData.Community.Display.V1.FormattedValue"]; //小订记录
                this.mod.data.Account.mcs_storemanagerid = res["Attributes"]["_mcs_storemanagerid_value@OData.Community.Display.V1.FormattedValue"]; //店长
                this.mod.data.Account.mcs_tc_order = res["Attributes"]["_mcs_tc_order_value@OData.Community.Display.V1.FormattedValue"]; //商品综合订单
                this.mod.data.Account.mcs_vehcolorid = res["Attributes"]["_mcs_vehcolorid_value@OData.Community.Display.V1.FormattedValue"]; //意向颜色
                this.mod.data.Account.mcs_vehorderid = res["Attributes"]["_mcs_vehorderid_value@OData.Community.Display.V1.FormattedValue"]; //整车订单
                this.mod.data.Account.mcs_vehtypeid = res["Attributes"]["_mcs_vehtypeid_value@OData.Community.Display.V1.FormattedValue"]; //意向车型
                // this.mod.data.Account.mcs_address = res["Attributes"]["mcs_address"];//身份证所在地
                // this.mod.data.Account.mcs_areacode = res["Attributes"]["mcs_areacode"];//办公电话区号
                // this.mod.data.Account.mcs_business = res["Attributes"]["mcs_business"];//单位联系人手机
                this.mod.data.Account.mcs_carattention = res["Attributes"]["mcs_carattention"]; //购车关注
                // this.mod.data.Account.mcs_company = res["Attributes"]["mcs_company"];//单位名称
                this.mod.data.Account.mcs_competingtype = res["Attributes"]["mcs_competingtype"]; //竞品车型
                // this.mod.data.Account.mcs_faxareacode = res["Attributes"]["mcs_faxareacode"];//传真区号
                // this.mod.data.Account.mcs_firstappoint = res["Attributes"]["mcs_firstappoint"];//初始跟进人
                // this.mod.data.Account.mcs_firstname = res["Attributes"]["mcs_firstname"];//名
                // this.mod.data.Account.mcs_hobby = res["Attributes"]["mcs_hobby"];//兴趣爱好
                // this.mod.data.Account.mcs_homeaddress = res["Attributes"]["mcs_homeaddress"];//家庭地址
                // this.mod.data.Account.mcs_identitycard = res["Attributes"]["mcs_identitycard"];//证件号码
                this.mod.data.Account.mcs_introducecarowner = res["Attributes"]["mcs_introducecarowner"]; //引荐车主
                // this.mod.data.Account.mcs_jobtitle = res["Attributes"]["mcs_jobtitle"];//职务
                // this.mod.data.Account.mcs_lastname = res["Attributes"]["mcs_lastname"];//姓
                this.mod.data.Account.mcs_mobilephone = res["Attributes"]["mcs_mobilephone"]; //手机号码
                //this.mod.data.Account.mcs_mobilephonemask = res["Attributes"]["mcs_mobilephonemask"];//手机号码(Mask)
                //this.mod.data.Account.mcs_ordernumber = res["Attributes"]["mcs_ordernumber"];//订单编号
                // this.mod.data.Account.mcs_qq = res["Attributes"]["mcs_qq"];//QQ
                // this.mod.data.Account.mcs_stagename = res["Attributes"]["mcs_stagename"];//阶段名称
                // this.mod.data.Account.mcs_taxcode = res["Attributes"]["mcs_taxcode"];//单位税务号
                // this.mod.data.Account.mcs_updatekey = res["Attributes"]["mcs_updatekey"];//updatekey
                // this.mod.data.Account.mcs_userid = res["Attributes"]["mcs_userid"];//渠道用户ID
                // this.mod.data.Account.mcs_weibo = res["Attributes"]["mcs_weibo"];//微博
                // this.mod.data.Account.mcs_weixin = res["Attributes"]["mcs_weixin"];//微信
                // this.mod.data.Account.mcs_workaddress = res["Attributes"]["mcs_workaddress"];//工作地址
                // this.mod.data.Account.mcs_zipcode = res["Attributes"]["mcs_zipcode"];//邮编
                // this.mod.data.Account.mcs_topic = res["Attributes"]["mcs_topic"];//主题
                // this.mod.data.Account.mcs_donotsms = res["Attributes"]["mcs_donotsms"];//允许短信
                // this.mod.data.Account.mcs_donotweibo = res["Attributes"]["mcs_donotweibo"];//允许微博
                // this.mod.data.Account.mcs_donotweixin = res["Attributes"]["mcs_donotweixin"];//允许微信
                // this.mod.data.Account.mcs_drivefinished = res["Attributes"]["mcs_drivefinished"];//试乘试驾已完成
                // this.mod.data.Account.mcs_assigneddeadline = res["Attributes"]["mcs_assigneddeadline"];//分派期限
                // this.mod.data.Account.mcs_birthdate = res["Attributes"]["mcs_birthdate"];//生日
                this.mod.data.Account.mcs_estimatedtransactiondate = this.dateformat.FormatToDate(res["Attributes"]["mcs_estimatedtransactiondate"]); //预测成交日期
                // this.mod.data.Account.mcs_accountpoints = res["Attributes"]["mcs_accountpoints"];//评分
                // this.mod.data.Account.mcs_arrival = res["Attributes"]["mcs_arrival"];//到店情况
                // this.mod.data.Account.mcs_blindorderpaymentstatus = res["Attributes"]["mcs_blindorderpaymentstatus"];//定金支付状态
                this.mod.data.Account.mcs_carereason = this.optionset.GetOptionSetNameByValue("mcs_carereason", res["Attributes"]["mcs_carereason"]); //关注原因
                //this.mod.data.Account.mcs_channel = res["Attributes"]["mcs_channel"];//渠道
                //this.mod.data.Account.mcs_constellation = res["Attributes"]["mcs_constellation"];//星座
                //this.mod.data.Account.mcs_contactlevel = this.optionset.GetOptionSetNameByValue("mcs_level",res["Attributes"]["mcs_contactlevel"]);//客户级别
                this.mod.data.Account.mcs_customerstatus = res["Attributes"]["mcs_customerstatus"]; //销售机会状态
                this.mod.data.Account.mcs_customerstatusname = this.optionset.GetOptionSetNameByValue("mcs_customerstatus", res["Attributes"]["mcs_customerstatus"]); //销售机会状态名称
                this.mod.data.Account.mcs_depositpaymentstatus = res["Attributes"]["mcs_depositpaymentstatus"]; //定金支付状态
                this.mod.data.Account.mcs_gender = this.optionset.GetOptionSetNameByValue("mcs_gender", res["Attributes"]["mcs_gender"]); //称呼
                this.mod.data.Account.mcs_generation = this.optionset.GetOptionSetNameByValue("mcs_generation", res["Attributes"]["mcs_generation"]); //年龄段
                this.mod.data.Account.mcs_idtype = res["Attributes"]["mcs_idtype"]; //证件类型
                //this.mod.data.Account.mcs_ishavechildren = this.optionset.GetOptionSetNameByValue("towoption",res["Attributes"]["mcs_ishavechildren"]);//是否有子女
                //this.mod.data.Account.mcs_ismarry = this.optionset.GetOptionSetNameByValue("mcs_ismarry",res["Attributes"]["mcs_ismarry"]);//婚姻状态
                this.mod.data.Account.mcs_level = this.optionset.GetOptionSetNameByValue("mcs_level", res["Attributes"]["mcs_level"]); //意向等级
                this.mod.data.Account.mcs_purchasepurpose = this.optionset.GetOptionSetNameByValue("mcs_purchasepurpose", res["Attributes"]["mcs_purchasepurpose"]); //购买用途
                this.mod.data.Account.mcs_purchaseway = this.optionset.GetOptionSetNameByValue("mcs_purchaseway", res["Attributes"]["mcs_purchaseway"]); //购买方式
                //this.mod.data.Account.mcs_religion = this.optionset.GetOptionSetNameByValue("mcs_religion",res["Attributes"]["mcs_religion"]);//宗教信仰
                //this.mod.data.Account.mcs_salesopportunitytype = this.optionset.GetOptionSetNameByValue("mcs_salesopportunitytype",res["Attributes"]["mcs_salesopportunitytype"]);//下发类型
                //this.mod.data.Account.mcs_salestype = this.optionset.GetOptionSetNameByValue("mcs_salestype",res["Attributes"]["mcs_salestype"]);//销售类型
                this.mod.data.Account.mcs_vehicleusers = this.optionset.GetOptionSetNameByValue("mcs_vehicleusers", res["Attributes"]["mcs_vehicleusers"]); //车辆使用人
                this.mod.data.Account.mcs_familymembernum = res["Attributes"]["mcs_familymembernum"]; //家庭成员数量    
                this.mod.data.Account.description = res["Attributes"]["description"]; //特殊备注           
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
        });
    }
    LogcallTabLoading() {
        this.mod.LogcallModel.list = [];
        this.mod.LogcallModel.page = 1;
        this.ionInfiniteScroll.disabled = false;
        this.ionContent.scrollToTop(0);
        this.LoadLogcall();
    }
    //下拉事件
    DownLoadLogcall() {
        this.mod.LogcallModel.page += 1;
        this.LoadLogcall();
    }
    /**
     * 加载logcall记录
     */
    LoadLogcall() {
        this._page.loadingShow();
        this._http.get(this.mod.LogcallModel.apiUrl, {
            params: {
                entityid: this.mod.data.Account.mcs_onlyleadid,
                page: this.mod.LogcallModel.page,
                pageSize: this.mod.LogcallModel.pageSize,
                sort: this.mod.LogcallModel.sort,
                systemuserid: this.userInfo.GetSystemUserId() //当前登录用户ID
            }
        }, (res) => {
            if (res != null) {
                if (res.Results.length > 0) {
                    res.Results.forEach(item => {
                        var value = item["Attributes"];
                        this.mod.LogcallModel.list.push({
                            "Id": value.mcs_logcallid,
                            "mcs_name": value.mcs_name,
                            "mcs_visittime": this.dateformat.FormatToDateTime(value.mcs_visittime),
                            "mcs_content": value.mcs_content,
                            "mcs_results": value.mcs_results //结果备注
                        });
                    });
                }
                this.ionInfiniteScroll.complete();
                //判断是否有新数据
                if (res.Results.length < this.mod.LogcallModel.pageSize) {
                    this.ionInfiniteScroll.disabled = true;
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_4__["OptionSetService"] },
    { type: _base_base_ser_dateformat__WEBPACK_IMPORTED_MODULE_5__["Dateformat"] },
    { type: _base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_6__["Storage_LoginInfo"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"])
], DetailPage.prototype, "ionContent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInfiniteScroll"], null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInfiniteScroll"])
], DetailPage.prototype, "ionInfiniteScroll", void 0);
DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: __webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-account.com/detail/detail.page.html"),
        styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/saleing/mcs-account.com/detail/detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_4__["OptionSetService"],
        _base_base_ser_dateformat__WEBPACK_IMPORTED_MODULE_5__["Dateformat"],
        _base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_6__["Storage_LoginInfo"]])
], DetailPage);



/***/ })

}]);
//# sourceMappingURL=saleing-mcs-account-com-detail-detail-module-es2015.js.map