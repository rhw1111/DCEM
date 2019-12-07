import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid, DCore_ShareData } from 'app/component/typescript/dcem.core';
import * as $ from 'jquery';


@Component({
    selector: 'app-selectattr',
    templateUrl: './selectattr.page.html',
    styleUrls: ['./selectattr.page.scss'],
})
export class SelectattrPage implements OnInit {

    public mod: any = {
        shareDataKey: "carstore"
    };


    public objectKeys = Object.keys;

    //共享数据对象
    public shareData = {
        productMap: {},                            //产品视图
        productOrderingattributeMap: {},           //产品的订购属性
        productOrderingattributeClassMap: {},           //按照类别分组

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
    }
    ionViewWillEnter() {
        this.initJQueryEvent();
    }

    public init() {
        
        this.shareData.productOrderingattributeClassMap["外观颜色"] = {};
        this.shareData.productOrderingattributeClassMap["外观颜色"]["selectKey"] = "";
        this.shareData.productOrderingattributeClassMap["外观颜色"]["money"] = 0;
        this.shareData.productOrderingattributeClassMap["外观颜色"]["moneyFormat"] = "";
        this.shareData.productOrderingattributeClassMap["外观颜色"]["productOrderingattributeMap"] = {};


        this.shareData.productOrderingattributeClassMap["轮毂"] = {};
        this.shareData.productOrderingattributeClassMap["轮毂"]["selectKey"] = "";
        this.shareData.productOrderingattributeClassMap["轮毂"]["money"] = 0;
        this.shareData.productOrderingattributeClassMap["轮毂"]["moneyFormat"] = "";
        this.shareData.productOrderingattributeClassMap["轮毂"]["productOrderingattributeMap"] = {};

        this.shareData.productOrderingattributeClassMap["内饰主题"] = {};
        this.shareData.productOrderingattributeClassMap["内饰主题"]["selectKey"] = "";
        this.shareData.productOrderingattributeClassMap["内饰主题"]["money"] = 0;
        this.shareData.productOrderingattributeClassMap["内饰主题"]["moneyFormat"] = "";
        this.shareData.productOrderingattributeClassMap["内饰主题"]["productOrderingattributeMap"] = {};

        this.shareData.productOrderingattributeMap = {};           
        this.shareData.productOrderingattributeClassMap = {};         

        if (this._shareData.has(this.mod.shareDataKey)) {
            if (this.objectKeys(this.shareData.productOrderingattributeMap).length === 0) {
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
        this.shareData.productOrderingattributeMap = {};
        //类别分组地图
        this.shareData.productOrderingattributeClassMap = {};

        for (var productOrderingattribute of this.shareData.selectProduct["ProductOrderingattributeArray"]) {
            var productOrderingattributeKey = productOrderingattribute["mcs_tc_productorderingattributeid"];
            var productOrderingattributeClassKey = productOrderingattribute["mcs_attributegroupname"];

            //基础地图组装
            this.shareData.productOrderingattributeMap[productOrderingattributeKey] = productOrderingattribute;

            //分组地图组装
            if (this._valid.isNull(this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey])) {
                this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey] = {};
                this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey]["selectKey"] = "";
                this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey]["money"] = 0;
                this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey]["moneyFormat"] = "";
                this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey]["productOrderingattributeMap"] = {};
            }

            if (this._valid.isNull(this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey][productOrderingattributeKey])) {
                this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey]["productOrderingattributeMap"][productOrderingattributeKey] = {};
            }

            //获取html模板
            this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey]["productOrderingattributeMap"][productOrderingattributeKey]["ext_TempHtml"] = this.getTempHtml(productOrderingattribute["mcs_attributegroupname"], productOrderingattribute["mcs_attributevalue"], productOrderingattribute["mcs_iconimage"]);


            //默认的订购属性
            if (productOrderingattribute["mcs_isdefault"]) {
                this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey]["selectKey"] = productOrderingattributeKey;
                this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey]["money"] = 0;
                this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey]["moneyFormat"] = "价格已包含";


                this.shareData.packageMap[productOrderingattributeClassKey] = {};
                this.shareData.packageMap[productOrderingattributeClassKey]["text"] = productOrderingattribute["mcs_attributevalue"];
                this.shareData.packageMap[productOrderingattributeClassKey]["val"] = "价格已包含";
                this.shareData.packageMap[productOrderingattributeClassKey]["money"] = 0;

                if (!this._valid.isNullOrEmpty(productOrderingattribute["mcs_attributeextprice"])) {
                    if (productOrderingattribute["mcs_attributeextprice"] > 0) {
                        this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey]["money"] = productOrderingattribute["mcs_attributeextprice"];
                        this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey]["moneyFormat"] = "+" + productOrderingattribute["mcs_attributeextprice"] + "元";

                        this.shareData.packageMap[productOrderingattributeClassKey]["val"] = productOrderingattribute["mcs_attributeextprice"] + "元";
                        this.shareData.packageMap[productOrderingattributeClassKey]["money"] = productOrderingattribute["mcs_attributeextprice"];
                    }
                }
            }
        }

        this.shareData.packageMoney = 0;
        for (var key in this.shareData.packageMap) {
            this.shareData.packageMoney += this.shareData.packageMap[key]["money"];
        }

        this._shareData.set(this.mod.shareDataKey, this.shareData);
    }

    public initJQueryEvent() {
        var that: SelectattrPage = this;

        $(document).ready(function () {
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

            //选择订购属性
            //$("#carcenter_carstore_selectattr_main").on("click", ".dm-imglist-item", function () {
            //    if (!$(this).hasClass("disabled")) {
            //        $(this).parents(".dm-imglist").find(".dm-imglist-item").removeClass("select");
            //        $(this).addClass("select");
            //    }
            //    else {
            //        that._page.presentToastError("此车型无法选择该属性");
            //    }
            //});
        })
    }

    //选择的事件
    public itemOnClick(proOrderAttrKey) {
        var productOrderingattribute = this.shareData.productOrderingattributeMap[proOrderAttrKey];
        var productOrderingattributeClassKey = productOrderingattribute["mcs_attributegroupname"];

        //默认的订购属性

        this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey]["selectKey"] = proOrderAttrKey;
        this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey]["money"] = 0;
        this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey]["moneyFormat"] = "价格已包含";

        this.shareData.packageMap[productOrderingattributeClassKey] = {};
        this.shareData.packageMap[productOrderingattributeClassKey]["text"] = productOrderingattribute["mcs_attributevalue"];
        this.shareData.packageMap[productOrderingattributeClassKey]["val"] = "价格已包含";
        this.shareData.packageMap[productOrderingattributeClassKey]["money"] = 0;

        if (!this._valid.isNullOrEmpty(productOrderingattribute["mcs_attributeextprice"])) {
            if (productOrderingattribute["mcs_attributeextprice"] > 0) {
                this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey]["money"] = productOrderingattribute["mcs_attributeextprice"];
                this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey]["moneyFormat"] = "+" + productOrderingattribute["mcs_attributeextprice"] + "元";

                this.shareData.packageMap[productOrderingattributeClassKey]["val"] = productOrderingattribute["mcs_attributeextprice"] + "元";
                this.shareData.packageMap[productOrderingattributeClassKey]["money"] = productOrderingattribute["mcs_attributeextprice"];
            }
        }

        this.shareData.packageMoney = 0;
        for (var key in this.shareData.packageMap) {
            this.shareData.packageMoney += this.shareData.packageMap[key]["money"];
        }
        this._shareData.set(this.mod.shareDataKey, this.shareData);

    }


    //样式智能识别
    public getTempHtml(groupName, attrVal: string, imgUrl) {
        var ngContentName = document.getElementById("carcenter_carstore_selectattr_main").attributes[0].name;
        if (!this._valid.isNullOrEmpty(imgUrl)) {
            return '<div ' + ngContentName + '><img ' + ngContentName + ' style="width:100%;height:100%" src="' + imgUrl + '" /></div>';
        }
        else {
            if (groupName === "外观颜色") {
                if (attrVal.indexOf("熔岩橙") != -1) {
                    return '<div ' + ngContentName + ' style="background-image: linear-gradient(135deg, rgb(255, 186, 92) 0%, rgb(240, 110, 35) 100%), linear-gradient(rgb(82, 115, 162), rgb(82, 115, 162));">&nbsp;</div>';
                }
                if (attrVal.indexOf("炫晶红") != -1) {
                    return '<div ' + ngContentName + ' style="background-image: linear-gradient(135deg, rgb(195, 79, 79) 0%, rgb(131, 0, 0) 100%), linear-gradient(rgb(82, 115, 162), rgb(82, 115, 162));">&nbsp;</div>';
                }
                if (attrVal.indexOf("湛海蓝") != -1) {
                    return '<div ' + ngContentName + ' style="background-image: linear-gradient(135deg, rgb(103, 179, 255) 0%, rgb(51, 41, 194) 100%), linear-gradient(rgb(82, 115, 162), rgb(82, 115, 162));">&nbsp;</div>';
                }
                if (attrVal.indexOf("鎏金黑") != -1) {
                    return '<div ' + ngContentName + ' style="background-image: linear-gradient(135deg, rgb(107, 109, 114) 0%, rgb(9, 9, 10) 100%), linear-gradient(rgb(82, 115, 162), rgb(82, 115, 162));">&nbsp;</div>';
                }
                if (attrVal.indexOf("珍珠白") != -1) {
                    return '<div ' + ngContentName + ' style="background-image: linear-gradient(135deg, rgb(245, 250, 255) 0%, rgb(215, 222, 232) 100%), linear-gradient(rgb(82, 115, 162), rgb(82, 115, 162));">&nbsp;</div>';
                }
            }
            if (groupName === "轮毂") {
                if (attrVal.indexOf("20英寸时尚型铝合金轮毂") != -1) {
                    return '<div ' + ngContentName + '><img ' + ngContentName + ' style="width:100%;height:100%" src="http://sf-test.mediaman.com.cn/img/tire-1.d21d83df.png" /></div>';
                }
                if (attrVal.indexOf("21英寸性能型铝合金轮毂") != -1) {
                    return '<div ' + ngContentName + '><img ' + ngContentName + ' style="width:100%;height:100%" src="http://sf-test.mediaman.com.cn/img/tire-1.d21d83df.png" /></div>';
                }
            }
            if (groupName === "内饰主题") {
                if (attrVal.indexOf("深黑内饰") != -1) {
                    return '<div ' + ngContentName + ' style="background-image: linear-gradient(rgb(74, 72, 72) 50%, rgb(56, 55, 55) 50%, rgb(38, 38, 38) 100%);">&nbsp;</div>';
                }
                if (attrVal.indexOf("象牙白内饰") != -1) {
                    return '<div ' + ngContentName + ' style="background-image: linear-gradient(rgb(240, 240, 250) 0%, rgb(231, 239, 244) 50%, rgb(223, 232, 237) 50%, rgb(215, 225, 230) 100%);">&nbsp;</div>';
                }
                if (attrVal.indexOf("马鞍棕内饰") != -1) {
                    return '<div ' + ngContentName + ' style="background-image: linear-gradient(rgb(110, 80, 45) 50%, rgb(60, 40, 15) 100%);">&nbsp;</div>';
                }
                if (attrVal.indexOf("环保内饰") != -1) {
                    return '<div ' + ngContentName + ' style="background-image: linear-gradient(rgb(220, 230, 235) 50%, rgb(198, 218, 210) 50%, rgb(175, 205, 185) 100%);">&nbsp;</div>';
                }
            }
        }
        return '<div ' + ngContentName + '></div>'
    }

    //下一步
    public onNext() {
        if (this.shareData.selectProduct["ProductRelatedArray"].length > 0) {
            this._page.navigateRoot("/carcenter/carstore/selectitem", null, null);
        }
        else {
            this._page.navigateRoot("/carcenter/carstore/check", null, null);
        }

    }
}
