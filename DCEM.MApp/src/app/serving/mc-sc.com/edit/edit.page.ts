import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { SelectRepairlocationComponent } from 'app/serving/serving.ser/components/select-repairlocation/select-repairlocation.component';
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
        shareDataKey: "scEditData"
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

    async presentCustomerModal() {
        const modal = await this._modalCtrl.create({
            component: SelectCustomerComponent
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data != null && typeof data != "undefined") {
            if (data.vehowne != null && typeof data.vehowne != "undefined") {
                this.shareData.serviceproxy["customerid"] = data.vehowne.vehownerid;
                this.shareData.serviceproxy["customername"] = data.vehowne.fullname;
                this.shareData.serviceproxy["carplate"] = data.vehowne.vehplate;
                this.shareData.serviceproxy["customerphone"] = data.vehowne.mobilephone;
            }
        }
    }


    async presentRepairlocationModal() {
        const modal = await this._modalCtrl.create({
            component: SelectRepairlocationComponent
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data != null && typeof data != "undefined") {
            if (data.repairlocation != null && typeof data.repairlocation != "undefined") {
                this.shareData.serviceproxy["repairlocationid"] = data.repairlocation["model"]["mcs_repairlocationid"];
                this.shareData.serviceproxy["repairlocationname"] = data.repairlocation["model"]["mcs_name"];
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
        this.presentCustomerModal();
    }

    public repairlocationOnClick() {
        this.presentRepairlocationModal();
    }

    public nextOnClick() {

        if (this._valid.isNull(this.shareData.serviceproxy["customerid"])) {
            this._page.alert("消息提示", "请选择客户");
            return;
        }

        if (this._valid.isNull(this.shareData.serviceproxy["repairlocationid"])) {
            this._page.alert("消息提示", "请选择工位");
            return;
        }

        this._shareData.set(this.mod.shareDataKey, this.shareData);
        this._page.goto("/serving/sc/edit2");
    }
}
