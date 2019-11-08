import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    public tab: any = "info";
    mod = {
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
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private activeRoute: ActivatedRoute
    ) {

    }

    ionViewWillEnter() {

    }

    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params: Params) => {
            if (params['id'] != null && params['id'] != undefined) {
                this.pageOnBind(params['id']);
            }
        });
    }

    pageOnBind(id: any) {
        this.mod.data.serviceproxy.id = id;
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
                    this.mod.data.serviceproxy.status = res["Serviceproxy"]["Attributes"]["mcs_status"];
                    this.mod.data.serviceproxy["dealerid"] = res["Serviceproxy"]["Attributes"]["_mcs_dealerid_value@OData.Community.Display.V1.FormattedValue"];

                }

                if (res.ServiceorderrepairitemList !== null) {
                    for (var key in res.ServiceorderrepairitemList) {

                        console.log(res.ServiceorderrepairitemList[key]);
                        var obj = {};
                        obj["name"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_name"];
                        obj["repairitemid_Formatted"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_repairitemtypedetailid@OData.Community.Display.V1.FormattedValue"];
                        obj["repairitemtypeid_Formatted"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_repairitemtypeid@OData.Community.Display.V1.FormattedValue"];
                        obj["workinghour_Formatted"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_workinghour@OData.Community.Display.V1.FormattedValue"];
                        obj["price_Formatted"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_price@OData.Community.Display.V1.FormattedValue"];
                        obj["discount_Formatted"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_discount@OData.Community.Display.V1.FormattedValue"];
                        obj["repairamount_Formatted"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_repairamount@OData.Community.Display.V1.FormattedValue"];
                        this.mod.data.serviceorderrepairitemArray.push(obj);
                    }
                }

                if (res.ServiceorderpartList !== null) {
                    for (var key in res.ServiceorderpartList) {
                        console.log(res.ServiceorderpartList[key]);

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

                this.mod.data.serviceproxyResumeArray = res.ServiceproxyResumeList;


                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");
                this._page.loadingHide();
            }
        );
    }

    //删除事件
    deleteOnClick() {
        this._page.confirm("确认提示", "您确认要执行此操作吗？",
            () => {
                this._http.get(
                    this.mod.delUrl,
                    {
                        params: {
                            serviceproxyGuid: this.mod.data.serviceproxy.id
                        }
                    },
                    (res: any) => {
                        this._page.navigateRoot("/serving/sc/list");
                    },
                    (err: any) => {
                        this._page.alert("消息提示", "删除失败!");
                    }
                );
            }
        )
    }

}
