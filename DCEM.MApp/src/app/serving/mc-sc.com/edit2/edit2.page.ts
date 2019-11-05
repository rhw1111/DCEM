import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { DCore_Http, DCore_Page, DCore_ShareData } from 'app/base/base.ser/Dcem.core';
import { SelectCarmodelComponent } from 'app/serving/serving.ser/components/select-carmodel/select-carmodel.component';
import { SelectMaintenanceComponent } from 'app/serving/serving.ser/components/select-maintenance/select-maintenance.component';


@Component({
    selector: 'app-edit2',
    templateUrl: './edit2.page.html',
    styleUrls: ['./edit2.page.scss'],
})
export class Edit2Page implements OnInit {

    //定义数据模型
    mod = {
        apiUrl: '/Api/Serviceproxy/GetVehcheckresultList',
        postApiUrl: '/Api/Serviceproxy/AddOrUpdate',
        data: {

        },
        postData: {},
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
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _shareData: DCore_ShareData
    ) {

    }
    objectKeys = Object.keys;

    //选择车型
    async presentCarmodelModal() {
        const modal = await this._modalCtrl.create({
            component: SelectCarmodelComponent
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data != null && typeof data != "undefined") {
            //if (data.repairlocation != null && typeof data.repairlocation != "undefined") {
            //    //this.shareData.serviceproxy["repairlocationid"] = data.repairlocation["model"]["mcs_repairlocationid"];
            //    //this.shareData.serviceproxy["repairlocationname"] = data.repairlocation["model"]["mcs_name"];
            //}
        }
    }

    //选择保养项
    async presentMaintenanceModal() {
        const modal = await this._modalCtrl.create({
            component: SelectMaintenanceComponent
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data != null && typeof data != "undefined") {
            //if (data.repairlocation != null && typeof data.repairlocation != "undefined") {
            //    //this.shareData.serviceproxy["repairlocationid"] = data.repairlocation["model"]["mcs_repairlocationid"];
            //    //this.shareData.serviceproxy["repairlocationname"] = data.repairlocation["model"]["mcs_name"];
            //}
        }
    }


    ngOnInit() {


    }

    saveOnClick(){
        
    }

}
