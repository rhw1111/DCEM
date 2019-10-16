import * as tslib_1 from "tslib";
var _a, _b;
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../base/base.ser/http-service.service';
import { NavController } from '@ionic/angular';
let AppointmentPage = class AppointmentPage {
    constructor(router, navCtrl, httpService) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this.ListAll = [];
    }
    ngOnInit() {
        this.showlist(0);
    }
    addTestDrive() {
        this.navCtrl.navigateForward('test-drive-add');
    }
    showDetail(item) {
        this.router.navigate(['test-drive-detail'], {
            queryParams: {
                Item: JSON.stringify(item)
            }
        });
    }
    showlist(id) {
        var response = this.httpService.getForToaken("/api/TestDrive/get?status=" + id, null);
        response.subscribe((res) => {
            if (res != null && res.success == true) {
                this.ListAll = res.datas;
                this.spanColor1 = "";
                this.spanColor2 = "";
                this.spanColor3 = "";
                this.spanColor4 = "";
                switch (id) {
                    case 0:
                        this.spanColor1 = "success";
                        break;
                    case 1:
                        this.spanColor2 = "success";
                        break;
                    case 2:
                        this.spanColor3 = "success";
                        break;
                    case 3:
                        this.spanColor4 = "success";
                        break;
                }
            }
        });
    }
};
AppointmentPage = tslib_1.__decorate([
    Component({
        selector: 'app-appointment',
        templateUrl: './appointment.page.html',
        styleUrls: ['./appointment.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Router !== "undefined" && Router) === "function" ? _a : Object, typeof (_b = typeof NavController !== "undefined" && NavController) === "function" ? _b : Object, HttpService])
], AppointmentPage);
export { AppointmentPage };
//# sourceMappingURL=appointment.page.js.map