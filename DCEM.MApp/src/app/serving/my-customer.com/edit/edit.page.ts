import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController, ToastController, IonBackButton, IonBackButtonDelegate } from '@ionic/angular';
import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SelectCarmodelComponent } from 'app/serving/serving.ser/components/select-carmodel/select-carmodel.component';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.page.html',
    styleUrls: ['./edit.page.scss'],
})

export class EditPage implements OnInit {

    @ViewChild(IonBackButton, null) ionBackButton: IonBackButton;
    @ViewChild(IonBackButtonDelegate, null) ionBackButtonDelegate: IonBackButtonDelegate;

    mod = {
        queryUrl: '/Api/Customer/GetCustomerInfo',
        data: {
        },
        shareDataKey: "customerEditData",
    };

    //定义共享数据
    shareData = {
        id: "",
        actioncode: 1,
        viewTitle: "",
        carserviceadvisor: {
        },
        vehowner: {
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
        const that = this;
        this.ionBackButtonDelegate.onClick = function (event) {
            that._shareData.delete(that.mod.shareDataKey);
            that._page.navigateRoot("/serving/mycustomer/list", null, "back");
        }
    }

    //选择车型
    async presentCarmodelModal() {
        const modal = await this._modalCtrl.create({
            component: SelectCarmodelComponent
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (!this._valid.isNull(data) && !this._valid.isNull(data["carmodel"])) {
            this.shareData.vehowner["_mcs_vehtype_value@OData.Community.Display.V1.FormattedValue"] = data["carmodel"]["model"]["mcs_name"];
            this.shareData.vehowner["_mcs_vehtype_value"] = data["carmodel"]["model"]["mcs_carmodelid"];
        }
    }

    ionViewWillEnter() {
        this._activeRoute.queryParams.subscribe((params: Params) => {
            if (this._shareData.has(this.mod.shareDataKey)) {
                this.shareData = this._shareData.get(this.mod.shareDataKey);
            }
            else {
                if (!this._valid.isNull(params['id']) && !this._valid.isNull(params['actionCode'])) {
                    this.shareData.actioncode = Number(params['actionCode']);
                    this.shareData.id = params['id']
                }
                if (this.shareData.actioncode === 2) {
                    if (!this._shareData.has(this.mod.shareDataKey)) {
                        this.shareData.viewTitle = "编辑客户";
                        this.pageOnBind(this.shareData.id);
                    }
                }
                else {
                    this.shareData.viewTitle = "创建客户";
                }
            }
        });
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
                if (!this._valid.isNull(res.Carserviceadvisor)) {

                    this.shareData.carserviceadvisor = res["Carserviceadvisor"]["Attributes"];
                }
                if (!this._valid.isNull(res.Vehowner)) {

                    this.shareData.vehowner = res["Vehowner"]["Attributes"];
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


    public saveOnClick() {

        var errMessage = "";

        if (this._valid.isNullOrEmpty(this.shareData.vehowner["mcs_fullname"])) {
            errMessage += "您尚未输入姓名<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.vehowner["mcs_vehplate"])) {
            errMessage += "您尚未输入车牌<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.vehowner["mcs_mobilephone"])) {
            errMessage += "您尚未输入手机<br>";
        }
        if (errMessage !== "") {

            this._page.presentToastError(errMessage);
            return;
        }
        this._shareData.set(this.mod.shareDataKey, this.shareData);
        //this._page.goto("/serving/ri/edit2");
    }

}
