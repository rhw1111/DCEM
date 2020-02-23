import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../../component/typescript/dcem.core';
import { Storage_LoginInfo } from '../../../../../component/typescript/logininfo.storage';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import * as $ from 'jquery';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
    public model: any = {
        search: {
            apiUrl: "api/order/SonOrderDetail",
        },
        title: "订单详情",
        datadetail: {},
        datalist: [],
        buyertitle: "",
        //OrderType: 10, //商品类型; 1: 整车; 2: 整车选装件; 3: 充电桩 / 枪; 4: 备件; 7: 业务办理; 8: 施工; 10: 精品;
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
        cancel: {
            apiUrl: "api/order/cancelOrder",
        },
    };
    private code
    constructor(
        private _logininfo: Storage_LoginInfo,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private routerinfo: ActivatedRoute,
        private alertController: AlertController,
    ) { }

    ngOnInit() {
        //code为参数名字
        this.code = this.routerinfo.snapshot.queryParams["code"];
        this.initListLoading();
  }
    //初始化页面数据加载
    initListLoading() {
        this._page.loadingShow();
        this.getDetail(null);
    }
    //获取详情数据
    getDetail(event) {
        this._http.postForShopping(this.model.search.apiUrl,
            {
                OrderCode: this.code
            },
            (res: any) => {
                console.log(res);
                if (res != null) {
                    //绑定数据
                    var paystatus = this.getPayStatus(res.OrderData.Status, res.OrderData.PaymentStatus);
                    res.OrderData.PayStatusStr = paystatus.paystatusname;
                    res.OrderData.PayStatusCode = paystatus.paystatuscode;
                    res.OrderData.OrderTime = this.Format(res.OrderData.OrderTime, "yyyy-MM-dd HH:mm:ss")
                    if (res.OrderData.ProductType == 7 || res.OrderData.ProductType == 8) {
                        this.model.buyertitle = "购买人信息";
                    } else {
                        this.model.buyertitle = "收货信息";
                    }
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
    //获取当前用户积分
    getScore(event) {
        this._http.postForToaken(
            this.model.score.apiUrl,
            this.model.score.search,
            (res: any) => {
                if (res !== null) {
                    this.model.score.balance = res.balance;
                    if (this.model.datadetail.ReceivedIntegral > this.model.score.balance) {
                        this.model.datadetail.ReceivedIntegral = this.model.score.balance;
                        this.model.datadetail.CashPayment = ((this.model.datadetail.CashTotal / this.model.datadetail.InstallmentTotal) * (this.model.datadetail.InstallmentTotal - this.model.datadetail.ReceivedIntegral)).toFixed(2);
                    }
                    var returndata = {
                        "OrderCode": this.code,
                        "TotalPrice": this.model.datadetail.CashPayment,
                        "TotalIntegral": this.model.datadetail.ReceivedIntegral,
                        "IsNeedCash": this.model.datadetail.CashPayment != 0
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
    goPay() {
        if (this.model.datadetail.ReceivedIntegral != 0) {
            this.getScore(null);
        } else {
            var returndata = {
                "OrderCode": this.code,
                "TotalPrice": this.model.datadetail.ReceivedIntegral == 0 ? this.model.datadetail.TotalDeposiAmount : -this.model.datadetail.CashPayment,
                "TotalIntegral": this.model.datadetail.ReceivedIntegral,
                "IsNeedCash": this.model.datadetail.CashPayment != 0
            };
            this._page.goto("/servicecenter/payment/payment", returndata);
        }
        
    }

    //取消订单/申请退款
    goCancel(ordertype) {
        this.presentAlertConfirm(ordertype);
    }
    async presentAlertConfirm(ordertype) {
        var tips = ordertype == 1 ? "确定取消订单?" : "确定申请退款?";
        const alert = await this.alertController.create({
            header: tips,
            //message: tips,
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                },
                {
                    text: '确定',
                    handler: () => {
                        this._page.loadingShow();
                        var failtips = ordertype == 1 ? "取消订单失败" : "申请退款失败";
                        var successtips = ordertype == 1 ? "订单取消成功" : "申请退款成功";
                        this._http.post(
                            this.model.cancel.apiUrl,
                            { OrderCode: this.code },
                            (res: any) => {
                                if (res == null || !res.Result) {
                                    this._page.alert("消息提示", failtips);
                                }
                                else {
                                    this._page.alert("消息提示", successtips);
                                    //重新绑定数据
                                    this.model.datadetail.Status = ordertype == 1 ? 5 : 8;
                                    var paystatus = this.getPayStatus(this.model.datadetail.Status, this.model.datadetail.PaymentStatus);
                                    this.model.datadetail.PayStatusStr = paystatus.paystatusname;
                                    this.model.datadetail.PayStatusCode = paystatus.paystatuscode;
                                }
                                this._page.loadingHide();
                            },
                            (err: any) => {
                                this._page.loadingHide();
                                this._page.alert("消息提示", failtips);
                            }
                        );
                    }
                }
            ]
        });
        await alert.present();
    }

    showProvider() {
        if ($("ion-item[name=provider]").css("display") == "none") {
            $("#plus").hide();
            $("#el").show();
            $("ion-item[name=provider]").slideDown();
        } else {
            $("#el").hide();
            $("#plus").show();
            $("ion-item[name=provider]").slideUp();
        }
    }

    getPayStatus(orderstatus, paymentstatus) {
        var returndata = {
            "paystatusname": "",
            "paystatuscode": 0
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
