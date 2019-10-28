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
                inpower: "",
                mileage: "",
                arrivalon: "",
                customercomment: ""
            },
            serviceordercheckresultArray: []
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
                if (res.Carserviceadvisor !== null) {
                    this.mod.data.serviceproxy.customername = res["Serviceproxy"]["Attributes"]["mcs_customername"];
                    this.mod.data.serviceproxy.carplate = res["Serviceproxy"]["Attributes"]["mcs_carplate"];
                    this.mod.data.serviceproxy.customerphone = res["Serviceproxy"]["Attributes"]["mcs_customerphone"];
                    this.mod.data.serviceproxy.name = res["Serviceproxy"]["Attributes"]["mcs_name"];
                    this.mod.data.serviceproxy.shuttlename = res["Serviceproxy"]["Attributes"]["mcs_shuttlename"];
                    this.mod.data.serviceproxy.shuttlephone = res["Serviceproxy"]["Attributes"]["mcs_shuttlephone"];
                    this.mod.data.serviceproxy.inpower = res["Serviceproxy"]["Attributes"]["mcs_inpower"];
                    this.mod.data.serviceproxy.mileage = res["Serviceproxy"]["Attributes"]["mcs_mileage"];
                    this.mod.data.serviceproxy.arrivalon = res["Serviceproxy"]["Attributes"]["mcs_arrivalon"];
                    this.mod.data.serviceproxy.customercomment = res["Serviceproxy"]["Attributes"]["mcs_customercomment"];
                }
                if (res.ServiceordercheckresultList != null) {
                    for (var key in res.ServiceordercheckresultList) {
                        var obj = {};
                        obj["checkreultid"] = res.ServiceordercheckresultList[key]["Attributes"]["_mcs_checkreultid_value@OData.Community.Display.V1.FormattedValue"];
                        obj["name"] = res.ServiceordercheckresultList[key]["Attributes"]["mcs_name"];
                        obj["checkreult"] = res.ServiceordercheckresultList[key]["Attributes"]["mcs_checkreult"];
                        this.mod.data.serviceordercheckresultArray.push(obj);
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
