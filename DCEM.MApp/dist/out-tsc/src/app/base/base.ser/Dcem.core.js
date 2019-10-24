export var Dcem;
(function (Dcem) {
    var Core;
    (function (Core) {
        class Config {
            constructor(_window) {
                this._window = _window;
                this.serverUrl = "http://localhost:9099";
                this.serverUrl = _window.storageGet("apiDomainUrl");
            }
            getDomain() {
                this.serverUrl = this._window.storageGet("apiDomainUrl");
                return this.serverUrl;
            }
        }
        Core.Config = Config;
        class Http {
            constructor(_httpClient, _config) {
                this._httpClient = _httpClient;
                this._config = _config;
            }
            //get请求
            get(url, params, rescallback, errcallback) {
                console.log(this._config.getDomain() + url);
                this._httpClient.get(this._config.getDomain() + url, params).subscribe((res) => {
                    rescallback && rescallback(res);
                }, (err) => {
                    errcallback && errcallback(err);
                });
            }
        }
        Core.Http = Http;
        class Page {
            constructor(alertCtr, loadingCtr, navCtr) {
                this.alertCtr = alertCtr;
                this.loadingCtr = loadingCtr;
                this.navCtr = navCtr;
                //等待动画
                this.loading = this.loadingCtr.create({ translucent: false });
            }
            //弹出提示
            alert(header, message) {
                const alert = this.alertCtr.create({
                    header,
                    message,
                    buttons: ['确定']
                });
                alert.then(a => {
                    a.present();
                });
            }
            //打开等待动画
            loadingShow() {
                this.loading.then(a => { a.present(); });
            }
            //关闭等待动画
            loadingHide() {
                this.loading.then(a => { a.dismiss(); });
            }
            //跳转到指定页
            goto(url) {
                this.navCtr.navigateRoot('serving/home/tabs');
            }
        }
        Core.Page = Page;
        class Window {
            storageSet(key, val) {
                window.localStorage.setItem(key, val);
            }
            storageGet(key) {
                return window.localStorage.getItem(key);
            }
        }
        Core.Window = Window;
    })(Core = Dcem.Core || (Dcem.Core = {}));
})(Dcem || (Dcem = {}));
//# sourceMappingURL=Dcem.core.js.map