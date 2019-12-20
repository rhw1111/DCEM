import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute } from '@angular/router';
import { IonSegment } from '@ionic/angular';
let DetailPage = class DetailPage {
    constructor(_http, _page, _valid, _activeRoute) {
        this._http = _http;
        this._page = _page;
        this._valid = _valid;
        this._activeRoute = _activeRoute;
        this.tab = "info";
        this.mod = {
            apiUrl: '/Api/Serviceproxy/GetInfo',
            delUrl: '/Api/Serviceproxy/Delete',
            toServiceproxyUrl: '/Api/Serviceproxy/toServiceproxy',
            data: {
                serviceproxy: {
                    id: "",
                    customername: "",
                    carplate: "",
                    customerphone: "",
                    name: "",
                    shuttlename: "",
                    shuttlephone: "",
                    inpower: "",
                    mileage: "",
                    arrivalon: "",
                    customercomment: "",
                    status: 0,
                },
                vehcheckresultMap: {},
                serviceproxyResumeArray: []
            }
        };
        this.objectKeys = Object.keys;
    }
    //IonSegment
    ngOnInit() {
        this._activeRoute.queryParams.subscribe((params) => {
            if (params['id'] != null && params['id'] != undefined) {
                this.pageOnBind(params['id']);
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
                this.mod.data.serviceproxy.customername = res["Serviceproxy"]["Attributes"]["mcs_customername"];
                this.mod.data.serviceproxy.carplate = res["Serviceproxy"]["Attributes"]["mcs_carplate"];
                this.mod.data.serviceproxy.customerphone = res["Serviceproxy"]["Attributes"]["mcs_customerphone"];
                this.mod.data.serviceproxy.name = res["Serviceproxy"]["Attributes"]["mcs_name"];
                this.mod.data.serviceproxy.shuttlename = res["Serviceproxy"]["Attributes"]["mcs_shuttlename"];
                this.mod.data.serviceproxy.shuttlephone = res["Serviceproxy"]["Attributes"]["mcs_shuttlephone"];
                this.mod.data.serviceproxy.inpower = res["Serviceproxy"]["Attributes"]["mcs_inpower"];
                this.mod.data.serviceproxy.mileage = res["Serviceproxy"]["Attributes"]["mcs_mileage"];
                this.mod.data.serviceproxy.arrivalon = res["Serviceproxy"]["Attributes"]["mcs_arrivalon@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.serviceproxy.customercomment = res["Serviceproxy"]["Attributes"]["mcs_customercomment"];
                this.mod.data.serviceproxy.status = res["Serviceproxy"]["Attributes"]["mcs_status"];
                this.mod.data.serviceproxy["dealerid_formatted"] = res["Serviceproxy"]["Attributes"]["_mcs_dealerid_value@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.serviceproxy["oilquantity_formatted"] = res["Serviceproxy"]["Attributes"]["mcs_oilquantity@OData.Community.Display.V1.FormattedValue"];
            }
            if (!this._valid.isNull(res.ServiceordercheckresultList)) {
                for (var key in res.ServiceordercheckresultList) {
                    var groupKey = res.ServiceordercheckresultList[key]["Attributes"]["mcs_checktype"];
                    if (typeof this.mod.data.vehcheckresultMap[groupKey] === "undefined") {
                        this.mod.data.vehcheckresultMap[groupKey] = {};
                        this.mod.data.vehcheckresultMap[groupKey]["text"] = res.ServiceordercheckresultList[key]["Attributes"]["mcs_checktype@OData.Community.Display.V1.FormattedValue"];
                        this.mod.data.vehcheckresultMap[groupKey].data = [];
                    }
                    var obj = {};
                    obj["checkreultid"] = res.ServiceordercheckresultList[key]["Attributes"]["mcs_name"];
                    obj["name"] = res.ServiceordercheckresultList[key]["Attributes"]["mcs_name"];
                    obj["checkreult"] = res.ServiceordercheckresultList[key]["Attributes"]["a.mcs_checkreult"];
                    this.mod.data.vehcheckresultMap[groupKey].data.push(obj);
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
                this._page.navigateRoot("/serving/ri/list");
            }, (err) => {
                this._page.alert("消息提示", "删除失败!");
            });
        });
    }
    //转服务委托书
    toServiceproxyOnClick() {
        this._page.confirm("确认提示", "您确认要执行此操作吗？", () => {
            this._http.get(this.mod.toServiceproxyUrl, {
                params: {
                    serviceproxyGuid: this.mod.data.serviceproxy.id
                }
            }, (res) => {
                this._page.alert("消息提示", "操作成功!", () => {
                    this._page.navigateRoot("/serving/sc/detail", { id: this.mod.data.serviceproxy.id });
                });
            }, (err) => {
                this._page.alert("消息提示", "操作失败!");
            });
        });
    }
};
tslib_1.__decorate([
    ViewChild(IonSegment, null),
    tslib_1.__metadata("design:type", IonSegment)
], DetailPage.prototype, "IonSegment", void 0);
DetailPage = tslib_1.__decorate([
    Component({
        selector: 'app-detail',
        templateUrl: './detail.page.html',
        styleUrls: ['./detail.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [DCore_Http,
        DCore_Page,
        DCore_Valid,
        ActivatedRoute])
], DetailPage);
export { DetailPage };
//# sourceMappingURL=detail.page.js.map