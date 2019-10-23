(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-technical-support-com-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/technical-support.com/list/list.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/technical-support.com/list/list.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"返回\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>技术支持</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n      <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n  <ion-toolbar>\n      <ion-segment>\n          <ion-segment-button checked>\n              <ion-label>全部</ion-label>\n          </ion-segment-button>\n          <ion-segment-button>\n              <ion-label>处理中</ion-label>\n          </ion-segment-button>\n          <ion-segment-button>\n              <ion-label>已完成</ion-label>\n          </ion-segment-button>\n      </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"list_content\" *ngIf=\"!flag\">\n        <ion-list lines=\"full\">\n            <ion-item-divider>\n                <ion-label>\n                    2019-10\n                </ion-label>\n            </ion-item-divider>\n            <ion-item *ngFor=\"let item of dataList\" [routerLink]=\"['/serving/ts/detail']\" [queryParams]=\"{id:item.id}\">\n                <ion-icon slot=\"start\" color=\"primary\" name=\"hammer\" size=\"large\"></ion-icon>\n                <ion-label>\n                    <h2>{{item.mcs_name}}</h2>\n                    <p>施工项目：{{item.mcs_name}}</p>\n                    <p>施工日期：{{FormatToDateTime(mcs_repairdate)}}</p>\n                    <p *ngIf=\"item.mcs_orderstatus==10\">施工状态：未处理</p>\n                    <p *ngIf=\"item.mcs_orderstatus==30\">施工状态：处理中</p>\n                    <p *ngIf=\"item.mcs_orderstatus==40\">施工状态：已关闭</p>\n                    <p *ngIf=\"item.mcs_orderstatus==50\">施工状态：已取消</p>\n                </ion-label>\n            </ion-item>\n            <ion-item-divider></ion-item-divider>\n        </ion-list>\n        <ion-infinite-scroll *ngIf=\"hasInfiniteData\" threshold=\"100px\" (ionInfinite)=\"getList($event)\">\n            <ion-infinite-scroll-content\n              loadingSpinner=\"bubbles\"\n              loadingText=\"努力加载中...\">\n            </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n  \n    </div>\n</ion-content>\n"

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

/***/ "./src/app/serving/technical-support.com/list/list.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/serving/technical-support.com/list/list.module.ts ***!
  \*******************************************************************/
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
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/serving/technical-support.com/list/list.page.ts");







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

/***/ "./src/app/serving/technical-support.com/list/list.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/serving/technical-support.com/list/list.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvdGVjaG5pY2FsLXN1cHBvcnQuY29tL2xpc3QvbGlzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/serving/technical-support.com/list/list.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/serving/technical-support.com/list/list.page.ts ***!
  \*****************************************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../base/base.ser/http-service.service */ "./src/app/base/base.ser/http-service.service.ts");
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! silly-datetime */ "./node_modules/silly-datetime/dest/index.js");
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(silly_datetime__WEBPACK_IMPORTED_MODULE_3__);




var ListPage = /** @class */ (function () {
    function ListPage(httpService) {
        this.httpService = httpService;
        this.dataList = []; //列表数据
        this.page = 1; //分页
        this.sort = ''; //排序的参数
    }
    ListPage.prototype.ngOnInit = function () {
        this.getList(null);
    };
    ListPage.prototype.search = function (name) {
        this.getList(null);
    };
    ListPage.prototype.getList = function (event) {
        var _this = this;
        var api = '/api/tech-support/GetList';
        //this.httpService.ClearDataCache("technicalsupportlist")
        var cachedata = this.httpService.GetDataCache("technicalsupportlist");
        console.log("cachedata:" + cachedata);
        if (cachedata == "") {
            var response = this.httpService.getForToaken(api, null);
            response.subscribe(function (res) {
                _this.dataList = res.data;
                console.log("stringify:" + JSON.stringify(res.data));
                _this.page++;
                event ? event.target.complete() : '';
                //判断是否有新数据
                if (res.data.length < 10) {
                    event ? event.target.disabled = true : "";
                }
                //设置数据存储到本地
                _this.httpService.SetDataCache("technicalsupportlist", JSON.stringify(res.data).toString());
            });
        }
        else {
            this.dataList = JSON.parse(cachedata);
        }
        // this.httpService.ajaxGet(api).then((response:any)=>{
        //   debugger;
        //   console.log(response);
        //   this.dataList=this.dataList.concat(response.result);
        //   this.page++;
        //   event?event.target.complete():'';
        //   //判断是否有新数据
        //   if(response.result.length<10){
        //     event?event.target.disabled=true:"";
        //   }
        // })
    };
    ListPage.prototype.FormatToDate = function (date) {
        return silly_datetime__WEBPACK_IMPORTED_MODULE_3___default.a.format(date, 'YYYY-MM-DD');
    };
    ListPage.prototype.FormatToDateTime = function (date) {
        return silly_datetime__WEBPACK_IMPORTED_MODULE_3___default.a.format(date, 'YYYY-MM-DD hh:mm:ss');
    };
    ListPage.ctorParameters = function () { return [
        { type: _base_base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
    ]; };
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/technical-support.com/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/serving/technical-support.com/list/list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_base_base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=serving-technical-support-com-list-list-module-es5.js.map