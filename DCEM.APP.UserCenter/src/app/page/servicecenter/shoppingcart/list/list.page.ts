import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../../app/component/typescript/dcem.core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import * as $ from 'jquery';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
    public model: any = {
        title: "购物车",
        cartList: {}
    };
    IsEdit: boolean = false;
    IsEmpty: boolean = false;
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private routerinfo: ActivatedRoute,
        private alertController: AlertController,
    ) { }

    ngOnInit() {
        this.initListLoading();
    }
    //初始化页面数据加载
    initListLoading() {
        this._page.loadingShow();
        this.getCartList(null);
    }
    //获取购物车数据
    getCartList(event) {
        var storage = window.localStorage;
        var cardata = storage.getItem("singlecar");
        if (cardata != null) {
            this.model.cartList = JSON.parse(cardata);
            this.IsEmpty = false;
            event ? event.target.complete() : '';
        } else {
            this.IsEmpty = true;
        }
        this._page.loadingHide();
    }

    //增减数量
    changeValue(e, delta) {
        var num = this.getValue(e) + delta;
        var totalprice = 0;
        var totalintegral = 0;
        for (var i = 0; i < this.model.cartList.datas.length; i++) {
            if ($(e.target).val() == this.model.cartList.datas[i].skucode) {
                this.model.cartList.datas[i].num = num;
                if (this.model.cartList.datas[i].checked) {
                    if (this.model.cartList.datas[i].paymenttype == 2) {
                        totalintegral += (this.model.cartList.datas[i].integral * this.model.cartList.datas[i].num);
                    } else {
                        totalprice += (this.model.cartList.datas[i].price * this.model.cartList.datas[i].num);
                    }
                    
                }
            }
        }
        this.model.cartList.totalprice = parseFloat(totalprice.toString()).toFixed(2);
        this.model.cartList.totalintegral = totalintegral;
        $(e.target).siblings("input.spinners").val(num);
        if (num <= 0 && $(e.target).hasClass("decrease")) {
            $(e.target).attr('disabled', 'disabled');
        } else {
            $(e.target).siblings("button").removeAttr('disabled');
        }
        if (num >= 999 && $(e.target).hasClass("increase")) {
            $(e.target).attr('disabled', 'disabled');
        } else {
            $(e.target).siblings("button").removeAttr('disabled');
        }
    }
    getValue(e) {
        var num = $(e.target).siblings("input.spinners").val().toString();
        return parseInt(num || "0", 10);
    }
    //是否编辑
    doEdit(flag) {
        this.IsEdit = flag == 0;
        if (this.IsEdit) {
            $(".tab-hide").addClass("tab-background-5a5").show().attr("disabled", "disabled");
            $(".tab-cac").removeClass("tab-background-5a5 tab-background-38b").hide();
            $(".span-total").hide();
        } else {
            $(".tab-hide").removeClass("tab-background-5a5 tab-background-38b").hide();
            $(".tab-cac").addClass("tab-background-5a5").show().attr("disabled", "disabled");
            $(".span-total").show();
        }
        if (this.model.cartList.hasOwnProperty('datas')) {
            this.model.cartList.checkAll = false;
            this.model.cartList.datas.forEach(res => {
                res.checked = false;
            });
        } else {
            this.getCartList(null);
        }
    }
    //全选
    changeAll(e) {
        if (e.target.checked) {
            var totalprice = 0;
            var totalintegral = 0;
            this.model.cartList.datas.forEach(res => {
                res.checked = true;
                if (res.paymenttype == 2) {
                    totalintegral += (res.integral * res.num);
                } else {
                    totalprice += (res.price * res.num);
                }
            });
            this.model.cartList.totalprice = parseFloat(totalprice.toString()).toFixed(2);
            this.model.cartList.totalintegral = totalintegral;
            if (this.IsEdit) {
                $(".tab-hide").addClass("tab-background-38b").removeClass("tab-background-5a5").removeAttr('disabled');
            } else {
                $(".tab-cac").addClass("tab-background-38b").removeClass("tab-background-5a5").removeAttr('disabled');
            }
        } else {
            this.model.cartList.datas.forEach(res => {
                res.checked = false;
            });
            this.model.cartList.totalprice = parseFloat("0").toFixed(2);
            if (this.IsEdit) {
                $(".tab-hide").addClass("tab-background-5a5").removeClass("tab-background-38b").attr("disabled", "disabled");
            } else {
                $(".tab-cac").addClass("tab-background-5a5").removeClass("tab-background-38b").attr("disabled", "disabled");
            }
        }

    }
    //单选
    change(item) {
        const arr = [];
        var totalprice = 0;
        var totalintegral = 0;
        this.model.cartList.datas.forEach(res => {
            arr.push(res.checked)
            if (res.checked) {
                if (res.paymenttype == 2) {
                    totalintegral += (res.integral * res.num);
                } else {
                    totalprice += (res.price * res.num);
                }
                
            }
        })
        this.model.cartList.totalprice = parseFloat(totalprice.toString()).toFixed(2);
        this.model.cartList.totalintegral = totalintegral;
        if (!arr.includes(false)) {
            this.model.cartList.checkAll = true;
        } else {
            this.model.cartList.checkAll = false;
        }
        if (this.IsEdit) {
            if (!arr.includes(true)) {
                $(".tab-hide").addClass("tab-background-5a5").removeClass("tab-background-38b").attr("disabled", "disabled");
            } else {
                $(".tab-hide").addClass("tab-background-38b").removeClass("tab-background-5a5").removeAttr('disabled');
            }
        } else {
            if (!arr.includes(true)) {
                $(".tab-cac").addClass("tab-background-5a5").removeClass("tab-background-38b").attr("disabled", "disabled");
            } else {
                $(".tab-cac").addClass("tab-background-38b").removeClass("tab-background-5a5").removeAttr('disabled');
            }
        }
        
    }
    //删除所选
    removeCart() {
        var datas = [];
        this.model.cartList.datas.forEach(res => {
            if (!res.checked) {
                datas.push(res);
            }
        });
        var storage = window.localStorage;
        if (this.model.cartList.checkAll) {
            this.model.cartList = {};
            storage.removeItem("singlecar");
        } else {
            this.model.cartList.datas = datas;
            storage.setItem("singlecar", JSON.stringify(this.model.cartList));
        }
    }
    //结算
    BuyPro() {
        var orderata = {
            "source": "cart",
            "datas": []
        };
        var i = 0;
        var paymenttype = 1;
        var flag = false;
        this.model.cartList.datas.forEach(res => {
            if (res.checked) {
                orderata.datas.push({
                    "productcode": res.productcode,
                    "skucode": res.skucode,
                    "productname": res.productname,
                    "skuname": res.skuname,
                    "paymenttype": res.paymenttype,
                    "price": res.price,
                    "integral": res.integral,
                    "img": res.img,
                    "num": res.num,
                    "ProviderParams": res.ProviderParams
                });
                if (i == 0) {
                    paymenttype = res.paymenttype;
                } else {
                    if (paymenttype != res.paymenttype) {
                        flag = true;
                    }
                }
                i++;
            }
        });
        if (flag) {
            this.presentAlertConfirm();
        } else {
            this._page.goto("/servicecenter/preorder/preorder", { params: JSON.stringify(orderata) });
        }
    }
    //提示信息
    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            header: '提示信息',
            message: '积分与现金不能同时支付',
            buttons: ['确定']
        });
        await alert.present();
    }
}
