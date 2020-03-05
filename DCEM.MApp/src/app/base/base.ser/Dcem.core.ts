import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { isFunction, isNumber } from 'util';
import { Dateformat } from 'app/base/base.ser/dateformat';

@Injectable({
    providedIn: 'root'
})
export class DCore_Window {
    storageSet(key: any, val: any) {
        window.localStorage.setItem(key, val);
    }
    storageGet(key: any) {
        return window.localStorage.getItem(key);
    }
}



@Injectable({
    providedIn: 'root'
})
export class DCore_Config {
    public serverUrl: string;
    public userCheckNum: boolean = true;
    constructor(
        private _window: DCore_Window
    ) {
        this.serverUrl = _window.storageGet("apiDomainUrl");
    }


    getDomain() {
        this.serverUrl = this._window.storageGet("apiDomainUrl");
        return this.serverUrl;
    }
    getOcrUrl(){

        //return "https://subcrmuatapi.sokon.com/ocr/";
        return "http://106.14.27.132:8082/ocr/";
    }
}

@Injectable({
    providedIn: 'root'
})
export class DCore_Http {
    public ReflashInterval: any = null;
    constructor(
        private _httpClient: HttpClient,
        private _config: DCore_Config,
        private _navCtr: NavController
    ) {
    }
    //带请求头get请求
    getForToaken(url: string, params: any, rescallback?: (res: any) => void, errcallback?: (err: any) => void): void {
        this._httpClient.get(this._config.getDomain() + url,
            {
                params: params,
                headers: this.getHeaders()
            }).subscribe(
                (res: any) => {
                    rescallback && rescallback(res);
                },
                (err: any) => {
                    errcallback && errcallback(err);
                    throw err;
                });
    }

    //get请求
    get(url: string, params: any, rescallback?: (res: any) => void, errcallback?: (err: any) => void): void {
        this._httpClient.get(this._config.getDomain() + url, params).subscribe(
            (res: any) => {
                rescallback && rescallback(res);
            },
            (err: any) => {
                errcallback && errcallback(err);
            });
    }

    //get请求
    getBase(url: string, params: any, rescallback?: (res: any) => void, errcallback?: (err: any) => void): void {
        this._httpClient.get(url, params).subscribe(
            (res: any) => {
                rescallback && rescallback(res);
            },
            (err: any) => {
                errcallback && errcallback(err);
            });
    }

    //post请求
    postForToaken(url: string, params: any, rescallback?: (res: any) => void, errcallback?: (err: any) => void): void {
        this._httpClient.post(
            this._config.getDomain() + url,
            params,
            {
                headers: this.getHeaders()
            }).subscribe(
                (res: any) => {
                    rescallback && rescallback(res);
                },
                (err: any) => {
                    errcallback && errcallback(err);
                    throw err;
                });
    }

    //post请求
    post(url: string, params: any, rescallback?: (res: any) => void, errcallback?: (err: any) => void): void {
        this._httpClient.post(
            this._config.getDomain() + url, params).subscribe(
                (res: any) => {
                    rescallback && rescallback(res);
                },
                (err: any) => {
                    errcallback && errcallback(err);
                });
    }
    //post Ocr请求
    postOcr(url: string, params: any, rescallback?: (res: any) => void, errcallback?: (err: any) => void): void {
        this._httpClient.post(
            this._config.getOcrUrl() + url, params).subscribe(
                (res: any) => {
                    rescallback && rescallback(res);
                },
                (err: any) => {
                    errcallback && errcallback(err);
                });
    }

    /**
    * 头部信息获取，主要用于处理token
    **/
    private getHeaders() {
        const token = this.getToken();
        return token ? new HttpHeaders({
            token: token,
            // 'Content-Type': 'application/json;charset=UTF-8',
            // 'Accept': 'application/json'
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
                            var password = window.localStorage.getItem('auth-password')
                            if (account != "" && password != "") {
                                console.log("域url：" + this._config.getDomain());
                                this.get('/api/User/GetAuthToken',
                                    {
                                        params: {
                                            username: encodeURIComponent(account),
                                            password: encodeURIComponent(password)
                                        }
                                    },
                                    (res: any) => {
                                        window.localStorage.setItem('auth-token', res.access_token);
                                        window.localStorage.setItem('auth-account', account);
                                        window.localStorage.setItem('auth-password', password);
                                        window.localStorage.setItem('auth-logintime', (new Date().getTime()).toString());
                                    },
                                    (err: any) => {
                                    }
                                );
                            }
                        }
                    }
                }
            }, 30000);
        }
    }
}

@Injectable({
    providedIn: 'root'
})
export class DCore_Page {

    constructor(
        private alertCtr: AlertController,
        private loadingCtr: LoadingController,
        private navCtr: NavController,
        private router: Router,
        private activeRoute: ActivatedRoute,
        private toastCtrl: ToastController,
    ) {

    }

    //顶部错误提示
    async presentToastError(msg: string) {
        const toast = await this.toastCtrl.create({
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
    }


    //弹出提示
    async alert(header: any, message: any, callback: any = null) {
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
        await alert.then(a => {
            a.present();
        });
    }
    //弹出提示
    async alertCancel(header: any, message: any, callback: any = null,cancelCallBack:any=null) {
        const alert = this.alertCtr.create({
            header,
            message,
            buttons: [
                {
                    text: '取消',
                    handler: () => {
                        if (isFunction(cancelCallBack)) {
                            cancelCallBack();
                        }
                    }
                },
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
        await alert.then(a => {
            a.present();
        });
    }

    //确认提示
    async confirm(header: any, message: any, callback: any = null, cancelCallBack: any = null) {
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
        await box.then(a => {
            a.present();
        });
    }


    //等待动画
    private loading: any;
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
    goto(url: any, params?: any) {
        if (params === null) {
            params = {};
        }
        this.router.navigate([url], { queryParams: params });


    }


    //跳转到指定页
    navigateRoot(url: any, params?: any, animation?: any) {
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


    //获取指定参数
    //getParams(paramName: string, callback?: (val: Params) => void) {
    //    this.activeRoute.queryParams.subscribe((params: Params) => {
    //        callback(params[paramName]);
    //    });
    //}
}


//共享对象
@Injectable({
    providedIn: 'root'
})

export class DCore_ShareData {
    public map: Map<string, any>
    constructor(
    ) {
        this.map = new Map<string, any>();
    }
    set(key: string, val: any) {
        this.map.set(key, val);
    }
    has(key: string) {
        return this.map.has(key)
    }
    get(key: string) {
        return this.map.get(key);
    }
    delete(key) {
        return this.map.delete(key);
    }
}


//验证对象
@Injectable({
    providedIn: 'root'
})

export class DCore_Valid {
    constructor(
    ) {
    }
    isNull = function (val: any) {
        if (typeof val == "undefined" || val == null)
            return true;
        return false;
    }

    isNullOrEmpty = function (val: any) {
        if (typeof val == "undefined" || val == null || val == "")
            return true;
        return false;
    }


    isNumber = function (val: any) {
        return isNumber(val);
    }

    isPhone = function (val: any) {
        //let reg = /^1[3|4|5|7|8][0-9]{9}/;
        let reg = /^1[0-9][0-9]{9}$/;
        if (reg.test(val)) {
            return true;
        }
        return false;
    }

}

export class LogModel {
    public Id: any;
    public Type: any;
    public Message: any;
    public CreateTime: any;
}

//系统日志跟踪
@Injectable({
    providedIn: 'root'
})

export class DCore_Log {
    public logList: any = [];
    constructor(
        private _dateformat: Dateformat
    ) {

    }

    //写入提示日志
    WriteInfoLog(message: string) {
        this.WriteLog(message, 1);
    }

    //写入错误日志
    WriteErrorLog(message: string) {
        this.WriteLog(message, 2);
    }

    WriteLog(message: string, type: any) {
        var list = this.GetList();
        if (list != null) {
            this.logList = list;
        }
        var logModel = new LogModel();
        logModel.Id = new Date().getTime();
        logModel.CreateTime = this._dateformat.FormatToDateTime(new Date());;
        logModel.Message = message;
        logModel.Type = type;
        this.logList.unshift(logModel);//插入顶部
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
}


//字符串处理
@Injectable({
    providedIn: 'root'
})
export class DCore_String {
    constructor(
    ) {
    }
    GetRandom(len: number = 24) {
        var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var maxPos = $chars.length;
        var pwd = '';
        for (var i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * (maxPos + 1)));
        }
        return pwd;
    }

    GetDateFormat(date: Date, format: string) {
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
}


