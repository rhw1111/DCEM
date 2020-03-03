import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_ShareData } from '../../../../../app/component/typescript/dcem.core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage_LoginInfo } from '../../../../component/typescript/logininfo.storage';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
    public model: any = {
        search: {
            apiUrl: "api/smallbooking/QuerySmallOrderDetail",
        },
        submit: {
            apiUrl: "api/smallbooking/AddOrEdit",
        },
        title: "订单详情",
        datas: {},
        smallorderinfo: {},
        equitypackagelist: [],
        optionallist:[],
        params: {},
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
        //获取参数
        var datastr = this.routerinfo.snapshot.queryParams["params"];
        this.model.params = JSON.parse(datastr);
        this.initListLoading();
  }
    //初始化页面数据加载
    initListLoading() {
        this._page.loadingShow();
        this.getDetail(null);
    }
    //获取数据
    getDetail(event) {
        var requests = {
            "mcs_smallorderid": this.model.params.mcs_smallorderid
        };
        this._http.get(this.model.search.apiUrl + "?mcs_smallorderid=" + this.model.params.mcs_smallorderid,
            requests,
            (res: any) => {
                if (res != null) {
                    console.log(res);
                    //绑定数据
                    this.model.datas = res;
                    this.model.smallorderinfo = this.model.datas.SmallOrderList[0].SmallOrderInfo;
                    this.model.smallorderinfo.paystatus = this.getPayStatus(this.model.datas.SmallOrderList[0].SmallOrderInfo.mcs_orderstatus);
                    this.model.smallorderinfo.createdon = this.Format(this.model.datas.SmallOrderList[0].SmallOrderInfo.createdon, "yyyy-MM-dd HH:mm:ss");
                    this.model.smallorderinfo.mcs_premiumcode = this.model.datas.SmallOrderList[0]["SmallOrderInfo"]["blindorder.mcs_premiumcode"];
                    this.model.smallorderinfo.mcs_premiumname = this.model.datas.SmallOrderList[0]["SmallOrderInfo"]["blindorder.mcs_name"];
                    this.model.equitypackagelist = this.model.datas.SmallOrderList[0].EquityPackageArray;
                    this.model.optionallist = this.model.datas.SmallOrderList[0].OptionalArray;
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
            "TransactionTime": this.Format(new Date(), "yyyy-MM-dd HH:mm:ss"), //交易时间
            "Transactionamount": mcs_totalorder, //交易金额
            "PaymentChannel": 2,// 支付渠道 0-储蓄卡、1-网上银行、2-微信、3-支付宝
            "Spare5": this.Gen("PAY", 9), //支付流水号
            "Spare6": this._logininfo.GetSystemUserId()
        };
        this._shareData.set(this.model.shareDataKey, param);
        this._page.goto("/carreserve/payorder/payment");
    }
    cancelnow() {
        var orderstatus = 2;
        this.presentAlertConfirm(orderstatus);
    }
    async presentAlertConfirm(orderstatus) {
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
                            "OrderCode": this.model.smallorderinfo.mcs_name,// 小订订单编号*
                            "OrderStatus": orderstatus, //订单状态*
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
                            "EquityRefundAmount": this.model.smallorderinfo.mcs_equityamount,// 权益退订金额(订单状态为2-退订申请时必传)*
                            "EquityRefundCode": this.model.smallorderinfo.mcs_equitycode,//退订权益编号(订单状态为2-申请退订、3-已关闭时必传)*
                            "EquityRefundName": this.model.smallorderinfo.mcs_equityname,// 退订权益名称(订单状态为2-申请退订、3-已关闭时必传)*
                            "OptionalRefundAmount": this.model.smallorderinfo.mcs_optionalamount,// 选配退订金额*
                            "OptionalRefundCode": this.model.smallorderinfo.mcs_optionalcode,// 选配退订编号*
                            "OptionalRefundName": this.model.smallorderinfo.mcs_optionalname,// 退订选配名称(订单状态为2-申请退订、3-已关闭时必传)*
                            "Spare1": "",
                            "Spare2": "",
                            "Spare3": "",
                            "Spare4": "",
                            "Spare5": "",
                            "Spare6": "",
                            "Spare7": "",
                            "PremiumCode": this.model.smallorderinfo.mcs_premiumcode// 预约号*
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
                                    this.model.datas.SmallOrderList[0].SmallOrderInfo.mcs_orderstatus = orderstatus;
                                    this.model.smallorderinfo = this.model.datas.SmallOrderList[0].SmallOrderInfo;
                                    this.model.smallorderinfo.paystatus = this.getPayStatus(this.model.datas.SmallOrderList[0].SmallOrderInfo.mcs_orderstatus);
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
