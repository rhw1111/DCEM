import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Injectable } from '@angular/core';

namespace Dcem.Core {
    @Injectable()
    export class Config {
        public serverUrl: string;
        constructor(
            private _window: Dcem.Core.Window
        ) {
            this.serverUrl = _window.storageGet("apiDomainUrl");
        }


        getDomain() {
            this.serverUrl = this._window.storageGet("apiDomainUrl");
            return this.serverUrl;
        }
    }

    @Injectable()
    export class Http {
        constructor(
            private _httpClient: HttpClient,
            private _config: Dcem.Core.Config
        ) {
        }
        //get请求
        get(url: string, params: any, rescallback?: (res: any) => void, errcallback?: (err: any) => void): void {
            console.log(this._config.getDomain() + url);
            this._httpClient.get(this._config.getDomain() + url, params).subscribe(
                (res: any) => {
                    rescallback && rescallback(res);
                },
                (err: any) => {
                    errcallback && errcallback(err);
                });
        }
    }

    @Injectable()
    export class Page {

        constructor(
            private alertCtr: AlertController,
            private loadingCtr: LoadingController,
            private navCtr: NavController,
            private router: Router,
            private activeRoute: ActivatedRoute
        ) {

        }

        //弹出提示
        alert(header: any, message: any) {
            const alert = this.alertCtr.create({
                header,
                message,
                buttons: ['确定']
            });
            alert.then(a => {
                a.present();
            });
        }

        //等待动画
        private loading: any;
        //打开等待动画
        loadingShow() {
            if (this.loading !== null) {
                this.loading = this.loadingCtr.create({ translucent: true });
            }
            this.loading.then(a => { a.present(); });
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
            //this.navCtr.navigateRoot(url);
            this.router.navigate([url], params);
        }

        //获取指定参数
        //getParams(paramName: string, callback?: (val: Params) => void) {
        //    this.activeRoute.queryParams.subscribe((params: Params) => {
        //        callback(params[paramName]);
        //    });
        //}
    }

    @Injectable()
    export class Window {
        storageSet(key: any, val: any) {
            window.localStorage.setItem(key, val);
        }
        storageGet(key: any) {
            return window.localStorage.getItem(key);
        }

    }
} export { Dcem }
