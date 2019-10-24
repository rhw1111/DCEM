import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../base/base.ser/http-service.service';
import { NavController } from '@ionic/angular';
let ListPage = class ListPage {
    constructor(router, navCtrl, httpService) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this.ListAll = [];
    }
    ngOnInit() {
        this.showlist("");
    }
    showlist(id) {
        var response = this.httpService.getForToaken("/api/appointment-info/GetList?status=" + id + "&search=", null);
        response.subscribe((res) => {
            if (res != null && res.success == true) {
                console.log('get res=' + res.data);
                this.ListAll = res.data;
            }
        });
    }
};
ListPage = tslib_1.__decorate([
    Component({
        selector: 'app-list',
        templateUrl: './list.page.html',
        styleUrls: ['./list.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Router, NavController, HttpService])
], ListPage);
export { ListPage };
//# sourceMappingURL=list.page.js.map