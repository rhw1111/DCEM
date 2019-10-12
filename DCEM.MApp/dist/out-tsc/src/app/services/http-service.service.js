import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { AppConfig } from '../app.config';
import { ToastController } from '@ionic/angular';
let HttpService = class HttpService {
    constructor(http, loadingCtrl, toastCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.isLoadingOpen = false;
        this.InterfacePreURL = "";
        this.InterfacePreURL = new AppConfig().GetInterfacePreURL();
    }
    postForToaken(url, params, successCallback, errorCallback) {
        // 此处使用的post模式为非严格模式，如果要使用严格模式，请把参数放在第二个位置 覆盖null
        return this.http
            .post(this.InterfacePreURL + url, null, {
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
        return this.http.get(this.InterfacePreURL + url, {
            params: this.encodeComplexHttpParams(params),
            headers: this.getHeaders()
        });
    }
    GET(url, params, callback) {
        this.http
            .get(this.InterfacePreURL + url, { params: this.encodeComplexHttpParams(params) })
            .subscribe(res => {
            console.log('get res=' + res);
            callback && callback(res, null);
        }, error => {
            callback && callback(null, error);
        });
    }
    POST(url, params, callback) {
        console.log('POST...');
        this.http.post(this.InterfacePreURL + url, this.encodeComplexHttpParams(params)).subscribe((res) => {
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
    // //  将复杂的参数组装成字符串
    // private paramsString(params: any): string {
    //   if (!params) return null;
    //   let str = '';
    //   for (let key in params) {
    //     if (params.hasOwnProperty(key)) {
    //       let value = params[key];
    //       if (value === null) continue;
    //       if (Array.isArray(value)) {
    //         if (value.length === 0) continue;
    //         for (let index = 0; index < value.length; index++) {
    //           let k = key + '[' + index + ']';
    //           let v = value[index];
    //           if (str.length > 1) str += '&';
    //           str += k + '=' + v;
    //         }
    //       } else if (isObject(value)) {
    //         for (let subKey in value) {
    //           if (value.hasOwnProperty(subKey)) {
    //             let v = value[subKey];
    //             if (v === null) continue;
    //             let k = key + '[' + subKey + ']';
    //             if (str.length > 1) str += '&';
    //             str += k + '=' + v;
    //           }
    //         }
    //       } else {
    //         if (str.length > 1) str += '&';
    //         str += key + '=' + value;
    //       }
    //     }
    //   }
    //   return str;
    // }
    encodeHttpParams(params) {
        if (!params)
            return null;
        return new HttpParams({ fromObject: params });
    }
    //参数封装
    encodeComplexHttpParams(params) {
        if (!params)
            return null;
        //console.log(this.paramsString("请求参数："+this.paramsString(params)));
        return new HttpParams({ fromString: params });
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
        return token ? new HttpHeaders({
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: 1500,
                color: "success",
                position: "middle"
            });
            toast.present();
        });
    }
};
HttpService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        LoadingController,
        ToastController])
], HttpService);
export { HttpService };
//# sourceMappingURL=http-service.service.js.map