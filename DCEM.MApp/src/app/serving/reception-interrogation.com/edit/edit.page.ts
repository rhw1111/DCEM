import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { SelectCustomerComponent } from 'app/serving/serving.ser/components/select-customer/select-customer.component';
import { Edit2Page } from 'app/serving/reception-interrogation.com/edit2/edit2.page';
import { DCore_Http, DCore_Page, DCore_ShareData } from 'app/base/base.ser/Dcem.core';

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
        public _modalCtrl: ModalController,
        public _navCtrl: NavController,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _shareData: DCore_ShareData
    ) { }

    async presentModal() {
        const modal = await this._modalCtrl.create({
            component: SelectCustomerComponent
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data != null && typeof data != "undefined") {
            if (data.vehowne != null && typeof data.vehowne != "undefined") {
                this.shareData.serviceproxy["customerid"] = data.vehowne.id;
                this.shareData.serviceproxy["fullname"] = data.vehowne.fullname;
                this.shareData.serviceproxy["vehplate"] = data.vehowne.vehplate;
                this.shareData.serviceproxy["mobilephone"] = data.vehowne.mobilephone;
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
        console.log(this.shareData);
        this._shareData.set(this.mod.shareDataKey, this.shareData);
        this._page.goto("/serving/ri/edit2");
    }
}
