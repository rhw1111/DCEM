(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~serving-mc-reservation-com-list-list-module~serving-technical-support-com-list-list-module"],{

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

/***/ "./src/app/base/base.ser/http-service.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/base/base.ser/http-service.service.ts ***!
  \*******************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let HttpService = class HttpService {
    constructor(http, loadingCtrl, toastCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.isLoadingOpen = false;
        this.InterfacePreURL = "";
    }
    postForToaken(url, params, successCallback, errorCallback) {
        // 此处使用的post模式为非严格模式，如果要使用严格模式，请把参数放在第二个位置 覆盖null
        return this.http
            .post(this.getEnvironmentUrl() + url, null, {
            params: this.encodeHttpParams(params),
            headers: this.getHeaders()
        })
            .subscribe((res) => {
            console.log(res);
            this.responseSuccess(res, function (msg) {
                if (successCallback) {
                    successCallback(res, msg);
                }
            });
        }, err => {
            if (errorCallback) {
                errorCallback(err);
            }
        });
    }
    //get数据
    getForToaken(url, params) {
        return this.http.get(this.getEnvironmentUrl() + url, {
            params: this.encodeComplexHttpParams(params),
            headers: this.getHeaders()
        });
    }
    GET(url, params, callback) {
        this.http
            .get(this.getEnvironmentUrl() + url, { params: this.encodeComplexHttpParams(params) })
            .subscribe(res => {
            console.log('get res=' + res);
            callback && callback(res, null);
        }, error => {
            callback && callback(null, error);
        });
    }
    POST(url, params, callback) {
        console.log('POST...');
        this.http.post(this.getEnvironmentUrl() + url, this.encodeComplexHttpParams(params)).subscribe((res) => {
            console.log('POST res=' + res);
            console.log(res);
            callback && callback(res, null);
        }, err => {
            console.log('POST err=');
            console.log(err);
            this.requestFailed(err);
            callback && callback(null, err);
        });
    }
    //对象参数请求
    encodeHttpParams(params) {
        if (!params)
            return null;
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromObject: params });
    }
    //字符串参数封装
    encodeComplexHttpParams(params) {
        if (!params)
            return null;
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromString: params });
    }
    /**
     * 处理响应的事件
     * @param res
     * @param {Function} error
     */
    responseSuccess(res, callback) {
        if (res.code !== '0') {
            // 失败
            if (res.msg) {
                callback({ code: res.code, msg: res.msg });
            }
            else {
                const data = res.datas;
                let errorMsg = res.message;
                if (data != null) {
                    data.map(i => {
                        errorMsg = i.errorMsg + '\n';
                    });
                }
                callback({ code: res.code, msg: errorMsg });
            }
        }
        else {
            callback(res);
        }
    }
    /**
     * 处理请求失败事件
     * @param url
     * @param err
     */
    requestFailed(err) {
        let msg = '请求发生异常';
        const status = err.status;
        console.log('status=' + status);
        if (status === 0) {
            msg = '请求失败，请求响应出错';
        }
        else if (status === 404) {
            msg = '请求失败，未找到请求地址';
        }
        else if (status === 500) {
            msg = '请求失败，服务器出错，请稍后再试';
        }
        else {
            msg = '未知错误，请检查网络';
        }
        return msg;
    }
    /**
     * 头部信息获取，主要用于处理token
    **/
    getHeaders() {
        const token = this.getToken();
        console.log(token);
        return token ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            token: token,
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': 'application/json'
        }) : null;
    }
    /*
     * 使用本地缓存的方式来获取token信息
     */
    getToken() {
        return window.localStorage.getItem('auth-token');
    }
    /**
     * 将token信息保存到本地缓存中 用缓存的形式实现token验证
     * @param token
     */
    setToken(token) {
        // 目前只解析token字段，缓存先只存该字段
        // JSON.stringify(token)
        window.localStorage.setItem('auth-token', token);
    }
    //获取接口请求地址
    getEnvironmentUrl() {
        console.log("sdad:" + url);
        var url = window.localStorage.getItem('environmenturl');
        if (url == null || url == undefined) {
            url = "https://subcrmdevapi.sokon.com/dcem";
        }
        return url;
    }
    //跟进环境设置请求地址
    setEnvironmentUrl(environment) {
        let url = "";
        console.log("environment:" + environment);
        switch (environment) {
            case 'Dev':
                url = "https://subcrmdevapi.sokon.com/dcem";
                break;
            case 'Sit':
                url = "https://subcrmdevapi.sokon.com/dcem";
                break;
            case 'Uat':
                url = "https://subcrmuatapi.sokon.com/dcem";
                break;
            case 'Pro':
                url = "https://mscrm.sokon.com/dcem";
                break;
            default:
                url = "http://localhost:52151";
                break;
        }
        window.localStorage.setItem('environmenturl', url);
    }
    /**
     * 清理token
     */
    clearToken() {
        window.localStorage.setItem('auth-token', null);
    }
    /**
     * 统一调用此方法显示loading
     * @param content 显示的内容
     */
    showLoading(content) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.isLoadingOpen) {
                const loading = yield this.loadingCtrl.create({
                    message: content,
                    duration: 300,
                    translucent: false
                });
                console.log('showLoading....');
                return yield loading.present();
            }
        });
    }
    /**
     * 关闭loading
    */
    hideLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('hideLoading....');
            if (this.isLoadingOpen) {
                yield this.loadingCtrl.dismiss();
                this.isLoadingOpen = false;
            }
        });
    }
    /**
     * Toast 提示
     * @param message
     */
    presentToastError(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: 2000,
                color: "danger",
                position: "top"
            });
            toast.present();
        });
    }
    presentToastSucess(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: 1500,
                color: "success",
                position: "middle"
            });
            toast.present();
        });
    }
    /*------------------------------------------------------- */
    /*
    api/focus
    */
    ajaxGet(url) {
        var api = this.getEnvironmentUrl() + url;
        return new Promise((resove, reject) => {
            this.http.get(api).subscribe((response) => {
                resove(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    /*
   api/focus
   */
    ajaxPost(url, json) {
        var api = this.getEnvironmentUrl() + url;
        return new Promise((resove, reject) => {
            this.http.post(api, json).subscribe((response) => {
                resove(response);
            }, (error) => {
                reject(error);
            });
        });
    }
    /*本地缓存处理*/
    /*
     * 使用本地缓存的方式来获取数据
     */
    GetDataCache(name) {
        return window.localStorage.getItem('datacache-' + name);
    }
    /**
     *  将数据存储到本地缓存中
     * @param name
     * @param data
     */
    SetDataCache(name, data) {
        window.localStorage.setItem('datacache-' + name, data);
    }
    /*
     * 清楚本地缓存数据
     */
    ClearDataCache(name) {
        return window.localStorage.setItem('datacache-' + name, "");
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], HttpService);



/***/ })

}]);
//# sourceMappingURL=default~serving-mc-reservation-com-list-list-module~serving-technical-support-com-list-list-module-es2015.js.map