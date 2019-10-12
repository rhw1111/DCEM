import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
let HomePage = class HomePage {
    constructor(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.testDriveList = [
            {
                Id: 1,
                UserName: "张一帆",
                PhoneNumber: "1802890098",
                Date: "2019-11-01",
                StartTime: "14:00:00",
                EndTime: "17:00:00",
                VehicleType: "S01",
                Remark: "试乘试驾",
                Status: 1
            },
            {
                Id: 2,
                UserName: "张一帆",
                PhoneNumber: "1802890098",
                Date: "2019-11-01",
                StartTime: "14:00:00",
                EndTime: "17:00:00",
                VehicleType: "S01",
                Remark: "试乘试驾",
                Status: 0
            },
            {
                Id: 3,
                UserName: "张一帆",
                PhoneNumber: "1802890098",
                Date: "2019-11-01",
                StartTime: "14:00:00",
                EndTime: "17:00:00",
                VehicleType: "S01",
                Remark: "试乘试驾",
                Status: 1
            },
            {
                Id: 4,
                UserName: "张一帆",
                PhoneNumber: "1802890098",
                Date: "2019-11-01",
                StartTime: "14:00:00",
                EndTime: "17:00:00",
                VehicleType: "S01",
                Remark: "试乘试驾",
                Status: 2
            }
        ];
    }
    showDetail(item) {
        this.router.navigate(['test-drive-detail'], {
            queryParams: {
                Item: JSON.stringify(item)
            }
        });
    }
    toRedict(url) {
        this.navCtrl.navigateForward(url);
    }
};
HomePage = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: 'home.page.html',
        styleUrls: ['home.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController, Router])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map