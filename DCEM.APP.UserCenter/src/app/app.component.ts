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

            //��ʽ����
            this.statusBar.styleDefault();
            //��������ҳ,��ֹ����
            this.splashScreen.hide();
            //�Ƿ��ص�
            this.statusBar.overlaysWebView(false);
            /** ������������*/
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);

            //this.statusBar.styleDefault();
            //this.splashScreen.hide();
        });
    }
}
