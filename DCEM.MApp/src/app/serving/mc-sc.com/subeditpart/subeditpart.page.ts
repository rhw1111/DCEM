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

    dismissModal() {
        this._modalCtrl.dismiss({
        });
    }

    //选择维修配件
    async presentPartModal() {
        const modal = await this._modalCtrl.create({
            component: SelectPartsComponent
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (!this._valid.isNull(data) && !this._valid.isNull(data["maintenance"])) {

            this.mod.searchData["maintenance"] = {};
            this.mod.searchData["maintenance"]["name"] = data["maintenance"]["model"]["mcs_name"];
            this.mod.searchData["maintenance"]["id"] = data["maintenance"]["model"]["mcs_maintenanceid"];

            var obj = {};
            var mapkey = "";//生成唯一编码
            obj["name"] = data["maintenance"]["model"]["mcs_repairitemcode"];  //名称
            obj["repairitemid"] = data["maintenance"]["model"]["mcs_repairiteminfoid"];
            obj["repairitemid_formatte"] = data["maintenance"]["model"]["mcs_name"];  //代码
            obj["workinghour"] = data["maintenance"]["model"]["mcs_workinghour"];     //工时
            obj["price"] = data["maintenance"]["model"]["ext_price"];          //单价
            obj["discount"] = 1;                                                                  //折扣
            obj["repairamount"] = obj["price"] * obj["workinghour"];                              //总价
            obj["repairitemtypeid"] = data["maintenance"]["model"]["ext_repairitemtypeid"];                                      //维修类别  
            obj["repairitemtypeid_formatted"] = data["maintenance"]["model"]["ext_repairitemtypeid_formatted"];                  //维修类别 
            obj["repairitemtypedetailid"] = data["maintenance"]["model"]["ext_repairitemtypedetailid"];                          //维修类型 
            obj["repairitemtypedetailid_formatted"] = data["maintenance"]["model"]["ext_repairitemtypedetailid_formatted"];      //维修类型
            this.mod.data = obj;
        }
    }


}
