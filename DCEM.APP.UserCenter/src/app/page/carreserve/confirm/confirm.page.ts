import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_ShareData } from '../../../../app/component/typescript/dcem.core';
import { ActivatedRoute } from '@angular/router';
import { Storage_LoginInfo } from '../../../../app/component/typescript/logininfo.storage';

@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.page.html',
    styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {
    public model: any = {
        submit: {
            apiUrl: "api/smallbooking/AddOrEdit",
        },
        search: {
            apiUrl: "api/BlindOrder/QueryList",
        },
        title: "确认订单信息",
        datas: {},
        checkedequitypackage: [],//选择权益包
        checkedoptional: [],//选择选装包
        shareDataKey: "smallbooking",
    };
    constructor(
        private _logininfo: Storage_LoginInfo,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private routerinfo: ActivatedRoute,
        private _shareData: DCore_ShareData
    ) { }

    ngOnInit() {
        //获取参数
        //var datastr = this.routerinfo.snapshot.queryParams["params"];
        //this.model.datas = JSON.parse(datastr);
        if (this._shareData.has(this.model.shareDataKey)) {
            this.model.datas = this._shareData.get(this.model.shareDataKey);
            var equitycode = this.model.datas.request.EquityCode;
            var optionallist = this.model.datas.request.OptionalCode.split(';');
            var checkedequitypackage = [];
            var checkedoptional = [];
            this.model.datas.smallbooking.equitypackagelist.forEach(item => {
                if (item.EquityPackageInfo.mcs_code == equitycode) {
                    checkedequitypackage.push(item);
                }
            });
            this.model.checkedequitypackage = checkedequitypackage;
            for (var j = 0; j < optionallist.length - 1; j++) {
                this.model.datas.smallbooking.optionallist.forEach(item => {
                    if (optionallist[j] == item.OptionalInfo.mcs_code) {
                        checkedoptional.push(item);
                    }
                })
            }
            this.model.checkedoptional = checkedoptional;
        }
        else {
            this._page.goto("/carreserve/index");
        }
    }
    //提交订单
    btnSubmit() {
        var request = this.model.datas.request;
        request.OrderCode = this.Gen("YO",9);
        this._page.loadingShow();
        this._http.post(this.model.submit.apiUrl,
            request,
            (res: any) => {
                if (res != null) {
                    if (res.Result) {
                        var param = {
                            "OrderCode": request.OrderCode,
                            "mcs_smallorderid":res.Data.Id,
                            //"BlindOrder": request.BlindOrder,
                            "PremiumCode":request.PremiumCode,
                            "TotalOrder": request.TotalOrder,
                            "PaymentCode": this.Gen("XDPN",9), //支付记录编码
                            "OrderStatus": 1, //订单状态0-待支付、1-已支付、2-申请退订、3-已退订
                            "TransactionTime": this.Format("yyyy-MM-dd HH:mm:ss"), //交易时间
                            "Transactionamount": request.TotalOrder, //交易金额
                            "PaymentChannel": 2,// 支付渠道 0-储蓄卡、1-网上银行、2-微信、3-支付宝
                            "Spare5": this.Gen("PAY", 9), //支付流水号
                            "Spare6": this._logininfo.GetSystemUserId()
                        };
                        this._page.goto("/carreserve/payorder/payment", { params: JSON.stringify(param) });
                    } else {
                        this._page.alert("消息提示", res.Description);
                    }
                }
                else {
                    this._page.alert("消息提示",  res.Description);
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "提交订单失败");
                this._page.loadingHide();
            }
        );
    }




    //生成订单号
    Gen(str,len) {
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
    Format(fmt) {
        var date = new Date();
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
