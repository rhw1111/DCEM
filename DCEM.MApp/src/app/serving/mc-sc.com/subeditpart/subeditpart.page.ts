import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectPartsComponent } from 'app/serving/serving.ser/components/select-parts/select-parts.component';
import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid } from 'app/base/base.ser/Dcem.core';
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
        console.log(data);
        if (!this._valid.isNull(data) && !this._valid.isNull(data["parts"])) {
            console.log(data);
            var obj = {};
            var mapkey = Math.random();//生成唯一编码
            obj["partsid"] = data["parts"]["model"]["Id"];
            obj["partsname"] = data["parts"]["model"]["mcs_partscode"];          //零件名称
            obj["partscode"] = data["parts"]["model"]["mcs_name"];              //零件代码
            obj["price"] = data["parts"]["model"]["ext_price"];                 //单价
            obj["quantity"] = 1;                                                                   //数量
            obj["amount"] = data["parts"]["model"]["ext_price"];                                                          //总金额
            obj["discount"] = 1;                                                                   //折扣
            obj["repairitemtypeid"] = data["parts"]["model"]["ext_repairitemtypeid"];                                      //维修类别  
            obj["repairitemtypeid_formatted"] = data["parts"]["model"]["ext_repairitemtypeid_formatted"];                  //维修类别 
            obj["repairitemtypedetailid"] = data["parts"]["model"]["ext_repairitemtypedetailid"];                          //维修类型 
            obj["repairitemtypedetailid_formatted"] = data["parts"]["model"]["ext_repairitemtypedetailid_formatted"];      //维修类型
            this.mod.data = obj;
            this.shareData.serviceorderpartMap[mapkey] = obj;
        }
    }


}
