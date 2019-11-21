(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-mc-reservation-com-detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/mc-reservation.com/detail/detail.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/mc-reservation.com/detail/detail.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/reservation/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>预约单详情</ion-title>\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n        <ion-segment [(ngModel)]=\"tab\" color=\"primary\">\r\n            <ion-segment-button value=\"infolist\">\r\n                <ion-label>基础信息</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"loglist\">\r\n                <ion-label>跟进记录</ion-label>\r\n            </ion-segment-button>\r\n        </ion-segment>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div [ngSwitch]=\"tab\">\r\n        <div *ngSwitchCase=\"'infolist'\">\r\n            <ion-list lines=\"full\">\r\n                <ion-item-divider color=\"primary\">\r\n                    <ion-label>\r\n                        车主信息\r\n                    </ion-label>\r\n                </ion-item-divider>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            姓名\r\n                        </h2>\r\n                        <p>{{SetDefaultValue(model.infolist.mcs_customername)}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            手机号\r\n                        </h2>\r\n                        <p>{{SetDefaultValue(model.infolist.mcs_customerphone)}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            VIN\r\n                        </h2>\r\n                        <p>{{SetDefaultValue(model.infolist.mcs_vin)}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            车牌号\r\n                        </h2>\r\n                        <p>{{SetDefaultValue(model.infolist.mcs_carplate)}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            发动机号\r\n                        </h2>\r\n                        <p>{{SetDefaultValue(model.infolist.mcs_enginennumber)}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            车型\r\n                        </h2>\r\n                        <p>{{SetDefaultValue(model.infolist.mcs_cartype)}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            下次保养日期\r\n                        </h2>\r\n                        <p>{{SetDefaultValue(FormatToDate(model.infolist.mcs_nextmaintainat))}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            下次保养里程\r\n                        </h2>\r\n                        <p>{{SetDefaultValue(model.infolist.mcs_nextmaintainmileage)}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            客户标签\r\n                        </h2>\r\n                        <p>{{SetDefaultValue(model.infolist.mcs_tag)}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item-divider color=\"primary\">\r\n                    <ion-label>\r\n                        预约信息\r\n                    </ion-label>\r\n                </ion-item-divider>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            预约单号\r\n                        </h2>\r\n                        <p>{{SetDefaultValue(model.infolist.mcs_name)}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            服务类型\r\n                        </h2>\r\n                        <p *ngIf=\"model.infolist.mcs_ordertype==10\"> 汽车美容</p>\r\n                        <p *ngIf=\"model.infolist.mcs_ordertype==20\"> 钣金喷漆</p>\r\n                        <p *ngIf=\"model.infolist.mcs_ordertype==30\"> 常规保养</p>\r\n                        <p *ngIf=\"model.infolist.mcs_ordertype==40\"> 一般维修</p>\r\n                        <p *ngIf=\"model.infolist.mcs_ordertype==50\"> 保修</p>\r\n                        <p *ngIf=\"model.infolist.mcs_ordertype==60\"> 其他</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            预约时间\r\n                        </h2>\r\n                        <p>{{FormatToDate(model.infolist.mcs_appointmentat)}}&nbsp;{{model.infolist.mcs_appointmentconfigid}}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            状态\r\n                        </h2>\r\n                        <p *ngIf=\"model.infolist.mcs_status==10\">待跟进</p>\r\n                        <p *ngIf=\"model.infolist.mcs_status==20\">已跟进</p>\r\n                        <p *ngIf=\"model.infolist.mcs_status==30\"> 已入场</p>\r\n                        <p *ngIf=\"model.infolist.mcs_status==50\"> 已取消</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            客户要求\r\n                        </h2>\r\n                        <p>{{SetDefaultValue(model.infolist.mcs_customercomment)}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            问题描述\r\n                        </h2>\r\n                        <p>{{SetDefaultValue(model.infolist.mcs_appointmendescript)}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            取消原因\r\n                        </h2>\r\n                        <p *ngIf=\"model.infolist.mcs_cancelreasonnew==10\">待料</p>\r\n                        <p *ngIf=\"model.infolist.mcs_cancelreasonnew==20\">价格太高</p>\r\n                        <p *ngIf=\"model.infolist.mcs_cancelreasonnew==30\"> 设备不足</p>\r\n                        <p *ngIf=\"model.infolist.mcs_cancelreasonnew==40\"> 堵车</p>\r\n                        <p *ngIf=\"model.infolist.mcs_cancelreasonnew==50\"> 技术不足</p>\r\n                        <p *ngIf=\"model.infolist.mcs_cancelreasonnew==60\"> 天气不好</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            取消备注\r\n                        </h2>\r\n                        <p>{{SetDefaultValue(model.infolist.mcs_canceldes)}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-list>\r\n        </div>\r\n        <div *ngSwitchCase=\"'loglist'\">\r\n            <!--<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n                <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"下拉刷新\" refreshingSpinner=\"circles\" refreshingText=\"刷新中...\">\r\n                </ion-refresher-content>\r\n            </ion-refresher>-->\r\n            <ion-list lines=\"full\">\r\n                <ion-item *ngFor=\"let r of model.datalist\">\r\n                    <ion-label>\r\n                        <p>跟进人：{{r.createdby}}</p>\r\n                        <p>跟进内容：{{r.mcs_remark}}</p>\r\n                        <p>跟进时间：{{FormatToDateTime(r.createdon)}}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-list>\r\n            <ion-row *ngIf=\"model.isending\">\r\n                <ion-col class=\"nodata\" text-center>\r\n                    没有更多跟进\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n    </div>\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button>\r\n            <ion-icon name=\"arrow-dropup\"></ion-icon>\r\n        </ion-fab-button>\r\n        <ion-fab-list side=\"top\">\r\n            <ion-fab-button [routerLink]=\"['/serving/reservation/edit']\" [queryParams]=\"{id:model.infolist.mcs_appointmentinfoid}\"><ion-icon name=\"create\"></ion-icon>编辑</ion-fab-button>\r\n            <ion-fab-button [routerLink]=\"['/serving/reservation/cancel']\" [queryParams]=\"{id:model.infolist.mcs_appointmentinfoid}\"><ion-icon name=\"close\"></ion-icon>取消</ion-fab-button>\r\n            <ion-fab-button [routerLink]=\"['/serving/ri/edit']\" [queryParams]=\"{id:model.infolist.mcs_appointmentinfoid,actionCode:3}\"><ion-icon name=\"add\"></ion-icon>问诊</ion-fab-button>\r\n            <ion-fab-button [routerLink]=\"['/serving/sc/edit']\" [queryParams]=\"{id:model.infolist.mcs_appointmentinfoid,actionCode:3}\"><ion-icon name=\"add\"></ion-icon>委托书</ion-fab-button>\r\n        </ion-fab-list>\r\n    </ion-fab>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/serving/mc-reservation.com/detail/detail.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/serving/mc-reservation.com/detail/detail.module.ts ***!
  \********************************************************************/
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
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/serving/mc-reservation.com/detail/detail.page.ts");







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

/***/ "./src/app/serving/mc-reservation.com/detail/detail.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/serving/mc-reservation.com/detail/detail.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-list ion-item ion-label {\n  /*h2 {\r\n                    float: left;\r\n                }*/\n  /*span {\r\n                    float: right;\r\n                }*/\n  /*div {\r\n                    p {\r\n                        padding-left: 5px;\r\n                        font-size: 15px;\r\n                    }\r\n                }*/ }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmluZy9tYy1yZXNlcnZhdGlvbi5jb20vZGV0YWlsL0U6XFxBcHBQcm9qZWN0XFxEQ0VNXFxEQ0VNLk1BcHAvc3JjXFxhcHBcXHNlcnZpbmdcXG1jLXJlc2VydmF0aW9uLmNvbVxcZGV0YWlsXFxkZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9zZXJ2aW5nL21jLXJlc2VydmF0aW9uLmNvbS9kZXRhaWwvZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlnQjs7a0JDREU7RURLRjs7a0JDRkU7RURNRjs7Ozs7a0JDQUUsRURLQyIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvbWMtcmVzZXJ2YXRpb24uY29tL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIC8qaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgfSovXHJcblxyXG4gICAgICAgICAgICAgICAgLypzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgICAgICAgICAvKmRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgLypoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB9Ki9cbiAgLypzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9Ki9cbiAgLypkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0qLyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/serving/mc-reservation.com/detail/detail.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/serving/mc-reservation.com/detail/detail.page.ts ***!
  \******************************************************************/
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





let DetailPage = class DetailPage {
    constructor(_http, _page, activeRoute) {
        this._http = _http;
        this._page = _page;
        this.activeRoute = activeRoute;
        this.tab = "infolist";
        this.model = {
            name: 'appointmentdetail',
            apiUrlDetail: '/api/appointment-info/GetDetail',
            apiUrlLog: '/api/appointment-info/GetLog',
            infolist: {
                mcs_appointmentinfoid: "",
                mcs_customername: "",
                mcs_customerphone: "",
                mcs_tag: "",
                mcs_vin: "",
                mcs_enginennumber: "",
                mcs_cartype: "",
                mcs_carplate: "",
                mcs_nextmaintainat: "",
                mcs_nextmaintainmileage: "",
                mcs_name: "",
                mcs_ordertype: "",
                mcs_appointmentat: "",
                mcs_appointmentconfigid: "",
                mcs_status: "",
                mcs_customercomment: "",
                mcs_appointmendescript: "",
                mcs_cancelreasonnew: "",
                mcs_canceldes: ""
            },
            datalist: [],
            pageSize: 10,
            page: 1,
            sort: '',
            isending: false,
        };
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((data) => {
            if (data['id'] != null && data['id'] != undefined) {
                console.log("记录Id:" + this.model.infolist.mcs_appointmentinfoid);
                this.model.infolist.mcs_appointmentinfoid = data['id'];
                this.pageOnBind(this.model.infolist.mcs_appointmentinfoid);
            }
        });
    }
    pageOnBind(id) {
        this._page.loadingShow();
        this._http.getForToaken(this.model.apiUrlDetail, {
            "entityid": id,
        }, (res) => {
            if (res !== null) {
                this.model.infolist.mcs_appointmentinfoid = res.Id;
                this.model.infolist.mcs_customername = res["Attributes"]["mcs_customername"];
                this.model.infolist.mcs_customerphone = res["Attributes"]["mcs_customerphone"];
                this.model.infolist.mcs_tag = res["Attributes"]["mcs_tag"];
                this.model.infolist.mcs_carplate = res["Attributes"]["mcs_carplate"];
                this.model.infolist.mcs_vin = res["Attributes"]["mcs_customerid"] != null ? res["Attributes"]["mcs_customerid"]["mcs_name"] : "--";
                this.model.infolist.mcs_enginennumber = res["Attributes"]["mcs_enginennumberres"];
                this.model.infolist.mcs_cartype = res["Attributes"]["mcs_cartype"] != null ? res["Attributes"]["mcs_cartype"]["mcs_name"] : "--";
                this.model.infolist.mcs_nextmaintainat = res["Attributes"]["mcs_nextmaintainat"];
                this.model.infolist.mcs_nextmaintainmileage = res["Attributes"]["mcs_nextmaintainmileage"];
                this.model.infolist.mcs_name = res["Attributes"]["mcs_name"];
                this.model.infolist.mcs_ordertype = res["Attributes"]["mcs_ordertype"];
                this.model.infolist.mcs_appointmentat = res["Attributes"]["mcs_appointmentat"];
                this.model.infolist.mcs_appointmentconfigid = res["Attributes"]["mcs_appointmentconfigid"] != null ? res["Attributes"]["mcs_appointmentconfigid"]["mcs_name"] : null;
                this.model.infolist.mcs_status = res["Attributes"]["mcs_status"];
                this.model.infolist.mcs_customercomment = res["Attributes"]["mcs_customercomment"];
                this.model.infolist.mcs_appointmendescript = res["Attributes"]["mcs_appointmendescript"];
                this.model.infolist.mcs_cancelreasonnew = res["Attributes"]["mcs_cancelreasonnew"];
                this.model.infolist.mcs_canceldes = res["Attributes"]["mcs_canceldes"];
                console.log(res);
            }
            else {
                this._page.alert("消息提示", "预约单加载异常");
            }
            this._page.loadingHide();
            this.pageOnlist(id);
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
        });
    }
    pageOnlist(id) {
        this._page.loadingShow();
        this._http.get(this.model.apiUrlLog, {
            params: {
                entityid: id,
                sort: this.model.sort,
                pageSize: this.model.pageSize,
                page: this.model.page
            }
        }, (res) => {
            if (res !== null) {
                if (res.Results !== null) {
                    for (var key in res.Results) {
                        var obj = {};
                        obj["createdby"] = res.Results[key]["Attributes"]["systemuser_x002e_fullname"];
                        obj["mcs_remark"] = res.Results[key]["Attributes"]["mcs_remark"];
                        obj["createdon"] = res.Results[key]["Attributes"]["createdon"];
                        this.model.datalist.push(obj);
                    }
                    //console.log(res);
                } //判断是否有新数据
                if (res.Results.length == 0) {
                    this.model.isending = true;
                }
            }
            else {
                this._page.alert("消息提示", "预约跟进记录加载异常");
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
        });
    }
    FormatToDate(date) {
        if (date != null && date != undefined) {
            return silly_datetime__WEBPACK_IMPORTED_MODULE_4___default.a.format(date, 'YYYY-MM-DD');
        }
        else {
            return '';
        }
    }
    FormatToDateTime(date) {
        if (date != null && date != undefined) {
            return silly_datetime__WEBPACK_IMPORTED_MODULE_4___default.a.format(date, 'YYYY-MM-DD hh:mm:ss');
        }
        else {
            return '';
        }
    }
    //返回数据为空，默认“--”
    SetDefaultValue(data) {
        if (data == null || data == undefined) {
            return '--';
            ;
        }
        else {
            return data;
        }
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
        template: __webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/mc-reservation.com/detail/detail.page.html"),
        styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/serving/mc-reservation.com/detail/detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], DetailPage);



/***/ })

}]);
//# sourceMappingURL=serving-mc-reservation-com-detail-detail-module-es2015.js.map