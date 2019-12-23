import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
        actionCode: 1,
        data: {},
        searchData: {

        },
        shareDataKey: "scEditData",
        mapkey: null,
    };
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _shareData: DCore_ShareData,
        private _valid: DCore_Valid,
        private _modalCtrl: ModalController,
        private _activeRoute: ActivatedRoute
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

    ionViewDidEnter() {
        if (this._shareData.has(this.mod.shareDataKey)) {
            this.shareData = this._shareData.get(this.mod.shareDataKey);
        }

        this._activeRoute.queryParams.subscribe((params: Params) => {

            if (!this._valid.isNull(params['actionCode'])) {
                this.mod.actionCode = Number(params['actionCode']);
            }
            if (this.mod.actionCode === 1) {
                this.mod.data = {};
            }
            else {
                this.mod.mapkey = params['key'];
                this.mod.data = Object.assign({}, this.shareData.serviceorderpartMap[this.mod.mapkey]);
            }
        });
    }

    //保存
    saveOnClick() {

        var errMessage = "";
        if (this._valid.isNullOrEmpty(this.mod.data["partsid"])) {
            errMessage += "您尚未未选择零件<br>";
        }
        if (this._valid.isNullOrEmpty(this.mod.data["quantity"])) {
            errMessage += "您尚未未输入数量<br>";
        }
        else if (!this._valid.isNumber(this.mod.data["quantity"])) {
            errMessage += "数量不是一个有效的数字<br>";
        }
        if (this._valid.isNullOrEmpty(this.mod.data["discount"])) {
            errMessage += "您尚未未输入折扣<br>";
        }
        else if (this.mod.data["discount"] < 0 || this.mod.data["discount"] > 1) {
            errMessage += "折扣只能输入0-1之间的数值<br>";
        }
        if (errMessage !== "") {
            this._page.presentToastError(errMessage);
            return;
        }

        this.shareData.serviceorderpartMap[this.mod.mapkey] = this.mod.data;
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

            var obj = {};

            if (this.mod.actionCode === 1)
                this.mod.mapkey = Math.random();//生成唯一编码

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
            this.shareData.serviceorderpartMap[this.mod.mapkey] = obj;
        }
    }

    //选择保修类型
    async presentRepairitemtypeModal() {
        var errMessage = "";
        if (this._valid.isNullOrEmpty(this.mod.data["partsid"])) {
            errMessage += "您尚未选择零件<br>";
        }
        if (errMessage !== "") {
            this._page.presentToastError(errMessage);
            return;
        }
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
        var errMessage = "";
        if (this._valid.isNullOrEmpty(this.mod.data["partsid"])) {
            errMessage += "您尚未选择零件<br>";
        }
        if (errMessage !== "") {
            this._page.presentToastError(errMessage);
            return;
        }
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

    //计算总金额
    caleMoney() {
        var quantity = 0;  //默认数量
        if (!this._valid.isNullOrEmpty(this.mod.data["quantity"]) && this._valid.isNumber(this.mod.data["quantity"])) {
            quantity = this.mod.data["quantity"];
        }
        var price = 0;  //默认价格
        if (!this._valid.isNullOrEmpty(this.mod.data["price"]) && this._valid.isNumber(this.mod.data["price"])) {
            price = this.mod.data["price"];
        }
        var discount = 0;  //默认比例
        if (!this._valid.isNullOrEmpty(this.mod.data["discount"]) && this._valid.isNumber(this.mod.data["discount"])) {
            discount = this.mod.data["discount"];
        }
        this.mod.data["amount"] = (quantity * price * discount).toFixed(2);
    }
}
