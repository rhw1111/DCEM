import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    mod = {
        apiUrl: '/Api/Serviceproxy/GetInfo',
        data: {
            serviceproxy: {
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
                status: "",
                hoursamount: "",
                partsamount: "",
                discountamount: "",
                amounttotal: "",
                dealerid: ""

            },
            serviceorderrepairitemArray: [],
            serviceorderpartArray: []
        }
    };
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private activeRoute: ActivatedRoute
    ) {

    }

    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params: Params) => {
            if (params['id'] != null && params['id'] != undefined) {
                this.pageOnBind(params['id']);
            }
        });
    }

    pageOnBind(id: any) {
        this._page.loadingShow();
        this._http.get(
            this.mod.apiUrl,
            {
                params: {
                    guid: id,
                }
            },
            (res: any) => {
                if (res.Serviceproxy !== null) {
                    console.log(res["Serviceproxy"]);
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
                    this.mod.data.serviceproxy["dealerid"] = res["Serviceproxy"]["Attributes"]["_mcs_dealerid_value@OData.Community.Display.V1.FormattedValue"];

                }

                if (res.ServiceorderrepairitemList !== null) {
                    for (var key in res.ServiceorderrepairitemList) {
                        var obj = {};
                        obj["name"] = res.ServiceorderrepairitemList[key]["Attributes"]["mcs_name"];
                        obj["repairitemid"] = res.ServiceorderrepairitemList[key]["Attributes"]["_mcs_repairitemid_value@OData.Community.Display.V1.FormattedValue"];
                        obj["repairitemtypeid"] = res.ServiceorderrepairitemList[key]["Attributes"]["_mcs_repairitemtypeid_value@OData.Community.Display.V1.FormattedValue"];
                        obj["workinghour"] = res.ServiceorderrepairitemList[key]["Attributes"]["mcs_workinghour"];
                        obj["price"] = res.ServiceorderrepairitemList[key]["Attributes"]["mcs_price"];
                        obj["discount"] = res.ServiceorderrepairitemList[key]["Attributes"]["mcs_discount"];
                        obj["repairamount"] = res.ServiceorderrepairitemList[key]["Attributes"]["mcs_repairamount"];
                        this.mod.data.serviceorderrepairitemArray.push(obj);
                    }
                }

                if (res.ServiceorderpartList !== null) {
                    for (var key in res.ServiceorderpartList) {
                        var obj = {};
                        obj["partsname"] = res.ServiceorderpartList[key]["Attributes"]["mcs_partsname"];
                        obj["partsid"] = res.ServiceorderpartList[key]["Attributes"]["_mcs_partsid_value@OData.Community.Display.V1.FormattedValue"];
                        obj["repairitemtypeid"] = res.ServiceorderpartList[key]["Attributes"]["_mcs_repairitemtypeid_value@OData.Community.Display.V1.FormattedValue"];
                        obj["quantity"] = res.ServiceorderpartList[key]["Attributes"]["mcs_quantity"];
                        obj["price"] = res.ServiceorderpartList[key]["Attributes"]["mcs_price"];
                        obj["discount"] = res.ServiceorderpartList[key]["Attributes"]["mcs_discount"];
                        obj["amount"] = res.ServiceorderpartList[key]["Attributes"]["mcs_amount"];


                        this.mod.data.serviceorderpartArray.push(obj);

                    }
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");
                this._page.loadingHide();
            }
        );
    }

}
