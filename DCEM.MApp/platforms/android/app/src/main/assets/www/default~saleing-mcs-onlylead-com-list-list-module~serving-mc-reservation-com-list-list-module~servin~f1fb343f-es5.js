(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~saleing-mcs-onlylead-com-list-list-module~serving-mc-reservation-com-list-list-module~servin~f1fb343f"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var HttpService = /** @class */ (function () {
    function HttpService(http, loadingCtrl, toastCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.isLoadingOpen = false;
        this.InterfacePreURL = "";
    }
    HttpService.prototype.postForToaken = function (url, params, successCallback, errorCallback) {
        var _this = this;
        // 此处使用的post模式为非严格模式，如果要使用严格模式，请把参数放在第二个位置 覆盖null
        return this.http
            .post(this.getEnvironmentUrl() + url, null, {
            params: this.encodeHttpParams(params),
            headers: this.getHeaders()
        })
            .subscribe(function (res) {
            console.log(res);
            _this.responseSuccess(res, function (msg) {
                if (successCallback) {
                    successCallback(res, msg);
                }
            });
        }, function (err) {
            if (errorCallback) {
                errorCallback(err);
            }
        });
    };
    //get数据
    HttpService.prototype.getForToaken = function (url, params) {
        return this.http.get(this.getEnvironmentUrl() + url, {
            params: this.encodeComplexHttpParams(params),
            headers: this.getHeaders()
        });
    };
    HttpService.prototype.GET = function (url, params, callback) {
        this.http
            .get(this.getEnvironmentUrl() + url, { params: this.encodeComplexHttpParams(params) })
            .subscribe(function (res) {
            console.log('get res=' + res);
            callback && callback(res, null);
        }, function (error) {
            callback && callback(null, error);
        });
    };
    HttpService.prototype.POST = function (url, params, callback) {
        var _this = this;
        console.log('POST...');
        this.http.post(this.getEnvironmentUrl() + url, this.encodeComplexHttpParams(params)).subscribe(function (res) {
            console.log('POST res=' + res);
            console.log(res);
            callback && callback(res, null);
        }, function (err) {
            console.log('POST err=');
            console.log(err);
            _this.requestFailed(err);
            callback && callback(null, err);
        });
    };
    //对象参数请求
    HttpService.prototype.encodeHttpParams = function (params) {
        if (!params)
            return null;
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromObject: params });
    };
    //字符串参数封装
    HttpService.prototype.encodeComplexHttpParams = function (params) {
        if (!params)
            return null;
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromString: params });
    };
    /**
     * 处理响应的事件
     * @param res
     * @param {Function} error
     */
    HttpService.prototype.responseSuccess = function (res, callback) {
        if (res.code !== '0') {
            // 失败
            if (res.msg) {
                callback({ code: res.code, msg: res.msg });
            }
            else {
                var data = res.datas;
                var errorMsg_1 = res.message;
                if (data != null) {
                    data.map(function (i) {
                        errorMsg_1 = i.errorMsg + '\n';
                    });
                }
                callback({ code: res.code, msg: errorMsg_1 });
            }
        }
        else {
            callback(res);
        }
    };
    /**
     * 处理请求失败事件
     * @param url
     * @param err
     */
    HttpService.prototype.requestFailed = function (err) {
        var msg = '请求发生异常';
        var status = err.status;
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
    };
    /**
     * 头部信息获取，主要用于处理token
    **/
    HttpService.prototype.getHeaders = function () {
        var token = this.getToken();
        console.log(token);
        return token ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            token: token,
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': 'application/json'
        }) : null;
    };
    /*
     * 使用本地缓存的方式来获取token信息
     */
    HttpService.prototype.getToken = function () {
        return window.localStorage.getItem('auth-token');
    };
    /**
     * 将token信息保存到本地缓存中 用缓存的形式实现token验证
     * @param token
     */
    HttpService.prototype.setToken = function (token) {
        // 目前只解析token字段，缓存先只存该字段
        // JSON.stringify(token)
        window.localStorage.setItem('auth-token', token);
    };
    //获取接口请求地址
    HttpService.prototype.getEnvironmentUrl = function () {
        console.log("sdad:" + url);
        var url = window.localStorage.getItem('environmenturl');
        if (url == null || url == undefined) {
            url = "https://subcrmdevapi.sokon.com/dcem";
        }
        return url;
    };
    //跟进环境设置请求地址
    HttpService.prototype.setEnvironmentUrl = function (environment) {
        var url = "";
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
    };
    /**
     * 清理token
     */
    HttpService.prototype.clearToken = function () {
        window.localStorage.setItem('auth-token', null);
    };
    /**
     * 统一调用此方法显示loading
     * @param content 显示的内容
     */
    HttpService.prototype.showLoading = function (content) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isLoadingOpen) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: content,
                                duration: 300,
                                translucent: false
                            })];
                    case 1:
                        loading = _a.sent();
                        console.log('showLoading....');
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 关闭loading
    */
    HttpService.prototype.hideLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('hideLoading....');
                        if (!this.isLoadingOpen) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadingCtrl.dismiss()];
                    case 1:
                        _a.sent();
                        this.isLoadingOpen = false;
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Toast 提示
     * @param message
     */
    HttpService.prototype.presentToastError = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 2000,
                            color: "danger",
                            position: "top"
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HttpService.prototype.presentToastSucess = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 1500,
                            color: "success",
                            position: "middle"
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /*------------------------------------------------------- */
    /*
    api/focus
    */
    HttpService.prototype.ajaxGet = function (url) {
        var _this = this;
        var api = this.getEnvironmentUrl() + url;
        return new Promise(function (resove, reject) {
            _this.http.get(api).subscribe(function (response) {
                resove(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    /*
   api/focus
   */
    HttpService.prototype.ajaxPost = function (url, json) {
        var _this = this;
        var api = this.getEnvironmentUrl() + url;
        return new Promise(function (resove, reject) {
            _this.http.post(api, json).subscribe(function (response) {
                resove(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    /*本地缓存处理*/
    /*
     * 使用本地缓存的方式来获取数据
     */
    HttpService.prototype.GetDataCache = function (name) {
        return window.localStorage.getItem('datacache-' + name);
    };
    /**
     *  将数据存储到本地缓存中
     * @param name
     * @param data
     */
    HttpService.prototype.SetDataCache = function (name, data) {
        window.localStorage.setItem('datacache-' + name, data);
    };
    /*
     * 清楚本地缓存数据
     */
    HttpService.prototype.ClearDataCache = function (name) {
        return window.localStorage.setItem('datacache-' + name, "");
    };
    HttpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
    ]; };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], HttpService);
    return HttpService;
}());



/***/ })

}]);
//# sourceMappingURL=default~saleing-mcs-onlylead-com-list-list-module~serving-mc-reservation-com-list-list-module~servin~f1fb343f-es5.js.map