(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-mcs-account-com-detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-account.com/detail/detail.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/mcs-account.com/detail/detail.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/saleing/account/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>销售机会详情</ion-title>\r\n    </ion-toolbar>\r\n\r\n    <ion-toolbar>\r\n        <ion-segment [(ngModel)]=\"tab\">\r\n            <ion-segment-button value=\"info\">\r\n                <ion-label>基础信息</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"logcall\" (click)=\"LogcallTabLoading()\">\r\n                <ion-label>联络记录</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"activity\" (click)=\"LoadActivitylist()\">\r\n                <ion-label>培育任务</ion-label>\r\n            </ion-segment-button>\r\n        </ion-segment>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div [ngSwitch]=\"tab\">\r\n        <div *ngSwitchCase=\"'info'\">\r\n            <ion-item-group>\r\n                <ion-item-divider color=\"primary\">\r\n                    <ion-label>客户信息</ion-label>\r\n                </ion-item-divider>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>机会编号</h2>\r\n                    </ion-label>\r\n                    <ion-note slot=\"end\">\r\n                        <p>{{this.mod.data.Account.accountnumber}}</p>\r\n                    </ion-note>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>状态</h2>\r\n                    </ion-label>\r\n                    <ion-note slot=\"end\">\r\n                        <p>{{this.mod.data.Account.mcs_customerstatusname}}</p>\r\n                    </ion-note>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>姓名</h2>\r\n                    </ion-label>\r\n                    <ion-note slot=\"end\">\r\n                        <p>{{this.mod.data.Account.name}}</p>\r\n                    </ion-note>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>手机号</h2>\r\n                    </ion-label>\r\n                    <ion-note slot=\"end\">\r\n                        <p>{{this.mod.data.Account.mcs_mobilephone}}</p>\r\n                    </ion-note>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>称呼</h2>\r\n                    </ion-label>\r\n                    <ion-note slot=\"end\">\r\n                        <p>{{this.mod.data.Account.mcs_gender}}</p>\r\n                    </ion-note>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>引荐车主</h2>\r\n                    </ion-label>\r\n                    <ion-note slot=\"end\">\r\n                        <p>{{this.mod.data.Account.mcs_introducecarowner}}</p>\r\n                    </ion-note>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>小订单号</h2>\r\n                    </ion-label>\r\n                    <ion-note slot=\"end\">\r\n                        <p>{{this.mod.data.Account.mcs_smallorderid}}</p>\r\n                    </ion-note>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>大订单号</h2>\r\n                    </ion-label>\r\n                    <ion-note slot=\"end\">\r\n                        <p>{{this.mod.data.Account.mcs_tc_order}}</p>\r\n                    </ion-note>\r\n                </ion-item>\r\n            </ion-item-group>\r\n            <ion-item-group>\r\n                <ion-item-divider color=\"primary\">\r\n                    <ion-label>购车意向</ion-label>\r\n                </ion-item-divider>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>意向等级</h2>\r\n                    </ion-label>\r\n                    <ion-note slot=\"end\">\r\n                        <p>{{this.mod.data.Account.mcs_level}}</p>\r\n                    </ion-note>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>预测成交日期</h2>\r\n                    </ion-label>\r\n                    <ion-note slot=\"end\">\r\n                        <p>{{this.mod.data.Account.mcs_estimatedtransactiondate}}</p>\r\n                    </ion-note>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>意向颜色</h2>\r\n                    </ion-label>\r\n                    <ion-note slot=\"end\">\r\n                        <p>{{this.mod.data.Account.mcs_vehcolorid}}</p>\r\n                    </ion-note>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>意向车型</h2>\r\n                    </ion-label>\r\n                    <ion-note slot=\"end\">\r\n                        <p>{{this.mod.data.Account.mcs_vehtypeid}}</p>\r\n                    </ion-note>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>购车用途</h2>\r\n                    </ion-label>\r\n                    <ion-note slot=\"end\">\r\n                        <p>{{this.mod.data.Account.mcs_purchasepurpose}}</p>\r\n                    </ion-note>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>车辆使用人</h2>\r\n                    </ion-label>\r\n                    <ion-note slot=\"end\">\r\n                        <p>{{this.mod.data.Account.mcs_vehicleusers}}</p>\r\n                    </ion-note>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>购车关注</h2>\r\n                    </ion-label>\r\n                    <ion-note slot=\"end\">\r\n                        <p>{{this.mod.data.Account.mcs_carattention}}</p>\r\n                    </ion-note>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>年龄段</h2>\r\n                    </ion-label>\r\n                    <ion-note slot=\"end\">\r\n                        <p>{{this.mod.data.Account.mcs_generation}}</p>\r\n                    </ion-note>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>购买方式</h2>\r\n                    </ion-label>\r\n                    <ion-note slot=\"end\">\r\n                        <p>{{this.mod.data.Account.mcs_purchaseway}}</p>\r\n                    </ion-note>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>竞品车型</h2>\r\n                    </ion-label>\r\n                    <ion-note slot=\"end\">\r\n                        <p>{{this.mod.data.Account.mcs_competingtype}}</p>\r\n                    </ion-note>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>关注原因</h2>\r\n                    </ion-label>\r\n                    <ion-note slot=\"end\">\r\n                        <p>{{this.mod.data.Account.mcs_carereason}}</p>\r\n                    </ion-note>\r\n                </ion-item>\r\n\r\n            </ion-item-group>\r\n            <ion-item-group>\r\n                <ion-item-divider color=\"primary\">\r\n                    <ion-label>特殊备注</ion-label>\r\n                </ion-item-divider>\r\n                <ion-item detail>\r\n                    <ion-label>\r\n                        {{this.mod.data.Account.description}}\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-item-group>\r\n\r\n        </div>\r\n        <div *ngSwitchCase=\"'logcall'\">\r\n            <ion-list lines=\"full\">\r\n                <ion-item *ngFor=\"let item of mod.LogcallModel.list\" [routerLink]=\"['/saleing/account/detail']\"\r\n                          [queryParams]=\"{id:item.Id}\">\r\n                    <ion-icon slot=\"start\" name=\"call\" size=\"large\"></ion-icon>\r\n                    <ion-label>\r\n                        <h3>{{item.mcs_name}}</h3>\r\n                        <p>{{item.mcs_content}}</p>\r\n                    </ion-label>\r\n                    <ion-note slot=\"end\">\r\n                        {{item.mcs_visittime}}\r\n                    </ion-note>\r\n                </ion-item>\r\n            </ion-list>\r\n\r\n            <ion-label *ngIf=\"tab!='info' && ionInfiniteScroll.disabled\" text-center>\r\n                <p>\r\n                    没有更多的记录显示啦\r\n                </p>\r\n            </ion-label>\r\n            <ion-infinite-scroll (ionInfinite)=\"DownLoadLogcall()\">\r\n                <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载更多...\">\r\n                </ion-infinite-scroll-content>\r\n            </ion-infinite-scroll>\r\n        </div>\r\n        <div *ngSwitchCase=\"'activity'\">\r\n            <ion-list>\r\n             <ion-item-sliding *ngFor=\"let item of mod.ActivityModel.list\" >\r\n                <ion-item >     \r\n                    <ion-icon slot=\"start\" name=\"logo-whatsapp\" size=\"large\"></ion-icon>\r\n                    <ion-label>\r\n                            <h2>跟进时间：{{item.createdon}}</h2>                                          \r\n                            <p>任务状态：{{item.mcs_activitystatus}}</p>      \r\n                            <p>重要级别：{{item.mcs_importantlevel}}</p>      \r\n                            <p>本次跟进内容：{{item.mcs_thisfollowupcontent}}</p>              \r\n                        </ion-label>\r\n                </ion-item>\r\n                <ion-item-options side=\"end\">\r\n                        <ion-item-option color=\"tertiary\" [routerLink]=\"['/saleing/cultivatetask/edit']\" [queryParams]=\"{id:item.mcs_activityid}\">\r\n                            编辑\r\n                        </ion-item-option>               \r\n                </ion-item-options>\r\n            </ion-item-sliding>\r\n            <ion-row *ngIf=\"mod.ActivityModel.list.length==0\">\r\n                    <ion-col>\r\n                      <div class=\"ionattbody\">\r\n                         没有更多的记录显示啦 \r\n                      </div>\r\n                    </ion-col>  \r\n                  </ion-row>\r\n\r\n            </ion-list>\r\n\r\n            <ion-infinite-scroll (ionInfinite)=\"DownLoadLogcall()\">\r\n                <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载更多...\">\r\n                </ion-infinite-scroll-content>\r\n            </ion-infinite-scroll>\r\n        </div>\r\n    </div>\r\n\r\n    <ion-fab *ngIf=\"tab=='info'\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button>\r\n            <ion-icon name=\"arrow-dropup\"></ion-icon>\r\n        </ion-fab-button>\r\n        <ion-fab-list side=\"top\">\r\n            <ion-fab-button *ngIf=\"mod.data.Account.mcs_customerstatus==1\" title=\"分配\" color=\"success\" (click)=\"Assign()\">\r\n                分配\r\n            </ion-fab-button>\r\n            <ion-fab-button *ngIf=\"mod.data.Account.mcs_customerstatus<4\" title=\"成交\" color=\"success\" (click)=\"Success()\">\r\n                成交\r\n            </ion-fab-button>\r\n            <ion-fab-button *ngIf=\"mod.data.Account.mcs_customerstatus<4\" title=\"战败\" color=\"danger\" (click)=\"Failed()\">\r\n                战败\r\n            </ion-fab-button>\r\n            <ion-fab-button color=\"warning\" [routerLink]=\"['/saleing/account/edit']\" [queryParams]=\"{id:mod.data.Account.Id,actionCode:2}\"><ion-icon name=\"create\"></ion-icon></ion-fab-button>\r\n        </ion-fab-list>\r\n    </ion-fab>\r\n    <ion-fab *ngIf=\"tab=='logcall'\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button [routerLink]=\"['/saleing/contactrecord/edit']\" [queryParams]=\"{id:mod.data.Account.mcs_onlyleadid}\">\r\n            <ion-icon name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n    <ion-fab *ngIf=\"tab=='activity'\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button [routerLink]=\"['/saleing/activity/edit']\" color=\"danger\">\r\n            <ion-icon name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! silly-datetime */ "./node_modules/silly-datetime/dest/index.js");
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(silly_datetime__WEBPACK_IMPORTED_MODULE_2__);



var Dateformat = /** @class */ (function () {
    /*
    日期时间格式化处理
    */
    function Dateformat() {
    }
    Dateformat.prototype.FormatToDate = function (date) {
        if (date != null && date != undefined) {
            return silly_datetime__WEBPACK_IMPORTED_MODULE_2___default.a.format(date, 'YYYY-MM-DD');
        }
        else {
            return '--';
        }
    };
    Dateformat.prototype.FormatToDateTime = function (date) {
        if (date != null && date != undefined) {
            return silly_datetime__WEBPACK_IMPORTED_MODULE_2___default.a.format(date, 'YYYY-MM-DD hh:mm:ss');
        }
        else {
            return '--';
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
    return Dateformat;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/saleing/mcs-account.com/detail/detail.page.ts");







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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../saleing.ser/optionset.service */ "./src/app/saleing/saleing.ser/optionset.service.ts");
/* harmony import */ var _base_base_ser_dateformat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../base/base.ser/dateformat */ "./src/app/base/base.ser/dateformat.ts");
/* harmony import */ var _base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../base/base.ser/logininfo.storage */ "./src/app/base/base.ser/logininfo.storage.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var app_base_base_ser_components_select_systemuser_select_systemuser_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/base/base.ser/components/select-systemuser/select-systemuser.component */ "./src/app/base/base.ser/components/select-systemuser/select-systemuser.component.ts");










var DetailPage = /** @class */ (function () {
    function DetailPage(_http, _page, activeRoute, optionset, dateformat, userInfo, modalCtrl) {
        var _this = this;
        this._http = _http;
        this._page = _page;
        this.activeRoute = activeRoute;
        this.optionset = optionset;
        this.dateformat = dateformat;
        this.userInfo = userInfo;
        this.modalCtrl = modalCtrl;
        this.tab = "info";
        this.mod = {
            apiUrl: '/Api/account/GetDetail',
            postUrl: '/Api/account/AddOrEdit',
            LogcallModel: {
                apiUrl: '/api/only-lead/GetLogCallList',
                list: [],
                isending: false,
                page: 1,
                pageSize: 10,
                sort: ''
            },
            ActivityModel: {
                apiUrl: '/api/only-lead/GetActivityList',
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
        this.activeRoute.queryParams.subscribe(function (params) {
            if (params['id'] != null && params['id'] != undefined) {
                _this.mod.data.Account.Id = params['id'];
            }
        });
    }
    DetailPage.prototype.ngOnInit = function () {
        this.mod.LogcallModel.list = [];
        this.mod.LogcallModel.page = 1;
        this.BindInfo(this.mod.data.Account.Id);
    };
    //绑定数据
    DetailPage.prototype.BindInfo = function (id) {
        var _this = this;
        //this.ionInfiniteScroll.disabled=true;
        this._page.loadingShow();
        this._http.get(this.mod.apiUrl, {
            params: {
                id: id,
            }
        }, function (res) {
            if (res != null) {
                //初始化字段值
                _this.mod.data.Account.name = res["Attributes"]["name"];
                _this.mod.data.Account.accountnumber = res["Attributes"]["accountnumber"];
                _this.mod.data.Account.mcs_onlyleadid = res["Attributes"]["_mcs_onlyleadid_value"]; //唯一线索
                _this.mod.data.Account.mcs_singleperson = res["Attributes"]["_mcs_singleperson_value@OData.Community.Display.V1.FormattedValue"]; //成单人
                _this.mod.data.Account.mcs_smallorderid = res["Attributes"]["_mcs_smallorderid_value@OData.Community.Display.V1.FormattedValue"]; //小订记录
                _this.mod.data.Account.mcs_storemanagerid = res["Attributes"]["_mcs_storemanagerid_value@OData.Community.Display.V1.FormattedValue"]; //店长
                _this.mod.data.Account.mcs_tc_order = res["Attributes"]["_mcs_tc_order_value@OData.Community.Display.V1.FormattedValue"]; //商品综合订单
                _this.mod.data.Account.mcs_vehcolorid = res["Attributes"]["_mcs_vehcolorid_value@OData.Community.Display.V1.FormattedValue"]; //意向颜色
                _this.mod.data.Account.mcs_vehorderid = res["Attributes"]["_mcs_vehorderid_value@OData.Community.Display.V1.FormattedValue"]; //整车订单
                _this.mod.data.Account.mcs_vehtypeid = res["Attributes"]["_mcs_vehtypeid_value@OData.Community.Display.V1.FormattedValue"]; //意向车型
                _this.mod.data.Account.mcs_carattention = res["Attributes"]["mcs_carattention"]; //购车关注
                _this.mod.data.Account.mcs_competingtype = res["Attributes"]["mcs_competingtype"]; //竞品车型
                _this.mod.data.Account.mcs_introducecarowner = res["Attributes"]["mcs_introducecarowner"]; //引荐车主
                _this.mod.data.Account.mcs_mobilephone = res["Attributes"]["mcs_mobilephone"]; //手机号码
                _this.mod.data.Account.mcs_estimatedtransactiondate = _this.dateformat.FormatToDate(res["Attributes"]["mcs_estimatedtransactiondate"]); //预测成交日期
                _this.mod.data.Account.mcs_carereason = _this.optionset.GetOptionSetNameByValue("mcs_carereason", res["Attributes"]["mcs_carereason"]); //关注原因
                _this.mod.data.Account.mcs_customerstatus = res["Attributes"]["mcs_customerstatus"]; //销售机会状态
                _this.mod.data.Account.mcs_customerstatusname = _this.optionset.GetOptionSetNameByValue("mcs_customerstatus", res["Attributes"]["mcs_customerstatus"]); //销售机会状态名称
                _this.mod.data.Account.mcs_depositpaymentstatus = res["Attributes"]["mcs_depositpaymentstatus"]; //定金支付状态
                _this.mod.data.Account.mcs_gender = _this.optionset.GetOptionSetNameByValue("mcs_gender", res["Attributes"]["mcs_gender"]); //称呼
                _this.mod.data.Account.mcs_generation = _this.optionset.GetOptionSetNameByValue("mcs_generation", res["Attributes"]["mcs_generation"]); //年龄段
                _this.mod.data.Account.mcs_idtype = res["Attributes"]["mcs_idtype"]; //证件类型
                _this.mod.data.Account.mcs_level = _this.optionset.GetOptionSetNameByValue("mcs_level", res["Attributes"]["mcs_level"]); //意向等级
                _this.mod.data.Account.mcs_purchasepurpose = _this.optionset.GetOptionSetNameByValue("mcs_purchasepurpose", res["Attributes"]["mcs_purchasepurpose"]); //购买用途
                _this.mod.data.Account.mcs_purchaseway = _this.optionset.GetOptionSetNameByValue("mcs_purchaseway", res["Attributes"]["mcs_purchaseway"]); //购买方式
                _this.mod.data.Account.mcs_vehicleusers = _this.optionset.GetOptionSetNameByValue("mcs_vehicleusers", res["Attributes"]["mcs_vehicleusers"]); //车辆使用人
                _this.mod.data.Account.mcs_familymembernum = res["Attributes"]["mcs_familymembernum"]; //家庭成员数量    
                _this.mod.data.Account.description = res["Attributes"]["description"]; //特殊备注           
            }
            _this._page.loadingHide();
        }, function (err) {
            _this._page.alert("消息提示", "数据加载异常");
            _this._page.loadingHide();
        });
    };
    DetailPage.prototype.LogcallTabLoading = function () {
        this.mod.LogcallModel.list = [];
        this.mod.LogcallModel.page = 1;
        //this.ionInfiniteScroll.disabled=false;
        this.ionContent.scrollToTop(0);
        this.LoadLogcall();
    };
    //下拉事件
    DetailPage.prototype.DownLoadLogcall = function () {
        this.mod.LogcallModel.page += 1;
        this.LoadLogcall();
    };
    //战败
    DetailPage.prototype.Failed = function () {
        var _this = this;
        this._page.confirm("确认提示", "您确认要战败此销售机会吗？", function () {
            var postData = {
                Id: _this.mod.data.Account.Id,
                mcs_customerstatus: _this.optionset.GetOptionSetValueByName("mcs_customerstatus", "已战败")
            };
            _this.UpdateOrEdit(postData, "已战败！", "战败失败！");
        });
    };
    //成交
    DetailPage.prototype.Success = function () {
        var _this = this;
        this._page.confirm("确认提示", "您确认要成交此销售机会吗？", function () {
            var options = _this.optionset.Get("mcs_customerstatus");
            var postData = {
                Id: _this.mod.data.Account.Id,
                mcs_customerstatus: _this.optionset.GetOptionSetValueByName("mcs_customerstatus", "已成交")
            };
            _this.UpdateOrEdit(postData, "已成交！", "成交失败！");
        });
    };
    //分配
    DetailPage.prototype.Assign = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data, postData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: app_base_base_ser_components_select_systemuser_select_systemuser_component__WEBPACK_IMPORTED_MODULE_8__["SelectSystemuserComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (data != null && data != undefined) {
                            if (data.Id != "" && data.Id != undefined) {
                                postData = {
                                    Id: this.mod.data.Account.Id,
                                    mcs_customerstatus: this.optionset.GetOptionSetValueByName("mcs_customerstatus", "已指派"),
                                    ownerid: data.Id
                                };
                                this.UpdateOrEdit(postData, "分配成功！", "分配失败！");
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //创建或更新实体数据
    DetailPage.prototype.UpdateOrEdit = function (postData, successMessage, errorMessage, redirectUrl) {
        var _this = this;
        if (redirectUrl === void 0) { redirectUrl = ""; }
        this._page.loadingShow();
        //数据验证
        this._http.post(this.mod.postUrl, postData, function (res) {
            if (res != "") {
                _this._page.alert("消息提示", successMessage);
                _this.mod.data.Account.mcs_customerstatus = postData.mcs_customerstatus;
                _this.mod.data.Account.mcs_customerstatusname = _this.optionset.GetOptionSetNameByValue("mcs_customerstatus", postData.mcs_customerstatus);
                if (redirectUrl !== null && redirectUrl !== "" && redirectUrl !== undefined) {
                    _this._page.goto(redirectUrl, { guid: res });
                }
            }
            else {
                _this._page.alert("消息提示", errorMessage);
            }
            _this._page.loadingHide();
        }, function (err) {
            debugger;
            _this._page.alert("消息提示", "请求异常");
            _this._page.loadingHide();
        });
    };
    /**
     * 加载logcall记录
     */
    DetailPage.prototype.LoadLogcall = function () {
        var _this = this;
        this._page.loadingShow();
        this._http.get(this.mod.LogcallModel.apiUrl, {
            params: {
                entityid: this.mod.data.Account.mcs_onlyleadid,
                page: this.mod.LogcallModel.page,
                pageSize: this.mod.LogcallModel.pageSize,
                sort: this.mod.LogcallModel.sort,
                systemuserid: this.userInfo.GetSystemUserId() //当前登录用户ID
            }
        }, function (res) {
            if (res != null) {
                if (res.Results.length > 0) {
                    res.Results.forEach(function (item) {
                        var value = item["Attributes"];
                        _this.mod.LogcallModel.list.push({
                            "Id": value.mcs_logcallid,
                            "mcs_name": value.mcs_name,
                            "mcs_visittime": _this.dateformat.FormatToDateTime(value.mcs_visittime),
                            "mcs_content": value.mcs_content,
                            "mcs_results": value.mcs_results //结果备注
                        });
                    });
                }
                // this.ionInfiniteScroll.complete();
                // //判断是否有新数据
                // if (res.Results.length < this.mod.LogcallModel.pageSize) {
                //   this.ionInfiniteScroll.disabled = true;
                // }
            }
            _this._page.loadingHide();
        }, function (err) {
            _this._page.alert("消息提示", "数据加载异常");
            _this._page.loadingHide();
        });
    };
    //加载培育任务列表
    DetailPage.prototype.LoadActivitylist = function () {
        var _this = this;
        this.mod.ActivityModel.list = [];
        this._page.loadingShow();
        this._http.get(this.mod.ActivityModel.apiUrl, {
            params: {
                entityid: this.mod.data.Account.mcs_onlyleadid,
                sort: this.mod.ActivityModel.sort,
                pageSize: this.mod.ActivityModel.pageSize,
                page: this.mod.ActivityModel.page,
                systemuserid: this.userInfo.GetSystemUserId() //当前登录用户ID
            }
        }, function (res) {
            debugger;
            if (res !== null) {
                if (res.Results !== null) {
                    for (var key in res.Results) {
                        var obj = {};
                        obj["mcs_thisfollowupcontent"] = res.Results[key]["Attributes"]["mcs_thisfollowupcontent"];
                        obj["createdon"] = _this.dateformat.FormatToDateTime(res.Results[key]["Attributes"]["createdon"]);
                        obj["mcs_activitystatus"] = _this.optionset.GetOptionSetNameByValue("mcs_activitystatus", res.Results[key]["Attributes"]["mcs_activitystatus"]);
                        obj["mcs_importantlevel"] = _this.optionset.GetOptionSetNameByValue("mcs_importantlevel", res.Results[key]["Attributes"]["mcs_importantlevel"]);
                        obj["mcs_activityid"] = res.Results[key]["Attributes"]["mcs_activityid"];
                        _this.mod.ActivityModel.list.push(obj);
                    }
                    //console.log(res);
                } //判断是否有新数据
                // if (res.Results.length == 0) {
                //     this.mod.isending2 = true;
                // }
            }
            else {
                _this._page.alert("消息提示", "联络记录加载异常");
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
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_4__["OptionSetService"] },
        { type: _base_base_ser_dateformat__WEBPACK_IMPORTED_MODULE_5__["Dateformat"] },
        { type: _base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_6__["Storage_LoginInfo"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
    ]; };
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
            _base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_6__["Storage_LoginInfo"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]])
    ], DetailPage);
    return DetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=saleing-mcs-account-com-detail-detail-module-es5.js.map