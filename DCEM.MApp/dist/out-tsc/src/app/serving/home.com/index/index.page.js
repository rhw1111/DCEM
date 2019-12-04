import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
let IndexPage = class IndexPage {
    constructor(menuController, statusBar) {
        this.menuController = menuController;
        this.statusBar = statusBar;
    }
    ngOnInit() {
        //是否重叠
        //this.statusBar.overlaysWebView(true);
    }
};
IndexPage = tslib_1.__decorate([
    Component({
        selector: 'app-index',
        templateUrl: './index.page.html',
        styleUrls: ['./index.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [MenuController, StatusBar])
], IndexPage);
export { IndexPage };
//# sourceMappingURL=index.page.js.map