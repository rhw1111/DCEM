import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../../app/component/typescript/dcem.core';
import { Storage_LoginInfo } from '../../../../component/typescript/logininfo.storage';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-preorder',
    templateUrl: './preorder.page.html',
    styleUrls: ['./preorder.page.scss'],
})
export class PreorderPage implements OnInit {
    public model: any = {
        submit: {
            apiUrl: "api/order/CreateOrder",
            productCode: "",
        },
        title: "订单信息",
        datas: {},
        totalprice: 0,
        carList: {},
    };
    public mod: any = {
        isending: false,//是否加载完成  
        countryId: "DD0D2AE0-E414-EA11-B394-86D989685D12",//UAT:"7E83801C-795B-E911-A824-B53F780FAC1C",
        level: 2,//行政区域级别 0:全球、1:国家、2:省、3:市、4:地区
        search: {
            getlisturl: "api/shippingaddress/getlist",
            pageSize: 10,//页数
            page: 1,//分页
        },
        model: {}
    }
    constructor(
        private _logininfo: Storage_LoginInfo,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private routerinfo: ActivatedRoute,
    ) { }

    ngOnInit() {
        //获取参数
        var datastr = this.routerinfo.snapshot.queryParams["params"];
        this.model.datas = JSON.parse(datastr);
        this.initListLoading();
    }
    ionViewWillEnter() {
        var datastr = this.routerinfo.snapshot.queryParams["addr"];
        if (datastr) {
            this.mod.model = JSON.parse(datastr);
        } else {
            this.getList(null);
        }
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
    //获取收货地址数据
    getList(event) {
        this._http.post(this.mod.search.getlisturl,
            {
                PageSize: this.mod.search.pageSize,
                PageIndex: this.mod.search.page,
                mcs_userid: this._logininfo.GetSystemUserId()
            },
            (res: any) => {
                if (res != null && res.Data !== null) {
                    //绑定数据
                    var defaultaddr = null;
                    res.Data.forEach(item => {
                        if (item.Attributes["mcs_isdefault"]) {
                            defaultaddr = {
                                id: item.Id,
                                mcs_userid: item.Attributes["_mcs_userid_value"],
                                mcs_name: item.Attributes["mcs_name"],
                                mcs_province: item.Attributes["_mcs_province_value"],
                                mcs_city: item.Attributes["_mcs_city_value"],
                                mcs_area: item.Attributes["_mcs_area_value"],
                                mcs_address: item.Attributes["mcs_address"],
                                mcs_phone: item.Attributes["mcs_phone"],
                                mcs_provincename: item.Attributes["_mcs_province_value@OData.Community.Display.V1.FormattedValue"],
                                mcs_cityname: item.Attributes["_mcs_city_value@OData.Community.Display.V1.FormattedValue"],
                                mcs_areaname: item.Attributes["_mcs_area_value@OData.Community.Display.V1.FormattedValue"],
                                mcs_isdefault: item.Attributes["mcs_isdefault"]
                            }
                        } 
                    });
                    this.mod.model = defaultaddr;
                    console.log(this.mod.model);
                    event ? event.target.complete() : '';
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");
                this._page.loadingHide();
            }
        );
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
        this._http.postForShopping(this.model.submit.apiUrl,data,
            (res: any) => {
                if (res != null) {
                    if (res.IsSuccess) {
                        if (this.model.datas.source == "cart") {
                            this.removeCart();
                        }
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
                "OrderCode": this.Gen(9),
                "OrderStatus": 0,
                "UserId": this._logininfo.GetSystemUserId(),
                "UserName": this._logininfo.GetName(),
                "OrderType": 0,
                "UserMobile": this._logininfo.GetPhone(),
                "Media": 0,
                "ChannelSource": "1001",
                "OrderTime": new Date(),
                "CarBuyerName": this._logininfo.GetName(),
                "CarBuyerPhone": this._logininfo.GetPhone(),
                "CarBuyerIdType": 1,
                "CarBuyerId": this._logininfo.GetCardid(),
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
                "ReceiverName": this.mod.model.mcs_name,
                "ReceiverPhone": this.mod.model.mcs_phone,
                "DealerCode": "",
                "DeliveryAdderss": this.mod.model.mcs_provincename + this.mod.model.mcs_cityname + this.mod.model.mcs_areaname + this.mod.model.mcs_address,
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
                "ImageUrl": res.img,
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

    //删除已提交的购物车
    removeCart() {
        var storage = window.localStorage;
        var cardata = storage.getItem("singlecar");
        if (cardata != null) {
            var carlist = JSON.parse(cardata);
            var datas;
            carlist.datas.forEach(res => {
                var flag = true;
                this.model.datas.datas.forEach(r => {
                    if (res.skucode == r.skucode) {
                        flag = false;
                        return false;
                    }
                })
                if (flag) {
                    datas.push(res);
                }
            });
            if (datas) {
                this.model.carList.datas = datas;
                storage.setItem("singlecar", this.model.carList);
            } else {
                storage.removeItem("singlecar");
            }
        }
    }

    Gen(len) {
        len = len || 10;
        var $chars = '0123456789';
        var maxPos = $chars.length;
        var pwd = '';
        for (var i = 0; i < len; i++) {
            //0~32的整数
            pwd += $chars.charAt(Math.floor(Math.random() * (maxPos + 1)));
        }
        return "TCO" + this.getNowFormatDate() + pwd;
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
