﻿import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_ShareData } from '../../../../../app/component/typescript/dcem.core';
import { Storage_LoginInfo } from '../../../../component/typescript/logininfo.storage';
import { OptionSetService } from "../../../../component/typescript/optionset.service";
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from '../../../../component/modal/login/login.component'
import * as $ from 'jquery';

@Component({
    selector: 'app-preorder',
    templateUrl: './preorder.page.html',
    styleUrls: ['./preorder.page.scss'],
})
export class PreorderPage implements OnInit {
    //IsShowCover: boolean = false;
    public model: any = {
        submit: {
            apiUrl: "api/order/CreateOrder",
        },
        title: "订单信息",
        datas: {},
        totalprice: 0,
        totalintegral: 0,
        carList: {},
        paymenttype: 0,
        score: {
            apiUrl: "api/user/getuserscore",
            search: {
                id: this._logininfo.GetSystemUserId(),
                pageindex: 1,
                pagesize: 10,
            },
            data: [],
            balance: 0,
        },
        shareDataKey: "productperorder",
        shareDataIndexKey: "productdetail"
        //rights: {
        //    apiUrl: "api/cashcoupon/MyCashCoupon",
        //    productCode: "",
        //    datas: [],
        //    myRightses: [],//用户权益项
        //    rightsMutuallyExclusives: [],//互斥权益项
        //    RightsPackageGet: {},//选择权益项
        //    showRights: false,
        //}
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
        private _optionset: OptionSetService,
        private _modalCtrl: ModalController,
        private _shareData: DCore_ShareData
    ) { }

    ngOnInit() {
        //获取参数
        //var datastr = this.routerinfo.snapshot.queryParams["params"];
        //this.model.datas = JSON.parse(datastr);
        if (this._shareData.has(this.model.shareDataIndexKey)) {
            this.model.datas = this._shareData.get(this.model.shareDataIndexKey);
        }
        else {
            this._page.goto("/tabs/servicecenter");
        }
        this.initListLoading();
    }
    ionViewWillEnter() {
        var datastr = this.routerinfo.snapshot.queryParams["addr"];
        if (datastr) {
            this.mod.model = JSON.parse(datastr);
        } else {
            if (this._logininfo.GetNickName() != null) {
                this.getList(null);
            }
        }
    }
    //初始化页面数据加载
    initListLoading() {
        this._page.loadingShow();
        var totalprice = 0;
        var totalintegral = 0;
        this.model.datas.datas.forEach(res => {
            this.model.paymenttype = res.paymenttype;
            totalintegral += (res.integral * res.num);
            totalprice += (res.price * res.num);
            res.showRightsPackage = false;
        });
        this.model.totalprice = parseFloat(totalprice.toString()).toFixed(2);
        this.model.totalintegral = totalintegral;
        this.checkLogin();
        this._page.loadingHide();
    }
    //检查是否登陆
    async checkLogin() {
        if (this._logininfo.GetNickName() != null) {
            //this.getRights(null);
            this.getScore(null);
        } else {
            const modal = await this._modalCtrl.create({
                component: LoginComponent,
                componentProps: {
                    'status': 1//登录页面状态 
                }
            });
            await modal.present();
            //监听销毁的事件
            const { data } = await modal.onDidDismiss();
        }
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
    //获取当前用户积分
    getScore(event) {
        this._http.postForToaken(
            this.model.score.apiUrl,
            this.model.score.search,
            (res: any) => {
                if (res !== null) {
                    this.model.score.balance = res.balance;
                }
                else {
                    this._page.alert("消息提示", "用户积分信息加载异常");
                }

            },
            (err: any) => {
                this._page.alert("消息提示", "用户积分信息加载异常");
            }
        );
    }
    //获取用户权益
    //getRights(event) {
    //    this._http.getForShopping(this.model.rights.apiUrl,
    //        { userid: this._logininfo.GetSystemUserId() },
    //        (res: any) => {
    //            if (res != null && res.MyRightses.length > 0) {
    //                //绑定数据
    //                res.MyRightses.forEach(item => {
    //                    item.hideRights = false;
    //                    item.checked = false;
    //                });
    //                this.model.rights.showRights = true;
    //                this.model.rights.myRightses = res.MyRightses;
    //                this.model.rights.rightsMutuallyExclusives = res.RightsMutuallyExclusives;
    //                event ? event.target.complete() : '';
    //            }
    //            this._page.loadingHide();
    //        },
    //        (err: any) => {
    //            this._page.alert("消息提示", "数据加载异常");
    //            this._page.loadingHide();
    //        }
    //    );
    //}
    //选择权益项
    //change(param) {
    //    this.model.rights.rightsMutuallyExclusives.forEach(item => {
    //        if (param.checked) {
    //            if (item.MemberRightsCode == param.RightsCode) {
    //                this.model.rights.myRightses.forEach(rights => {
    //                    if (rights.RightsCode == item.MutuallyExclusiveRightsCode) {
    //                        rights.hideRights = true;
    //                    }
    //                });
    //            } else if (item.MutuallyExclusiveRightsCode == param.RightsCode) {
    //                this.model.rights.myRightses.forEach(rights => {
    //                    if (rights.RightsCode == item.MemberRightsCode) {
    //                        rights.hideRights = true;
    //                    }
    //                });
    //            }
    //        } else {
    //            if (item.MemberRightsCode == param.RightsCode) {
    //                this.model.rights.myRightses.forEach(rights => {
    //                    if (rights.RightsCode == item.MutuallyExclusiveRightsCode) {
    //                        rights.hideRights = false;
    //                    }
    //                });
    //            } else if (item.MutuallyExclusiveRightsCode == param.RightsCode) {
    //                this.model.rights.myRightses.forEach(rights => {
    //                    if (rights.RightsCode == item.MemberRightsCode) {
    //                        rights.hideRights = false;
    //                    }
    //                });
    //            }
    //        }
    //    });
    //}
    //提交
    submitOrder() {
        if (this.model.paymenttype == 2) {
            if (this.model.totalintegral > this.model.score.balance) {
                var deducationintegral = ((this.model.totalprice / this.model.totalintegral) * (this.model.totalintegral - this.model.score.balance)).toFixed(2);
                this._page.confirm("确认提示", "积分不足,您还需要支付现金" + deducationintegral+"元，是否提交？", () => {
                    //var returndata = {
                    //    "OrderCode": "1111111",
                    //    "TotalPrice": deducationintegral == "0" ? this.model.totalprice : deducationintegral,
                    //    "TotalIntegral": this.model.score.balance
                    //};
                    //this._page.navigateRoot("/servicecenter/payment/payment", returndata);
                    this.createOrder(this.model.score.balance, deducationintegral,true);
                }, () => {
                    return;
                });
            } else {
                this.createOrder(this.model.totalintegral,0,false);
            }
        } else {
            this.createOrder(0,0,false);
        }
    }
    //调用接口创建订单
    createOrder(integral, deducationintegral, isneedcash) {
        this._page.loadingShow();
        var data = this.readyForDatas(integral, deducationintegral);
        this._http.postForShopping(this.model.submit.apiUrl, data,
            (res: any) => {
                if (res != null) {
                    if (res.IsSuccess) {
                        if (this.model.datas.source == "cart") {
                            this.removeCart();
                        }
                        var returndata = {
                            "OrderCode": res.OrderCode,
                            "TotalPrice": deducationintegral == 0 ? this.model.totalprice : deducationintegral,
                            "TotalIntegral": integral,
                            "IsNeedCash": isneedcash,
                            //"RightsPackageGet": this.model.rights.RightsPackageGet
                        };
                        this._shareData.set(this.model.shareDataKey, returndata);
                        this._page.navigateRoot("/servicecenter/payment/payment");
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
    readyForDatas(integral, deducationintegral) {
        var flag = this.model.paymenttype == 2;
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
                "OrderClass": 200,
                "PaymentFlag": true,
                "PaymentStatus": 1,
                "CashTotal": this.model.totalprice,  //	订单总金额	
                "TotalDepositAmount": !flag ? this.model.totalprice : 0, //	线上应收金额
                "ReceivedDepositAmount": !flag ? this.model.totalprice : 0, //	线上已收金额	
                "ReceivableAmount": !flag ? this.model.totalprice : 0, //	已收金额（不含积分不够现金支付部分）
                "DeductionAmount": 0, //	抵扣金额
                "FinalPayment": 0, //	订单尾款/待收尾款
                "IntegralTotal": flag ? this.model.totalintegral : 0, //	订单总积分	
                "IntegralReceivable": flag ? this.model.totalintegral : 0, // 应收积分(应收积分=订单总积分+积分抵扣（负数）)
                "ReceivedIntegral": flag ? integral : 0, //	已收积分	
                "DeductionIntegral": -deducationintegral, // 抵扣积分
                "ActiveCode": "",
                "ActiveName": "",
                "OptimalCode": "",
                "RecommendUserName": "",
                "RecommendUserPhone": "",
                "Comment": "",
                "ReceiverName": this.mod.model.mcs_name,
                "ReceiverPhone": this.mod.model.mcs_phone,
                "DealerCode": "S012021",
                "DeliveryAdderss": this.mod.model.mcs_provincename + this.mod.model.mcs_cityname + this.mod.model.mcs_areaname + this.mod.model.mcs_address,
                "SmallOrderCodeList": [

                ],
                "PaymentStatusList": [
                    {
                        "PaymentStatus": 0, //支付状态：不需要支付=0, 等待支付=1 支付成功=3 
                        "HandlerTime": new Date()
                    }
                ]
            },
            "Products": [],
            "PayRecordsList": [
                {
                    "PaymentType": this.model.paymenttype, //支付方式1：现金;2：积分;3：权益项抵扣;
                    "PaymentAmount": flag ? integral : this.model.totalprice, //支付金额或积分
                    "CashPayment": deducationintegral, //积分不够现金支付数
                    //"PaymentTotal": 0,
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
                "Integral": res.integral,
                "Totalintegral": (res.integral * res.num),
                "UnitPrice": res.price,
                "ListPrice": parseFloat((res.price * res.num).toString()).toFixed(2),
                "ImageUrl": res.img,
                "TotalPrice": parseFloat((res.price * res.num).toString()).toFixed(2),
                "DeliveryType": 0,
                "ProviderInstanceCode": "",
                "ProviderParams": res.ProviderParams
            };
            data.Products.push(product);
        });
        //var rightsPackageGet = {
        //    "rightscheck": [],
        //    "dealerid": null,
        //    "mutuallyexclusiveactivity": "",
        //    "userid": this._logininfo.GetSystemUserId()
        //};
        //this.model.rights.myRightses.forEach(rights => {
        //    if (rights.checked) {
        //        var rightscheck = {
        //            "rightspackagegetid": rights.RightsPackageGetId,
        //            "checknum": 1
        //        };
        //        rightsPackageGet.rightscheck.push(rightscheck);
        //    }
        //});
        //this.model.rights.RightsPackageGet = rightsPackageGet;
        return data;
    }

    //删除已提交的购物车
    removeCart() {
        var storage = window.localStorage;
        var cardata = storage.getItem("singlecar");
        if (cardata != null) {
            this.model.carList = JSON.parse(cardata);
            var datas = [];
            this.model.carList.datas.forEach(res => {
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
            if (datas.length > 0) {
                this.model.carList.datas = datas;
                storage.setItem("singlecar", JSON.stringify(this.model.carList));
            } else {
                storage.removeItem("singlecar");
            }
        }
    }
    //生成订单号
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
    //ShowTwoBtn(productcode) {
    //    this.model.datas.datas.forEach(res => {
    //        if (productcode == res.productcode) {
    //            this.model.rights.datas = res.RightsPackages;
    //            return false;
    //        }
    //    });
    //    this.IsShowCover = true;
    //    $(".TwoBtnDialog").slideDown();
    //    $(".footer-bottom").fadeOut();
    //}
    //TwoBtnSure() {
    //    $(".TwoBtnDialog").slideUp();
    //    this.IsShowCover = false;
    //    $(".footer-bottom").fadeIn();
    //}
    //CloseDialog() {
    //    if (this.IsShowCover) {
    //        $(".TwoBtnDialog").slideUp();
    //        this.IsShowCover = false;
    //        $(".footer-bottom").fadeIn();
    //        this.model.rights.myRightses.forEach(rights => {
    //            rights.checked = false;
    //        });
    //    }
    //}
}
