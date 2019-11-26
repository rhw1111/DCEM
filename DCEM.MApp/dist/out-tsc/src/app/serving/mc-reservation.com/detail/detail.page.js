import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute } from '@angular/router';
import sd from 'silly-datetime';
let DetailPage = class DetailPage {
    constructor(_http, _page, activeRoute) {
        this._http = _http;
        this._page = _page;
        this.activeRoute = activeRoute;
        this.tab = "infolist";
        this.model = {
            name: 'appointmentdetail',
            apiUrlDetail: '/api/appointment-info/GetDetail',
            apiUrlLog: '/api/appointment-info/GetLog',
            infolist: {
                mcs_appointmentinfoid: "",
                mcs_customername: "",
                mcs_customerphone: "",
                mcs_tag: "",
                mcs_vin: "",
                mcs_enginennumber: "",
                mcs_cartype: "",
                mcs_carplate: "",
                mcs_nextmaintainat: "",
                mcs_nextmaintainmileage: "",
                mcs_name: "",
                mcs_ordertype: "",
                mcs_appointmentat: "",
                mcs_appointmentconfigid: "",
                mcs_status: "",
                mcs_customercomment: "",
                mcs_appointmendescript: "",
                mcs_cancelreasonnew: "",
                mcs_canceldes: "",
                mcs_cancelreasonnewvalue: "",
                mcs_ordertypevalue: "",
                mcs_statusvalue: ""
            },
            datalist: [],
            pageSize: 10,
            page: 1,
            sort: '',
            isending: false,
        };
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((data) => {
            if (data['id'] != null && data['id'] != undefined) {
                console.log("记录Id:" + this.model.infolist.mcs_appointmentinfoid);
                this.model.infolist.mcs_appointmentinfoid = data['id'];
                this.pageOnBind(this.model.infolist.mcs_appointmentinfoid);
            }
        });
    }
    pageOnBind(id) {
        this._page.loadingShow();
        this._http.getForToaken(this.model.apiUrlDetail, {
            "entityid": id,
        }, (res) => {
            if (res !== null) {
                this.model.infolist.mcs_appointmentinfoid = res.Id;
                this.model.infolist.mcs_customername = res["Attributes"]["mcs_customername"];
                this.model.infolist.mcs_customerphone = res["Attributes"]["mcs_customerphone"];
                this.model.infolist.mcs_tag = res["Attributes"]["mcs_tag"];
                this.model.infolist.mcs_carplate = res["Attributes"]["mcs_carplate"];
                this.model.infolist.mcs_vin = res["Attributes"]["mcs_customerid"] != null ? res["Attributes"]["mcs_customerid"]["mcs_name"] : "--";
                this.model.infolist.mcs_enginennumber = res["Attributes"]["mcs_enginennumberres"];
                this.model.infolist.mcs_cartype = res["Attributes"]["mcs_cartype"] != null ? res["Attributes"]["mcs_cartype"]["mcs_name"] : "--";
                this.model.infolist.mcs_nextmaintainat = res["Attributes"]["mcs_nextmaintainat"];
                this.model.infolist.mcs_nextmaintainmileage = res["Attributes"]["mcs_nextmaintainmileage"];
                this.model.infolist.mcs_name = res["Attributes"]["mcs_name"];
                this.model.infolist.mcs_ordertype = res["Attributes"]["mcs_ordertype"];
                this.model.infolist.mcs_appointmentat = res["Attributes"]["mcs_appointmentat"];
                this.model.infolist.mcs_appointmentconfigid = res["Attributes"]["mcs_appointmentconfigid"] != null ? res["Attributes"]["mcs_appointmentconfigid"]["mcs_name"] : null;
                this.model.infolist.mcs_status = res["Attributes"]["mcs_status"];
                this.model.infolist.mcs_customercomment = res["Attributes"]["mcs_customercomment"];
                this.model.infolist.mcs_appointmendescript = res["Attributes"]["mcs_appointmendescript"];
                this.model.infolist.mcs_cancelreasonnew = res["Attributes"]["mcs_cancelreasonnew"];
                this.model.infolist.mcs_cancelreasonnewvalue = res["Attributes"]["mcs_cancelreasonnew@OData.Community.Display.V1.FormattedValue"];
                this.model.infolist.mcs_ordertypevalue = res["Attributes"]["mcs_ordertype@OData.Community.Display.V1.FormattedValue"];
                this.model.infolist.mcs_statusvalue = res["Attributes"]["mcs_status@OData.Community.Display.V1.FormattedValue"];
                this.model.infolist.mcs_canceldes = res["Attributes"]["mcs_canceldes"];
                this.pageOnlist(id);
            }
            else {
                this._page.alert("消息提示", "预约单加载异常");
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
        });
    }
    pageOnlist(id) {
        //this._page.loadingShow();
        this._http.get(this.model.apiUrlLog, {
            params: {
                entityid: id,
                sort: this.model.sort,
                pageSize: this.model.pageSize,
                page: this.model.page
            }
        }, (res) => {
            if (res !== null) {
                if (res.Results !== null) {
                    for (var key in res.Results) {
                        var obj = {};
                        obj["createdby"] = res.Results[key]["Attributes"]["systemuser_x002e_fullname"];
                        obj["mcs_remark"] = res.Results[key]["Attributes"]["mcs_remark"];
                        obj["createdon"] = res.Results[key]["Attributes"]["createdon"];
                        this.model.datalist.push(obj);
                    }
                }
                //判断是否有新数据
                if (res.Results.length == 0) {
                    this.model.isending = true;
                }
            }
            else {
                this._page.alert("消息提示", "预约跟进记录加载异常");
            }
            //this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
            //this._page.loadingHide();
        });
    }
    FormatToDate(date) {
        if (date != null && date != undefined) {
            return sd.format(date, 'YYYY-MM-DD');
        }
        else {
            return '';
        }
    }
    FormatToDateTime(date) {
        if (date != null && date != undefined) {
            return sd.format(date, 'YYYY-MM-DD hh:mm:ss');
        }
        else {
            return '';
        }
    }
    //返回数据为空，默认“--”
    SetDefaultValue(data) {
        if (data == null || data == undefined || data == '') {
            return '--';
            ;
        }
        else {
            return data;
        }
    }
};
DetailPage = tslib_1.__decorate([
    Component({
        selector: 'app-detail',
        templateUrl: './detail.page.html',
        styleUrls: ['./detail.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [DCore_Http,
        DCore_Page,
        ActivatedRoute])
], DetailPage);
export { DetailPage };
//# sourceMappingURL=detail.page.js.map