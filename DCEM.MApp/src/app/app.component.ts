import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './base/base.ser/authentication.service'
import { Router } from '@angular/router';
import { AppConfig } from './app.config';


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
            num: 1
        },
        {
            title: '个人信息',
            url: '/serving/home/tabs/mywork',
            icon: 'person',
            num: 0,
        },
        {
            title: '消息中心',
            url: '/serving/home/tabs/message',
            icon: 'alert',
            num: 10
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
        private menu: MenuController
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
           this.statusBar.styleDefault();
           this.splashScreen.hide();

           this.headpicture = "assets/img/head_default.jpg";

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
        //this.menu.close("homeMenu");
        //this.authService.logout();
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
