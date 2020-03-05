import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_ShareData } from '../../../../../app/component/typescript/dcem.core';
import { ActivatedRoute } from '@angular/router';
import { Storage_LoginInfo } from '../../../../component/typescript/logininfo.storage';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
    public tab: any = 'equityorder';
    public model: any = {
        search: {
            apiUrl: "api/smallbooking/QuerySmallOrder",
        },
        submit: {
            apiUrl: "api/smallbooking/AddOrEdit",
        },
        title: "我的预订订单",
        datas: [],
        shareDataKey: "paymenting",
    };
    constructor(
        private _logininfo: Storage_LoginInfo,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private routerinfo: ActivatedRoute,
        private alertController: AlertController,
        private _shareData: DCore_ShareData
    ) { }

    ngOnInit() {
        this.initListLoading();
  }
    //初始化页面数据加载
    initListLoading() {
        this._page.loadingShow();
        this.getList(null);
    }
    //获取列表数据
    getList(event) {
        var requests = {
            "mcs_userid": this._logininfo.GetSystemUserId(),
            "mcs_smallorderid": null,
            "mcs_mobilephone": this._logininfo.GetPhone(),
            "mcs_name":null
        };
        this._http.get(this.model.search.apiUrl + "?mcs_userid=" + this._logininfo.GetSystemUserId() + "&mcs_smallorderid=&mcs_mobilephone=" + this._logininfo.GetPhone() + "&mcs_name=",
            requests,
            (res: any) => {
                if (res != null && res.Results.length > 0) {
                    console.log(res.Results);
                    //绑定数据
                    this.model.datas = res.Results;
                    for (var i = 0; i < this.model.datas.length; i++) {
                        this.model.datas[i].Attributes.paystatus = this.getPayStatus(this.model.datas[i].Attributes.mcs_orderstatus);
                        this.model.datas[i].Attributes.mcs_premiumcode = this.model.datas[i]["Attributes"]["blindorder.mcs_premiumcode"];
                        this.model.datas[i].Attributes.mcs_premiumname = this.model.datas[i]["Attributes"]["blindorder.mcs_name"];
                        this.model.datas[i].Attributes.createdon = this.Format(this.model.datas[i].Attributes.createdon,"yyyy-MM-dd HH:mm:ss");
                    }
                    event ? event.target.complete() : '';
                    //判断是否有新数据
                    //if (res.Datas.length < this.model.search.pageSize) {
                    //    event ? event.target.disabled = true : "";
                    //    this.model.isending = true;
                    //}
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
    paynow(ordercode, mcs_smallorderid, mcs_premiumcode, mcs_totalorder) {
        //var param = {
        //    "OrderCode": ordercode,
        //    "mcs_smallorderid": mcs_smallorderid,
        //    "BlindOrder": mcs_premiumname,
        //    "TotalOrder": mcs_totalorder,
        //    "OrderStatus": 1
        //};
        var param = {
            "OrderCode": ordercode,
            "mcs_smallorderid": mcs_smallorderid,
            "PremiumCode": mcs_premiumcode,
            "TotalOrder": mcs_totalorder,
            "PaymentCode": this.Gen("XDPN", 9), //支付记录编码
            "OrderStatus": 1, //订单状态0-待支付、1-已支付、2-申请退订、3-已退订
            "TransactionTime": this.Format(new Date(),"yyyy-MM-dd HH:mm:ss"), //交易时间
            "Transactionamount": mcs_totalorder, //交易金额
            "PaymentChannel": 2,// 支付渠道 0-储蓄卡、1-网上银行、2-微信、3-支付宝
            "Spare5": this.Gen("PAY", 9), //支付流水号
            "Spare6": this._logininfo.GetSystemUserId()
        };
        this._shareData.set(this.model.shareDataKey, param);
        this._page.goto("/carreserve/payorder/payment");
    }
    orderdetail(ordercode, mcs_smallorderid) {
        var param = {
            "OrderCode": ordercode,
            "mcs_smallorderid": mcs_smallorderid
        };
        this._page.goto("/carreserve/myreserveorder/detail", { params: JSON.stringify(param) });
    }
    cancelnow(ordercode, mcs_premiumcode, mcs_equityname, mcs_equitycode, mcs_equityamount, mcs_optionalname, mcs_optionalcode, mcs_optionalamount) {
        this.presentAlertPrompt(ordercode, mcs_premiumcode, mcs_equityname, mcs_equitycode, mcs_equityamount, mcs_optionalname, mcs_optionalcode, mcs_optionalamount);
    }
    async presentAlertPrompt(ordercode, mcs_premiumcode, mcs_equityname, mcs_equitycode, mcs_equityamount, mcs_optionalname, mcs_optionalcode, mcs_optionalamount) {
        const alert = await this.alertController.create({
            header: "确定申请退订",
            //message: tips,
            inputs: [
                {
                    name: 'reason',
                    type: 'text',
                    placeholder: '退订原因'
                }
            ],
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
                    handler: (data) => {
                        this._page.loadingShow();
                        var request = {
                            "UserId": "",
                            "FullName": "",
                            "MobilePhone": "",
                            "OrderCode": ordercode,// 小订订单编号*
                            "OrderStatus": 2, //订单状态*
                            "Gender": 1,
                            "TotalOrder": 0,
                            "BlindOrder": "",// 预约单号
                            "VehTypeCode": "",// 意向车型编号
                            "VehTypeName": "",// 意向车型名称
                            "VehConfigCode": "",// 意向配置编号
                            "VehConfigName": "",// 意向配置名称
                            "EquityCode": "",//权益编号
                            "EquityPackageId": "",//权益ID
                            "EquityName": "",// 权益名称
                            "OptionalCode": "",// 选配编号
                            "OptionalId": "",//选装ID
                            "OptionalName": "",// 选配名称
                            "CityOnCard": "",// 上牌城市
                            "ProvinceOnCard": "",// 上牌省份
                            "UnsubscribeReason": data.reason,// 退订原因(订单状态为2- 退订申请时必传)*
                            "PaymentCode": "",// 支付记录编码(订单状态为1-已支付、3-已退订时必传)
                            "TransactionTime": new Date(),// 交易时间
                            "Transactionamount": 0,// 交易金额（精确两位小数）
                            "PaymentChannel": 2,// 支付渠道 0-储蓄卡、1-网上银行、2-微信、3-支付宝
                            "SmallRefundCode": this.Gen("RYO", 9),// 小订退订编号(订单状态为2-申请退订、3-已关闭时必传)*
                            "EquityRefundAmount": mcs_equityamount,// 权益退订金额(订单状态为2-退订申请时必传)*
                            "EquityRefundCode": mcs_equitycode,//退订权益编号(订单状态为2-申请退订、3-已关闭时必传)*
                            "EquityRefundName": mcs_equityname,// 退订权益名称(订单状态为2-申请退订、3-已关闭时必传)*
                            "OptionalRefundAmount": mcs_optionalamount,// 选配退订金额*
                            "OptionalRefundCode": mcs_optionalcode,// 选配退订编号*
                            "OptionalRefundName": mcs_optionalname,// 退订选配名称(订单状态为2-申请退订、3-已关闭时必传)*
                            "Spare1": "",
                            "Spare2": "",
                            "Spare3": "",
                            "Spare4": "",
                            "Spare5": "",
                            "Spare6": "",
                            "Spare7": "",
                            "PremiumCode": mcs_premiumcode// 预约号*
                        };
                        console.log(request);
                        this._http.post(
                            this.model.submit.apiUrl,
                            request,
                            (res: any) => {
                                if (res == null || !res.Result) {
                                    this._page.alert("消息提示", "申请退订失败");
                                }
                                else {
                                    this._page.alert("消息提示", "申请退订成功");
                                    //重新绑定数据
                                    for (var i = 0; i < this.model.datas.length; i++) {
                                        if (ordercode == this.model.datas[i].Attributes.mcs_name) {
                                            this.model.datas[i].Attributes.mcs_orderstatus = 2;
                                            this.model.datas[i].Attributes.paystatus = this.getPayStatus(this.model.datas[i].Attributes.mcs_orderstatus);
                                        }
                                    }
                                }
                                this._page.loadingHide();
                            },
                            (err: any) => {
                                this._page.loadingHide();
                                this._page.alert("消息提示", "申请退订失败");
                            }
                        );
                    }
                }
            ]
        });
        await alert.present();
    }
    //订单状态0-待支付、1 - 已支付、2 - 申请退订、3 - 已退订
    getPayStatus(param) {
        var paystatus;
        switch (param) {
            case 0:
                paystatus = "待支付";
                break;
            case 1:
                paystatus = "已支付";
                break;
            case 2:
                paystatus = "申请退订中";
                break;
            case 3:
                paystatus = "已退订"
                break;
            case 4:
                paystatus = "已支付部分退订"
                break;
            case 5:
                paystatus = "退订申请拒绝"
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
    //生成订单号
    Gen(str, len) {
        len = len || 10;
        var $chars = '0123456789';
        var maxPos = $chars.length;
        var pwd = '';
        for (var i = 0; i < len; i++) {
            //0~32的整数
            pwd += $chars.charAt(Math.floor(Math.random() * (maxPos + 1)));
        }
        return str + this.getNowFormatDate() + pwd;
    }
    //获取当前日期组合
    getNowFormatDate() {
        var datetime = new Date();
        var year = datetime.getFullYear();
        var month = datetime.getMonth() + 1;
        var date = datetime.getDate();
        var strmonth;
        var strdate;
        if (month >= 1 && month <= 9) {
            strmonth = "0" + month;
        } else {
            strmonth = month;
        }
        if (date >= 0 && date <= 9) {
            strdate = "0" + date;
        } else {
            strdate = date
        }
        var currentdate = "" + year + strmonth + strdate;
        return currentdate;
    }
}
