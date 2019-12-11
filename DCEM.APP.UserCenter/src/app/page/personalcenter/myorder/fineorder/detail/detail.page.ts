﻿import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../../component/typescript/dcem.core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
    public model: any = {
        search: {
            apiUrl: "api/order/OrderDetail",
        },
        title: "订单详情",
        datadetail: {},
        datalist:[]
    };
    private code
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private routerinfo: ActivatedRoute,
    ) { }

    ngOnInit() {
        //code为参数名字
        this.code = this.routerinfo.snapshot.queryParams["code"];
        this.initListLoading(this.code);
  }
    //初始化页面数据加载
    initListLoading(code) {
        this._page.loadingShow();
        this.getDetail(null, code);
    }
    //获取详情数据
    getDetail(event, code) {
        this._http.postForShopping(this.model.search.apiUrl,
            {
                OrderCode: code
            },
            (res: any) => {
                if (res != null) {
                    //绑定数据
                    res.OrderData.PaymentStatus = 1;
                    res.OrderData.PayStatusStr = this.getPayStatus(res.OrderData.PaymentStatus)
                    res.OrderData.OrderTime = this.Format(res.OrderData.OrderTime, "yyyy-MM-dd HH:mm:ss")
                    this.model.datadetail = res.OrderData;
                    this.model.datalist = res.Products;
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
    goPay() {
        var returndata = {
            "OrderCode": this.code,
            "TotalPrice": this.model.datadetail.TotalDeposiAmount
        };
        this._page.goto("/servicecenter/payment/payment", returndata);
    }

    getPayStatus(param) {
        var paystatus;
        switch (param) {
            case 0:
                paystatus = "不需要支付";
                break;
            case 1:
                paystatus = "等待支付";
                break;
            case 3:
                paystatus = "支付成功";
                break;
            case 4:
                paystatus = "退款成功"
                break;
        }
        return paystatus;
    }

    Format(datetime, fmt) {
        var date = new Date(datetime);
        var o = {
            "M+": date.getMonth() + 1, //月份 
            "d+": date.getDate(), //日 
            "H+": date.getHours(), //小时 
            "m+": date.getMinutes(), //分 
            "s+": date.getSeconds(), //秒 
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
            "S": date.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    }

}