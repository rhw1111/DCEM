(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-test-drive-add-test-drive-add-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/test-drive-add/test-drive-add.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/test-drive-add/test-drive-add.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\n        </ion-buttons>\n      <ion-title>创建试乘试驾记录</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content fullscreen>\n    <form (submit)=\"onSubmit()\">\n      <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n            <ion-item>\n              <ion-label>姓名<ion-text color=\"danger\">*</ion-text></ion-label>\n              <ion-input [(ngModel)]=\"CurrentTestDrive.UserName\" id=\"UserName\" name=\"UserName\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>手机号<ion-text color=\"danger\">*</ion-text></ion-label>\n              <ion-input [(ngModel)]=\"CurrentTestDrive.UserPhone\" id=\"UserPhone\" name=\"UserPhone\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>车型<ion-text color=\"danger\">*</ion-text></ion-label>\n              <ion-input [(ngModel)]=\"CurrentTestDrive.CarModel\" id=\"CarModel\" name=\"CarModel\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>试驾日期<ion-text color=\"danger\">*</ion-text></ion-label>\n            <ion-datetime value=\"YYYY-MM-DD\" display-format=\"YYYY-MM-DD\" picker-format=\"YYYY-MM-DD\" placeholder=\"选择日期\"  [(ngModel)]=\"CurrentTestDrive.OrderTime\" id=\"OrderTime\" name=\"OrderTime\"  ></ion-datetime>\n          </ion-item>\n            <ion-item>\n              <ion-label>试驾时间<ion-text color=\"danger\">*</ion-text></ion-label>\n              <ion-datetime value=\"hh:mm\" display-format=\"hh:mm\" picker-format=\"hh:mm\"  placeholder=\"选择时间段\" [(ngModel)]=\"CurrentTestDrive.TestDriveTimeId\" id=\"TestDriveTimeId\" name=\"TestDriveTimeId\"></ion-datetime>\n            </ion-item>\n            \n        <ion-item>\n          <ion-label position=\"stacked\">基本信息</ion-label>\n          <ion-input placeholder=\"省\"></ion-input>\n          <ion-input placeholder=\"市\"></ion-input>\n          <ion-input placeholder=\"区\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">备注</ion-label>\n          <ion-textarea rows=\"8\"></ion-textarea>\n        </ion-item>\n      </ion-list>\n\n      <div class=\"ion-padding\">\n        <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\">创建</ion-button>\n      </div>\n    </form>\n  </ion-content>\n"

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

/***/ "./src/app/demo/test-drive-add/test-drive-add.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo/test-drive-add/test-drive-add.module.ts ***!
  \**************************************************************/
/*! exports provided: TestDriveAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestDriveAddPageModule", function() { return TestDriveAddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _test_drive_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-drive-add.page */ "./src/app/demo/test-drive-add/test-drive-add.page.ts");







var routes = [
    {
        path: '',
        component: _test_drive_add_page__WEBPACK_IMPORTED_MODULE_6__["TestDriveAddPage"]
    }
];
var TestDriveAddPageModule = /** @class */ (function () {
    function TestDriveAddPageModule() {
    }
    TestDriveAddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_test_drive_add_page__WEBPACK_IMPORTED_MODULE_6__["TestDriveAddPage"]]
        })
    ], TestDriveAddPageModule);
    return TestDriveAddPageModule;
}());



/***/ }),

/***/ "./src/app/demo/test-drive-add/test-drive-add.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/demo/test-drive-add/test-drive-add.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdGVzdC1kcml2ZS1hZGQvdGVzdC1kcml2ZS1hZGQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/test-drive-add/test-drive-add.page.ts":
/*!************************************************************!*\
  !*** ./src/app/demo/test-drive-add/test-drive-add.page.ts ***!
  \************************************************************/
/*! exports provided: TestDriveAddPage, TestDriveInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestDriveAddPage", function() { return TestDriveAddPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestDriveInfo", function() { return TestDriveInfo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/base.ser/http-service.service */ "./src/app/base/base.ser/http-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! silly-datetime */ "./node_modules/silly-datetime/dest/index.js");
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(silly_datetime__WEBPACK_IMPORTED_MODULE_4__);





var TestDriveAddPage = /** @class */ (function () {
    function TestDriveAddPage(httpService, navCtrl) {
        this.httpService = httpService;
        this.navCtrl = navCtrl;
        this.CurrentTestDrive = new TestDriveInfo();
    }
    TestDriveAddPage.prototype.ngOnInit = function () {
    };
    TestDriveAddPage.prototype.onSubmit = function () {
        var _this = this;
        var erroMessage = "";
        if (this.CurrentTestDrive.UserName == null || this.CurrentTestDrive.UserName == undefined) {
            erroMessage += "用户名不能为空!\r\n";
        }
        if (this.CurrentTestDrive.UserPhone == null || this.CurrentTestDrive.UserPhone == undefined) {
            erroMessage += "手机号不能为空!\r\n";
        }
        if (this.CurrentTestDrive.CarModel == null || this.CurrentTestDrive.CarModel == undefined) {
            erroMessage += "车型不能为空!\r\n";
        }
        if (this.CurrentTestDrive.OrderTime == null || this.CurrentTestDrive.OrderTime == undefined) {
            erroMessage += "试驾日期不能为空!\r\n";
        }
        if (this.CurrentTestDrive.TestDriveTimeId == null || this.CurrentTestDrive.TestDriveTimeId == undefined) {
            erroMessage += "试驾时间段不能为空!\r\n";
        }
        this.CurrentTestDrive.ID = "";
        this.CurrentTestDrive.Status = 1;
        this.CurrentTestDrive.OrderTime = silly_datetime__WEBPACK_IMPORTED_MODULE_4___default.a.format(this.CurrentTestDrive.OrderTime, 'YYYY-MM-DD');
        if (erroMessage != "") {
            this.httpService.presentToastError(erroMessage);
        }
        else {
            this.httpService.postForToaken("/api/TestDrive/Add", this.CurrentTestDrive, function (res) {
                if (res.success == true) {
                    _this.httpService.presentToastSucess("创建成功！").then(function () {
                        _this.navCtrl.back();
                    });
                }
                else {
                    _this.httpService.presentToastError("创建失败！");
                }
            }, function (err) {
                if (err != null) {
                    if (err.ok == false) {
                        _this.httpService.presentToastError("请求失败！");
                    }
                }
            });
        }
    };
    TestDriveAddPage.ctorParameters = function () { return [
        { type: _base_base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
    ]; };
    TestDriveAddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-drive-add',
            template: __webpack_require__(/*! raw-loader!./test-drive-add.page.html */ "./node_modules/raw-loader/index.js!./src/app/demo/test-drive-add/test-drive-add.page.html"),
            styles: [__webpack_require__(/*! ./test-drive-add.page.scss */ "./src/app/demo/test-drive-add/test-drive-add.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_base_base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], TestDriveAddPage);
    return TestDriveAddPage;
}());

var TestDriveInfo = /** @class */ (function () {
    function TestDriveInfo() {
    }
    return TestDriveInfo;
}());



/***/ })

}]);
//# sourceMappingURL=demo-test-drive-add-test-drive-add-module-es5.js.map