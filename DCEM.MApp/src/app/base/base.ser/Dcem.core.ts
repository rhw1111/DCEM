import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { isFunction } from 'util';


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
    constructor(
        private _window: DCore_Window
    ) {
        this.serverUrl = _window.storageGet("apiDomainUrl");
    }


    getDomain() {
        this.serverUrl = this._window.storageGet("apiDomainUrl");
        return this.serverUrl;
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

    //post请求
    post(url: string, params: any, rescallback?: (res: any) => void, errcallback?: (err: any) => void): void {
        this._httpClient.post(this._config.getDomain() + url, params).subscribe(
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
        private activeRoute: ActivatedRoute
    ) {

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
                message:"请稍后...",
                translucent: true ,
                duration: 8000});
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
    navigateRoot(url: any, params?: any) {
        if (params === null) {
            params = {};
        }
        this.navCtr.navigateRoot(url, { queryParams: params });

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

}




