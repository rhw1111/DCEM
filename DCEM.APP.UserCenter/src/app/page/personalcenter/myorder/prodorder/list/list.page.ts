import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../../component/typescript/dcem.core';
import { Storage_LoginInfo } from '../../../../../component/typescript/logininfo.storage';
import { ActivatedRoute } from '@angular/router';
import { debug } from 'util';
import { concat } from 'rxjs';

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
    public tab: any = 'carorder';
    public model: any = {
        search: {
            apiUrl: "api/order/MyTypeOrders",
            pageSize: 10,//页数
            page: 1,//分页
        },
        title: "商品订单",
        datalist: [],//所有订单
        carorderlist: [],//整车订单
        fineorderlist: [],//精品订单
        consorderlist: [],//施工订单
        busiorderlist: [],//办理订单
        servorderlist:[],//服务订单
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
        OrderClass: "",
        //OrderType: 10, //商品类型; 1: 整车; 2: 整车选装件; 3: 充电桩 / 枪; 4: 备件; 7: 业务办理; 8: 施工; 10: 精品;
        isShowCarNone: false,
        isShowFineNone: false,
        isShowConsNone: false,
        isShowBusiNone: false,
        isShowServNone: false,
    };

    constructor(
        private _logininfo: Storage_LoginInfo,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private routerinfo: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.model.OrderClass = this.routerinfo.snapshot.queryParams["orderclass"];
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
                //McsType: this.model.OrderType,
                PageSize: this.model.search.pageSize,
                PageIndex: this.model.search.page
            },
            (res: any) => {
                if (res != null && res.Data !== null) {
                    //绑定数据
                    var carorderlist = [];
                    var busiorderlist = [];
                    var consorderlist = [];
                    var fineorderlist = [];
                    var servorderlist = [];
                    for (var i = 0; i < res.Data.length; i++) {
                        var paystatus = this.getPayStatus(res.Data[i].OrderData.Status, res.Data[i].OrderData.PaymentStatus);
                        res.Data[i].OrderData.PayStatusStr = paystatus.paystatusname;
                        res.Data[i].OrderData.PayStatusCode = paystatus.paystatuscode;
                        res.Data[i].OrderData.OrderTime = this.Format(res.Data[i].OrderData.OrderTime, "yyyy-MM-dd HH:mm:ss");
                        var productCount = 0;
                        res.Data[i].Products.forEach(item => {
                            productCount += item.OrderQty;
                        });
                        res.Data[i].OrderData.ProductCount = productCount;
                        if (res.Data[i].OrderData.ProductTypeList.indexOf(1) > -1) {
                            carorderlist.push(res.Data[i]);
                        }
                        if (res.Data[i].OrderData.ProductTypeList.indexOf(7) > -1) {
                            busiorderlist.push(res.Data[i]);
                        }
                        if (res.Data[i].OrderData.ProductTypeList.indexOf(8) > -1) {
                            consorderlist.push(res.Data[i]);
                        }
                        if (res.Data[i].OrderData.ProductTypeList.indexOf(10) > -1) {
                            fineorderlist.push(res.Data[i]);
                        }
                        if (res.Data[i].OrderData.ProductTypeList.indexOf(11) > -1) {
                            servorderlist.push(res.Data[i]);
                        }
                    }
                    this.model.datalist = res.Data;
                    this.model.carorderlist = carorderlist;
                    this.model.busiorderlist = busiorderlist;
                    this.model.consorderlist = consorderlist;
                    this.model.fineorderlist = fineorderlist;
                    this.model.servorderlist = servorderlist;
                    event ? event.target.complete() : '';
                    //判断是否有新数据
                    if (res.Data.length < this.model.search.pageSize) {
                        event ? event.target.disabled = true : "";
                        this.model.isending = true;
                    }
                    this.model.isShowCarNone = this.model.carorderlist.length <= 0;
                    this.model.isShowFineNone = this.model.fineorderlist.length <= 0;
                    this.model.isShowConsNone = this.model.consorderlist.length <= 0;
                    this.model.isShowBusiNone = this.model.busiorderlist.length <= 0;
                    this.model.isShowServNone = this.model.servorderlist.length <= 0;
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
    getScore(orderno, price, ReceivedIntegral, CashPayment, CashTotal, InstallmentTotal, event) {
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

    getPayStatus(orderstatus,paymentstatus) {
        var returndata = {
            "paystatusname": "",
            "paystatuscode":0
        };
        if (paymentstatus == 1 && orderstatus == 5) {
            returndata.paystatusname = "已取消";
            returndata.paystatuscode = 10;
        } else if (paymentstatus == 1 && orderstatus != 5) {
            returndata.paystatusname = "待支付";
            returndata.paystatuscode = 20;
        } else if (paymentstatus == 3 && orderstatus == 8) {
            returndata.paystatusname = "退款中";
            returndata.paystatuscode = 30;
        } else if (paymentstatus == 3 && orderstatus == 9) {
            returndata.paystatusname = "退款完成";
            returndata.paystatuscode = 40;
        } else if (paymentstatus == 3 && orderstatus != 8 && orderstatus != 9) {
            returndata.paystatusname = "已支付";
            returndata.paystatuscode = 50;
        }

        //switch (param) {
        //    case 0:
        //        paystatus = "不需要支付";
        //        break;
        //    case 1:
        //        paystatus = "等待支付";
        //        break;
        //    case 3:
        //        paystatus = "支付成功";
        //        break;
        //    case 4:
        //        paystatus = "退款成功"
        //        break;
        //}
        return returndata;
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
