import { Component, OnInit, ViewChild } from '@angular/core';
import { IonBackButton, IonBackButtonDelegate } from '@ionic/angular';
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
    }


    //下一步
    public onNext() {
        this._shareData.set(this.mod.shareDataKey, this.shareData);
        this._page.navigateRoot("/carcenter/carstore/payment", null, null);
    }

    //购买方式
    public onBuyingModeClikc(buyingMode: number) {
        this.shareData.buyingMode = buyingMode;
    }

}
