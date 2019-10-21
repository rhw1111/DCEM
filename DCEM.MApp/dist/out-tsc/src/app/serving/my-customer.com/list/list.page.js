import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
let ListPage = class ListPage {
    constructor(httpClient, alertCtr) {
        this.httpClient = httpClient;
        this.alertCtr = alertCtr;
    }
    ngOnInit() {
        const httpGet = this.httpClient.get('https://subcrmdevapi.sokon.com/dcem/api/test/Test1', {
            params: {}
        });
        httpGet.subscribe((res) => {
            this.presentAlert('��Ϣ��ʾ', '�������ֻ�����');
        }, (err) => {
        });
    }
    // ������ʾ
    presentAlert(header, message) {
        const alert = this.alertCtr.create({
            header,
            message,
            buttons: ['ȷ��']
        });
        alert.then(a => {
            a.present();
        });
    }
};
ListPage = tslib_1.__decorate([
    Component({
        selector: 'app-list',
        templateUrl: './list.page.html',
        styleUrls: ['./list.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        AlertController])
], ListPage);
export { ListPage };
//# sourceMappingURL=list.page.js.map