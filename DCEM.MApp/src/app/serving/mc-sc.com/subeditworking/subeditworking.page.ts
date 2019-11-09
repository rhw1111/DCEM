import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectRepairitemComponent } from 'app/serving/serving.ser/components/select-repairitem/select-repairitem.component';
import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid } from 'app/base/base.ser/Dcem.core';
@Component({
    selector: 'app-subeditworking',
    templateUrl: './subeditworking.page.html',
    styleUrls: ['./subeditworking.page.scss'],
})
export class SubeditworkingPage implements OnInit {

    mod = {
        data: {},
        searchData: {

        },
        shareDataKey: "scEditData"
    };
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _shareData: DCore_ShareData,
        private _valid: DCore_Valid,
        private _modalCtrl: ModalController) { }

    ngOnInit() {
    }

    //定义共享数据
    shareData = {
        serviceproxy: {
        },
        serviceorderrepairitemMap: {},
        serviceorderpartMap: {},
    }

    ionViewWillEnter() {
        if (this._shareData.has(this.mod.shareDataKey)) {
            this.shareData = this._shareData.get(this.mod.shareDataKey);
        }
    }

    //保存
    saveOnClick() {
        this._shareData.set(this.mod.shareDataKey, this.shareData);
        this._page.goto("/serving/sc/edit2");
    }

    //选择维修配件
    async presentWorkingModal() {
        const modal = await this._modalCtrl.create({
            component: SelectRepairitemComponent
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (!this._valid.isNull(data) && !this._valid.isNull(data["repairitem"])) {

            console.log(data);
            var obj = {};
            var mapkey = Math.random();//生成唯一编码

            obj["name"] = data["repairitem"]["model"]["mcs_repairitemcode"];
            obj["code"] = data["repairitem"]["model"]["mcs_name"];
            obj["repairitemid"] = data["repairitem"]["model"]["mcs_repairiteminfoid"];

            obj["repairitemtypeid"] = data["repairitem"]["model"]["ext_repairitemtypeid"];
            obj["repairitemtypedetailid"] = data["repairitem"]["model"]["ext_repairitemtypedetailid"];
            obj["repairitemtypeid_Formatted"] = data["repairitem"]["model"]["ext_repairitemtypeid_formatted"];
            obj["repairitemtypedetailid_Formatted"] = data["repairitem"]["model"]["ext_repairitemtypedetailid_formatted"];

            obj["workinghour"] = data["repairitem"]["model"]["mcs_workinghour"];
            obj["price"] = data["repairitem"]["model"]["ext_price"];
            obj["discount"] = 1;
            obj["repairamount"] = obj["workinghour"] * obj["price"];


            this.mod.data = obj;
            this.shareData.serviceorderrepairitemMap[mapkey] = obj;
        }

    }
}
