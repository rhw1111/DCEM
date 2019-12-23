﻿import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController, ToastController, IonBackButton, IonBackButtonDelegate } from '@ionic/angular';
import { SelectCustomerComponent } from 'app/serving/serving.ser/components/select-customer/select-customer.component';
import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OptionSetService } from 'app/base/base.ser/optionset.service';
import { SelectVehicletypeComponent } from 'app/saleing/saleing.ser/components/select-vehicletype/select-vehicletype.component';
import { SelectVehiclecolorComponent } from  'app/saleing/saleing.ser/components/select-vehiclecolor/select-vehiclecolor.component';

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
        postApiUrl:'/Api/account/AddOrEdit',
        OnlyLead:{
            detailUrl:'/api/only-lead/GetOnlyLeadDetail',
            mcs_onlyleadid:''
        },
        onlyLeadDetailUrl: '/Api/account/GetDetail',
        data: {
      
        },
        initData: {
            genderArray: [],
            levelArray:[],
            vehicleusersArray:[],
            purchasepurposeArray:[],
            carattentionArray:[],
            generationArray:[],
            purchasewayArray:[],
            carereasonArray:[]
        },
        displayData:{
            mcs_vehtypeid:"",
            mcs_vehcolorid:"",
            smallorderid_FormattedValue:"",
            order_Formatted:"",
            accountnumber:""
        },
        postData:{},
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
        private _activeRoute: ActivatedRoute,
        private _optionSetService: OptionSetService
    ) { }


    ngOnInit() {

        this.mod.initData.genderArray = this._optionSetService.Get('mcs_gender');
        this.mod.initData.levelArray = this._optionSetService.Get('mcs_level');
        this.mod.initData.vehicleusersArray=this._optionSetService.Get('mcs_vehicleusers');
        this.mod.initData.purchasepurposeArray=this._optionSetService.Get('mcs_purchasepurpose');
        this.mod.initData.carattentionArray=this._optionSetService.Get('mcs_carattention');
        this.mod.initData.generationArray=this._optionSetService.Get('mcs_generation');
        this.mod.initData.purchasewayArray=this._optionSetService.Get('mcs_purchaseway');
        this.mod.initData.carereasonArray=this._optionSetService.Get('mcs_carereason');
        //const that = this;
        //this.ionBackButtonDelegate.onClick = function (event) {
        //    that._shareData.delete(that.mod.shareDataKey);
        //    that._page.navigateRoot("/serving/ri/list", null, "back");

        //}
    }
   

    ionViewDidEnter() {
        this._activeRoute.queryParams.subscribe((params: Params) => {
       
                if (!this._valid.isNull(params['id']) && !this._valid.isNull(params['actionCode'])) {
                    this.shareData.actioncode = Number(params['actionCode']);
                    this.shareData.account["accountid"] = params['id']
                }
                if (this.shareData.actioncode === 2) {
                    if (!this._shareData.has(this.mod.shareDataKey)) {
                        this.shareData.viewTitle = "编辑销售机会";
                        this.pageOnBind(this.shareData.account["accountid"]);
                    }
                }
                else {
                    this.shareData.viewTitle = "新增销售机会";

                    if(!this._valid.isNull(params['onlyleadid'])){
                        this.mod.OnlyLead.mcs_onlyleadid=params['onlyleadid'];
                        this.createDataBind();
                    }
                }
        });
    }


    //选择意向颜色
    async vehcolorModal() {
        const modal = await this._modalCtrl.create({
            component: SelectVehiclecolorComponent
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data != null && typeof data != "undefined") {
            if (data != null && typeof data != "undefined") {
                this.shareData.account["mcs_vehcolorid"] = data.id;
                this.mod.displayData.mcs_vehcolorid = data.name;
            }
        }
     }
    //选择意向车型
    async vehtypeModal() {
       const modal = await this._modalCtrl.create({
           component: SelectVehicletypeComponent
       });
       await modal.present();
       const { data } = await modal.onDidDismiss();
       if (data != null && typeof data != "undefined") {
           if (data != null && typeof data != "undefined") {
               this.shareData.account["mcs_vehtypeid"] = data.id;
               this.mod.displayData.mcs_vehtypeid = data.name;
           }
       }
    }

    //唯一线索创建销售机会数据绑定
    createDataBind(){
        this._page.loadingShow();
        this._http.get(
            this.mod.OnlyLead.detailUrl,
            {
                params: {
                    entityid:  this.mod.OnlyLead.mcs_onlyleadid,
                }
            },
            (res: any) => {
                if (res !== null) {
                    console.log(res["Attributes"]);
                    this.shareData.account["name"] = res["Attributes"]["mcs_name"]; //姓名
                    this.shareData.account["mcs_mobilephone"]  = res["Attributes"]["mcs_mobilephone"]; //手机
                    this.shareData.account["mcs_gender"] = String(res["Attributes"]["mcs_gender"]);    
                }
                else {
                    this._page.alert("消息提示", "基础数据加载异常");
                }
                this._page.loadingHide();          
            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");
                this._page.loadingHide();
            }
        );
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
                console.log(res);
                this.mod.displayData.accountnumber = res["Attributes"]["accountnumber"];
                this.shareData.account["name"] = res["Attributes"]["name"];
                this.shareData.account["mcs_mobilephone"] = res["Attributes"]["mcs_mobilephone"];
                this.shareData.account["mcs_gender"] = String(res["Attributes"]["mcs_gender"]);
                this.shareData.account["mcs_introducecarowner"] = res["Attributes"]["mcs_introducecarowner"];

                this.mod.displayData.order_Formatted = res["Attributes"]["_mcs_tc_order_value@OData.Community.Display.V1.FormattedValue"];
                this.mod.displayData.smallorderid_FormattedValue= res["Attributes"]["_mcs_smallorderid_value@OData.Community.Display.V1.FormattedValue"];

                this.shareData.account["mcs_level"] = String(res["Attributes"]["mcs_level"]);

                //this.shareData.account["level"] = String(res["Attributes"]["mcs_level"]);
                
                this._page.loadingHide();

                console.log(this.shareData.account);
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

    public saveOnClick() {
        this._page.loadingShow();
        //数据请求
        var errMessage = "";

        if (this._valid.isNullOrEmpty(this.shareData.account["name"])) {
            errMessage += "请输入客户名称<br>";
        }
        if (errMessage !== "") {
            this._page.presentToastError(errMessage);
            return;
        }
        else {
            //请求
            this.mod.postData=this.shareData.account;
            this.mod.postData["mcs_gender"]=Number(this.mod.postData["mcs_gender"]);
            this.mod.postData["mcs_level"]=Number(this.mod.postData["mcs_level"]);
            this.mod.postData["mcs_purchasepurpose"]=Number(this.mod.postData["mcs_purchasepurpose"]);
            this.mod.postData["mcs_vehicleusers"]=Number(this.mod.postData["mcs_vehicleusers"]);
            this.mod.postData["mcs_carattention"]=Number(this.mod.postData["mcs_carattention"]);
            this.mod.postData["mcs_generation"]=Number(this.mod.postData["mcs_generation"]);
            this.mod.postData["mcs_purchaseway"]=Number(this.mod.postData["mcs_purchaseway"]);

            this._http.postForToaken(
                this.mod.postApiUrl, this.mod.postData,
                (res: any) => {
                    if (res != "") {
                        if(this.shareData.actioncode === 2){
                            this._page.alert("消息提示", "保存成功！");
                        }
                        else{
                            this._page.goto("/saleing/account/success", { guid: res });
                        }
                    }
                    else {
                        this._page.alert("消息提示", "保存失败！");
                    }
                    this._page.loadingHide();
                },
                (err: any) => {
                    debugger;
                    this._page.alert("消息提示", "请求异常");
                    this._page.loadingHide();
                }
            );
        }
    }
}
