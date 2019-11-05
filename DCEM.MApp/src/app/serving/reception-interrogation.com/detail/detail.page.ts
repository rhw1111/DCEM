import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

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
                inpower: "",
                mileage: "",
                arrivalon: "",
                customercomment: "",
                status: 0,
            },
            serviceordercheckresultArray: []
        }
    };


    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _valid: DCore_Valid,
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
                    console.log(res.Serviceproxy);
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
                        this._page.navigateRoot("/serving/ri/list");
                    },
                    (err: any) => {
                        this._page.alert("消息提示", "删除失败!");
                    }
                );
            }
        )
    }

    testOnClick() {
        this._page.goto("/serving/ri/list");
    }
}
