import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { isFunction, isNumber } from 'util';
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
    constructor(_httpClient, _config) {
        this._httpClient = _httpClient;
        this._config = _config;
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
    //post请求
    postForToaken(url, params, rescallback, errcallback) {
        this._httpClient.post(this._config.getDomain() + url, params, {
            headers: this.getHeaders()
        }).subscribe((res) => {
            rescallback && rescallback(res);
        }, (err) => {
            errcallback && errcallback(err);
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
        console.log(token);
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
    setToken(token) {
        // 目前只解析token字段，缓存先只存该字段
        // JSON.stringify(token)
        window.localStorage.setItem('auth-token', token);
    }
};
DCore_Http = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        DCore_Config])
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
                header: '错误提示',
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
                duration: 30000
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
            let reg = /^1[0-9][0-9]{9}/;
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
//# sourceMappingURL=Dcem.core.js.map