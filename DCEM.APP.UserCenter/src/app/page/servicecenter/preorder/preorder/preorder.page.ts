import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../../app/component/typescript/dcem.core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-preorder',
    templateUrl: './preorder.page.html',
    styleUrls: ['./preorder.page.scss'],
})
export class PreorderPage implements OnInit {
    public model: any = {
        search: {
            apiUrl: "api/order/CreateOrder",
            productCode: "",
        },
        title: "订单信息",
        datas: {},
        totalprice: 0
    };
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private routerinfo: ActivatedRoute,
    ) { }

    ngOnInit() {
        //获取参数
        this.model.datas = this.routerinfo.snapshot.queryParams;
        console.log(this.model.datas);
        this.initListLoading();
    }
    //初始化页面数据加载
    initListLoading() {
        this._page.loadingShow();
        var totalprice = 0;
        this.model.datas.datas.forEach(res => {
            totalprice += (res.price * res.num);
        });
        this.model.totalprice = parseFloat(totalprice.toString()).toFixed(2);
        this._page.loadingHide();
    }
    //提交订单
    submitOrder() {
        //var returndata = {
        //    "OrderCode": "1111111",
        //    "TotalPrice": this.model.totalprice
        //};
        //this._page.navigateRoot("/servicecenter/payment/payment", returndata);
        this._page.loadingShow();
        var data = this.readyForDatas();
        this._http.postForShopping(this.model.search.apiUrl,data,
            (res: any) => {
                if (res != null) {
                    if (res.IsSuccess) {
                        var returndata = {
                            "OrderCode": res.OrderCode,
                            "TotalPrice": this.model.totalprice
                        };
                        this._page.navigateRoot("/servicecenter/payment/payment", returndata);
                    }
                }
                else {
                    this._page.alert("消息提示", "订单提交失败");
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "订单提交失败");
                this._page.loadingHide();
            }
        );
    }
    //准备订单数据
    readyForDatas() {
        var data = {
            "OrderData": {
                "OrderCode": this.Gen(10),
                "OrderStatus": 0,
                "UserId": "1000004",
                "UserName": "张三",
                "OrderType": 0,
                "UserMobile": "13648490987",
                "Media": 0,
                "ChannelSource": "1001",
                "OrderTime": new Date(),
                "CarBuyerName": "张三",
                "CarBuyerPhone": "13648490987",
                "CarBuyerIdType": 1,
                "CarBuyerId": "500224198709091267",
                "ShippingFlag": true,
                "PaymentFlag": true,
                "PaymentStatus": 1,
                "CashTotal": this.model.totalprice,
                "TotalDepositAmount": this.model.totalprice,
                "ReceivedDepositAmount": this.model.totalprice,
                "ReceivableAmount": this.model.totalprice,
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
                "ReceiverName": "李四",
                "ReceiverPhone": "13333333333",
                "DealerCode": "",
                "DeliveryAdderss": "",
                "SmallOrderCodeList": [

                ],
                "PaymentStatusList": [
                    {
                        "PaymentStatus": 0,
                        "HandlerTime": new Date()
                    }
                ]
            },
            "Products": [],
            "PayRecordsList": [
                {
                    "PaymentType": 0,
                    "PaymentAmount": 0,
                    "CashPayment": 0,
                    "PaymentTotal": 0,
                    "PaymentTime": new Date(),
                    "PaySerialNumber": "00001",
                    "SerialNumber": "000002",
                    "EquityItem": "",
                    "EquityItemCode": "",
                    "DirectionOfPayment": "",
                    "PaymentUserId": "1",
                    "PaymentChannel": 0,
                    "Remark": ""
                }
            ]
        };
        this.model.datas.datas.forEach(res => {
            var product = {
                "ProductCode": res.productcode,
                "SkuCode": res.skucode,
                "OrderQty": res.num,
                "Integral": 0,
                "Totalintegral": 0,
                "UnitPrice": res.price,
                "ListPrice": parseFloat((res.price * res.num).toString()).toFixed(2),
                "ImageUrl": "",
                "TotalPrice": parseFloat((res.price * res.num).toString()).toFixed(2),
                "DeliveryType": 0,
                "ProviderInstanceCode": "",
                "ProviderParams": [
                    {
                        "ProviderCode": "",
                        "ProviderValue": ""
                    }
                ]
            };
            data.Products.push(product);
        });
        return data;
    }

    Gen(len) {
        len = len || 10;
        var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var maxPos = $chars.length;
        var pwd = '';
        for (var i = 0; i < len; i++) {
            //0~32的整数
            pwd += $chars.charAt(Math.floor(Math.random() * (maxPos + 1)));
        }
        return this.getNowFormatDate() + pwd;
    }
    getNowFormatDate() {
        var datetime = new Date();
        var year = datetime.getFullYear();
        var month = datetime.getMonth() + 1;
        var date = datetime.getDate();
        var strmonth;
        var strdate;
        if (month >= 1 && month <= 9) {
            strmonth = "0" + month;
        }
        if (date >= 0 && date <= 9) {
            strdate = "0" + date;
        }
        var currentdate = "" + year + strmonth + strdate;
        return currentdate;
    }
}
