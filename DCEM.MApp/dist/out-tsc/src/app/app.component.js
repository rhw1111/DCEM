import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './base/base.ser/authentication.service';
import { Router } from '@angular/router';
import { DCore_Http, DCore_Window, DCore_Page } from 'app/base/base.ser/Dcem.core';
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, authService, router, menu, _http, _window, _page) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authService = authService;
        this.router = router;
        this.menu = menu;
        this._http = _http;
        this._window = _window;
        this._page = _page;
        //定义左侧快速导航菜单
        this.appPages = [
            {
                title: '首页',
                url: '/serving/home/tabs/index',
                icon: 'home',
                num: 0
            },
            {
                title: '个人信息',
                url: '/base/uc/detail',
                icon: 'person',
                num: 0,
            },
            {
                title: '消息中心',
                url: '/serving/home/tabs/message',
                icon: 'alert',
                num: 0
            },
            {
                title: '设置',
                url: '/tabs',
                icon: 'settings',
                num: 0
            }
        ];
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            //this.statusBar.styleDefault();
            // let status bar overlay webview
            this.statusBar.overlaysWebView(true);
            // set status bar to white
            this.statusBar.backgroundColorByHexString('#000000');
            this.splashScreen.hide();
            this.headpicture = "assets/img/head_default.jpg";
            var welcomeisloading = this._window.storageGet("welcomeisloading");
            if (welcomeisloading == "true") {
                var token = this._http.getToken();
                if (token == undefined || token == "") {
                    this._page.goto("base/uc/login");
                }
                else {
                    var lastlogintime = this._window.storageGet("auth-logintime");
                    if (lastlogintime != null && lastlogintime !== "") {
                        var lastdateTime = new Date(lastlogintime);
                        var time = 20 * 60 * 1000;
                        if (new Date().getTime() - lastdateTime.getTime() >= time) {
                            console.log("登录超时20分钟,重新登录");
                            this._page.goto("base/uc/login");
                        }
                    }
                }
            }
            else {
                this._page.goto("base/uc/welcome");
            }
            //    this.authService.authenticationState.subscribe(state => {
            //        console.log(state);
            //        if (state) {
            //            this.router.navigate(['tabs']);
            //        }
            //        else {
            //            //this.router.navigate(['login']);
            //        }
            //    });
        });
    }
    loginout() {
        this.menu.close("homeMenu");
        this.authService.logout();
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Platform,
        SplashScreen,
        StatusBar,
        AuthenticationService,
        Router,
        MenuController,
        DCore_Http,
        DCore_Window,
        DCore_Page])
], AppComponent);
export { AppComponent };
//import { Component } from '@angular/core';
//import { Platform } from '@ionic/angular';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';
//@Component({
//    selector: 'app-root',
//    templateUrl: 'app.component.html',
//    styleUrls: ['app.component.scss']
//})
//export class AppComponent {
//    constructor(
//        private platform: Platform,
//        private splashScreen: SplashScreen,
//        private statusBar: StatusBar
//    ) {
//        this.initializeApp();
//    }
//    initializeApp() {
//        this.platform.ready().then(() => {
//            this.statusBar.styleDefault();
//            this.splashScreen.hide();
//        });
//    }
//}
//# sourceMappingURL=app.component.js.map