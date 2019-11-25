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
            ////this.statusBar.styleDefault();
            //// let status bar overlay webview
            //this.statusBar.overlaysWebView(false);
            //// set status bar to white
            this.statusBar.backgroundColorByHexString('#000000');
            //this.splashScreen.hide();
            /** 设置智能竖屏*/
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY);
            if(location.href.indexOf('base/uc/welcome')==-1 && !this.authService.isAuthenticated()){
                this._page.goto("base/uc/login");
            }
            //this.headpicture = "assets/img/head_default.jpg";
            //console.log("开始welcomeisloading");
            //var welcomeisloading=this._window.storageGet("welcomeisloading");
            //console.log("取值:"+welcomeisloading);
            //if(welcomeisloading=="true"){
            //    var token= this._http.getToken();
            //    if(token== undefined || token==""){
            //        this._page.goto("base/uc/login");
            //    }
            //    else{
            //        var lastlogintime=this._window.storageGet("auth-logintime");
            //        if(lastlogintime!=null && lastlogintime!==""){
            //            var lastdateTime=new Date(lastlogintime);
            //            var time = 20*60*1000;
            //            if (new Date().getTime()-lastdateTime.getTime()>=time) {
            //                console.log("登录超时20分钟,重新登录");
            //                this._page.goto("base/uc/login");
            //            }
            //        }
            //    }
            //}
            //else{
            //  this._page.goto("base/uc/welcome");
            //}

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
