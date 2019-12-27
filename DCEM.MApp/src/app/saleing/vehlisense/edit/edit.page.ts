import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController, ToastController, IonBackButton, IonBackButtonDelegate } from '@ionic/angular';
import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import dateformat from 'silly-datetime';
import { OptionSetService } from 'app/base/base.ser/optionset.service';
import { SelectCarmodelComponent } from 'app/serving/serving.ser/components/select-carmodel/select-carmodel.component';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.page.html',
    styleUrls: ['./edit.page.scss'],
})

export class EditPage implements OnInit {

    @ViewChild(IonBackButton, null) ionBackButton: IonBackButton;
    @ViewChild(IonBackButtonDelegate, null) ionBackButtonDelegate: IonBackButtonDelegate;

    mod = {
        queryUrl: '/api/vehlisense/getdetail',
        postUrl: '/api/vehlisense/AddOrUpdate',
        data: {
            detail: [],//开票明细
        }
    };

    //定义共享数据
    shareData = {
        id: "",
        actioncode: 1,
        viewTitle: "",
        vehowner: {
        }
    }

    constructor(
        private _modalCtrl: ModalController,
        private _navCtrl: NavController,
        private _toastCtrl: ToastController,
        private _http: DCore_Http,//ajax请求
        private _page: DCore_Page,//页面提示
        private _shareData: DCore_ShareData,
        private _valid: DCore_Valid,//验证是否为空
        private _activeRoute: ActivatedRoute,//请求过来的参数
        private _loginInfo: Storage_LoginInfo,//用户信息
        private _optionset: OptionSetService//选项集定义，后续优化通过接口获取
    ) { }


    ngOnInit() {
        const that = this;
        // this.ionBackButtonDelegate.onClick = function (event) {
        //     that._page.navigateRoot("/saleing/vehlisense/list", null, "back");
        // }
        this._activeRoute.queryParams.subscribe((params: Params) => {
            if (!this._valid.isNull(params['id']) && !this._valid.isNull(params['actionCode'])) {
                this.shareData.actioncode = Number(params['actionCode']);
                this.shareData.id = params['id']
            }
            if (this.shareData.actioncode === 2) {
                this.shareData.viewTitle = "编辑上牌信息";
                this.pageOnBind(this.shareData.id);
            }
            else {
                this.shareData.viewTitle = "创建上牌信息";
            }
        });
    }

    ionViewWillEnter() {
        // this._activeRoute.queryParams.subscribe((params: Params) => {
        //     if (!this._valid.isNull(params['id']) && !this._valid.isNull(params['actionCode'])) {
        //         this.shareData.actioncode = Number(params['actionCode']);
        //         this.shareData.id = params['id']
        //     }
        //     if (this.shareData.actioncode === 2) {
        //         this.shareData.viewTitle = "编辑上牌信息";
        //         this.pageOnBind(this.shareData.id);
        //     }
        //     else {
        //         this.shareData.viewTitle = "创建上牌信息";
        //     }
        // });
    }

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
                if (!this._valid.isNull(res["Detail"])) {
                    this.shareData.vehowner["rostatus"] = '';//this._optionset.GetOptionSetNameByValue("mcs_rostatus", res["Detail"]["Attributes"]["a_e1f73281e00fe911a820844a39d18a7a_x002e_mcs_rostatus"]);
                    this.shareData.vehowner["mcs_vehlisenseid"]=res["Detail"]["Attributes"]["mcs_vehlisenseid"];
                    this.shareData.vehowner['mcs_fullname'] = res["Detail"]["Attributes"]["mcs_fullname"];
                    this.shareData.vehowner["mcs_idcard"] = res["Detail"]["Attributes"]["mcs_idcard"];
                    this.shareData.vehowner["mcs_name"] = res["Detail"]["Attributes"]["mcs_name"];
                    this.shareData.vehowner["mcs_vehlicense"] = res["Detail"]["Attributes"]["mcs_vehlicense"];
                    this.shareData.vehowner["mcs_lisensedate"] = res["Detail"]["Attributes"]["mcs_lisensedate"] == null ? "" : this.FormatToDateTime(res["Detail"]["Attributes"]["mcs_lisensedate"]);
                    this.shareData.vehowner["mcs_address"] = res["Detail"]["Attributes"]["mcs_address"];
                    this.shareData.vehowner["mcs_fee"] = res["Detail"]["Attributes"]["mcs_fee"];
          
                    this.shareData.vehowner["vehordercode"] = res["Detail"]["Attributes"]["vehordercode"];
                    this.shareData.vehowner["vinname"] = res["Detail"]["Attributes"]["vinname"];
                    this.shareData.vehowner["vehdeliverycode"] = res["Detail"]["Attributes"]["vehdeliverycode"];
                    this.shareData.vehowner["deliverystatus"] = this._optionset.GetOptionSetNameByValue("mcs_deliverystatus", res["Detail"]["Attributes"]["deliverystatus"]);
                    this.shareData.vehowner["carusename"] = res["Detail"]["Attributes"]["a_e1f73281e00fe911a820844a39d18a7a_x002e_mcs_contactname"];
                    this.shareData.vehowner["contactphone"] = res["Detail"]["Attributes"]["a_e1f73281e00fe911a820844a39d18a7a_x002e_mcs_contactphone"];
                    this.shareData.vehowner["orderon"] = res["Detail"]["Attributes"]["a_e1f73281e00fe911a820844a39d18a7a_x002e_mcs_orderon"];
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
        if (this._valid.isNullOrEmpty(this.shareData.vehowner["mcs_idcard"])) {
            errMessage += "您尚未输入身份证号<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.vehowner["mcs_lisensedate"])) {
            errMessage += "您尚未输入上牌日期<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.vehowner["mcs_address"])) {
            errMessage += "您尚未输入上牌地址<br>";
        }

        if (this._valid.isNullOrEmpty(this.shareData.vehowner["mcs_fee"])) {
            errMessage += "您尚未输入上牌费用<br>";
        }

        if (errMessage !== "") {
            this._page.presentToastError(errMessage);
            return;
        }

        var postData = {};
        this.shareData.vehowner["mcs_lisensedate"] = new Date(this.shareData.vehowner["mcs_lisensedate"]).toISOString();
        postData["Vehowner"] = this.shareData.vehowner;
        postData["actionCode"] = this.shareData.actioncode;
        postData["dealerid"] = this._loginInfo.GetDealerid();

        //提交数据保存
        this._page.loadingShow();
        this._http.post(
            this.mod.postUrl,
            postData,
            (res: any) => {
                this._page.loadingHide();
                console.log(res);
                if (res.Result == true) {
                    const that = this;
                    this._page.alert("消息提示", "操作成功", function () {
                        that._page.goBack();
                    });
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
    FormatToDateTime(date) {
        if (date != null && date != undefined) {
          return dateformat.format(date, 'YYYY-MM-DD');
        }
        else {
          return '';
        }
      }
}
