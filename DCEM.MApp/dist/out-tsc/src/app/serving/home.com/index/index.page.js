import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
let IndexPage = class IndexPage {
    constructor(menuController, statusBar, _loginInfo) {
        this.menuController = menuController;
        this.statusBar = statusBar;
        this._loginInfo = _loginInfo;
        this.IsSalingManager = false;
        this.IsSerlingManager = false;
    }
    ngOnInit() {
        //是否重叠
        //this.statusBar.overlaysWebView(true);
        this.IsSalingManager = this._loginInfo.IsSalingManager();
        this.IsSerlingManager = this._loginInfo.IsServingManager();
    }
};
IndexPage = tslib_1.__decorate([
    Component({
        selector: 'app-index',
        templateUrl: './index.page.html',
        styleUrls: ['./index.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [MenuController, StatusBar, Storage_LoginInfo])
], IndexPage);
export { IndexPage };
//# sourceMappingURL=index.page.js.map