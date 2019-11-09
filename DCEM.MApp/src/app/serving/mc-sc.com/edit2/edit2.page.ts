import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { SelectCarmodelComponent } from 'app/serving/serving.ser/components/select-carmodel/select-carmodel.component';
import { SelectMaintenanceComponent } from 'app/serving/serving.ser/components/select-maintenance/select-maintenance.component';
import { SubeditworkingPage } from 'app/serving/mc-sc.com/subeditworking/subeditworking.page';
import { SubeditpartPage } from 'app/serving/mc-sc.com/subeditpart/subeditpart.page';

@Component({
    selector: 'app-edit2',
    templateUrl: './edit2.page.html',
    styleUrls: ['./edit2.page.scss'],
})
export class Edit2Page implements OnInit {

    //定义数据模型
    mod = {
        searchApiUrl: '/Api/Serviceproxy/GetMaintenanceInfo',
        postApiUrl: '/Api/Serviceproxy/AddOrUpdate',
        data: {

        },
        searchData: {
            carmodel: {},
            maintenance: {}
        },
        postData: {},
        shareDataKey: "scEditData"
    };

    //定义共享数据
    shareData = {
        actioncode: 1,
        viewTitle: "",
        serviceproxy: {
        },
        serviceorderrepairitemMap: {},
        serviceorderpartMap: {},
    }

    objectKeys = Object.keys;

    //控制器 初始化
    constructor(
        private _modalCtrl: ModalController,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _shareData: DCore_ShareData,
        private _valid: DCore_Valid
    ) {

    }
    ionViewWillEnter() {
        if (this._shareData.has(this.mod.shareDataKey)) {
            this.shareData = this._shareData.get(this.mod.shareDataKey);
        }
    }

    //ng初始化
    ngOnInit() {

    }

    //选择车型
    async presentCarmodelModal() {
        const modal = await this._modalCtrl.create({
            component: SelectCarmodelComponent
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (!this._valid.isNull(data) && !this._valid.isNull(data["carmodel"])) {
            this.mod.searchData["carmodel"] = {};
            this.mod.searchData["carmodel"]["name"] = data["carmodel"]["model"]["mcs_name"];
            this.mod.searchData["carmodel"]["id"] = data["carmodel"]["model"]["mcs_carmodelid"];
        }
    }

    //选择保养项
    async presentMaintenanceModal() {
        const modal = await this._modalCtrl.create({
            component: SelectMaintenanceComponent
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (!this._valid.isNull(data) && !this._valid.isNull(data["maintenance"])) {
            this.mod.searchData["maintenance"] = {};
            this.mod.searchData["maintenance"]["name"] = data["maintenance"]["model"]["mcs_name"];
            this.mod.searchData["maintenance"]["id"] = data["maintenance"]["model"]["mcs_maintenanceid"];
        }
    }

    //搜索保养项
    searchOnClick() {
        if (this._valid.isNull(this.mod.searchData["carmodel"]["id"])) {
            this._page.alert("消息提示", "请先选择车型");
            return;
        }
        if (this._valid.isNull(this.mod.searchData["maintenance"]["id"])) {
            this._page.alert("消息提示", "请先选择保养项");
            return;
        }
        console.log(this.shareData.serviceproxy["dealerid"]);
        if (this._valid.isNull(this.shareData.serviceproxy["dealerid"])) {
            this._page.alert("消息提示", "未包含厅店数据无法进行查询");
            return;
        }
        this._page.loadingShow();
        this._http.get(
            this.mod.searchApiUrl,
            {
                params: {
                    maintenanceGuid: this.mod.searchData["maintenance"]["id"],
                    dealeridGuid: this.shareData.serviceproxy["dealerid"]
                }
            },
            (res: any) => {
                if (res !== null) {

                    this.shareData.serviceorderrepairitemMap = {};
                    //加维修项目
                    for (var key in res.MaintenanceiteminfoList) {
                        var obj = {};
                        var mapkey = Math.random();//生成唯一编码

                        obj["name"] = res.MaintenanceiteminfoList[key]["Attributes"]["mcs_repairitemcode"];
                        obj["code"] = res.MaintenanceiteminfoList[key]["Attributes"]["mcs_name"];
                        obj["repairitemid"] = res.MaintenanceiteminfoList[key]["Id"];

                        obj["repairitemtypeid"] = res.MaintenanceiteminfoList[key]["Attributes"]["ext_repairitemtypeid"];
                        obj["repairitemtypedetailid"] = res.MaintenanceiteminfoList[key]["Attributes"]["ext_repairitemtypedetailid"];
                        obj["repairitemtypeid_Formatted"] = res.MaintenanceiteminfoList[key]["Attributes"]["ext_repairitemtypeid_formatted"];
                        obj["repairitemtypedetailid_Formatted"] = res.MaintenanceiteminfoList[key]["Attributes"]["ext_repairitemtypedetailid_formatted"];

                        obj["workinghour"] = res.MaintenanceiteminfoList[key]["Attributes"]["mcs_workinghour"];
                        obj["price"] = res.MaintenanceiteminfoList[key]["Attributes"]["ext_price"];
                        obj["discount"] = 1;
                        obj["repairamount"] = obj["workinghour"] * obj["price"];

                        this.shareData.serviceorderrepairitemMap[mapkey] = obj;
                    }
                    this.shareData.serviceorderpartMap = {};
                    //加零件
                    for (var key in res.RepairitempartList) {
                        var obj = {};
                        var mapkey = Math.random();//生成唯一编码

                        obj["name"] = res.RepairitempartList[key]["Attributes"]["mcs_partscode"];
                        obj["code"] = res.RepairitempartList[key]["Attributes"]["mcs_name"];
                        obj["partsid"] = res.RepairitempartList[key]["Id"];

                        obj["repairitemtypeid"] = res.RepairitempartList[key]["Attributes"]["ext_repairitemtypeid"];
                        obj["repairitemtypedetailid"] = res.RepairitempartList[key]["Attributes"]["ext_repairitemtypedetailid"];
                        obj["repairitemtypeid_Formatted"] = res.RepairitempartList[key]["Attributes"]["ext_repairitemtypeid_formatted"];
                        obj["repairitemtypedetailid_Formatted"] = res.RepairitempartList[key]["Attributes"]["ext_repairitemtypedetailid_formatted"];

                        obj["quantity"] = 1;
                        obj["price"] = res.RepairitempartList[key]["Attributes"]["ext_price"];
                        obj["discount"] = 1;
                        obj["amount"] = res.RepairitempartList[key]["Attributes"]["ext_price"];
                        this.shareData.serviceorderpartMap[mapkey] = obj;
                    }
                    this._page.loadingHide();
                }
                else {
                    this._page.alert("消息提示", "数据加载异常");
                    this._page.loadingHide();
                }

            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");
                this._page.loadingHide();
            }
        );


    }

    //维修项目新增 编辑
    workingEditClick() {
        this._shareData.set(this.mod.shareDataKey, this.shareData);
        this._page.goto("/serving/sc/subeditworking");
    }


    //维修配件新增 编辑
    partEditClick() {
        this._shareData.set(this.mod.shareDataKey, this.shareData);
        this._page.goto("/serving/sc/subeditpart");
    }

    //移除维修项目
    workingDeleteClick(mapkey) {
        delete this.shareData.serviceorderrepairitemMap[mapkey];
    }

    //移除维修配件
    partDeleteClick(mapkey) {
        delete this.shareData.serviceorderpartMap[mapkey];
    }

    //移除零件


    //提交保存
    public saveOnClick() {

        this.mod.postData["actioncode"] = this.shareData.actioncode;

        //组装服务委托书
        this.mod.postData["serviceproxy"] = {};
        if (this.shareData["actioncode"] === 2)
            this.mod.postData["serviceproxy"]["serviceproxyid"] = this.shareData.serviceproxy["serviceproxyid"];     //服务委托书ID
        this.mod.postData["serviceproxy"]["currenttype"] = 20;
        this.mod.postData["serviceproxy"]["customerid"] = this.shareData.serviceproxy["customerid"];     //车辆VIN
        this.mod.postData["serviceproxy"]["dealerid"] = this.shareData.serviceproxy["dealerid"];     //厅店Id
        this.mod.postData["serviceproxy"]["customername"] = this.shareData.serviceproxy["customername"];     //用户名
        this.mod.postData["serviceproxy"]["carplate"] = this.shareData.serviceproxy["carplate"];         //车牌
        this.mod.postData["serviceproxy"]["customerphone"] = this.shareData.serviceproxy["customerphone"]; //手机
        this.mod.postData["serviceproxy"]["shuttlename"] = this.shareData.serviceproxy["shuttlename"];   //送修人
        this.mod.postData["serviceproxy"]["shuttlephone"] = this.shareData.serviceproxy["shuttlephone"];   //送修人手机
        this.mod.postData["serviceproxy"]["inpower"] = Number(this.shareData.serviceproxy["inpower"]);                //进店电量
        this.mod.postData["serviceproxy"]["oilquantity"] = Number(this.shareData.serviceproxy["oilquantity"]);        //进店油量
        this.mod.postData["serviceproxy"]["mileage"] = Number(this.shareData.serviceproxy["mileage"]);                //进店里程
        this.mod.postData["serviceproxy"]["arrivalon"] = this.shareData.serviceproxy["arrivalon"];                    //到店时间
        this.mod.postData["serviceproxy"]["customercomment"] = this.shareData.serviceproxy["customercomment"];            //客户描述
        this.mod.postData["serviceproxy"]["repairlocationid"] = this.shareData.serviceproxy["repairlocationid"];            //工位
        this.mod.postData["serviceproxy"]["expectfinishat"] = this.shareData.serviceproxy["expectfinishat"];            //预计交车时间
        this.mod.postData["serviceproxy"]["customercontent"] = this.shareData.serviceproxy["customercontent"];            //故障信息
        this.mod.postData["serviceproxy"]["testresult"] = this.shareData.serviceproxy["testresult"];            //检查结果

        //组装维修项目
        this.mod.postData["serviceorderrepairitemArray"] = [];
        for (var key in this.shareData.serviceorderrepairitemMap) {
            var obj = {};
            obj["repairitemid"] = this.shareData.serviceorderrepairitemMap[key]["repairitemid"];
            obj["name"] = this.shareData.serviceorderrepairitemMap[key]["name"];
            obj["workinghour"] = this.shareData.serviceorderrepairitemMap[key]["workinghour"];
            obj["price"] = this.shareData.serviceorderrepairitemMap[key]["price"];
            obj["discount"] = this.shareData.serviceorderrepairitemMap[key]["discount"];
            obj["repairitemtypeid"] = this.shareData.serviceorderrepairitemMap[key]["repairitemtypeid"];
            obj["repairitemtypedetailid"] = this.shareData.serviceorderrepairitemMap[key]["repairitemtypedetailid"];
            this.mod.postData["serviceorderrepairitemArray"].push(obj);
        }

        //组装维修配件
        this.mod.postData["serviceorderpartArray"] = [];
        for (var key in this.shareData.serviceorderpartMap) {

            var obj = {};
            obj = this.shareData.serviceorderpartMap[key];
            obj["partsid"] = this.shareData.serviceorderpartMap[key]["partsid"];
            obj["partsname"] = this.shareData.serviceorderpartMap[key]["partsname"];
            obj["price"] = this.shareData.serviceorderpartMap[key]["price"];
            obj["quantity"] = this.shareData.serviceorderpartMap[key]["quantity"];
            obj["discount"] = this.shareData.serviceorderpartMap[key]["discount"];
            obj["repairitemtypeid"] = this.shareData.serviceorderpartMap[key]["repairitemtypeid"];
            obj["repairitemtypedetailid"] = this.shareData.serviceorderpartMap[key]["repairitemtypedetailid"];
            this.mod.postData["serviceorderpartArray"].push(obj);
        }


        //提交数据保存
        this._page.loadingShow();
        this._http.post(
            this.mod.postApiUrl, this.mod.postData,
            (res: any) => {
                this._page.loadingHide();
                if (res.Result == true) {
                    if (this.shareData["actioncode"] === 1)
                        this._page.navigateRoot("/serving/sc/success", { actioncode: this.shareData["actioncode"], id: id, no: no });
                    else {
                        const that = this;
                        this._page.alert("消息提示", "单据信息更新成功,请单击确认返回服务委托书列表", function () {
                            that._page.navigateRoot("/serving/sc/list", null, "back");
                        });
                    }
                }
                else {
                    this._page.alert("消息提示", "操作失败");
                }
            },
            (err: any) => {
                this._page.loadingHide();
                this._page.alert("消息提示", "操作失败");
            }
        );
    }
}
