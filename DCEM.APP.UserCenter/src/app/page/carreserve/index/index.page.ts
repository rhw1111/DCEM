﻿import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../app/component/typescript/dcem.core';
import { ActivatedRoute } from '@angular/router';
import { Storage_LoginInfo } from '../../../component/typescript/logininfo.storage';
import * as $ from 'jquery';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
    public model: any = {
        search: {
            apiUrl: "api/smallbooking/QuerySmallBooking",
        },
        title: "立即预定",
        datas: {},
        smallbookname: "",//小订名称
        imgurl: "",//图片
        equitypackagelist: [],//权益项
        checkedequitypackagecode: "",//选中权益包编码
        checkedequitypackagename:"",//选中权益包名称
        optionallist: [],//选装包
        checkedoptionalcode: "",//选中选装包编码
        checkedoptionalname:"",//选中选装包名称
        totalprice: 0,//订单总金额
        radioprice:0,
    };
    constructor(
        private _logininfo: Storage_LoginInfo,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private routerinfo: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.initListLoading();
    }
    //初始化页面数据加载
    initListLoading() {
        this._page.loadingShow();
        this.getList(null);
    }
    //获取列表数据
    getList(event) {
        var requests = {};
        this._http.get(this.model.search.apiUrl,
            requests,
            (res: any) => {
                if (res != null && res.SmallBookingList != null) {
                    //绑定数据
                    //res.Datas.forEach(item => {
                    //    var imagedata = [];
                    //    if (item.ImageData != null || item.ImageData.length > 0) {
                    //        item.ImageData.forEach(temp => {
                    //            if (temp.Category == 2) {
                    //                imagedata.push(temp);
                    //            }
                    //        });
                    //    }
                    //    item.ImageData = imagedata;
                    //    this.model.datalist.push(item);
                    //});
                    this.model.datas = res;
                    this.model.smallbookname = res.SmallBookingList[0].SmallBookingInfo.mcs_name;
                    this.model.imgurl = res.SmallBookingList[0].BookingImageArray.length > 0 ? (res.SmallBookingList[0].BookingImageArray[0].ext_fullurl + res.SmallBookingList[0].BookingImageArray[0].mcs_imagename) : "";
                    this.model.equitypackagelist = res.SmallBookingList[0].EquityPackageArray;
                    this.model.optionallist = res.SmallBookingList[0].OptionalArray;
                    event ? event.target.complete() : '';
                    //判断是否有新数据
                    //if (res.Datas.length < this.model.search.pageSize) {
                    //    event ? event.target.disabled = true : "";
                    //    this.model.isending = true;
                    //}
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

    RadioBtn(event) {
        var _that = event.target;
        var ischecked = $(_that).siblings("input[type=checkbox]").is(":checked");
        var price = Number($(_that).siblings("input[name=hidPackageOne]").val());
        $("input[name=preorderPackageOne]").removeAttr("checked");
        if (!ischecked) {
            $(_that).siblings("input[type=checkbox]").attr("checked", "true");
            this.model.checkedequitypackagecode = $(_that).siblings("input[type=checkbox]").val();
            this.model.checkedequitypackagename = $(_that).html();
            this.model.totalprice -= this.model.radioprice;
            this.model.totalprice += price;
            this.model.radioprice = price;
        } else {
            this.model.totalprice -= price;
            this.model.radioprice = 0;
            this.model.checkedequitypackagecode = "";
            this.model.checkedequitypackagename = "";
        }
        if (this.model.totalprice != 0) {
            $(".index-toolbar-button").removeClass("is-disabled").removeAttr("disabled");
        } else {
            $(".index-toolbar-button").addClass("is-disabled").attr("disabled", "disabled");
        }
    }
    CheckBoxBtn(event) {
        var _that = event.target;
        var ischecked = $(_that).parents("div.index-package-checkbox").find("input[name=preorderPackageTwo]").is(":checked");
        var price = Number($(_that).parents("div.index-package-checkbox").find("input[name=hidPackageTwo]").val());
        var checkedcode = $(_that).parents("div.index-package-checkbox").find("input[name=preorderPackageTwo]").val();
        var checkedname = $(_that).parents("div.index-package-checkbox").children().find("div.index-intro-title").html();
        if (!ischecked) {
            this.model.totalprice += price;
            this.model.checkedoptionalcode += (checkedcode + ";");
            this.model.checkedoptionalname += (checkedname + ";");
        } else {
            this.model.totalprice -= price;
            if (this.model.checkedoptionalcode.indexOf(checkedcode) != -1) {
                var strcodelist = this.model.checkedoptionalcode.split(';');
                var strcode = "";
                for (var i = 0; i < strcodelist.length - 1; i++) {
                    if (strcodelist[i] != checkedcode) {
                        strcode += (strcodelist[i] + ";");
                    }
                }
                this.model.checkedoptionalcode = strcode;
            }
            if (this.model.checkedoptionalname.indexOf(checkedname) != -1) {
                var strnamelist = this.model.checkedoptionalname.split(';');
                var strname = "";
                for (var i = 0; i < strnamelist.length - 1; i++) {
                    if (strnamelist[i] != checkedname) {
                        strname += (strnamelist[i] + ";");
                    }
                }
                this.model.checkedoptionalname = strname;
            }
        }
        if (this.model.totalprice != 0) {
            $(".index-toolbar-button").removeClass("is-disabled").removeAttr("disabled");
        } else {
            $(".index-toolbar-button").addClass("is-disabled").attr("disabled","disabled");
        }
    }
    BtnSubmit() {
        var request = {
            "FullName": this._logininfo.GetName(),
            "MobilePhone": this._logininfo.GetPhone(),
            "OrderCode": this.Gen(9),// 小订订单编号
            "OrderStatus": 0,
            "Gender": this._logininfo.GetGender(),
            "TotalOrder": this.model.totalprice,
            "BlindOrder": "",// 预约单号
            "VehTypeCode": "",// 意向车型编号
            "VehTypeName": "",// 意向车型名称
            "VehConfigCode": "",// 意向配置编号
            "VehConfigName": "",// 意向配置名称
            "EquityCode": this.model.checkedequitypackagecode,//权益编号
            "EquityName": this.model.checkedequitypackagename,// 权益名称
            "OptionalCode": this.model.checkedoptionalcode,// 选配编号
            "OptionalName": this.model.checkedoptionalname,// 选配名称
            "CityOnCard": "",// 上牌城市
            "ProvinceOnCard": "",// 上牌省份
            "UnsubscribeReason": "",// 退订原因(订单状态为2- 退订申请时必传)
            "PaymentCode": "",// 支付记录编码(订单状态为1-已支付、3-已退订时必传)
            "TransactionTime": new Date(),// 交易时间
            "Transactionamount": "",// 交易金额（精确两位小数）
            "PaymentChannel": "",// 支付渠道 0-储蓄卡、1-网上银行、2-微信、3-支付宝
            "SmallRefundCode": "",// 小订退订编号(订单状态为2-申请退订、3-已关闭时必传)
            "EquityRefundAmount": "",// 权益退订金额(订单状态为2-退订申请时必传)
            "EquityRefundCode": "",//退订权益编号(订单状态为2-申请退订、3-已关闭时必传)
            "EquityRefundName": "",// 退订权益名称(订单状态为2-申请退订、3-已关闭时必传)
            "OptionalRefundAmount": "",// 选配退订金额
            "OptionalRefundCode": "",// 选配退订编号
            "OptionalRefundName": ""// 退订选配名称(订单状态为2-申请退订、3-已关闭时必传)
        }
        console.log(request);
        this._page.goto("/carreserve/fillinfo", { params: JSON.stringify(request)});
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
}
