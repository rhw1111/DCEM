import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { SelectCustomerComponent } from 'app/serving/serving.ser/components/select-customer/select-customer.component';
import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid } from 'app/base/base.ser/Dcem.core';
let EditPage = class EditPage {
    constructor(_modalCtrl, _navCtrl, _http, _page, _shareData, _valid) {
        this._modalCtrl = _modalCtrl;
        this._navCtrl = _navCtrl;
        this._http = _http;
        this._page = _page;
        this._shareData = _shareData;
        this._valid = _valid;
        this.mod = {
            apiUrl: '/Api/Customer/GetCustomerInfo',
            data: {},
            shareDataKey: "riEditData"
        };
        //定义共享数据
        this.shareData = {
            serviceproxy: {},
            vehcheckresultMap: {},
        };
    }
    presentModal() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this._modalCtrl.create({
                component: SelectCustomerComponent
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data != null && typeof data != "undefined") {
                if (data.vehowne != null && typeof data.vehowne != "undefined") {
                    console.log(data.vehowne);
                    this.shareData.serviceproxy["customerid"] = data.vehowne.vehownerid;
                    this.shareData.serviceproxy["customername"] = data.vehowne.fullname;
                    this.shareData.serviceproxy["carplate"] = data.vehowne.vehplate;
                    this.shareData.serviceproxy["customerphone"] = data.vehowne.mobilephone;
                }
            }
        });
    }
    ngOnInit() {
        var getShareData = this._shareData.get(this.mod.shareDataKey);
        if (getShareData != null) {
            this.shareData = getShareData;
        }
    }
    customerOnClick() {
        this.presentModal();
    }
    nextOnClick() {
        if (this._valid.isNull(this.shareData.serviceproxy["customerid"])) {
            this._page.alert("消息提示", "请先选择客户");
            return;
        }
        this._shareData.set(this.mod.shareDataKey, this.shareData);
        this._page.goto("/serving/ri/edit2");
    }
};
EditPage = tslib_1.__decorate([
    Component({
        selector: 'app-edit',
        templateUrl: './edit.page.html',
        styleUrls: ['./edit.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController,
        NavController,
        DCore_Http,
        DCore_Page,
        DCore_ShareData,
        DCore_Valid])
], EditPage);
export { EditPage };
//# sourceMappingURL=edit.page.js.map