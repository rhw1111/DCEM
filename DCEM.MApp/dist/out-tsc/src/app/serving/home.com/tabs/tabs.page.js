import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Events, LoadingController, MenuController } from "@ionic/angular";
import { DCore_Config, DCore_Page, DCore_Http } from 'app/base/base.ser/Dcem.core';
let TabsPage = class TabsPage {
    constructor(events, loadingCtrl, _config, _page, _http, menuController) {
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this._config = _config;
        this._page = _page;
        this._http = _http;
        this.menuController = menuController;
    }
    ngOnInit() {
    }
    //每次进入页面时，我们将初始化禁用侧滑菜单
    ionViewDidEnter() {
        this.menuController.enable(false);
    }
};
TabsPage = tslib_1.__decorate([
    Component({
        selector: 'app-tabs',
        templateUrl: './tabs.page.html',
        styleUrls: ['./tabs.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Events,
        LoadingController,
        DCore_Config,
        DCore_Page,
        DCore_Http,
        MenuController])
], TabsPage);
export { TabsPage };
//# sourceMappingURL=tabs.page.js.map