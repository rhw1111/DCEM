import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute } from '@angular/router';
let DetailPage = class DetailPage {
    constructor(_http, _page, _shareData, _valid, activeRoute) {
        this._http = _http;
        this._page = _page;
        this._shareData = _shareData;
        this._valid = _valid;
        this.activeRoute = activeRoute;
        this.tab = "info";
        this.mod = {
            apiUrl: '/Api/Serviceproxy/GetInfo',
            delUrl: '/Api/Serviceproxy/Delete',
            data: {
                serviceproxy: {
                    id: "",
                    customername: "",
                    carplate: "",
                    customerphone: "",
                    name: "",
                    shuttlename: "",
                    shuttlephone: "",
                    ordertype: "",
                    inpower: "",
                    outpower: "",
                    oilquantity: "",
                    departureoil: "",
                    mileage: "",
                    departuremileage: "",
                    arrivalon: "",
                    finishat: "",
                    repairlocationid: "",
                    hoursamount: "",
                    partsamount: "",
                    discountamount: "",
                    amounttotal: "",
                    dealerid: "",
                    status: 0,
                },
                serviceorderrepairitemArray: [],
                serviceorderpartArray: [],
                serviceproxyResumeArray: []
            }
        };
    }
    ionViewWillEnter() {
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params) => {
            if (params['id'] != null && params['id'] != undefined) {
                this.pageOnBind(params['id']);
                this.tab = "info";
            }
        });
    }
    pageOnBind(id) {
        this.mod.data.serviceproxy.id = id;
        this._page.loadingShow();
        this._http.get(this.mod.apiUrl, {
            params: {
                guid: id,
            }
        }, (res) => {
            if (!this._valid.isNull(res.Serviceproxy)) {
                this.mod.data.serviceproxy["customername"] = res["Serviceproxy"]["Attributes"]["mcs_customername"];
                this.mod.data.serviceproxy["carplate"] = res["Serviceproxy"]["Attributes"]["mcs_carplate"];
                this.mod.data.serviceproxy["customerphone"] = res["Serviceproxy"]["Attributes"]["mcs_customerphone"];
                this.mod.data.serviceproxy["name"] = res["Serviceproxy"]["Attributes"]["mcs_name"];
                this.mod.data.serviceproxy["shuttlename"] = res["Serviceproxy"]["Attributes"]["mcs_shuttlename"];
                this.mod.data.serviceproxy["shuttlephone"] = res["Serviceproxy"]["Attributes"]["mcs_shuttlephone"];
                this.mod.data.serviceproxy["ordertype"] = res["Serviceproxy"]["Attributes"]["mcs_ordertype@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.serviceproxy["inpower"] = res["Serviceproxy"]["Attributes"]["mcs_inpower"];
                this.mod.data.serviceproxy["outpower"] = res["Serviceproxy"]["Attributes"]["mcs_outpower"];
                this.mod.data.serviceproxy["oilquantity"] = res["Serviceproxy"]["Attributes"]["mcs_oilquantity"];
                this.mod.data.serviceproxy["departureoil"] = res["Serviceproxy"]["Attributes"]["mcs_departureoil"];
                this.mod.data.serviceproxy["mileage"] = res["Serviceproxy"]["Attributes"]["mcs_mileage"];
                this.mod.data.serviceproxy["departuremileage"] = res["Serviceproxy"]["Attributes"]["mcs_departuremileage"];
                this.mod.data.serviceproxy["arrivalon"] = res["Serviceproxy"]["Attributes"]["mcs_arrivalon@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.serviceproxy["finishat"] = res["Serviceproxy"]["Attributes"]["mcs_finishat@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.serviceproxy["repairlocationid"] = res["Serviceproxy"]["Attributes"]["_mcs_repairlocationid_value@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.serviceproxy["status"] = res["Serviceproxy"]["Attributes"]["mcs_status@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.serviceproxy["hoursamount"] = res["Serviceproxy"]["Attributes"]["mcs_hoursamount"];
                this.mod.data.serviceproxy["partsamount"] = res["Serviceproxy"]["Attributes"]["mcs_partsamount"];
                this.mod.data.serviceproxy["discountamount"] = res["Serviceproxy"]["Attributes"]["mcs_discountamount"];
                this.mod.data.serviceproxy["amounttotal"] = res["Serviceproxy"]["Attributes"]["mcs_amounttotal"];
                this.mod.data.serviceproxy.status = res["Serviceproxy"]["Attributes"]["mcs_status"];
                this.mod.data.serviceproxy["dealerid"] = res["Serviceproxy"]["Attributes"]["_mcs_dealerid_value@OData.Community.Display.V1.FormattedValue"];
            }
            if (!this._valid.isNull(res.ServiceorderrepairitemList)) {
                for (var key in res.ServiceorderrepairitemList) {
                    var obj = {};
                    obj["name"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_name"];
                    obj["code"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_repairitemid@OData.Community.Display.V1.FormattedValue"];
                    obj["repairitemtypeid_Formatted"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_repairitemtypeid@OData.Community.Display.V1.FormattedValue"];
                    obj["repairitemtypedetailid_Formatted"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_repairitemtypedetailid@OData.Community.Display.V1.FormattedValue"];
                    obj["workinghou"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_workinghour"];
                    obj["price"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_price"];
                    obj["discount"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_discount"];
                    obj["repairamount"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_repairamount"];
                    this.mod.data.serviceorderrepairitemArray.push(obj);
                }
            }
            if (!this._valid.isNull(res.ServiceorderpartList)) {
                for (var key in res.ServiceorderpartList) {
                    var obj = {};
                    obj["name"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_partsname"];
                    obj["code"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_partsid@OData.Community.Display.V1.FormattedValue"];
                    obj["repairitemtypeid_Formatted"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_repairitemtypeid@OData.Community.Display.V1.FormattedValue"];
                    obj["repairitemtypedetailid_Formatted"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_repairitemtypedetailid@OData.Community.Display.V1.FormattedValue"];
                    obj["quantity"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_quantity"];
                    obj["price"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_price"];
                    obj["discount"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_discount"];
                    obj["amount"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_amount"];
                    this.mod.data.serviceorderpartArray.push(obj);
                }
            }
            this.mod.data.serviceproxyResumeArray = res.ServiceproxyResumeList;
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
        });
    }
    //删除事件
    deleteOnClick() {
        this._page.confirm("确认提示", "您确认要执行此操作吗？", () => {
            this._http.get(this.mod.delUrl, {
                params: {
                    serviceproxyGuid: this.mod.data.serviceproxy.id
                }
            }, (res) => {
                this._page.navigateRoot("/serving/sc/list");
            }, (err) => {
                this._page.alert("消息提示", "删除失败!");
            });
        });
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
        DCore_ShareData,
        DCore_Valid,
        ActivatedRoute])
], DetailPage);
export { DetailPage };
//# sourceMappingURL=detail.page.js.map