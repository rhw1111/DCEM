import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../app/component/typescript/dcem.core';
import { ActivatedRoute } from '@angular/router';
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
        optionallist: [],//选装包
        totalprice: 0,//订单总金额
    };
    constructor(
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
        var ischecked = $(_that).prev("input[type=checkbox]").is(":checked");
        $("input[name=preorderPackageOne]").removeAttr("checked");
        if (!ischecked) {
            $(_that).prev("input[type=checkbox]").attr("checked", "true");
        } 
        if ($(_that).prev("input[type=checkbox]").is(":checked")) {
            this.model.totalprice += 0;
        } else {
            this.model.totalprice -= 0;
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
        var price = Number($(_that).parents("div.index-package-checkbox").find(".promotion-price strong").html().substring(0, $(_that).parents().find(".promotion-price strong").html().length - 1));
        if (!ischecked) {
            this.model.totalprice += price;
        } else {
            this.model.totalprice -= price;
        }
        if (this.model.totalprice != 0) {
            $(".index-toolbar-button").removeClass("is-disabled").removeAttr("disabled");
        } else {
            $(".index-toolbar-button").addClass("is-disabled").attr("disabled","disabled");
        }
    }
    BtnSubmit() {
        this._page.goto("/carreserve/fillinfo", { params: "" });
    }
}
