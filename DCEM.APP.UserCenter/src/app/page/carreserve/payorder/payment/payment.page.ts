import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../../app/component/typescript/dcem.core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import * as $ from 'jquery';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
    public model: any = {
        search: {
            apiUrl: "api/smallbooking/AddOrEdit",
            productCode: "",
        },
        title: "选择支付方式",
        datas: {},
    };
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private routerinfo: ActivatedRoute,
        private alertController: AlertController,
    ) { }

    ngOnInit() {
        //获取参数
        var datastr = this.routerinfo.snapshot.queryParams["params"];
        this.model.datas = JSON.parse(datastr);
        this.initListLoading();
  }
    //初始化页面数据加载
    initListLoading() {
        this._page.loadingShow();
        this.TimeDown();
        this._page.loadingHide();
    }
    //倒计时
    TimeDown() {
        var minute = 29;
        var minutestr = "29";
        var second = 59;
        var secondstr = "59";
        setInterval(function () {
            second--;
            secondstr = second.toString();
            if (secondstr == "-1" && minutestr == "00") {
                minute = 29;
                minutestr = "29";
                second = 59;
                secondstr = "59";

            }; //当分钟和秒钟都为00时，重新给值
            if (secondstr == "-1") {
                second = 59;
                secondstr = "59";
                minute--;
                minutestr = minute.toString();
                if (minute < 10) {
                    minutestr = "0" + minute;
                }

            }; //当秒钟为00时，秒数重新给值
            if (second < 10) {
                secondstr = "0" + second;
            }
            $("#minute").text(minutestr);
            $("#second").text(secondstr);

        }, 1000);
    }
    payAmount() {
        var request = {
            "OrderCode": this.model.datas.OrderCode,
            "BlindOrder": this.model.datas.BlindOrder,
            "PremiumCode": this.model.datas.PremiumCode,
            "TotalOrder": this.model.datas.TotalOrder,
            "OrderStatus": this.model.datas.OrderStatus,//订单状态0-待支付、1-已支付、2-申请退订、3-已退订
            "PaymentCode": this.model.datas.PaymentCode, //支付记录编码
            "TransactionTime": this.model.datas.TransactionTime, //交易时间
            "Transactionamount": this.model.datas.Transactionamount, //交易金额
            "PaymentChannel": this.model.datas.PaymentChannel,// 支付渠道 0-储蓄卡、1-网上银行、2-微信、3-支付宝
            "Spare5": this.model.datas.Spare5, //支付流水号
            "Spare6": this.model.datas.Spare6
        };

        request.OrderStatus = 1;
        this._page.loadingShow();
        this._http.post(this.model.search.apiUrl,
            request,
            (res: any) => {
                if (res != null) {
                    if (res.Result) {
                        this.presentAlertConfirm();
                    } else {
                        this._page.alert("消息提示", "提交订单失败!");
                    }
                }
                else {
                    this._page.alert("消息提示", "提交订单失败");
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "提交订单失败");
                this._page.loadingHide();
            }
        );
    }
    //支付成功跳转
    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            header: '消息提示',
            message: '订单已支付成功',
            buttons: [
                {
                    text: '确定',
                    handler: () => {
                        var param = {
                            "OrderCode": this.model.datas.OrderCode,
                            "PremiumCode":this.model.datas.PremiumCode,
                            "mcs_smallorderid": this.model.datas.mcs_smallorderid
                        };
                        this._page.navigateRoot("/carreserve/payorder/success", { params: JSON.stringify(param) });
                    }
                }
            ]
        });
        await alert.present();
    }
}
