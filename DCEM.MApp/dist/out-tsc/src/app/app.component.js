import * as tslib_1 from "tslib";
var _a, _b, _c;
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
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Platform !== "undefined" && Platform) === "function" ? _a : Object, typeof (_b = typeof SplashScreen !== "undefined" && SplashScreen) === "function" ? _b : Object, typeof (_c = typeof StatusBar !== "undefined" && StatusBar) === "function" ? _c : Object])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map