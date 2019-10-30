(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-mc-reservation-com-detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/mc-reservation.com/detail/detail.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/mc-reservation.com/detail/detail.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/reservation/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>预约单详情</ion-title>\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n            <ion-segment [(ngModel)]=\"tab\" color=\"danger\">\r\n                <ion-segment-button value=\"infolist\">\r\n                    <ion-label>基础信息</ion-label>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"loglist\">\r\n                <ion-label>跟进记录</ion-label>\r\n            </ion-segment-button>\r\n            </ion-segment>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div [ngSwitch]=\"tab\">\r\n    <div *ngSwitchCase=\"'infolist'\">\r\n        <ion-list lines=\"full\">\r\n            <ion-item-divider>\r\n                <ion-label>\r\n                    车主信息\r\n                </ion-label>\r\n            </ion-item-divider>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>\r\n                        姓名\r\n                    </h2>\r\n                    <span>{{SetDefaultValue(model.infolist.mcs_customername)}}</span>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>\r\n                        手机号\r\n                    </h2>\r\n                    <span>{{SetDefaultValue(model.infolist.mcs_customerphone)}}</span>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>\r\n                        客户标签\r\n                    </h2>\r\n                    <span>{{SetDefaultValue(model.infolist.mcs_tag)}}</span>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>\r\n                        VIN\r\n                    </h2>\r\n                    <span>{{SetDefaultValue(model.infolist.mcs_vin)}}</span>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>\r\n                        发动机号\r\n                    </h2>\r\n                    <span>{{SetDefaultValue(model.infolist.mcs_enginennumber)}}</span>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>\r\n                        车型\r\n                    </h2>\r\n                    <span>{{SetDefaultValue(model.infolist.mcs_cartype)}}</span>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>\r\n                        下次保养日期\r\n                    </h2>\r\n                    <span>{{FormatToDate(model.infolist.mcs_nextmaintainat)}}</span>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>\r\n                        下次保养里程\r\n                    </h2>\r\n                    <span>{{SetDefaultValue(model.infolist.mcs_nextmaintainmileage)}}</span>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item-divider>\r\n                <ion-label>\r\n                    预约信息\r\n                </ion-label>\r\n            </ion-item-divider>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>\r\n                        预约单号\r\n                    </h2>\r\n                    <span>{{SetDefaultValue(model.infolist.mcs_name)}}</span>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>\r\n                        服务类型\r\n                    </h2>\r\n                    <span *ngIf=\"model.infolist.mcs_ordertype==10\"> 汽车美容</span>\r\n                    <span *ngIf=\"model.infolist.mcs_ordertype==20\"> 钣金喷漆</span>\r\n                    <span *ngIf=\"model.infolist.mcs_ordertype==30\"> 常规保养</span>\r\n                    <span *ngIf=\"model.infolist.mcs_ordertype==40\"> 一般维修</span>\r\n                    <span *ngIf=\"model.infolist.mcs_ordertype==50\"> 保修</span>\r\n                    <span *ngIf=\"model.infolist.mcs_ordertype==60\"> 其他</span>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>\r\n                        预约时间\r\n                    </h2>\r\n                    <span>{{FormatToDate(model.infolist.mcs_appointmentat)}}&nbsp;{{model.infolist.mcs_appointmentconfigid}}</span>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>\r\n                        状态\r\n                    </h2>\r\n                    <span *ngIf=\"model.infolist.mcs_status==10\">待跟进</span>\r\n                    <span *ngIf=\"model.infolist.mcs_status==20\">已跟进</span>\r\n                    <span *ngIf=\"model.infolist.mcs_status==30\"> 已入场</span>\r\n                    <span *ngIf=\"model.infolist.mcs_status==50\"> 已取消</span>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>\r\n                        客户要求\r\n                    </h2>\r\n                    <span>{{SetDefaultValue(model.infolist.mcs_customercomment)}}</span>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>\r\n                        问题描述\r\n                    </h2>\r\n                    <span>{{SetDefaultValue(model.infolist.mcs_appointmendescript)}}</span>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>\r\n                        取消原因\r\n                    </h2>\r\n                    <span>{{SetDefaultValue(model.infolist.mcs_cancelreasonnew)}}</span>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>\r\n                        取消备注\r\n                    </h2>\r\n                    <span>{{SetDefaultValue(model.infolist.mcs_canceldes)}}</span>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-list>\r\n    </div>\r\n    <div *ngSwitchCase=\"'loglist'\">\r\n        <!--<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"下拉刷新\" refreshingSpinner=\"circles\" refreshingText=\"刷新中...\">\r\n        </ion-refresher-content>\r\n    </ion-refresher>-->\r\n        <ion-list lines=\"full\" *ngFor=\"let r of model.datalist\">\r\n            <ion-item>\r\n                <ion-label>\r\n                    <p>跟进人：{{r.createdby}}</p>\r\n                    <p>跟进内容：{{r.mcs_remark}}</p>\r\n                    <p>跟进时间：{{FormatToDateTime(r.createdon)}}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-list>\r\n        <ion-row *ngIf=\"model.isending\">\r\n            <ion-col class=\"nodata\" text-center>\r\n                没有更多跟进\r\n            </ion-col>\r\n        </ion-row>\r\n    </div>\r\n    </div>\r\n        <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n            <ion-fab-button [routerLink]=\"['/serving/reservation/edit']\">\r\n                <ion-icon name=\"add\"></ion-icon>\r\n            </ion-fab-button>\r\n        </ion-fab>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/silly-datetime/dest/index.js":
/*!***************************************************!*\
  !*** ./node_modules/silly-datetime/dest/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 将输入的任意对象转换成 Date，如果装换失败将返回当前时间
 * @param  {any} datetime 需要被格式化的时间
 * @return {Date}         转换好的 Date
 */
function getDateObject(datetime) {
  var t = datetime instanceof Date ? datetime : new Date(datetime);
  if (!t.getDate()) {
    t = new Date();
  }
  return t;
}

/**
 * 格式化时间
 * @param  {Date}   datetime  需要被格式化的时间
 * @param  {string} formatStr 格式化字符串，默认为 'YYYY-MM-DD HH:mm:ss'
 * @return {string}           格式化后的时间字符串
 */
function format(datetime, formatStr) {
  var t = getDateObject(datetime);
  var hours = undefined,
      o = undefined,
      i = 0;
  formatStr = formatStr || 'YYYY-MM-DD HH:mm:ss';
  hours = t.getHours();
  o = [['M+', t.getMonth() + 1], ['D+', t.getDate()],
  // H 24小时制
  ['H+', hours],
  // h 12小时制
  ['h+', hours > 12 ? hours - 12 : hours], ['m+', t.getMinutes()], ['s+', t.getSeconds()]];
  // 替换 Y
  if (/(Y+)/.test(formatStr)) {
    formatStr = formatStr.replace(RegExp.$1, (t.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  // 替换 M, D, H, h, m, s
  for (; i < o.length; i++) {
    if (new RegExp('(' + o[i][0] + ')').test(formatStr)) {
      formatStr = formatStr.replace(RegExp.$1, RegExp.$1.length === 1 ? o[i][1] : ('00' + o[i][1]).substr(('' + o[i][1]).length));
    }
  }
  // 替换 a/A 为 am, pm
  return formatStr.replace(/a/ig, hours > 11 ? 'pm' : 'am');
}

/**
 * CONST and VAR for .fromNow
 */
// 预设语言：英语
var LOCALE_EN = {
  future: 'in %s',
  past: '%s ago',
  s: 'a few seconds',
  mm: '%s minutes',
  hh: '%s hours',
  dd: '%s days',
  MM: '%s months',
  yy: '%s years'
};
// 预设语言：简体中文
var LOCALE_ZH_CN = {
  future: '%s内',
  past: '%s前',
  s: '几秒',
  mm: '%s分钟',
  hh: '%s小时',
  dd: '%s天',
  MM: '%s月',
  yy: '%s年'
};
// 当前本地化语言对象
var _curentLocale = undefined;

/**
 * 修改本地化语言
 * @param  {string|Object}   string: 预设语言 `zh-cn` 或 `en`；Object: 自定义 locate 对象
 */
function locate(arg) {
  var newLocale = undefined,
      prop = undefined;
  if (typeof arg === 'string') {
    newLocale = arg === 'zh-cn' ? LOCALE_ZH_CN : LOCALE_EN;
  } else {
    newLocale = arg;
  }
  if (!_curentLocale) {
    _curentLocale = {};
  }
  for (prop in newLocale) {
    if (newLocale.hasOwnProperty(prop) && typeof newLocale[prop] === 'string') {
      _curentLocale[prop] = newLocale[prop];
    }
  }
}

/**
 * CONST for .fromNow
 */
// 各计算区间
var DET_STD = [['yy', 31536e6], // 1000 * 60 * 60 * 24 * 365 一年月按 365 天算
['MM', 2592e6], // 1000 * 60 * 60 * 24 * 30 一个月按 30 天算
['dd', 864e5], // 1000 * 60 * 60 * 24
['hh', 36e5], // 1000 * 60 * 60
['mm', 6e4], // 1000 * 60
['s', 0]];

/**
 * 计算给出时间和当前时间的时间距离
 * @param  {Date}   datetime 需要计算的时间
 * @return {string}          时间距离
 */
// 只要大于等于 0 都是秒
function fromNow(datetime) {
  if (!_curentLocale) {
    // 初始化本地化语言为 en
    locate('');
  }
  var det = +new Date() - +getDateObject(datetime);
  var format = undefined,
      str = undefined,
      i = 0,
      detDef = undefined,
      detDefVal = undefined;
  if (det < 0) {
    format = _curentLocale.future;
    det = -det;
  } else {
    format = _curentLocale.past;
  }
  for (; i < DET_STD.length; i++) {
    detDef = DET_STD[i];
    detDefVal = detDef[1];
    if (det >= detDefVal) {
      str = _curentLocale[detDef[0]].replace('%s', parseInt(det / detDefVal, 0) || 1);
      break;
    }
  }
  return format.replace('%s', str);
}

exports.format = format;
exports.locate = locate;
exports.fromNow = fromNow;

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

module.exports = "ion-content ion-list ion-item ion-label h2 {\n  float: left; }\n\nion-content ion-list ion-item ion-label span {\n  float: right; }\n\nion-content ion-list ion-item ion-label div p {\n  padding-left: 5px;\n  font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmluZy9tYy1yZXNlcnZhdGlvbi5jb20vZGV0YWlsL0U6XFxBcHBQcm9qZWN0XFxEQ0VNXFxEQ0VNLk1BcHAvc3JjXFxhcHBcXHNlcnZpbmdcXG1jLXJlc2VydmF0aW9uLmNvbVxcZGV0YWlsXFxkZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS29CLFdBQVcsRUFBQTs7QUFML0I7RUFTb0IsWUFBWSxFQUFBOztBQVRoQztFQWN3QixpQkFBaUI7RUFDakIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VydmluZy9tYy1yZXNlcnZhdGlvbi5jb20vZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"

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
                mcs_customername: "",
                mcs_customerphone: "",
                mcs_tag: "",
                mcs_vin: "",
                mcs_enginennumber: "",
                mcs_cartype: "",
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
            //debugger;
            console.log(data.id);
            this.pageOnBind(data.id);
            //this.pageOnlist(data.id);
        });
    }
    pageOnBind(id) {
        this._page.loadingShow();
        this._http.get(this.model.apiUrlDetail, {
            params: {
                entityid: id,
            }
        }, (res) => {
            if (res !== null) {
                this.model.infolist.mcs_customername = res["Attributes"]["mcs_customername"];
                this.model.infolist.mcs_customerphone = res["Attributes"]["mcs_customerphone"];
                this.model.infolist.mcs_tag = res["Attributes"]["mcs_tag"];
                this.model.infolist.mcs_vin = res["Attributes"]["mcs_customerid"]["mcs_name"];
                this.model.infolist.mcs_enginennumber = res["Attributes"]["mcs_enginennumberres"];
                this.model.infolist.mcs_cartype = res["Attributes"]["mcs_cartype"]["mcs_name"];
                this.model.infolist.mcs_nextmaintainat = res["Attributes"]["mcs_nextmaintainat"];
                this.model.infolist.mcs_nextmaintainmileage = res["Attributes"]["mcs_nextmaintainmileage"];
                this.model.infolist.mcs_name = res["Attributes"]["mcs_name"];
                this.model.infolist.mcs_ordertype = res["Attributes"]["mcs_ordertype"];
                this.model.infolist.mcs_appointmentat = res["Attributes"]["mcs_appointmentat"];
                this.model.infolist.mcs_appointmentconfigid = res["Attributes"]["mcs_appointmentconfigid"]["mcs_name"];
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
            //debugger;
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