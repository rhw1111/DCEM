import { Component, OnInit, ViewChild } from '@angular/core';
import { IonBackButton, IonBackButtonDelegate } from '@ionic/angular';
import { DCore_Http, DCore_Page, DCore_Valid, DCore_ShareData } from 'app/component/typescript/dcem.core';
import * as $ from 'jquery';

@Component({
    selector: 'app-hirepurchase',
    templateUrl: './hirepurchase.page.html',
    styleUrls: ['./hirepurchase.page.scss'],
})
export class HirepurchasePage implements OnInit {

    public mod: any = {
        shareDataKey: "carstore"
    };

    public objectKeys = Object.keys;

    //共享数据对象
    public shareData = {
        productMap: {},                            //产品视图
        productRelatedMap: {},                     //商品关联视图
        productOrderingattributeMap: {},           //产品的订购属性

        selectProductKey: "",                       //选择的产品Key
        selectProduct: {},                          //选择的产品   
        selectproductRelatedMap: {},                //选择的所有对象金额
        selectproductOrderingattributeMap: {},
        packageMoney: 0,                            //选择的所有对象金额
        packageMap: {},                             //选择的所有对象
    }
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _valid: DCore_Valid,
        private _shareData: DCore_ShareData
    ) {

        this.shareData.selectProduct["ProductInfo"] = {};
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.init();
    }

    public init() {

        if (this._shareData.has(this.mod.shareDataKey)) {
            this.shareData = this._shareData.get(this.mod.shareDataKey);
            //}
        } else {
            this._page.navigateRoot("/carcenter/carstore/index", null, "back");
        }
    }

}
