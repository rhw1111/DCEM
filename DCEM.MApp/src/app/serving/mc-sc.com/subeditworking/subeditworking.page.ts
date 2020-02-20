import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SelectRepairitemComponent } from 'app/serving/serving.ser/components/select-repairitem/select-repairitem.component';
import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { SelectRepairitemtypeComponent } from 'app/serving/serving.ser/components/select-repairitemtype/select-repairitemtype.component';
import { SelectRepairitemtypedetailComponent } from 'app/serving/serving.ser/components/select-repairitemtypedetail/select-repairitemtypedetail.component';

@Component({
    selector: 'app-subeditworking',
    templateUrl: './subeditworking.page.html',
    styleUrls: ['./subeditworking.page.scss'],
})
export class SubeditworkingPage implements OnInit {

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

    ionViewWillEnter() {
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
                this.mod.data = Object.assign({}, this.shareData.serviceorderrepairitemMap[this.mod.mapkey]);
            }
        });
    }

    //保存
    saveOnClick() {

        var errMessage = "";
        if (this._valid.isNullOrEmpty(this.mod.data["repairitemid"])) {
            errMessage += "您尚未未选择维修项目<br>";
        }
        if (this._valid.isNullOrEmpty(this.mod.data["workinghour"])) {
            errMessage += "您尚未未输入工时<br>";
        }
        else if (!this._valid.isNumber(this.mod.data["workinghour"])) {
            errMessage += "工时不是一个有效的数字<br>";
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

        this.shareData.serviceorderrepairitemMap[this.mod.mapkey] = this.mod.data;
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


            var obj = {};
            if (this.mod.actionCode === 1)
                this.mod.mapkey = Math.random();//生成唯一编码

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
            this.shareData.serviceorderrepairitemMap[this.mod.mapkey] = obj;
        }

    }


    //选择维修类型
    async presentRepairitemtypeModal() {
        var errMessage = "";
        if (this._valid.isNullOrEmpty(this.mod.data["repairitemid"])) {
            errMessage += "您尚未选择维修项目<br>";
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

    //选择维修类别
    async presentRepairitemtypedetailModal() {
        var errMessage = "";
        if (this._valid.isNullOrEmpty(this.mod.data["repairitemid"])) {
            errMessage += "您尚未选择维修项目<br>";
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
        var workinghour = 0;  //默认数量
        if (!this._valid.isNullOrEmpty(this.mod.data["workinghour"]) && this._valid.isNumber(this.mod.data["workinghour"])) {
            workinghour = this.mod.data["workinghour"];
        }
        var price = 0;  //默认价格
        if (!this._valid.isNullOrEmpty(this.mod.data["price"]) && this._valid.isNumber(this.mod.data["price"])) {
            price = this.mod.data["price"];
        }
        var discount = 0;  //默认比例
        if (!this._valid.isNullOrEmpty(this.mod.data["discount"]) && this._valid.isNumber(this.mod.data["discount"])) {
            discount = this.mod.data["discount"];
        }
        this.mod.data["repairamount"] = (workinghour * price * discount).toFixed(2);
    }

}
