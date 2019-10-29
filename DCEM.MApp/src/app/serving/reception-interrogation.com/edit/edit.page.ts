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
            vehowner: {
                id: "",
                fullname: "",
                vehplate: "",
                mobilephone: ""
            },
            customerfollowuplogArray: [],
            tagArray: []
        }
    };

    //定义共享数据
    public shareData = {
        vehowner: {
            id: "",
            fullname: "",
            vehplate: "",
            mobilephone: ""
        },
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
        console.log(data);
        if (data != null && typeof data != "undefined") {
            if (data.vehowne != null && typeof data.vehowne != "undefined") {
                this.mod.data.vehowner.id = data.vehowne.id;
                this.mod.data.vehowner.fullname = data.vehowne.fullname;
                this.mod.data.vehowner.vehplate = data.vehowne.vehplate;
                this.mod.data.vehowner.mobilephone = data.vehowne.mobilephone;
            }
        }
    }

    ngOnInit() {

    }

    public customerOnClick() {
        this.presentModal();
    }

}
