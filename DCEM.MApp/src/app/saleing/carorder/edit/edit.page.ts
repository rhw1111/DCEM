import { Component, OnInit } from '@angular/core';
import { SelectUserComponent } from 'app/saleing/saleing.ser/components/select-user/select-user.component';
import { SelectCarproductComponent } from 'app/saleing/saleing.ser/components/select-carproduct/select-carproduct.component';
import { ModalController, NavController, ToastController, IonBackButton, IonBackButtonDelegate } from '@ionic/angular';
import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid, DCore_String } from 'app/base/base.ser/Dcem.core';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.page.html',
    styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

    constructor(
        private _modalCtrl: ModalController,
        private _navCtrl: NavController,
        private _toastCtrl: ToastController,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _shareData: DCore_ShareData,
        private _valid: DCore_Valid,
        private _string: DCore_String
    ) { }

    public objectKeys = Object.keys;
    //共享数据对象
    public shareData = {
        user: {},   //用户
        product: {
            ProductInfo: {},
        },
        productOrderingattributeMap: {},           //基础地图
        productOrderingattributeClassMap: {},      //分组地图
        productRelatedMap: {},                     //商品关联视图
        productPriceMap: {},    //sku地图
        postUrl: "/api/order/CreateOrder",
        skuMoney: 0,
        sumMoney: 0
    }

    ngOnInit() {

    }


    //选择用户
    async presentUserModal() {
        const modal = await this._modalCtrl.create({
            component: SelectUserComponent
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (!this._valid.isNull(data)) {
            this.shareData.user = data.user;
            this.shareData.user["ext_cardype"] = "1";
        }
    }

    //选择车型
    async presentCarproductModal() {
        const modal = await this._modalCtrl.create({
            component: SelectCarproductComponent
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (!this._valid.isNull(data)) {
            this.shareData.product = data.product;
            this.shareData.productOrderingattributeMap = {};           //基础地图
            this.shareData.productOrderingattributeClassMap = {};           //基础地图
            this.shareData.productRelatedMap = {};           //基础地图
            this.shareData.productPriceMap = {};

            //订购属性分组组装
            for (var productOrderingattribute of this.shareData.product["ProductOrderingattributeArray"]) {
                var productOrderingattributeKey = productOrderingattribute["mcs_tc_productorderingattributeid"];
                var productOrderingattributeClassKey = productOrderingattribute["mcs_attributegroupname"];

                //基础地图组装
                this.shareData.productOrderingattributeMap[productOrderingattributeKey] = productOrderingattribute;

                //分组地图组装
                if (this._valid.isNull(this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey])) {
                    this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey] = {};
                    this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey]["selectKey"] = "";
                    this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey]["money"] = 0;
                    this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey]["moneyFormat"] = "";
                    this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey]["productOrderingattributeMap"] = {};
                }

                if (this._valid.isNull(this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey][productOrderingattributeKey])) {
                    this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey]["productOrderingattributeMap"][productOrderingattributeKey] = {};
                }

                //默认的订购属性
                if (productOrderingattribute["mcs_isdefault"]) {
                    this.shareData.productOrderingattributeClassMap[productOrderingattributeClassKey]["selectKey"] = productOrderingattributeKey;
                }
            }
            //组装选装项
            for (var productRelated of this.shareData.product["ProductRelatedArray"]) {
                var productRelatedKey = productRelated["mcs_tc_productrelatedid"];
                this.shareData.productRelatedMap[productRelatedKey] = productRelated;
                this.shareData.productRelatedMap[productRelatedKey]["ext_select"] = "1";
                this.shareData.productRelatedMap[productRelatedKey]["ext_moneyFormat"] = "价格已包含";
                if (!this._valid.isNullOrEmpty(productRelated["a.mcs_salesprice"])) {
                    if (productRelated["a.mcs_salesprice"] > 0) {
                        this.shareData.productRelatedMap[productRelatedKey]["ext_moneyFormat"] = "+" + productRelated["a.mcs_salesprice"] + "元";
                    }
                }
            }

            //组装sku地图 
            for (var productPrice of this.shareData.product["ProductPriceArray"]) {
                var key = productPrice["mcs_orderguid"];
                this.shareData.productPriceMap[key] = productPrice;
            }
            //算总价
            this.calcSum();
        }
    }

    //计算总价
    public calcSum() {
        this.shareData.sumMoney = 0;
        this.shareData.skuMoney = 0;
        this.shareData.sumMoney = this.shareData.product["ProductInfo"]["mcs_baseprice"];
        this.shareData.skuMoney = this.shareData.product["ProductInfo"]["mcs_baseprice"];
        //找产品
        for (var groupKey in this.shareData.productOrderingattributeClassMap) {
            var selectKey = this.shareData.productOrderingattributeClassMap[groupKey]["selectKey"];
            if (this._valid.isNumber(this.shareData.productOrderingattributeMap[selectKey]["mcs_attributeextprice"])) {
                this.shareData.sumMoney += this.shareData.productOrderingattributeMap[selectKey]["mcs_attributeextprice"];
                this.shareData.skuMoney += this.shareData.productOrderingattributeMap[selectKey]["mcs_attributeextprice"];
            }
        }
        //组装选装地图
        for (var relatedKey in this.shareData.productRelatedMap) {
            if (this.shareData.productRelatedMap[relatedKey]["ext_select"] === "2") {
                this.shareData.sumMoney += this.shareData.productRelatedMap[relatedKey]["a.mcs_salesprice"];
            }
        }
    }

    //提交数据下单
    saveOnClick() {

        var errMessage = "";

        if (this._valid.isNullOrEmpty(this.shareData.user["mcs_name"])) {
            errMessage += "您尚未选择用户<br>";
        }
        if (this._valid.isNull(this.shareData.user["mcs_phone"])) {
            errMessage += "您尚未输入联系方式<br>";
        }
        if (this._valid.isNull(this.shareData.user["mcs_cardid"])) {
            errMessage += "您尚未输入证件号码<br>";
        }
        if (this._valid.isNull(this.shareData.product["ProductInfo"]["mcs_code"])) {
            errMessage += "您尚未选择车辆<br>";
        }
        if (errMessage !== "") {

            this._page.presentToastError(errMessage);
            return;
        }



        this._page.loadingShow();
        var sumMoney = 0;
        //组装基础数据
        var postData = {
            "OrderData": {
                "OrderCode": "DCEM_" + this._string.GetDateFormat(new Date(), "yyyyMMddhhmmss") + "_" + this._string.GetRandom(3).toLocaleUpperCase(),
                "UserId": this.shareData.user["mcs_userid"],
                "UserName": this.shareData.user["mcs_name"],
                "OrderType": 0,
                "UserMobile": this.shareData.user["mcs_phone"],
                "Media": 0,
                "ChannelSource": "1099",
                "OrderTime": new Date(),
                "CarBuyerName": this.shareData.user["mcs_name"],
                "CarBuyerPhone": this.shareData.user["mcs_phone"],
                "CarBuyerIdType": Number(this.shareData.user["ext_cardype"]),
                "CarBuyerId": this.shareData.user["mcs_cardid"],
                "ShippingFlag": false,
                "PaymentFlag": true,
                "PaymentStatus": 1,
                "CashTotal": 0,  //订单尾款(未处理)
                "TotalDepositAmount": 0,  //线上已收金额
                "ReceivedDepositAmount": 0,
                "ReceivableAmount": 0,
                "DeductionAmount": 0,
                "FinalPayment": 0,  //订单尾款(未处理)
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

            ],
            "PayRecordsList": [
            ]
        }

        //找产品
        var orderGuid = '';
        for (var groupKey in this.shareData.productOrderingattributeClassMap) {
            if (this._valid.isNullOrEmpty(orderGuid))
                orderGuid = this.shareData.productOrderingattributeClassMap[groupKey]["selectKey"];
            else
                orderGuid += "+" + this.shareData.productOrderingattributeClassMap[groupKey]["selectKey"];
        }

        //组装产品
        if (!this._valid.isNull(this.shareData.productPriceMap[orderGuid])) {
            var product = {
                "ProductCode": this.shareData.product["ProductInfo"]["mcs_code"],
                "SkuCode": this.shareData.productPriceMap[orderGuid]["mcs_skucode"],
                "OrderQty": 1,   //数量
                "Integral": 0,
                "Totalintegral": 0,
                "UnitPrice": this.shareData.skuMoney,  //单价
                "ImageUrl": "",
                "TotalPrice": this.shareData.skuMoney,    //总价
                "DeliveryType": 1,  //交货方式
                "ProviderParams": [
                ]
            }
            postData["Products"].push(product);
            //sumMoney += this.shareData.productPriceMap[orderGuid]["mcs_salesprice_base"];
        }



        //组装选装地图
        for (var relatedKey in this.shareData.productRelatedMap) {
            if (this.shareData.productRelatedMap[relatedKey]["ext_select"] === "2") {
                var product = {
                    "ProductCode": this.shareData.productRelatedMap[relatedKey]["Product"]["ProductInfo"]["mcs_code"],
                    "SkuCode": this.shareData.productRelatedMap[relatedKey]["a.mcs_skucode"],
                    "OrderQty": 1,   //数量
                    "Integral": 0,
                    "Totalintegral": 0,
                    "UnitPrice": this.shareData.productRelatedMap[relatedKey]["a.mcs_salesprice"],  //单价
                    "ImageUrl": "",
                    "TotalPrice": this.shareData.productRelatedMap[relatedKey]["a.mcs_salesprice"],    //总价
                    "DeliveryType": 1,  //交货方式
                    "ProviderParams": [
                    ]
                }
                postData["Products"].push(product);
                //sumMoney += this.shareData.productRelatedMap[relatedKey]["a.mcs_salesprice"];
            }
        }


        //修改总金额
        postData["OrderData"]["CashTotal"] = this.shareData.sumMoney;  //订单总额
        postData["OrderData"]["FinalPayment"] = this.shareData.sumMoney;
        postData["OrderData"]["TotalDepositAmount"] = this.shareData.product["ProductInfo"]["mcs_depositamount"]; //线上应收金额(定金)


        var that = this;
        //请求商品接口
        this._http.post(
            this.shareData.postUrl,
            postData,
            (res: any) => {
                console.log(res);
                if (res["Code"] === "000") {
                    that._page.navigateRoot("/saleing/carorder/success", { id: res["OrderId"], no: res["OrderCode"] }, "");
                }
                else {
                    this._page.alert("消息提示", res.Message);
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "下单异常")
                this._page.loadingHide();
            }
        );

    }
}
