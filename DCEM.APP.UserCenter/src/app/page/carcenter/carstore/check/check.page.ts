import { Component, OnInit, ViewChild } from '@angular/core';
import { IonBackButton, IonBackButtonDelegate } from '@ionic/angular';
import { DCore_Http, DCore_Page, DCore_Valid, DCore_ShareData } from 'app/component/typescript/dcem.core';
import * as $ from 'jquery';

@Component({
    selector: 'app-check',
    templateUrl: './check.page.html',
    styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

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
            // if (this._valid.isNull(this.shareData.selectproductRelatedMap)) {
            this.initShareData();
            //}
        } else {
            this._page.navigateRoot("/carcenter/carstore/index", null, "back");
        }
    }


    public initShareData() {

        this.shareData.selectproductOrderingattributeMap = {};
        this.shareData.selectproductRelatedMap = {};
        console.log(this.shareData.packageMap);
        for (var packageKey in this.shareData.packageMap) {

            var packageId = this.shareData.packageMap[packageKey]["id"];
            if (this.shareData.packageMap[packageKey]["type"] === "productOrderingattribute") {
                console.log(packageKey);
                this.shareData.selectproductOrderingattributeMap[packageKey] = this.shareData.packageMap[packageKey];
                //获取html模板
                this.shareData.selectproductOrderingattributeMap[packageKey]["ext_TempHtml"] = this.getTempHtml(this.shareData.productOrderingattributeMap[packageId]["mcs_attributegroupname"], this.shareData.productOrderingattributeMap[packageId]["mcs_attributevalue"], this.shareData.productOrderingattributeMap[packageId]["mcs_iconimage"]);
            }
            if (this.shareData.packageMap[packageKey]["type"] === "productRelated") {
                this.shareData.selectproductRelatedMap[packageKey] = this.shareData.packageMap[packageKey];
            }

        }
    }


    public showfooterModelClick() {
        if ($("#carcenter_carstore_check_footer").find(".dm-footer-svg").hasClass("open")) {
            $("#carcenter_carstore_check_footer").find(".dm-footer-svg").removeClass("open");
            $("#carcenter_carstore_check_footer").find(".dm-footer-svg").addClass("close");
            $("#carcenter_carstore_check_footer_model").removeClass("open");
            $("#carcenter_carstore_check_footer_model").addClass("close");
        }
        else {
            $("#carcenter_carstore_check_footer").find(".dm-footer-svg").removeClass("close");
            $("#carcenter_carstore_check_footer").find(".dm-footer-svg").addClass("open");
            $("#carcenter_carstore_check_footer_model").removeClass("close");
            $("#carcenter_carstore_check_footer_model").addClass("open");
        }
    }


    //修改订购属性
    public productOrderAttrUpdate() {
        this._page.navigateRoot("/carcenter/carstore/selectattr", null, "back");
    }
    public productRelatedUpdate() {
        this._page.navigateRoot("/carcenter/carstore/selectitem", null, "back");
    }


    //样式智能识别
    public getTempHtml(groupName, attrVal: string, imgUrl) {

        var ngContentName = document.getElementById("carcenter_carstore_checkr_main").attributes[0].name;
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

}
