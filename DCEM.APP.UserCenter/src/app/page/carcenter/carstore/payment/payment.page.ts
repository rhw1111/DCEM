import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonBackButton, IonBackButtonDelegate } from '@ionic/angular';
import { DCore_Http, DCore_Page, DCore_Valid, DCore_ShareData, DCore_String } from 'app/component/typescript/dcem.core';
import * as $ from 'jquery';
import { Storage_LoginInfo } from 'app/component/typescript/logininfo.storage';
import { LoginComponent } from 'app/component/modal/login/login.component'
    ;
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
        productPriceMap: {},                        //产品地图
        selectProductKey: "",                       //选择的产品Key
        selectProduct: {
            ProductInfo: {
            }
        },                          //选择的产品   
        selectproductRelatedMap: {},
        selectproductOrderingattributeMap: {},
        packageMoney: 0,                            //选择的所有对象金额
        packageMap: {},                             //选择的所有对象
        userInfo: {},  //用户信息
        buyingMode: 1,//购车方式
        payMode: 0,//支付方式
    }
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _valid: DCore_Valid,
        private _shareData: DCore_ShareData,
        private _string: DCore_String,
        private _storage_LoginInfo: Storage_LoginInfo,
        private _modalCtrl: ModalController
    ) {

    }


    ngOnInit() {
        if (this._shareData.has(this.mod.shareDataKey)) {
            this.shareData = this._shareData.get(this.mod.shareDataKey);
            this.initShareData();
        } else {
            this._page.navigateRoot("/carcenter/carstore/index", null, "back");
        }
    }

    public initShareData() {

        this.shareData.payMode = 0;
        this.shareData.productPriceMap = {};
        for (var productPrice of this.shareData.selectProduct["ProductPriceArray"]) {
            var key = productPrice["mcs_orderguid"];
            this.shareData.productPriceMap[key] = productPrice;
        }
    }

    //支付
    public onPayClick() {
        var that = this;
        if (this._valid.isNullOrEmpty(this._storage_LoginInfo.GetSystemUserId())) {
            this._page.alert("消息提示", "您尚未登录,请先登录后在进行操作", function () {
                that.presentLoginModal();
            });
            return;
        }


        var postData = this.getPostData();
        this._http.postForShopping(
            this.mod.postUrl,
            postData,
            (res: any) => {
                if (res["Code"] === "000" && !this._valid.isNullOrEmpty(res["OrderId"])) {
                    this._page.alert("消息提示", "您的订单已经下单成功", function () {

                        //that._page.navigateRoot("/personalcenter/myorder/carorder/detail", { code: postData["OrderData"]["OrderCode"] }, "");

                        //that._page.navigateRoot("/personalcenter/myorder/carorder/detail", { orderid: res["OrderId"] }, "");

                        that._page.navigateRoot("/personalcenter/myorder/index", {}, "");
                    });
                }
                else {
                    this._page.alert("消息提示", res.Message);
                }
            },
            (err: any) => {
                this._page.alert("消息提示", "下单异常")
                console.log(err);
            }
        );
    }

    //用户登录
    public async presentLoginModal() {
        const modal = await this._modalCtrl.create({
            component: LoginComponent,
            componentProps: {
                'status': 1
            }
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
    }


    //支付方式
    public onPayModeClikc(payMode: number) {
        this.shareData.payMode = payMode;
    }

    public getPostData() {

        var data = {
            "OrderData": {
                "OrderCode": "DCEM_" + this._string.GetDateFormat(new Date(), "yyyyMMddhhmmss") + "_" + this._string.GetRandom(3).toLocaleUpperCase(),
                "UserId": this._storage_LoginInfo.GetSystemUserId(),
                "UserName": this.shareData.userInfo["name"],
                "OrderType": 0,
                "UserMobile": this.shareData.userInfo["phone"],
                "Media": 3,
                "ChannelSource": "1099",
                "OrderTime": new Date(),
                "CarBuyerName": this.shareData.userInfo["name"],
                "CarBuyerPhone": this.shareData.userInfo["phone"],
                "CarBuyerIdType": Number(this.shareData.userInfo["certType"]),
                "CarBuyerId": this.shareData.userInfo["certNumber"],
                "ShippingFlag": false,
                "PaymentFlag": true,
                "PaymentStatus": 3,
                "CashTotal": this.shareData.packageMoney,  //线上应收金额
                "TotalDepositAmount": this.shareData.selectProduct["ProductInfo"]["mcs_depositamount"],  //线上已收金额
                "ReceivedDepositAmount": this.shareData.selectProduct["ProductInfo"]["mcs_depositamount"],
                "ReceivableAmount": this.shareData.selectProduct["ProductInfo"]["mcs_depositamount"],
                "DeductionAmount": 0,
                "FinalPayment": this.shareData.packageMoney,  //订单尾款
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
                "OrderClass": 100,
                "DealerCode": this.shareData.userInfo["dealerCode"],
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
                    {
                        "Status": 3,
                        "HandlerTime": new Date()
                    }
                ]
            },
            "Products": [
                
            ],
            "PayRecordsList": [
                {
                    "PaymentType": 1, //支付方式1：现金;2：积分;3：权益项抵扣;
                    "PaymentAmount": this.shareData.selectProduct["ProductInfo"]["mcs_depositamount"], //支付金额或积分
                    "CashPayment": 0, //积分不够现金支付数
                    "PaymentTotal": this.shareData.packageMoney,
                    "PaymentTime": new Date(),
                    "PaySerialNumber": "PAY-" + this._string.GetDateFormat(new Date(), "yyyyMMddhhmmssSSS"),
                    "SerialNumber": this._string.GetDateFormat(new Date(), "yyyyMMddhhmmssSSS"),
                    "EquityItem": "",
                    "EquityItemCode": "",
                    "DirectionOfPayment": "",
                    "PaymentUserId": this._storage_LoginInfo.GetSystemUserId(),
                    "PaymentChannel": this.shareData.payMode,
                    "Remark": ""
                }
            ]
        }

        //找产品
        var orderGuid = '';
        for (var orderKey in this.shareData.selectproductOrderingattributeMap) {
            if (this._valid.isNullOrEmpty(orderGuid))
                orderGuid = this.shareData.selectproductOrderingattributeMap[orderKey]["id"];
            else
                orderGuid += "+" + this.shareData.selectproductOrderingattributeMap[orderKey]["id"];
            console.log(orderKey);
        }


        //组装产品
        if (!this._valid.isNull(this.shareData.productPriceMap[orderGuid])) {
            var product = {
                "ProductCode": this.shareData.selectProduct["ProductInfo"]["mcs_code"],
                "SkuCode": this.shareData.productPriceMap[orderGuid]["mcs_skucode"],
                "OrderQty": 1,   //数量
                "Integral": 0,
                "Totalintegral": 0,
                "UnitPrice": this.shareData.productPriceMap[orderGuid]["mcs_salesprice_base"],  //单价
                "ImageUrl": "",
                "TotalPrice": this.shareData.productPriceMap[orderGuid]["mcs_salesprice_base"],    //总价
                "DeliveryType": 1,  //交货方式
                "ProviderParams": [
                ]
            }
            data["Products"].push(product);
        }

        //组装选装地图
        for (var relatedKey in this.shareData.selectproductRelatedMap) {
            var product = {
                "ProductCode": this.shareData.productMap[this.shareData.productRelatedMap[relatedKey]["a.mcs_product"]]["ProductInfo"]["mcs_code"],
                "SkuCode": this.shareData.productRelatedMap[relatedKey]["a.mcs_skucode"],
                "OrderQty": 1,   //数量
                "Integral": 0,
                "Totalintegral": 0,
                "UnitPrice": this.shareData.selectproductRelatedMap[relatedKey]["money"],  //单价
                "ImageUrl": "",
                "TotalPrice": this.shareData.selectproductRelatedMap[relatedKey]["money"],    //总价
                "DeliveryType": 1,  //交货方式
                "ProviderParams": [
                ]
            }
            data["Products"].push(product);
        }

        return data;
    }


}
