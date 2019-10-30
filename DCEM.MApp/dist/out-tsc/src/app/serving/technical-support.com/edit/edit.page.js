import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ModalController } from '@ionic/angular';
import { ScSelectComponent } from '../../serving.ser/components/sc-select/sc-select.component';
import { SelectCustomerComponent } from '../../serving.ser/components/select-customer/select-customer.component';
let EditPage = class EditPage {
    constructor(_http, _page, modalCtrl) {
        this._http = _http;
        this._page = _page;
        this.modalCtrl = modalCtrl;
        this.model = {
            postApiUrl: '/api/tech-support/AddOrEdit',
            viewData: {
                mcs_serviceorderid_name: '',
                vin: '',
                fullname: '',
                mcs_batterymodel: '',
                mcs_batteryserialnumber: '',
                mcs_carplate: '',
                mcs_customername: '',
                mcs_customerphone: '',
                mcs_enginenumber: '',
                mcs_modifiedpartscontent: '',
                mcs_mileage: 0
            },
            postData: {
                Id: '',
                name: '',
                mcs_title: '',
                mcs_repairnameid: '',
                mcs_serviceadvisorid: '',
                mcs_serviceorderid: '',
                mcs_email: '',
                mcs_phone: '',
                mcs_customerid: '',
                mcs_ismodifiedparts: false,
                mcs_mileage: '',
                mcs_malfunctiontypeid: '',
                mcs_diagnosiscontent: '',
                mcs_malfunctioncontent: '',
                mcs_replacedparts: '',
                mcs_techqueries: '',
                mcs_techsystem: ''
            }
        };
    }
    ngOnInit() {
    }
    //选择服务委托书模式窗口
    presentServiceModal() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: ScSelectComponent
            });
            yield modal.present();
            //监听销毁的事件
            const { data } = yield modal.onDidDismiss();
            if (data != null && data != undefined) {
                this.model.postData.mcs_serviceorderid = data.id;
                this.model.viewData.mcs_serviceorderid_name = data.name;
            }
        });
    }
    //选择客户模式窗口
    presentCustomerModal() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: SelectCustomerComponent
            });
            yield modal.present();
            //监听销毁的事件
            const { data } = yield modal.onDidDismiss();
            if (data != null && data != undefined) {
                this.model.postData.mcs_customerid = data.model.Id;
                this.model.viewData.fullname = data.model.fullname;
                this.model.viewData.vin = data.model.name;
                this.model.viewData.mcs_batterymodel = data.model.mcs_batterymodel;
                this.model.viewData.mcs_batteryserialnumber = data.model.mcs_batteryserialnumber;
                this.model.viewData.mcs_carplate = data.model.mcs_carplate;
                this.model.viewData.mcs_customername = data.model.mcs_customername;
                this.model.viewData.mcs_customerphone = data.model.mobilephone;
                this.model.viewData.mcs_enginenumber = data.model.mcs_enginenumber;
                this.model.viewData.mcs_modifiedpartscontent = data.model.mcs_modifiedpartscontent;
                //this.model.viewData.mcs_ismodifiedparts = data.mcs_ismodifiedparts;
                this.model.viewData.mcs_mileage = data.mcs_mileage;
            }
        });
    }
    save() {
        this._page.loadingShow();
        //数据验证
        //请求
        this._http.post(this.model.postApiUrl, this.model.postData, (res) => {
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "请求异常");
            this._page.loadingHide();
        });
    }
    changePhone(value) {
        // 去除空格
        const phone = value.replace(/\s/g, '');
        const ischeck = /^(13[0-9]|14[5|7|9]|15[0|1|2|3|5|6|7|8|9]|16[6]|17[0|1|2|3|5|6|7|8]|18[0-9]|19[8|9])\d{8}$/;
        if (!ischeck.test(phone)) {
            this.model.phone = '';
            //super.showToast(this.toastCtrl, '请输入正确的手机号');
        }
    }
    changeEmail(value) {
        const ischeck = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value);
        if (!ischeck) {
            this.model.email = '';
            //super.showToast(this.toastCtrl, '请输入正确的邮箱格式');
        }
    }
};
EditPage = tslib_1.__decorate([
    Component({
        selector: 'app-edit',
        templateUrl: './edit.page.html',
        styleUrls: ['./edit.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [DCore_Http,
        DCore_Page,
        ModalController])
], EditPage);
export { EditPage };
//# sourceMappingURL=edit.page.js.map