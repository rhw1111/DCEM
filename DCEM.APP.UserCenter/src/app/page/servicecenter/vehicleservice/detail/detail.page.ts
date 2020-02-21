import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../../app/component/typescript/dcem.core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import * as $ from 'jquery';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
    public tab: any = 'probably';
    public model: any = {
        search: {
            apiUrl: "api/product/Detail",
            productCode: "",
        },
        title: "商品详情",
        datadetail: {},
        defaultimg: ""
    };
    //IsShowTwoBtnDialog: boolean = false;
    ShowType: any;
    //IsShowForCart: boolean = false;
    IsShowCover: boolean = false;
    Isbadge: boolean = false;
    BadgeCount: any = 0;
    tempdata_sku: any = [];
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private routerinfo: ActivatedRoute,
        public toastCtrl: ToastController,
    ) { }
    private id
    ngOnInit() {
        //id为参数名字
        this.id = this.routerinfo.snapshot.queryParams["id"];
        this.initListLoading(this.id);

    }
    //初始化页面数据加载
    initListLoading(id) {
        this._page.loadingShow();
        this.getDetail(null, id);
        this.getCartList();
    }
    ionViewWillEnter() {
    }
    //获取详情数据
    getDetail(event, id) {
        this._http.getForShopping(this.model.search.apiUrl,
            {
                productCode: id
            },
            (res: any) => {
                if (res != null) {
                    for (var i = 0; i < res.SkuData.length; i++) {
                        res.SkuData[i].Price = res.SkuData[i].Price.toFixed(2);
                        var tempValue = "";
                        for (var j = 0; j < res.SkuData[i].Arrts.length; j++) {
                            for (var k = 0; k < res.SkuData[i].Arrts[j].Values.length; k++) {
                                tempValue += res.SkuData[i].Arrts[j].Values[k].Value;
                                tempValue += " ";
                                this.model.defaultimg = res.SkuData[0].Arrts[0].Values[0].MainImage
                            }
                        }
                        tempValue = tempValue.length > 0 ? (tempValue.substring(0, tempValue.length - 1)) : "";
                        this.tempdata_sku.push({ attr: tempValue, skuid: res.SkuData[i].SkuCode, Integral: res.SkuData[i].Integral == null ? 0 : res.SkuData[i].Integral, mprice: res.SkuData[i].Price });
                    }
                    $("#standardcount").val(res.AttrData.length);
                    for (var i = 0; i < res.AttrData.length; i++) {
                        for (var j = 0; j < res.AttrData[i].Values.length; j++) {
                            if (j == 0) {
                                res.AttrData[i].Values[j].checked = "checked";
                                res.AttrData[i].Values[j].active = "active";
                            } else {
                                res.AttrData[i].Values[j].checked = "";
                                res.AttrData[i].Values[j].active = "";
                            }
                        }
                    }
                    //绑定数据
                    this.model.datadetail = res;
                    event ? event.target.complete() : '';
                }
                else {
                    this._page.alert("消息提示", "数据加载异常");
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");
                this._page.loadingHide();
            }
        );
    }
    //获取购物车数据
    getCartList() {
        var storage = window.localStorage;
        var cardata = storage.getItem("singlecar");
        if (cardata != null) {
            var cartList = JSON.parse(cardata);
            if (cartList != null && cartList.datas.length > 0) {
                this.BadgeCount = cartList.datas.length;
                this.Isbadge = true;
            } else {
                this.Isbadge = false;
            }
        } else {
            this.Isbadge = false;
        }
    }
    ShowTwoBtn(flag) {
        //this.IsShowTwoBtnDialog = true;
        this.ShowType = flag;
        this.IsShowCover = true;
        $(".TwoBtnDialog").slideDown();
        $(".footer-bottom").fadeOut();
    }
    TwoBtnSure() {
        //this.IsShowTwoBtnDialog = false;
        $(".TwoBtnDialog").slideUp();
        this.IsShowCover = false;
        $(".footer-bottom").fadeIn();
        this.standard();
    }
    CloseDialog() {
        if (this.IsShowCover) {
            //this.IsShowTwoBtnDialog = false;
            $(".TwoBtnDialog").slideUp();
            this.IsShowCover = false;
            $(".footer-bottom").fadeIn();
        }
    }
    //增减数量
    changeValue(delta) {
        var num = this.getValue() + delta;
        $("input.spinners").val(num);
        if (num <= 0) {
            $("button.decrease").attr('disabled', 'disabled');
        } else {
            $("button.decrease").removeAttr('disabled');
        }
        if (num >= 999) {
            $("button.increase").attr('disabled', 'disabled');
        } else {
            $("button.increase").removeAttr('disabled');
        }
    }
    getValue() {
        var num = $("input.spinners").val().toString();
        return parseInt(num || "0", 10);
    }

    //选择规格
    OptionBtnCheck(event, mainimage) {
        var _that = event.target;
        $(_that).addClass("active");
        $(_that).prev("input[type=radio]").attr("title", "checked");
        $(_that).prev("input[type=radio]").trigger("click");
        $(_that).prev("input[type=radio]").siblings("input[type=radio]").attr("title", "")
        $(_that).siblings("a").removeClass("active");
        var num = $("#standardcount").val();
        var standard = "";
        for (var i = 1; i <= num; i++) {
            standard += $(":radio[name=standard" + i + "][title=checked]").val();
            standard += " ";
        }
        standard = standard.length > 0 ? (standard.substring(0, standard.length - 1)) : "";
        $(this.tempdata_sku).each(function (i, item) {
            var temp_sku = item.attr;
            if (temp_sku.length > 0) {
                var temp_sku_sort = temp_sku.split(',').sort().join(',');
                if (temp_sku_sort == standard) {
                    $(".span-price").text(parseFloat(item.mprice).toFixed(2));
                    $(".span-integral").text(item.Integral);
                    return false;
                }
            }
        });
        $(".div-skuimg img").attr("src", mainimage);
    }

    //确认选择规格
    standard() {
        var num = $("#standardcount").val();
        var standard = "";
        for (var i = 1; i <= num; i++) {
            standard += $(":radio[name=standard" + i + "][title=checked]").val();
            standard += " ";
        }
        standard = standard.length > 0 ? (standard.substring(0, standard.length - 1)) : "";
        $(this.tempdata_sku).each(function (i, item) {
            var temp_sku = item.attr;
            if (temp_sku.length > 0) {
                if (temp_sku == standard) {
                    $(".lab-price").text(parseFloat(item.mprice).toFixed(2));
                    $(".lab-integral").text(item.Integral);
                    $('#proSkuID').val(item.skuid);
                    return false;
                }
            }
        });
        $(".lab-selected").html(standard);
        if (this.ShowType == 1) {
            this.addInCart();
        } else if (this.ShowType == 2) {
            this.BuyPro();
        }
    }
    //加入购物车
    addInCart() {
        var flag = true;
        var skucode = $("#proSkuID").val();
        var productname = $(".lab-proname p:eq(0)").text();
        var price = $(".span-price").text();
        var integral = $(".span-integral").text();
        var img = $(".div-skuimg>img").attr("src");
        var skuname = $(".lab-selected").text();
        var num = parseInt($(".spinners").val().toString() || "0", 10);
        var index = skuname.lastIndexOf("\:");
        skuname = skuname.substring(index + 1, skuname.length);
        var cardata = {
            "checkAll": false,
            "totalprice": parseFloat("0").toFixed(2),
            "totalintegral": 0,
            "datas": [{
                "productcode": this.id,
                "skucode": skucode,
                "productname": productname,
                "skuname": skuname,
                "paymenttype": this.model.datadetail.PaymentType,
                "price": price,
                "integral": integral,
                "img": img,
                "num": num,
                "checked": false
            }]
        };
        var storage = window.localStorage;
        var beforecardataJson;
        var beforecardata = storage.getItem("singlecar");
        if (beforecardata == null) {
            storage.setItem("singlecar", JSON.stringify(cardata));
        } else {
            beforecardataJson = JSON.parse(beforecardata);
            for (var i = 0; i < beforecardataJson.datas.length; i++) {
                if (beforecardataJson.datas[i].skucode == cardata.datas[0].skucode) {
                    beforecardataJson.datas[i].num += 1;
                    flag = false;
                }
            }
            if (flag) {
                beforecardataJson.datas.push(cardata.datas[0]);
            }
            storage.setItem("singlecar", JSON.stringify(beforecardataJson));
        }
        this.showToast();
        this.getCartList();
    }
    //提示框
    async showToast() {
        const toast = await this.toastCtrl.create({
            message: '已加入购物车',
            position: 'top',
            cssClass: 'showtoast',
            color: 'dark',
            animated: true,
            duration: 1000
        });
        toast.present();
    }
    //购买
    BuyPro() {
        var skucode = $("#proSkuID").val();
        var productname = $(".lab-proname p:eq(0)").text();
        var price = $(".span-price").text();
        var integral = $(".span-integral").text();
        var img = $(".div-skuimg>img").attr("src");
        var skuname = $(".lab-selected").text();
        var num = parseInt($(".spinners").val().toString() || "0", 10);
        var index = skuname.lastIndexOf("\:");
        skuname = skuname.substring(index + 1, skuname.length);
        var orderata = {
            "source": "detial",
            "datas": [{
                "productcode": this.id,
                "skucode": skucode,
                "productname": productname,
                "skuname": skuname,
                "paymenttype": this.model.datadetail.PaymentType,
                "price": price,
                "integral": integral,
                "img": img,
                "num": num
            }]
        };
        this._page.goto("/servicecenter/preorder/preorder", { params: JSON.stringify(orderata) });
    }
}
