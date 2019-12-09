import { Component, OnInit, ViewChild } from '@angular/core';
import { IonBackButton, IonBackButtonDelegate } from '@ionic/angular';
import { DCore_Http, DCore_Page, DCore_Valid, DCore_ShareData } from 'app/component/typescript/dcem.core';
import * as $ from 'jquery';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.page.html',
    styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

    public mod = {
        shareDataKey: "carstore",
        postUrl: "api/order/CreateOrder",
    };

    public objectKeys = Object.keys;

    //共享数据对象
    public shareData = {
        productMap: {},                            //产品视图
        productRelatedMap: {},                     //商品关联视图
        productOrderingattributeMap: {},           //产品的订购属性
        selectProductKey: "",                       //选择的产品Key
        selectProduct: {
            ProductInfo: {
            }
        },                          //选择的产品   
        selectproductRelatedMap: {},
        selectproductOrderingattributeMap: {},
        packageMoney: 0,                            //选择的所有对象金额
        packageMap: {},                             //选择的所有对象
        userInfo: {   //用户信息
        },
        buyingMode: 1,//购车方式
        payMode: 1,//支付方式
    }
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _valid: DCore_Valid,
        private _shareData: DCore_ShareData
    ) {

    }


    ngOnInit() {
        if (this._shareData.has(this.mod.shareDataKey)) {
            //this.shareData = this._shareData.get(this.mod.shareDataKey);
            //this.initShareData();
        } else {
            //this._page.navigateRoot("/carcenter/carstore/index", null, "back");
        }
    }

    public initShareData() {
        this.shareData.payMode = 1;
    }

    //支付
    public onPayClick() {
        var postData = this.getPostData();
        this._http.postForShopping(
            this.mod.postUrl,
            postData,
            (res: any) => {
                console.log("ok");
                console.log(res);
            },
            (err: any) => {
                console.log("err");
                console.log(err);
            }
        );
    }


    //支付方式
    public onPayModeClikc(payMode: number) {
        this.shareData.payMode = payMode;
    }


    public getPostData() {
        var data = {
            "OrderData": {
                "OrderCode": "Test001",
                "UserId": "text",
                "UserName": "张三",
                "OrderType": 0,
                "UserMobile": "15023228888",
                "Media": 3,
                "ChannelSource": "1099",
                "OrderTime": "2019-12-09T07:15:25.781Z",
                "CarBuyerName": "",
                "CarBuyerPhone": "",
                "CarBuyerIdType": 0,
                "CarBuyerId": "",
                "ShippingFlag": true,
                "PaymentFlag": true,
                "PaymentStatus": 1,
                "CashTotal": 0,
                "TotalDepositAmount": 0,
                "ReceivedDepositAmount": 0,
                "ReceivableAmount": 0,
                "DeductionAmount": 0,
                "FinalPayment": 0,
                "IntegralTotal": 0,
                "IntegralReceivable": 0,
                "ReceivedIntegral": 0,
                "DeductionIntegral": 0,
                "ActiveCode": "",
                "ActiveName": "",
                "OptimalCode": "",
                "RecommendUserName": "",
                "RecommendUserPhone": "",
                "Comment": "",
                "ReceiverName": "",
                "ReceiverPhone": "",
                "DealerCode": "",
                "DeliveryAdderss": "",
                "SmallOrderCodeList": [
                ],
                //"OrderFinancial": {   //金融方案
                //    "Code": "",
                //    "ServiceType": 10,
                //    "Description": "",
                //    "Terms": 0,
                //    "DownPayment": 0,
                //    "LoanAmount": 0,
                //    "FinalPayment": 0,
                //    "AmountMonthly": 0
                //},
                "PaymentStatusList": [
                ]
            },
            "Products": [
                {
                    "ProductCode": "01000008",
                    "SkuCode": "01000008002",
                    "OrderQty": 0,
                    "Integral": 0,
                    "Totalintegral": 0,
                    "UnitPrice": 0,
                    "ImageUrl": "",
                    "TotalPrice": 0,
                    "DeliveryType": 0,
                    "ProviderParams": [
                    ]
                }
            ],
            "PayRecordsList": [
            ]
        }

        return data;
    }
}
