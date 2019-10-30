import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ModalController } from '@ionic/angular';
import { ScSelectComponent } from '../../serving.ser/components/sc-select/sc-select.component';
let EditPage = class EditPage {
    constructor(_http, _page, modalCtrl) {
        this._http = _http;
        this._page = _page;
        this.modalCtrl = modalCtrl;
        this.model = {
            mcid: '',
            mcname: '',
            phone: '',
            email: '',
            mcs_techsystem: '' //技术系统
        };
    }
    ngOnInit() {
    }
    presentModal() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: ScSelectComponent
            });
            yield modal.present();
            //监听销毁的事件
            const { data } = yield modal.onDidDismiss();
            if (data != null && data != undefined) {
                this.model.mcid = data.id;
                this.model.mcname = data.name;
            }
        });
    }
    save() {
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