import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './base/base.ser/authentication.service'
import { Router ,ActivatedRoute} from '@angular/router';
import { DCore_Http,DCore_Window,DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    //定义左侧快速导航菜单
    public appPages = [
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

    public headpicture: string;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private authService: AuthenticationService,
        private router: Router,
        private _activeRouter:ActivatedRoute,
        private menu: MenuController,
        private _http:DCore_Http,
        private _window: DCore_Window,
        private _page: DCore_Page,
        private screenOrientation: ScreenOrientation
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            //样式设置
            this.statusBar.styleBlackTranslucent();
            //是否重叠
            this.statusBar.overlaysWebView(false);
            /** 设置智能竖屏*/
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
            if(location.href.indexOf('base/uc/welcome')==-1){
                //设置定时器监控token是否过期
                this._http.reflashToken();
                var token = this._http.getToken();
                if (token != undefined && token != "") {
                    this._page.goto("/serving/home/tabs/index");
                }
                else{
                    this._page.goto("/base/uc/login");
                }
            }
        });
    }

    loginout() {
        this.menu.close("homeMenu");
        this.authService.logout();
    }
}


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
