import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../../component/typescript/dcem.core';
import { Storage_LoginInfo } from '../../../../../component/typescript/logininfo.storage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
    public model: any = {
        search: {
            apiUrl: "api/order/MyAllOrders",
            pageSize: 10,//页数
            page: 1,//分页
        },
        title: "精品订单",
        datalist: [],
        isending: false,//是否加载完成
        score: {
            apiUrl: "api/user/getuserscore",
            search: {
                id: this._logininfo.GetSystemUserId(),
                pageindex: 1,
                pagesize: 10,
            },
            data: [],
            balance: 0,
        },
        OrderClass:""
    };

    constructor(
        private _logininfo: Storage_LoginInfo,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private routerinfo: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.model.OrderClass = this.routerinfo.snapshot.queryParams["orderclass"];
        console.log(this.model.OrderClass);
        this.initListLoading();
    }
    //下拉刷新
    doRefresh(event) {
        this.model.datalist = [];
        this.model.search.page = 1;
        this.model.isending = false;
        this.getList(event);
    }
    //加载下一页
    doLoading(event) {
        this.model.search.page++;
        this.getList(event);
    }

    //初始化页面数据加载
    initListLoading() {
        this._page.loadingShow();
        this.getList(null);
    }
    //获取列表数据
    getList(event) {
        this._http.postForShopping(this.model.search.apiUrl,
            {
                UserId: this._logininfo.GetSystemUserId(),
                OrderClass: this.model.OrderClass,
                PageSize: this.model.search.pageSize,
                PageIndex: this.model.search.page
            },
            (res: any) => {
                console.log(res);
                if (res != null && res.Data !== null) {
                    //绑定数据
                    for (var i = 0; i < res.Data.length; i++) {
                        res.Data[i].OrderData.PayStatusStr = this.getPayStatus(res.Data[i].OrderData.PaymentStatus)
                        res.Data[i].OrderData.OrderTime = this.Format(res.Data[i].OrderData.OrderTime,"yyyy-MM-dd HH:mm:ss")
                    }
                    this.model.datalist = res.Data;
                    event ? event.target.complete() : '';
                    //判断是否有新数据
                    if (res.Data.length < this.model.search.pageSize) {
                        event ? event.target.disabled = true : "";
                        this.model.isending = true;
                    }
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");
                this._page.loadingHide();
            }
        );
    }
    //获取当前用户积分
    getScore(orderno, price, ReceivedIntegral, CashPayment, CashTotal,InstallmentTotal,event) {
        this._http.postForToaken(
            this.model.score.apiUrl,
            this.model.score.search,
            (res: any) => {
                if (res !== null) {
                    this.model.score.balance = res.balance;
                    if (ReceivedIntegral > this.model.score.balance) {
                        ReceivedIntegral = this.model.score.balance;
                        CashPayment = ((CashTotal / InstallmentTotal) * (InstallmentTotal - ReceivedIntegral)).toFixed(2);
                    }
                    var returndata = {
                        "OrderCode": orderno,
                        "TotalPrice": CashPayment,
                        "TotalIntegral": ReceivedIntegral,
                        "IsNeedCash": CashPayment != 0
                    };
                    this._page.goto("/servicecenter/payment/payment", returndata);
                }
                else {
                    this._page.alert("消息提示", "用户积分信息加载异常");
                }

            },
            (err: any) => {
                this._page.alert("消息提示", "用户积分信息加载异常");
            }
        );

    }
    //去支付
    goPay(orderno, price, ReceivedIntegral, CashPayment, CashTotal, InstallmentTotal) {
        if (ReceivedIntegral != 0) {
            this.getScore(orderno, price, ReceivedIntegral, CashPayment, CashTotal, InstallmentTotal, null);
        } else {
            var returndata = {
                "OrderCode": orderno,
                "TotalPrice": price,
                "TotalIntegral": ReceivedIntegral,
                "IsNeedCash": CashPayment != 0
            };
            this._page.goto("/servicecenter/payment/payment", returndata);
        }
        
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
