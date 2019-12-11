import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private screenOrientation: ScreenOrientation
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {

            //样式设置
            this.statusBar.styleDefault();
            //隐藏启动页,防止白屏
            this.splashScreen.hide();
            //是否重叠
            this.statusBar.overlaysWebView(false);
            /** 设置智能竖屏*/
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);

            //this.statusBar.styleDefault();
            //this.splashScreen.hide();
        });
    }
}
