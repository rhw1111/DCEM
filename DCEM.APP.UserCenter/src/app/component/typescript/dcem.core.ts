import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { Injectable } from '@angular/core';
import { isFunction, isNumber } from 'util';
import { DomSanitizer } from '@angular/platform-browser';

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

    private serverName: string;
    private dcem_serverName: string;
    private tc_serverName: string;

    private tc_host_map: Map<string, string>
    private dcem_host_map: Map<string, string>

    public tc_host_headers: HttpHeaders;
    public tc_host: string;
    public dcem_host: string;

    constructor(
    ) {
        this.dcem_serverName = "local";
        this.tc_serverName = "9_0";

        this.tc_host_map = function () {
            var map = new Map<string, any>();
            map.set("dev", "https://subcrmdevapi.sokon.com/tc/");
            map.set("sit", "https://subcrmsitapi.sokon.com/tc/");
            map.set("uat", "https://subcrmuatapi.sokon.com/tc/");
            map.set("local", "https://localhost:44382/");
            map.set("9_0", "http://106.14.121.65:8082/tc/");
            map.set("iis", "http://localhost:9099/");
            return map;
        }();


        this.dcem_host_map = function () {
            var map = new Map<string, any>();
            map.set("dev", "https://subcrmdevapi.sokon.com/dcem/");
            map.set("sit", "https://subcrmdevapi.sokon.com/dcem/");
            map.set("uat", "https://subcrmuatapi.sokon.com/dcem/");
            map.set("local", "https://localhost:44382/");
            map.set("9_0", "http://106.14.121.65:8082/dcem/");
            map.set("iis", "http://localhost:9099/");
            return map;
        }();


        this.tc_host_headers = new HttpHeaders({
            "Content-Type": "application/json;charset=UTF-8",
            "appid": "1001",
            "md5sum": "1fdcab853713fbc2b8f4d58bac32f420",
            "true-client-ip": "10.1.1.1"
        });


        this.tc_host = this.tc_host_map.get(this.tc_serverName);
        this.dcem_host = this.dcem_host_map.get(this.dcem_serverName);

    }
}

@Injectable({
    providedIn: 'root'
})
export class DCore_Http {
    constructor(
        private _httpClient: HttpClient,
        private _config: DCore_Config
    ) {
    }
    //商城接口get请求
    getForShopping(url: string, params: any, rescallback?: (res: any) => void, errcallback?: (err: any) => void): void {
        this._httpClient.get(this._config.tc_host + url,
            {
                params: params,
                headers: this._config.tc_host_headers
            }).subscribe(
                (res: any) => {
                    rescallback && rescallback(res);
                },
                (err: any) => {
                    errcallback && errcallback(err);
                });
    }
    //商城接口post请求
    postForShopping(url: string, params: any, rescallback?: (res: any) => void, errcallback?: (err: any) => void): void {
        this._httpClient.post(
            this._config.tc_host + url,
            params,
            {
                headers: this._config.tc_host_headers
            }).subscribe(
                (res: any) => {
                    rescallback && rescallback(res);
                },
                (err: any) => {
                    errcallback && errcallback(err);
                });
    }

    getForToaken(url: string, params: any, rescallback?: (res: any) => void, errcallback?: (err: any) => void): void {
        this.get(url, params, rescallback, errcallback);
    }

    postForToaken(url: string, params: any, rescallback?: (res: any) => void, errcallback?: (err: any) => void): void {
        this.post(url, params, rescallback, errcallback);
    }

    //get请求
    get(url: string, params: any, rescallback?: (res: any) => void, errcallback?: (err: any) => void): void {
        this._httpClient.get(this._config.dcem_host + url, params).subscribe(
            (res: any) => {
                rescallback && rescallback(res);
            },
            (err: any) => {
                errcallback && errcallback(err);
            });
    }

    //post请求
    post(url: string, params: any, rescallback?: (res: any) => void, errcallback?: (err: any) => void): void {
        this._httpClient.post(this._config.dcem_host + url, params).subscribe(
            (res: any) => {
                rescallback && rescallback(res);
            },
            (err: any) => {
                errcallback && errcallback(err);
            });
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


    isArray = function (o) {
        return Object.prototype.toString.call(o) == '[object Array]';
    }
}


//验证对象
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




//去掉Angular的垃圾安全过滤器
@Injectable({
    providedIn: 'root'
})
@Pipe({ name: 'safeHtml' }) //自定义管道
export class DCore_SafeHtml implements PipeTransform {
    constructor(private sanitized: DomSanitizer) { }

    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}






