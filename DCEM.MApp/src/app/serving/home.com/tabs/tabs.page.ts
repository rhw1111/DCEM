import { Component, OnInit } from '@angular/core';
import {Events,LoadingController,MenuController} from "@ionic/angular";
import { DCore_Config,DCore_Page,DCore_Http } from 'app/base/base.ser/Dcem.core';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.page.html',
    styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

    constructor(private events: Events,
        private loadingCtrl:LoadingController,
        private _config:DCore_Config,
        private _page:DCore_Page,
        private _http:DCore_Http,
        private menuController: MenuController
        ) { }

    ngOnInit() {
    }

    //每次进入页面时，我们将初始化禁用侧滑菜单
    ionViewWillEnter() {   
        this.menuController.enable(false);
    }
}
