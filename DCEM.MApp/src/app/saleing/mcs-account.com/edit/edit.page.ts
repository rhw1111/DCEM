import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController, ToastController, IonBackButton, IonBackButtonDelegate } from '@ionic/angular';
import { SelectCustomerComponent } from 'app/serving/serving.ser/components/select-customer/select-customer.component';
import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
    selector: 'app-edit',
    templateUrl: './edit.page.html',
    styleUrls: ['./edit.page.scss'],
})

export class EditPage implements OnInit {

    @ViewChild(IonBackButton, null) ionBackButton: IonBackButton;
    @ViewChild(IonBackButtonDelegate, null) ionBackButtonDelegate: IonBackButtonDelegate;

    mod = {
        queryUrl: '/Api/account/GetDetail',
        data: {
        },
        shareDataKey: "accountEditData",
    };

    //定义共享数据
    shareData = {
        actioncode: 1,
        viewTitle: "",
        account: {
        }
    }

    constructor(
        private _modalCtrl: ModalController,
        private _navCtrl: NavController,
        private _toastCtrl: ToastController,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _shareData: DCore_ShareData,
        private _valid: DCore_Valid,
        private _activeRoute: ActivatedRoute
    ) { }


    ngOnInit() {
        //const that = this;
        //this.ionBackButtonDelegate.onClick = function (event) {
        //    that._shareData.delete(that.mod.shareDataKey);
        //    that._page.navigateRoot("/serving/ri/list", null, "back");

        //}
    }

    ionViewWillEnter() {
        this._activeRoute.queryParams.subscribe((params: Params) => {
            if (this._shareData.has(this.mod.shareDataKey)) {
                this.shareData = this._shareData.get(this.mod.shareDataKey);
            }
            else {
                if (!this._valid.isNull(params['id']) && !this._valid.isNull(params['actionCode'])) {
                    this.shareData.actioncode = Number(params['actionCode']);
                    this.shareData.account["accountid"] = params['id']
                }
                if (this.shareData.actioncode === 2) {
                    if (!this._shareData.has(this.mod.shareDataKey)) {
                        this.shareData.viewTitle = "新增销售机会";
                        this.pageOnBind(this.shareData.account["accountid"]);
                    }
                }
                else {
                    this.shareData.viewTitle = "修改销售机会";
                }
            }
        });
    }


    //选择客户
    //async presentModal() {
    //    const modal = await this._modalCtrl.create({
    //        component: SelectCustomerComponent
    //    });
    //    await modal.present();
    //    const { data } = await modal.onDidDismiss();
    //    if (data != null && typeof data != "undefined") {
    //        if (data.vehowne != null && typeof data.vehowne != "undefined") {
    //            this.shareData.serviceproxy["customerid"] = data.vehowne.vehownerid;
    //            this.shareData.serviceproxy["customername"] = data.vehowne.fullname;
    //            this.shareData.serviceproxy["carplate"] = data.vehowne.vehplate;
    //            this.shareData.serviceproxy["customerphone"] = data.vehowne.mobilephone;
    //            this.shareData.serviceproxy["dealerid"] = data.vehowne["model"]["_mcs_dealer_value"];
    //            this.shareData.serviceproxy["dealerid_formatted"] = data.vehowne["model"]["_mcs_dealer_value@OData.Community.Display.V1.FormattedValue"];
    //        }
    //    }
    //}

    //编辑初始化页面
    pageOnBind(id: any) {
        this._page.loadingShow();
        this._http.get(
            this.mod.queryUrl,
            {
                params: {
                    id: id,
                }
            },
            (res: any) => {
                console.log(res);
                this.shareData.account["accountnumber"] = res["Attributes"]["accountnumber"];
                this.shareData.account["mobilephone"] = res["Attributes"]["mcs_mobilephone"];
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


    //public customerOnClick() {
    //    this.presentModal();
    //}

    //public nextOnClick() {

    //    var errMessage = "";

    //    if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["customerid"])) {
    //        errMessage += "您尚未选择客户<br>";
    //    }
    //    if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["shuttlename"])) {
    //        errMessage += "您尚未输入送修人<br>";
    //    }
    //    if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["shuttlephone"])) {
    //        errMessage += "您尚未输入送修人手机<br>";
    //    }
    //    else if (!this._valid.isPhone(this.shareData.serviceproxy["shuttlephone"])) {
    //        errMessage += "送修人手机不是正确的手机号码<br>";
    //    }
    //    if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["inpower"])) {
    //        errMessage += "您尚未输入进店电量<br>";
    //    }
    //    else if (!this._valid.isNumber(this.shareData.serviceproxy["inpower"])) {
    //        errMessage += "进店电量不是合法的数字<br>";
    //    }
    //    else if (this.shareData.serviceproxy["inpower"] < 0 || this.shareData.serviceproxy["inpower"] > 100) {
    //        errMessage += "进店电量请输入0-100之间的数字<br>";
    //    }
    //    if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["oilquantity"])) {
    //        errMessage += "您尚未选择进店油量<br>";
    //    }
    //    if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["mileage"])) {
    //        errMessage += "您尚未输入进店里程<br>";
    //    }
    //    else if (!this._valid.isNumber(this.shareData.serviceproxy["mileage"])) {
    //        errMessage += "进店里程不是合法的数字<br>";
    //    }
    //    if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["arrivalon"])) {
    //        errMessage += "您尚未选择到店时间<br>";
    //    }
    //    if (errMessage !== "") {

    //        this._page.presentToastError(errMessage);
    //        return;
    //    }


    //    this._shareData.set(this.mod.shareDataKey, this.shareData);
    //    this._page.goto("/serving/ri/edit2");
    //}




}
