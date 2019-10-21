//import { Component } from '@angular/core';
import * as tslib_1 from "tslib";
//import { Platform,MenuController } from '@ionic/angular';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';
//import { AuthenticationService } from './base/base.ser/authentication.service'
//import { Router } from '@angular/router';
//import { AppConfig } from './app.config';
//@Component({
//  selector: 'app-root',
//  templateUrl: 'app.component.html',
//  styleUrls: ['app.component.scss']
//})
//export class AppComponent {
//  //定义左侧快速导航菜单
//  public appPages = [
//    {
//      title: '首页',
//      url: '/tabs',
//      icon: 'home',
//      num:1
//    },
//    {
//      title: '个人信息',
//      url: '/tabs',
//      icon: 'person',
//      num:0,
//    },
//    {
//      title: '消息中心',
//      url: '/tabs',
//      icon: 'alert',
//      num:10
//    },
//    {
//      title: '设置',
//      url: '/tabs',
//      icon: 'settings',
//      num:0
//    }
//  ];
//  public headpicture:string;
//  constructor(
//    private platform: Platform,
//    private splashScreen: SplashScreen,
//    private statusBar: StatusBar,
//    private authService:AuthenticationService,
//    private router:Router,
//    private menu:MenuController
//  ) {
//    this.initializeApp();
//  }
//  initializeApp() {
//    this.platform.ready().then(() => {
//      this.statusBar.styleDefault();
//      this.splashScreen.hide();
//      this.authService.authenticationState.subscribe(state=>{
//        console.log(state);
//        if(state){
//          this.router.navigate(['tabs']);
//          this.headpicture="assets/img/head_default.jpg";
//        }
//        else{
//          this.router.navigate(['login']);
//        }
//      });
//    });
//  }
//  loginout(){
//    this.menu.close("homeMenu");
//    this.authService.logout();
//  }
//}
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
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
        StatusBar])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map