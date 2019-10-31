import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { SelectCustomerComponent } from 'app/serving/serving.ser/components/select-customer/select-customer.component';
import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid } from 'app/base/base.ser/Dcem.core';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.page.html',
    styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

    mod = {
        apiUrl: '/Api/Customer/GetCustomerInfo',
        data: {
        },
        shareDataKey: "riEditData"
    };

    //定义共享数据
    shareData = {
        serviceproxy: {
        },
        vehcheckresultMap: {},
    }

    constructor(
        private _modalCtrl: ModalController,
        private _navCtrl: NavController,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _shareData: DCore_ShareData,
        private _valid: DCore_Valid
    ) { }

    async presentModal() {
        const modal = await this._modalCtrl.create({
            component: SelectCustomerComponent
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data != null && typeof data != "undefined") {
            if (data.vehowne != null && typeof data.vehowne != "undefined") {
                console.log(data.vehowne);
                this.shareData.serviceproxy["customerid"] = data.vehowne.vehownerid;
                this.shareData.serviceproxy["customername"] = data.vehowne.fullname;
                this.shareData.serviceproxy["carplate"] = data.vehowne.vehplate;
                this.shareData.serviceproxy["customerphone"] = data.vehowne.mobilephone;
            }
        }
    }

    ngOnInit() {
        var getShareData = this._shareData.get(this.mod.shareDataKey);
        if (getShareData != null) {
            this.shareData = getShareData;
        }
    }

    public customerOnClick() {
        this.presentModal();
    }

    public nextOnClick() {
        if (this._valid.isNull(this.shareData.serviceproxy["customerid"])) {
            this._page.alert("消息提示", "请先选择客户");
            return;
        }

        this._shareData.set(this.mod.shareDataKey, this.shareData);
        this._page.goto("/serving/ri/edit2");
    }
}
