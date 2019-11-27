import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './base/base.ser/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DCore_Http, DCore_Window, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, authService, router, _activeRouter, menu, _http, _window, _page, screenOrientation) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authService = authService;
        this.router = router;
        this._activeRouter = _activeRouter;
        this.menu = menu;
        this._http = _http;
        this._window = _window;
        this._page = _page;
        this.screenOrientation = screenOrientation;
        //定义左侧快速导航菜单
        this.appPages = [
            {
                title: '首页',
                url: '/serving/home/tabs/index',
                icon: 'home',
                num: 0
            },
            {
                title: '消息中心',
                url: '/serving/home/tabs/message',
                icon: 'notifications',
                num: 0
            },
            {
                title: '设置',
                url: '/serving/home/systemsetup',
                icon: 'settings',
                num: 0
            }
        ];
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            /** 设置智能竖屏*/
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
            if (location.href.indexOf('base/uc/welcome') == -1) {
                //设置定时器监控token是否过期
                this._http.reflashToken();
            }
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
        ActivatedRoute,
        MenuController,
        DCore_Http,
        DCore_Window,
        DCore_Page,
        ScreenOrientation])
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