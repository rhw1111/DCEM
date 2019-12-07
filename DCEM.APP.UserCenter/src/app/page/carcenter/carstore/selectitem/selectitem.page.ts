import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid, DCore_ShareData } from 'app/component/typescript/dcem.core';
import * as $ from 'jquery';


@Component({
    selector: 'app-selectitem',
    templateUrl: './selectitem.page.html',
    styleUrls: ['./selectitem.page.scss'],
})
export class SelectitemPage implements OnInit {

    public mod: any = {
        shareDataKey: "carstore"
    };


    public objectKeys = Object.keys;

    //共享数据对象
    public shareData = {
        productMap: {},                            //产品视图
        productRelatedMap: {},                     //商品关联视图

        selectProductKey: "",                       //选择的产品Key
        selectProduct: {},                          //选择的产品      
        packageMoney: 0,                            //选择的所有对象金额
        packageMap: {},                             //选择的所有对象
    }

    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _valid: DCore_Valid,
        private _shareData: DCore_ShareData
    ) {
    }

    ngOnInit() {
        this.init();
        this.initJQueryEvent();
    }

    ionViewWillEnter() {

    }

    public init() {
        this.shareData.productRelatedMap = {};

        if (this._shareData.has(this.mod.shareDataKey)) {
            if (this.objectKeys(this.shareData.productRelatedMap).length === 0) {
                this.initShareData();
            }
            else {
                this.shareData = this._shareData.get(this.mod.shareDataKey);
            }
        } else {
            this._page.navigateRoot("/carcenter/carstore/index", null, "back");
        }
    }

    public initShareData() {
        //初始化
        this.shareData = this._shareData.get(this.mod.shareDataKey);
        //基础地图
        this.shareData.productRelatedMap = {};
        for (var productRelated of this.shareData.selectProduct["ProductRelatedArray"]) {
            var productRelatedKey = productRelated["mcs_tc_productrelatedid"];
            //基础地图组装
            this.shareData.productRelatedMap[productRelatedKey] = productRelated;
            this.shareData.productRelatedMap[productRelatedKey]["ext_select"] = false;


            this.shareData.productRelatedMap[productRelatedKey]["ext_moneyFormat"] = "价格已包含";
            if (!this._valid.isNullOrEmpty(productRelated["a.mcs_salesprice"])) {
                if (productRelated["a.mcs_salesprice"] > 0) {

                    this.shareData.productRelatedMap[productRelatedKey]["ext_moneyFormat"] = "+" + productRelated["a.mcs_salesprice"] + "元";
                }
            }

        }
        this._shareData.set(this.mod.shareDataKey, this.shareData);
    }


    public initJQueryEvent() {
        var that: SelectitemPage = this;

        //底部的事件
        $(".dm-footer-svg").click(function () {
            if ($(this).hasClass("open")) {
                $(this).removeClass("open");
                $(this).addClass("close");
                $(".dm-footer-model").removeClass("open");
                $(".dm-footer-model").addClass("close");
            }
            else {
                $(this).removeClass("close");
                $(this).addClass("open");
                $(".dm-footer-model").removeClass("close");
                $(".dm-footer-model").addClass("open");
            }
        });

    }

    public itemOnClick(proRelatedKey) {
        console.log(proRelatedKey);

        if (this.shareData.productRelatedMap[proRelatedKey]["ext_select"]) {
            this.shareData.productRelatedMap[proRelatedKey]["ext_select"] = false;
            delete this.shareData.packageMap[proRelatedKey];
        }
        else {
            this.shareData.productRelatedMap[proRelatedKey]["ext_select"] = true;
            this.shareData.packageMap[proRelatedKey] = {};
            this.shareData.packageMap[proRelatedKey]["text"] = this.shareData.productRelatedMap[proRelatedKey]['a.mcs_product@OData.Community.Display.V1.FormattedValue'] + "(" + this.shareData.productRelatedMap[proRelatedKey]['a.mcs_name']+")";
            this.shareData.packageMap[proRelatedKey]["val"] = "价格已包含";
            this.shareData.packageMap[proRelatedKey]["money"] = this.shareData.productRelatedMap[proRelatedKey]["a.mcs_salesprice"];
            if (this.shareData.productRelatedMap[proRelatedKey]["a.mcs_salesprice"] > 0) {
                this.shareData.packageMap[proRelatedKey]["val"] = this.shareData.productRelatedMap[proRelatedKey]["a.mcs_salesprice"] + "元";
            }
        }

        this.shareData.packageMoney = 0;
        for (var key in this.shareData.packageMap) {
            this.shareData.packageMoney += this.shareData.packageMap[key]["money"];
        }
        this._shareData.set(this.mod.shareDataKey, this.shareData);
    }
}
