import { Component, OnInit, ViewChild } from '@angular/core';
import { IonBackButton, IonBackButtonDelegate, IonButton } from '@ionic/angular';
import { DCore_Http, DCore_Page, DCore_Valid, DCore_ShareData } from 'app/component/typescript/dcem.core';
import * as $ from 'jquery';

@Component({
    selector: 'app-perfect',
    templateUrl: './perfect.page.html',
    styleUrls: ['./perfect.page.scss'],
})
export class PerfectPage implements OnInit {


    public mod = {
        shareDataKey: "carstore",
        isValid: false,  //是否启用验证
        fromValidStatus: {
            name: true,
            phone: true,
            certNumber: true
        },
        errMessage: ""
    };

    public objectKeys = Object.keys;

    //共享数据对象
    public shareData = {
        productMap: {},                            //产品视图
        productRelatedMap: {},                     //商品关联视图
        productOrderingattributeMap: {},           //产品的订购属性
        selectProductKey: "",                       //选择的产品Key
        selectProduct: {
            ProductInfo: {
            }
        },                          //选择的产品   
        selectproductRelatedMap: {},
        selectproductOrderingattributeMap: {},
        packageMoney: 0,                            //选择的所有对象金额
        packageMap: {},                             //选择的所有对象
        userInfo: {   //用户信息
        },
        buyingMode: 1,//购车方式
    }
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _valid: DCore_Valid,
        private _shareData: DCore_ShareData
    ) {

    }


    ngOnInit() {
    }

    ionViewWillEnter() {
        this.init();
    }

    public init() {
        if (this._shareData.has(this.mod.shareDataKey)) {
            this.shareData = this._shareData.get(this.mod.shareDataKey);
            if (this._valid.isNull(this.shareData.userInfo)) {
                this.initShareData();
            }
        } else {
            this._page.navigateRoot("/carcenter/carstore/index", null, "back");
        }
    }

    public initShareData() {
        this.shareData.userInfo = {};
        this.shareData.buyingMode = 1;

        //加入初始数据
        this.shareData.userInfo["name"] = "";
        this.shareData.userInfo["sex"] = "男";
        this.shareData.userInfo["phone"] = "";
        this.shareData.userInfo["certType"] = "1";
        this.shareData.userInfo["certNumber"] = "";
    }

    public inputKeyUp() {
        this.FromValid();
    }


    //表单验证器
    public FromValid() {

        var validStatus = true;
        this.mod.fromValidStatus.name = true;
        this.mod.fromValidStatus.phone = true;
        this.mod.fromValidStatus.certNumber = true;



        this.mod.errMessage = "";
        if (this.mod.isValid) {
            if (this._valid.isNullOrEmpty(this.shareData.userInfo["name"])) {  //姓名验证
                this.mod.fromValidStatus.name = false;
                validStatus = false;
                this.mod.errMessage += "请输入姓名<br>";
            }
            if (this._valid.isNullOrEmpty(this.shareData.userInfo["phone"])) {  //手机号验证
                this.mod.fromValidStatus.phone = false;
                validStatus = false;
                this.mod.errMessage += "请输入手机号码<br>";
            }
            else if (!this._valid.isPhone(this.shareData.userInfo["phone"])) {  //手机号验证
                this.mod.fromValidStatus.phone = false;
                validStatus = false;
                this.mod.errMessage += "手机号码格式输入错误<br>";
            }
            if (this._valid.isNullOrEmpty(this.shareData.userInfo["certNumber"])) {  //证件号码验证
                this.mod.fromValidStatus.certNumber = false;
                validStatus = false;
                this.mod.errMessage += "请输入证件号码<br>";
            }
        }
        return validStatus;
    }


    //下一步
    public onNext() {
        this.mod.isValid = true;
        if (this.FromValid()) {
            this._shareData.set(this.mod.shareDataKey, this.shareData);
            this._page.navigateRoot("/carcenter/carstore/payment", null, null);
        }
        else {
            this._page.presentToastError(this.mod.errMessage);
        }
    }


    //购买方式
    public onBuyingModeClikc(buyingMode: number) {
        this.shareData.buyingMode = buyingMode;
    }

}
