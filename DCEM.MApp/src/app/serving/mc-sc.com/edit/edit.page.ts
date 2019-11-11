import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController, ToastController, IonBackButton, IonBackButtonDelegate } from '@ionic/angular';
import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SelectRepairlocationComponent } from 'app/serving/serving.ser/components/select-repairlocation/select-repairlocation.component';
import { SelectCustomerComponent } from 'app/serving/serving.ser/components/select-customer/select-customer.component';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.page.html',
    styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

    @ViewChild(IonBackButton, null) ionBackButton: IonBackButton;
    @ViewChild(IonBackButtonDelegate, null) ionBackButtonDelegate: IonBackButtonDelegate;

    mod = {
        queryUrl: '/Api/Serviceproxy/GetInfo',
        data: {
        },
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

    constructor(
        private _modalCtrl: ModalController,
        private _navCtrl: NavController,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _shareData: DCore_ShareData,
        private _valid: DCore_Valid,
        private _activeRoute: ActivatedRoute
    ) { }


    ionViewWillEnter() {
        this._activeRoute.queryParams.subscribe((params: Params) => {
            if (this._shareData.has(this.mod.shareDataKey)) {
                this.shareData = this._shareData.get(this.mod.shareDataKey);
            }
            else {
                if (!this._valid.isNull(params['id']) && !this._valid.isNull(params['actionCode'])) {
                    this.shareData.actioncode = Number(params['actionCode']);
                    this.shareData.serviceproxy["serviceproxyid"] = params['id']
                }
                if (this.shareData.actioncode === 2) {
                    if (!this._shareData.has(this.mod.shareDataKey)) {
                        this.shareData.viewTitle = "编辑服务委托书";
                        this.pageOnBind(this.shareData.serviceproxy["serviceproxyid"]);
                    }
                }
                else {
                    this.shareData.viewTitle = "创建服务委托书";
                }
            }
        });
    }

    async presentCustomerModal() {
        const modal = await this._modalCtrl.create({
            component: SelectCustomerComponent
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data != null && typeof data != "undefined") {
            if (data.vehowne != null && typeof data.vehowne != "undefined") {
                this.shareData.serviceproxy["customerid"] = data.vehowne.vehownerid;
                this.shareData.serviceproxy["customername"] = data.vehowne.fullname;
                this.shareData.serviceproxy["carplate"] = data.vehowne.vehplate;
                this.shareData.serviceproxy["customerphone"] = data.vehowne.mobilephone;
                this.shareData.serviceproxy["dealerid"] = data.vehowne["model"]["_mcs_dealer_value"];
                this.shareData.serviceproxy["dealerid_formatted"] = data.vehowne["model"]["_mcs_dealer_value@OData.Community.Display.V1.FormattedValue"];
            }
        }
    }


    async presentRepairlocationModal() {
        const modal = await this._modalCtrl.create({
            component: SelectRepairlocationComponent
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data != null && typeof data != "undefined") {
            if (data.repairlocation != null && typeof data.repairlocation != "undefined") {
                this.shareData.serviceproxy["repairlocationid"] = data.repairlocation["model"]["mcs_repairlocationid"];
                this.shareData.serviceproxy["repairlocationname"] = data.repairlocation["model"]["mcs_name"];
            }
        }
    }


    ngOnInit() {
        const that = this;
        this.ionBackButtonDelegate.onClick = function (event) {
            that._shareData.delete(that.mod.shareDataKey);
            that._page.navigateRoot("/serving/sc/list", null, "back");
        }
    }


    //编辑初始化页面
    pageOnBind(id: any) {
        this._page.loadingShow();
        this._http.get(
            this.mod.queryUrl,
            {
                params: {
                    guid: id,
                }
            },
            (res: any) => {

                if (!this._valid.isNull(res.Serviceproxy)) {
                    this.shareData.serviceproxy["serviceproxyid"] = id;
                    this.shareData.serviceproxy["customerid"] = res["Serviceproxy"]["Attributes"]["_mcs_customerid_value"];
                    this.shareData.serviceproxy["customername"] = res["Serviceproxy"]["Attributes"]["mcs_customername"];
                    this.shareData.serviceproxy["carplate"] = res["Serviceproxy"]["Attributes"]["mcs_carplate"];
                    this.shareData.serviceproxy["customerphone"] = res["Serviceproxy"]["Attributes"]["mcs_customerphone"];
                    this.shareData.serviceproxy["dealerid"] = res["Serviceproxy"]["Attributes"]["_mcs_dealerid_value"];
                    this.shareData.serviceproxy["dealerid_formatted"] = res["Serviceproxy"]["Attributes"]["_mcs_dealerid_value@OData.Community.Display.V1.FormattedValue"];
                    this.shareData.serviceproxy["shuttlename"] = res["Serviceproxy"]["Attributes"]["mcs_shuttlename"];
                    this.shareData.serviceproxy["shuttlephone"] = res["Serviceproxy"]["Attributes"]["mcs_shuttlephone"];
                    this.shareData.serviceproxy["inpower"] = res["Serviceproxy"]["Attributes"]["mcs_inpower"];
                    this.shareData.serviceproxy["mileage"] = res["Serviceproxy"]["Attributes"]["mcs_mileage"];
                    this.shareData.serviceproxy["oilquantity"] = String(res["Serviceproxy"]["Attributes"]["mcs_oilquantity"]);
                    this.shareData.serviceproxy["repairlocationid"] = res["Serviceproxy"]["Attributes"]["_mcs_repairlocationid_value"];
                    this.shareData.serviceproxy["repairlocationname"] = res["Serviceproxy"]["Attributes"]["_mcs_repairlocationid_value@OData.Community.Display.V1.FormattedValue"];
                    this.shareData.serviceproxy["arrivalon"] = res["Serviceproxy"]["Attributes"]["mcs_arrivalon"];
                    this.shareData.serviceproxy["expectfinishat"] = res["Serviceproxy"]["Attributes"]["mcs_expectfinishat"];
                    this.shareData.serviceproxy["customercomment"] = res["Serviceproxy"]["Attributes"]["mcs_customercomment"];
                    this.shareData.serviceproxy["customercontent"] = res["Serviceproxy"]["Attributes"]["mcs_customercontent"];
                    this.shareData.serviceproxy["testresult"] = res["Serviceproxy"]["Attributes"]["mcs_testresult"];
                }

                if (!this._valid.isNull(res.ServiceorderrepairitemList)) {

                    for (var key in res.ServiceorderrepairitemList) {
                        var obj = {};
                        var mapkey = Math.random();//生成唯一编码
                        obj["name"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_name"];
                        obj["code"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_repairitemid@OData.Community.Display.V1.FormattedValue"];
                        obj["repairitemid"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_repairitemid"];

                        obj["repairitemtypeid"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_repairitemtypeid"];
                        obj["repairitemtypedetailid"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_repairitemtypedetailid"];
                        obj["repairitemtypeid_Formatted"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_repairitemtypeid@OData.Community.Display.V1.FormattedValue"];
                        obj["repairitemtypedetailid_Formatted"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_repairitemtypedetailid@OData.Community.Display.V1.FormattedValue"];

                        obj["workinghour"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_workinghour"];
                        obj["price"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_price"];
                        obj["discount"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_discount"];
                        obj["repairamount"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_repairamount"];

                        this.shareData.serviceorderrepairitemMap[mapkey] = obj;
                    }
                }

                if (!this._valid.isNull(res.ServiceorderpartList)) {
                    for (var key in res.ServiceorderpartList) {
                        var obj = {};
                        var mapkey = Math.random();//生成唯一编码
                        obj["name"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_partsname"];
                        obj["code"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_partsid@OData.Community.Display.V1.FormattedValue"];
                        obj["partsid"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_partsid"];

                        obj["repairitemtypeid"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_repairitemtypeid"];
                        obj["repairitemtypedetailid"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_repairitemtypedetailid"];
                        obj["repairitemtypeid_Formatted"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_repairitemtypeid@OData.Community.Display.V1.FormattedValue"];
                        obj["repairitemtypedetailid_Formatted"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_repairitemtypedetailid@OData.Community.Display.V1.FormattedValue"];

                        obj["quantity"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_quantity"];
                        obj["price"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_price"];
                        obj["discount"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_discount"];
                        obj["amount"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_amount"];

                        this.shareData.serviceorderpartMap[mapkey] = obj;
                    }
                }

                this._page.loadingHide();
            },
            (err: any) => {
                const that = this;
                this._page.alert("消息提示", "数据加载异常", function () {
                    that._page.goBack();
                });
                this._page.loadingHide();
            }
        );
    }

    public customerOnClick() {
        this.presentCustomerModal();
    }

    public repairlocationOnClick() {
        this.presentRepairlocationModal();
    }

    public nextOnClick() {

        var errMessage = "";

        if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["customerid"])) {
            errMessage += "您尚未选择客户<br>";
        }
        if (this._valid.isNull(this.shareData.serviceproxy["dealerid"])) {
            errMessage += "您选择的客户未包含厅店信息<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["shuttlename"])) {
            errMessage += "您尚未输入送修人<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["shuttlephone"])) {
            errMessage += "您尚未输入送修人手机<br>";
        }
        else if (!this._valid.isPhone(this.shareData.serviceproxy["shuttlephone"])) {
            errMessage += "送修人手机不是正确的手机号码<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["inpower"])) {
            errMessage += "您尚未输入进店电量<br>";
        }
        else if (!this._valid.isNumber(this.shareData.serviceproxy["inpower"])) {
            errMessage += "进店电量不是合法的数字<br>";
        }
        else if (this.shareData.serviceproxy["inpower"] < 0 || this.shareData.serviceproxy["inpower"] > 100) {
            errMessage += "进店电量请输入0-100之间的数字<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["oilquantity"])) {
            errMessage += "您尚未选择进店油量<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["mileage"])) {
            errMessage += "您尚未输入进店里程<br>";
        }
        else if (!this._valid.isNumber(this.shareData.serviceproxy["mileage"])) {
            errMessage += "进店里程不是合法的数字<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["arrivalon"])) {
            errMessage += "您尚未选择到店时间<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["expectfinishat"])) {
            errMessage += "您尚未选择预计交车时间<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["repairlocationid"])) {
            errMessage += "您尚未选择工位<br>";
        }
        if (errMessage !== "") {

            this._page.presentToastError(errMessage);
            return;
        }


        console.log(this.shareData);
        this._shareData.set(this.mod.shareDataKey, this.shareData);
        this._page.goto("/serving/sc/edit2");
    }
}
