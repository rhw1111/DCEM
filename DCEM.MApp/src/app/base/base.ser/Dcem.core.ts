import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AlertController, LoadingController, NavController } from '@ionic/angular';

export namespace Dcem.Core {

    export class Config {
        public serverUrl: string = "http://localhost:9099";
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

    export class Http {
        constructor(
            private _httpClient: HttpClient,
            private _config: Dcem.Core.Config
        ) {
        }
        //get请求
        get(url: string, params: any, rescallback?: (res: any) => void, errcallback?: (err: any) => void): void {
            console.log(this._config.getDomain() + url);
            this._httpClient.get(this._config.getDomain() + url, { params: params }).subscribe(
                (res: any) => {
                    rescallback && rescallback(res);
                },
                (err: any) => {
                    errcallback && errcallback(err);
                });
        }
    }

    export class Page {

        constructor(
            private alertCtr: AlertController,
            private loadingCtr: LoadingController,
            private navCtr: NavController,
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
        loading = this.loadingCtr.create({ translucent: false });
        //打开等待动画
        loadingShow() {
            this.loading.then(a => { a.present(); });
        }
        //关闭等待动画
        loadingHide() {
            this.loading.then(a => { a.dismiss(); });
        }
        //跳转到指定页
        goto(url: any) {
            this.navCtr.navigateRoot('serving/home/tabs');
        }
    }

    export class Window {
        storageSet(key: any, val: any) {
            window.localStorage.setItem(key, val);
        }
        storageGet(key: any) {
            return window.localStorage.getItem(key);
        }

    }
}