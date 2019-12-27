import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { isFunction, isNumber } from 'util';
import { Dateformat } from 'app/base/base.ser/dateformat';
let DCore_Window = class DCore_Window {
    storageSet(key, val) {
        window.localStorage.setItem(key, val);
    }
    storageGet(key) {
        return window.localStorage.getItem(key);
    }
};
DCore_Window = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], DCore_Window);
export { DCore_Window };
let DCore_Config = class DCore_Config {
    constructor(_window) {
        this._window = _window;
        this.userCheckNum = true;
        this.serverUrl = _window.storageGet("apiDomainUrl");
    }
    getDomain() {
        this.serverUrl = this._window.storageGet("apiDomainUrl");
        return this.serverUrl;
    }
};
DCore_Config = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [DCore_Window])
], DCore_Config);
export { DCore_Config };
let DCore_Http = class DCore_Http {
    constructor(_httpClient, _config, _navCtr) {
        this._httpClient = _httpClient;
        this._config = _config;
        this._navCtr = _navCtr;
        this.ReflashInterval = null;
    }
    //带请求头get请求
    getForToaken(url, params, rescallback, errcallback) {
        this._httpClient.get(this._config.getDomain() + url, {
            params: params,
            headers: this.getHeaders()
        }).subscribe((res) => {
            rescallback && rescallback(res);
        }, (err) => {
            errcallback && errcallback(err);
            throw err;
        });
    }
    //get请求
    get(url, params, rescallback, errcallback) {
        this._httpClient.get(this._config.getDomain() + url, params).subscribe((res) => {
            rescallback && rescallback(res);
        }, (err) => {
            errcallback && errcallback(err);
        });
    }
    //get请求
    getBase(url, params, rescallback, errcallback) {
        this._httpClient.get(url, params).subscribe((res) => {
            rescallback && rescallback(res);
        }, (err) => {
            errcallback && errcallback(err);
        });
    }
    //post请求
    postForToaken(url, params, rescallback, errcallback) {
        this._httpClient.post(this._config.getDomain() + url, params, {
            headers: this.getHeaders()
        }).subscribe((res) => {
            rescallback && rescallback(res);
        }, (err) => {
            errcallback && errcallback(err);
            throw err;
        });
    }
    //post请求
    post(url, params, rescallback, errcallback) {
        this._httpClient.post(this._config.getDomain() + url, params).subscribe((res) => {
            rescallback && rescallback(res);
        }, (err) => {
            errcallback && errcallback(err);
        });
    }
    /**
    * 头部信息获取，主要用于处理token
    **/
    getHeaders() {
        const token = this.getToken();
        return token ? new HttpHeaders({
            token: token,
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
    setToken(token, account = '', password = '') {
        // 目前只解析token字段，缓存先只存该字段
        // JSON.stringify(token)
        window.localStorage.setItem('auth-token', token);
        window.localStorage.setItem('auth-account', account);
        window.localStorage.setItem('auth-password', password);
        window.localStorage.setItem('auth-logintime', (new Date().getTime()).toString());
    }
    //登出,清理缓存，跳转并重新登录
    loginout() {
        window.localStorage.clear();
        this._navCtr.navigateRoot("/base/uc/login", {});
    }
    //刷新token
    reflashToken() {
        //设置定时器监控token是否过期
        if (this.ReflashInterval == null) {
            this.ReflashInterval = setInterval(() => {
                console.log("定时刷新" + new Date().getTime());
                var lastlogintime = window.localStorage.getItem("auth-logintime");
                var token = window.localStorage.getItem("auth-token");
                if (token != undefined && token != "") {
                    if (lastlogintime != null && lastlogintime !== "") {
                        var lastdateTime = parseInt(lastlogintime);
                        var time = 30 * 60 * 1000;
                        if (new Date().getTime() - lastdateTime >= time) {
                            console.log("登录超时10分钟,重新登录");
                            var account = window.localStorage.getItem('auth-account');
                            var password = window.localStorage.getItem('auth-password');
                            if (account != "" && password != "") {
                                console.log("域url：" + this._config.getDomain());
                                this.get('/api/User/GetAuthToken', {
                                    params: {
                                        username: encodeURIComponent(account),
                                        password: encodeURIComponent(password)
                                    }
                                }, (res) => {
                                    window.localStorage.setItem('auth-token', res.access_token);
                                    window.localStorage.setItem('auth-account', account);
                                    window.localStorage.setItem('auth-password', password);
                                    window.localStorage.setItem('auth-logintime', (new Date().getTime()).toString());
                                }, (err) => {
                                });
                            }
                        }
                    }
                }
            }, 30000);
        }
    }
};
DCore_Http = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        DCore_Config,
        NavController])
], DCore_Http);
export { DCore_Http };
let DCore_Page = class DCore_Page {
    constructor(alertCtr, loadingCtr, navCtr, router, activeRoute, toastCtrl) {
        this.alertCtr = alertCtr;
        this.loadingCtr = loadingCtr;
        this.navCtr = navCtr;
        this.router = router;
        this.activeRoute = activeRoute;
        this.toastCtrl = toastCtrl;
    }
    //顶部错误提示
    presentToastError(msg) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                header: '错误提示：',
                message: msg,
                position: 'top',
                color: 'dark',
                duration: 10000,
                buttons: [
                    {
                        side: 'start',
                        //icon: 'alert',
                        text: '',
                        handler: () => {
                        }
                    }, {
                        text: '关闭',
                        role: 'cancel',
                        handler: () => {
                        }
                    }
                ]
            });
            toast.present();
        });
    }
    //弹出提示
    alert(header, message, callback = null) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = this.alertCtr.create({
                header,
                message,
                buttons: [
                    {
                        text: '确定',
                        handler: () => {
                            if (isFunction(callback)) {
                                callback();
                            }
                        }
                    }
                ]
            });
            yield alert.then(a => {
                a.present();
            });
        });
    }
    //确认提示
    confirm(header, message, callback = null, cancelCallBack = null) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const box = this.alertCtr.create({
                header,
                message,
                buttons: [
                    {
                        text: '取消',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            if (isFunction(cancelCallBack)) {
                                cancelCallBack();
                            }
                        }
                    }, {
                        text: '确定',
                        handler: () => {
                            if (isFunction(callback)) {
                                callback();
                            }
                        }
                    }
                ]
            });
            yield box.then(a => {
                a.present();
            });
        });
    }
    //打开等待动画
    loadingShow() {
        if (this.loading !== null) {
            this.loading = this.loadingCtr.create({
                //message: "请稍后...",
                translucent: true,
                duration: 60000
            });
            this.loading.then(a => {
                a.present();
            });
        }
    }
    //关闭等待动画
    loadingHide() {
        if (this.loading !== null) {
            this.loading.then(a => { a.dismiss(); });
        }
    }
    //跳转到指定页
    goto(url, params) {
        if (params === null) {
            params = {};
        }
        this.router.navigate([url], { queryParams: params });
    }
    //跳转到指定页
    navigateRoot(url, params, animation) {
        if (params === null) {
            params = {};
        }
        if (animation === null) {
            animation = "forward";
        }
        this.navCtr.navigateRoot(url, { queryParams: params, animationDirection: animation });
    }
    goBack() {
        this.navCtr.back();
    }
};
DCore_Page = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AlertController,
        LoadingController,
        NavController,
        Router,
        ActivatedRoute,
        ToastController])
], DCore_Page);
export { DCore_Page };
//共享对象
let DCore_ShareData = class DCore_ShareData {
    constructor() {
        this.map = new Map();
    }
    set(key, val) {
        this.map.set(key, val);
    }
    has(key) {
        return this.map.has(key);
    }
    get(key) {
        return this.map.get(key);
    }
    delete(key) {
        return this.map.delete(key);
    }
};
DCore_ShareData = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], DCore_ShareData);
export { DCore_ShareData };
//验证对象
let DCore_Valid = class DCore_Valid {
    constructor() {
        this.isNull = function (val) {
            if (typeof val == "undefined" || val == null)
                return true;
            return false;
        };
        this.isNullOrEmpty = function (val) {
            if (typeof val == "undefined" || val == null || val == "")
                return true;
            return false;
        };
        this.isNumber = function (val) {
            return isNumber(val);
        };
        this.isPhone = function (val) {
            //let reg = /^1[3|4|5|7|8][0-9]{9}/;
            let reg = /^1[0-9][0-9]{9}$/;
            if (reg.test(val)) {
                return true;
            }
            return false;
        };
    }
};
DCore_Valid = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], DCore_Valid);
export { DCore_Valid };
export class LogModel {
}
//系统日志跟踪
let DCore_Log = class DCore_Log {
    constructor(_dateformat) {
        this._dateformat = _dateformat;
        this.logList = [];
    }
    //写入提示日志
    WriteInfoLog(message) {
        this.WriteLog(message, 1);
    }
    //写入错误日志
    WriteErrorLog(message) {
        this.WriteLog(message, 2);
    }
    WriteLog(message, type) {
        var list = this.GetList();
        if (list != null) {
            this.logList = list;
        }
        var logModel = new LogModel();
        logModel.Id = new Date().getTime();
        logModel.CreateTime = this._dateformat.FormatToDateTime(new Date());
        ;
        logModel.Message = message;
        logModel.Type = type;
        this.logList.unshift(logModel); //插入顶部
        window.localStorage.setItem('Sys-Log', JSON.stringify(this.logList));
    }
    //获取日志
    GetList() {
        return JSON.parse(window.localStorage.getItem('Sys-Log'));
    }
    //清除日志
    Clear() {
        window.localStorage.removeItem('Sys-Log');
    }
};
DCore_Log = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Dateformat])
], DCore_Log);
export { DCore_Log };
//字符串处理
let DCore_String = class DCore_String {
    constructor() {
    }
    GetRandom(len = 24) {
        var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var maxPos = $chars.length;
        var pwd = '';
        for (var i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * (maxPos + 1)));
        }
        return pwd;
    }
    GetDateFormat(date, format) {
        date["M+"] = date.getMonth() + 1;
        date["d+"] = date.getDate();
        date["h+"] = date.getHours();
        date["m+"] = date.getMinutes();
        date["s+"] = date.getSeconds();
        date["q+"] = Math.floor((date.getMonth() + 3) / 3);
        date["S+"] = date.getMilliseconds();
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in date) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
            }
        }
        return format;
    }
};
DCore_String = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], DCore_String);
export { DCore_String };
//# sourceMappingURL=Dcem.core.js.map