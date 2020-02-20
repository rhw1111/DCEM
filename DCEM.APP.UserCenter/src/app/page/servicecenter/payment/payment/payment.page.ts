import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../../app/component/typescript/dcem.core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage_LoginInfo } from '../../../../component/typescript/logininfo.storage';
import * as $ from 'jquery';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.page.html',
    styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
    public model: any = {
        search: {
            apiUrl: "api/order/PayedConfrim",
            productCode: "",
        },
        title: "选择支付方式",
        datas: {},
        score: {
            apiUrl: "/api/user/addintegral",
            search: {
                UserId: this._logininfo.GetSystemUserId(),
                IntegralType: 1,
                Integral: 0,
            },
            data: [],
            balance: 0,
        },
    };
    constructor(
        private _logininfo: Storage_LoginInfo,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private routerinfo: ActivatedRoute,
        private alertController: AlertController,
    ) { }

    ngOnInit() {
        //获取参数
        this.model.datas = this.routerinfo.snapshot.queryParams;
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
    //支付
    payAmount(i) {
        this._page.loadingShow();
        if (i == 0) {
            this.model.score.search.Integral = this.model.datas.TotalIntegral;
            this._http.postForToaken(
                this.model.score.apiUrl,
                this.model.score.search,
                (res: any) => {
                    if (res !== null) {
                        if (res.Result) {
                            this.postPay();
                        }
                    }
                    else {
                        this._page.alert("消息提示", "订单支付失败");
                    }

                },
                (err: any) => {
                    this._page.alert("消息提示", "订单支付失败");
                }
            );
        } else {
            this.postPay()
        }
    }
    postPay() {
        this._http.postForShopping(this.model.search.apiUrl,
            {
                OrderCode: this.model.datas.OrderCode,
                RightsPackageGet: this.model.datas.RightsPackageGet
            },
            (res: any) => {
                console.log(res);
                if (res != null) {
                    if (res.IsSuccess) {
                        this.presentAlertConfirm();
                    }
                }
                else {
                    this._page.alert("消息提示", "订单支付失败");
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "订单支付失败");
                this._page.loadingHide();
            }
        );
    }
    //支付成功跳转
    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            header: '支付成功',
            message: '订单已支付成功',
            buttons: [
                {
                    text: '确定',
                    handler: () => {
                        this._page.navigateRoot("/personalcenter/myorder/fineorder/detail", { code: this.model.datas.OrderCode });
                    }
                }
            ]
        });
        await alert.present();
    }
}
