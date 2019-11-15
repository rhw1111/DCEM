﻿import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectPartsComponent } from 'app/serving/serving.ser/components/select-parts/select-parts.component';
import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { SelectRepairitemtypeComponent } from 'app/serving/serving.ser/components/select-repairitemtype/select-repairitemtype.component';
import { SelectRepairitemtypedetailComponent } from 'app/serving/serving.ser/components/select-repairitemtypedetail/select-repairitemtypedetail.component';

@Component({
    selector: 'app-subeditpart',
    templateUrl: './subeditpart.page.html',
    styleUrls: ['./subeditpart.page.scss'],
})
export class SubeditpartPage implements OnInit {

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
        private _modalCtrl: ModalController
    ) { }

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
        console.log(this.shareData);
    }

    //保存
    saveOnClick() {
        console.log(this.shareData);
        this._shareData.set(this.mod.shareDataKey, this.shareData);
        this._page.goto("/serving/sc/edit2");
    }

    //选择维修配件
    async presentPartModal() {
        const modal = await this._modalCtrl.create({
            component: SelectPartsComponent
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (!this._valid.isNull(data) && !this._valid.isNull(data["parts"])) {
            console.log(data);
            var obj = {};
            var mapkey = Math.random();//生成唯一编码

            obj["name"] = data["parts"]["model"]["mcs_partscode"];
            obj["code"] = data["parts"]["model"]["mcs_name"];
            obj["partsid"] = data["parts"]["model"]["mcs_partsid"];

            obj["repairitemtypeid"] = data["parts"]["model"]["ext_repairitemtypeid"];
            obj["repairitemtypedetailid"] = data["parts"]["model"]["ext_repairitemtypedetailid"];
            obj["repairitemtypeid_Formatted"] = data["parts"]["model"]["ext_repairitemtypeid_formatted"];
            obj["repairitemtypedetailid_Formatted"] = data["parts"]["model"]["ext_repairitemtypedetailid_formatted"];

            obj["quantity"] = 1;
            obj["price"] = data["parts"]["model"]["ext_price"];
            obj["discount"] = 1;
            obj["amount"] = data["parts"]["model"]["ext_price"];

            this.mod.data = obj;
            this.shareData.serviceorderpartMap[mapkey] = obj;
        }
    }

    //选择保修类型
    async presentRepairitemtypeModal() {
        const modal = await this._modalCtrl.create({
            component: SelectRepairitemtypeComponent
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (!this._valid.isNull(data) && !this._valid.isNull(data["item"])) {
            this.mod.data["repairitemtypeid"] = data["item"]["model"]["mcs_repairitemtypeid"];
            this.mod.data["repairitemtypeid_Formatted"] = data["item"]["model"]["mcs_name"];
        }


    }

    //选择保修类别
    async presentRepairitemtypedetailModal() {
        const modal = await this._modalCtrl.create({
            component: SelectRepairitemtypedetailComponent
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (!this._valid.isNull(data) && !this._valid.isNull(data["item"])) {
            this.mod.data["repairitemtypedetailid"] = data["item"]["model"]["mcs_repairitemtypedetailid"];
            this.mod.data["repairitemtypedetailid_Formatted"] = data["item"]["model"]["mcs_name"];
        }
    }
}
