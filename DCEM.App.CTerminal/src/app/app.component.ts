import { Component } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

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
            url: '/',
            icon: 'home',
            num: 0
        },
        {
            title: '个人信息',
            url: '/',
            icon: 'person',
            num: 0,
        },
        {
            title: '消息中心',
            url: '/',
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
        });
    }

    loginout() {
       
    }
}
